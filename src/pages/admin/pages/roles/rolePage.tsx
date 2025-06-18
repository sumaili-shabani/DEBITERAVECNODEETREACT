import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Modal from '../../../../components/Modal';
import DynamicSidebar from '../../../../components/DynamicSidebar';
import { usePagination } from '../../../../hooks/usePagination'; // fichier à créer
import Pagination from '../../../../components/Pagination';
import {
  fetchItems,
  fetchItem,
  saveItem,
  removeItem,
} from '../../../../hooks/useCrud';
import { extractTime, formatDateFR, showConfirmationDialog, truncateText } from '../../../../api/callApi';
import LoaderAndError from '../../../../components/LoaderAndError';
import TextField from '../../../../components/TextField';
import { useTranslation } from 'react-i18next';

// Interface du rôle
interface Role {
  id?: number;
  nom: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function RolePageComplet() {

  // declaration de variables
  const [roles, setRoles] = useState<Role[]>([]);
  const [formData, setFormData] = useState<Partial<Role>>({});
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  //fin declaration

  // pour la langue
  const { t, i18n } = useTranslation();
  // fin langue

  // declaration de la pagination
  const { paginationRange, isCurrentPage, isFirstPage, isLastPage } = usePagination({
    currentPage,
    totalPages,
  });

  // chargement de la table
  const loadRoles = async () => {
    setLoading(true);
    try {
      const res = await fetchItems<Role>('/fetch_role', {
        q: search,
        page: currentPage,
        limit,
      });
      setRoles(res.data);
      setTotalPages(res.totalPages);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRoles();
  }, [search, currentPage, limit]);

  /*
  *
  *===========================================
  * fonction globale des actions de crud
  *===========================================
  * 
  */
  const handleEdit = async (id: number) => {
    const role = await fetchItem<Role>('/fetch_single_role', id);
    // console.log("role:" + role);
    setFormData(role);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    const confirmed = await showConfirmationDialog({
      title: 'Voulez-vous vraiment supprimer ceci ?',
      text: 'Cette action est définitive.',
      confirmButtonText: 'Oui, supprimer',
      icon: 'warning',
    });

    if (confirmed) {
      try {
        await removeItem('/delete_role', id);
        loadRoles();
        Swal.fire('Supprimé', '', 'success');
      } catch (error) {
        Swal.fire('Erreur', 'Échec de la suppression.', 'error');
      }


    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveItem('/insert_role', formData);
    loadRoles();
    handleCloseModal();
  };
  //ouverture et fer;eture de modal
  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({});
    setIsEditing(false);
  };

  // changement des textes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };




  return (
    <div className="container mt-4">
      <h4 className="mb-3">{t('rolePage_title') ?? ''}</h4>
      {/* loading component */}
      <LoaderAndError
        loading={loading}
        error={error}
        onClearError={() => setError(null)}
      />

      <DynamicSidebar show={false} onClose={() => handleCloseModal} content={
        <div>
          cool
        </div>
      } title="" />
      {/* fin loading component */}

      {/* modal component */}
      <Modal
        title={isEditing ? 'Modifier le rôle' : 'Ajouter un rôle'}
        show={showModal}
        onClose={handleCloseModal}
        dimension="modal-sm"
      >
        <form onSubmit={handleSubmit}>
          <TextField
            name="nom"
            value={formData.nom || ''}
            onChange={handleInputChange}
            placeholder="Nom du rôle"
            icon="fas fa-user-tag"
            label="Nom du rôle"
            required
          />
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              {isEditing ? 'Modifier' : 'Ajouter'}

            </button>
          </div>
        </form>
      </Modal>
      {/* fin modal component */}


      {/* entete de recherche */}
      <div className="d-flex justify-content-between mb-3">
        <div className="col-auto col-sm-4">
          <div className="input-group mb-2">
            <button
              type="button"
              className="btn btn-sm btn-primary me-1"
              onClick={() => setSearch(search)} // recharge
              id='btn-search'
            >
              <i className="fas fa-sync"></i>
            </button>
            <input
              type="text"
              className="form-control"
              placeholder={t('textFild_search') ?? ''}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        <button className="btn btn-primary btn-sm" onClick={() => setShowModal(true)}>
          <i className="fas fa-plus me-1"></i> {t("btn_add") ?? ''}
        </button>
      </div>
      {/* fin entete de recherche */}

      {/* table des données */}
      <div className="table-responsive">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Date de création</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center">
                  Aucun rôle trouvé
                </td>
              </tr>
            ) : (
              roles.map((role) => (
                <tr key={role.id}>
                  <td>{role.id}</td>
                  <td>{truncateText(role.nom, 20)}</td>
                  <td>{formatDateFR(role.createdAt ?? '')} {extractTime(role.createdAt ?? '')}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-circle btn-sm me-1"
                      onClick={() => handleEdit(role.id!)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="btn btn-danger btn-circle btn-sm"
                      onClick={() => handleDelete(role.id!)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* fin table des données */}
      {/* pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginationRange={paginationRange}
        isCurrentPage={isCurrentPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        onPageChange={setCurrentPage}
        textCounter={true}
      />
      {/* fin pagination */}


    </div>
  );
}
