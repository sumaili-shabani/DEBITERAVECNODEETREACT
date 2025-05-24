import React, { useEffect, useState } from 'react';
import { fetchAll, createItem, getOne, deleteItem, showError, showConfirmationDialog } from '../../../../api/callApi'
import Modal from '../../../../components/Modal';
import Swal from 'sweetalert2';
import DynamicSidebar from '../../../../components/DynamicSidebar';

// Définition des interfaces TypeScript
interface Role {
  id?: number;
  nom: string;
  createdAt?: string;
  updatedAt?: string;
}

interface ApiResponse {
  data: Role[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
}

// Composant principal pour la gestion des rôles
export default function RolePage() {
  // États principaux
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // États de filtrage et pagination
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10);

  // États du formulaire
  const [formData, setFormData] = useState<Partial<Role>>({ id: 0, nom: '' });
  const [isEditing, setIsEditing] = useState(false);

  // État du modal
  const [showModal, setShowModal] = useState(false);

  // Gestion du modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ nom: '' });
    setIsEditing(false);
  };


  // États pour le sidebar
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<React.ReactNode>(null);
  const [sidebarTitle, setSidebarTitle] = useState('');

  // Fonction pour ouvrir le sidebar
  const openSidebar = (title: string, content: React.ReactNode) => {
    setSidebarContent(content);
    setSidebarTitle(title);
    setShowSidebar(true);
  };

  // Fonction pour fermer le sidebar
  const closeSidebar = () => {
    setShowSidebar(false);
    setSidebarContent(null);
    setSidebarTitle('');
  };

  // Hook personnalisé pour la pagination
  const usePagination = (currentPage: number, totalPages: number) => {
    const getPaginationRange = () => {
      const maxButtons = 7;
      const halfMaxButtons = Math.floor(maxButtons / 2);

      if (totalPages <= maxButtons) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      if (currentPage <= halfMaxButtons + 2) {
        const initialPages = Array.from({ length: maxButtons - 2 }, (_, i) => i + 1);
        return [...initialPages, '...', totalPages];
      }

      if (currentPage >= totalPages - halfMaxButtons - 1) {
        const finalPages = Array.from({ length: maxButtons - 2 }, (_, i) => totalPages - maxButtons + 3 + i);
        return [1, '...', ...finalPages];
      }

      const middlePages = Array.from({ length: maxButtons - 4 }, (_, i) => currentPage - 1 + i);
      return [1, '...', ...middlePages, '...', totalPages];
    };

    return {
      paginationRange: getPaginationRange(),
      isCurrentPage: (page: number) => currentPage === page,
      isFirstPage: currentPage === 1,
      isLastPage: currentPage === totalPages
    };
  };

  // Pagination
  const pagination = usePagination(currentPage, totalPages);


  // Fonction pour charger les rôles depuis l'API
  const fetchRoles = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchAll('/fetch_role', {
        q: search,
        page: currentPage,
        limit,
      });
      if (res && res.data) {
        setRoles(res.data);
        setTotalPages(res.totalPages);
      } else {
        throw new Error('Données invalides reçues du serveur');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du chargement des rôles';
      setError(errorMessage);
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Chargement initial ou lors d’un changement de page ou recherche
  useEffect(() => {
    fetchRoles();
  }, [search, currentPage,]);




  // Ouvre le modal pour modifier un rôle existant
  const openEditModal = async (idRole: number) => {
    try {
      const res = await getOne('/fetch_single_role', idRole);
      console.log('Réponse complète:', JSON.stringify(res, null, 2));

      if (!res || !res.data) {
        throw new Error('Réponse invalide du serveur');
      }

      const { nom, id } = res.data;
      console.log('Nom:', nom, 'ID:', id);

      if (!nom) {
        throw new Error('Le nom du rôle est manquant');
      }

      // Mettre à jour le state
      // setFormData({
      //   nom: nom,
      //   id: id
      // });
      setFormData(res.data);

      // Attendre que le state soit mis à jour
      await new Promise(resolve => setTimeout(resolve, 0));

      // Maintenant que le state est mis à jour, on peut ouvrir le modal
      setIsEditing(true);
      handleOpenModal();

      // Vérifier l'état après l'ouverture du modal
      console.log('État après ouverture:', {
        formData: formData,
        showModal: showModal,
        isEditing: isEditing
      });
    } catch (err) {
      console.error('Erreur:', err);
      showError(err instanceof Error ? err.message : 'Impossible de charger le rôle');
    }
  };
  // Supprimer un rôle après confirmation
  const handleDelete = async (id: number) => {
    const confirmed = await showConfirmationDialog({
      title: 'Voulez-vous vraiment supprimer ce rôle ?',
      text: 'Cette action est définitive.',
      confirmButtonText: 'Oui, supprimer',
      icon: 'warning',
    });

    if (confirmed) {
      try {
        await deleteItem('/delete_role', id);
        fetchRoles();
        Swal.fire('Supprimé !', 'Le rôle a bien été supprimé.', 'success');
      } catch (error) {
        Swal.fire('Erreur', 'Échec de la suppression.', 'error');
      }
    }
  };

  // Envoie du formulaire (ajout ou modification)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createItem('/insert_role', formData); // même endpoint pour insert/update
      fetchRoles(); // recharger les données
      //fermeture de modal
      handleCloseModal();
    } catch {
      showError("Erreur lors de l'enregistrement");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Gestion des Rôles</h4>

      {/* Affichage du chargement */}
      {loading && (
        <div className="text-center mb-3">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      )}

      {/* Affichage des erreurs */}
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button type="button" className="btn-close" onClick={() => setError(null)}></button>
        </div>
      )}


      {/* Sidebar */}
      <DynamicSidebar
        show={showSidebar}
        onClose={closeSidebar}
        content={sidebarContent}
        title={sidebarTitle}
      />



      {/* Modal Bootstrap natif pour ajouter/modifier */}
      <Modal
        title={isEditing ? 'Modifier le rôle' : 'Ajouter un rôle'}
        show={showModal}
        onClose={handleCloseModal}
        dimension="modal-sm"
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nom du rôle</label>
            <input
              type="text"
              className="form-control"
              name="nom"
              value={formData.nom || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              {isEditing ? 'Modifier' : 'Ajouter'}
            </button>
          </div>
        </form>
      </Modal>
      {/* fin modal simple */}

      {/* Champ de recherche et bouton d'ajout */}
      <div className="d-flex justify-content-between mb-3">
        <div className="col-auto col-sm-4">
          <div className="input-group mb-2">
            {/* Bouton de rechargement placé avant le champ */}
            <button
              type="button"
              className="btn btn-sm btn-primary" id="refreshbtn"
              onClick={fetchRoles} // recharge la liste
            >
              <i className="fas fa-sync"></i>
            </button>

            {/* Champ de recherche */}
            <input
              type="text"
              id="inlineFormInputGroup"
              className="form-control"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1); // revenir à la première page
              }}
            />
          </div>
        </div>

        <button className="btn btn-primary btn-sm" onClick={handleOpenModal}>
          <i className="fas fa-plus me-1"></i> Ajouter
        </button>
      </div>
      {/* Fin zone d'entete */}

      {/* Tableau des rôles */}
      <div className='table-responsive'>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nom</th>
              <th scope="col">Date de création</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center">Aucun rôle trouvé</td>
              </tr>
            ) : (
              roles.map((role) => (
                <tr key={role.id}>
                  <td>{role.id}</td>
                  <td>{role.nom}</td>
                  <td>{new Date().toLocaleDateString()}</td>
                  <td>

                    {/* Bouton pour ouvrir le sidebar */}
                    {/* <button
                      className="btn btn-info btn-circle btn-sm me-1"
                      onClick={() => openSidebar('Ajouter un rôle', (
                        <div className="d-flex justify-content-start">
                         cool
                        </div>
                      ))}
                    >
                      <i className="fas fa-plus me-2"></i>
                    </button> */}

                    <button
                      className="btn btn-warning btn-circle btn-sm me-1"
                      onClick={() => openEditModal(role.id!)}
                    >
                      <i className='fas fa-edit'></i>
                    </button>





                    <button
                      className="btn btn-danger btn-circle btn-sm me-1"
                      onClick={() => handleDelete(role.id!)}
                    >
                      <i className='fas fa-trash'></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* fin table */}

      {/* Pagination simple */}
      {/* Pagination */}
      <div className="d-flex justify-content-between mt-3">
        <span>Page {currentPage} sur {totalPages}</span>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className={`page-item ${pagination.isFirstPage ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={pagination.isFirstPage}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
            </li>

            {pagination.paginationRange.map((page, index) =>
              typeof page === 'number' ? (
                <li
                  key={index}
                  className={`page-item ${pagination.isCurrentPage(page) ? 'active' : ''}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                </li>
              ) : (
                <li key={index} className="page-item disabled">
                  <span className="page-link">{page}</span>
                </li>
              )
            )}

            <li className={`page-item ${pagination.isLastPage ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={pagination.isLastPage}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* fin pagination simple */}


    </div>
  )
}
