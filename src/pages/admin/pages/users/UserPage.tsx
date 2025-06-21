import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { usePagination } from '../../../../hooks/usePagination';
import { fetchItem, fetchItems, fetchListItems, removeItem, saveItem, saveItemImageForm } from '../../../../hooks/useCrud';
import { extractTime, formatDateFR, showConfirmationDialog, truncateText } from '../../../../api/callApi';
import Swal from 'sweetalert2';
import Pagination from '../../../../components/Pagination';
import { fileUrl } from '../../../../api/config';
import LoaderAndError from '../../../../components/LoaderAndError';
import Modal from '../../../../components/Modal';
import TextField from '../../../../components/TextField';
import ComboBoxField from '../../../../components/ComboBox';

interface User {
  id?: number;
  name?: string;
  email?: string;
  telephone?: string;
  sexe?: string;
  idRole?: number;
  passwords?: string;
  role?: any;
  avatar?: string;
  logo?: string;
  logoFile?: File;
  createdAt?: string;
  updatedAt?: string;

}


export default function UserPage() {
  // declaration de variables
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<Partial<User>>({});
  const [isEditing, setIsEditing] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const SexeOptions = [
    { value: 'M', label: 'Homme' },
    { value: 'F', label: 'Femme' },
  ];

  const [roles, setRoles] = useState([]);


  //fin declaration


  const [showModalSiteLogo, setShowModalSiteLogo] = useState(false);
  //fin declaration

  // pour la langue
  const { t, i18n } = useTranslation();
  // fin langue

  // declaration de la pagination
  const { paginationRange, isCurrentPage, isFirstPage, isLastPage } = usePagination({
    currentPage,
    totalPages,
  });

  //actions

  // chargement de la table
  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetchItems<User>('/fetch_user', {
        q: search,
        page: currentPage,
        limit,
      });
      setUsers(res.data);
      setTotalPages(res.totalPages);

      // console.log(JSON.stringify(res.data));


    } finally {
      setLoading(false);
    }
  };

  // chargement de la table
  const loadRoleList = async () => {
    setLoading(true);
    try {
      const res = await fetchListItems('/fetch_all_role');
      // console.log(JSON.stringify(res.data));
      setRoles(res.data);
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    loadRoleList();
  }, [search, currentPage, limit]);

  /*
  *
  *===========================================
  * fonction globale des actions de crud
  *===========================================
  * 
  */


  const handleEdit = async (id: number) => {
    const datas = await fetchItem<User>('/fetch_single_user', id);
    // console.log("Site:" + datas);
    setFormData(datas);
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
        await removeItem('/delete_user', id);
        loadData();
        Swal.fire('Supprimé', '', 'success');
      } catch (error) {
        Swal.fire('Erreur', 'Échec de la suppression.', 'error');
      }


    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveItem('/post_user', formData);
    loadData();
    handleCloseModal();
  };


  /*
  *
  *==========================
  * Utilisation de role
  *==========================
  *
  */
  const [showModalRole, setShowModalRole] = useState(false);

  const handlEditRole = async (id: number) => {
    const data = await fetchItem<User>('/fetch_single_user', id);
    // console.log("Site:" + JSON.stringify(data));
    setFormData(data);
    setIsEditing(true);
    setShowModalRole(true);

  }

  const handleSubmitRole = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveItem('/edit_password', formData);
    loadData();
    handleCloseModalRole();
  };

  const handleCloseModalRole = () => {
    setShowModalRole(false);
    setFormData({});
    setIsEditing(false);
  };



  /*
  *
  *==========================
  * Fin Utilisation de role
  *==========================
  *
  */

  /*
  *
  *==========================
  * Utilisation de l'image
  *==========================
  *
  */
  const handlEditImage = async (id: number) => {
    const data = await fetchItem<User>('/fetch_single_user', id);
    // console.log("Site:" + role);
    setPreview('');
    setFormData(data);
    setIsEditing(true);
    setShowModalSiteLogo(true);

  }
  const handleCloseModalImage = () => {
    setShowModalSiteLogo(false);
    setFormData({});
    setIsEditing(false);
  };
  // fin modal image

  const [preview, setPreview] = useState<string | null>(null);

  const handleInputChangeImage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === 'logo' && files && files[0]) {
      const file = files[0]; // ✅ Déclaration correcte

      setFormData((prev) => ({
        ...prev,
        logoFile: file,
      }));

      setPreview(URL.createObjectURL(file)); // ✅ Utilisation correcte de `file`
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };





  const handleSubmitImage = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('id', String(formData.id ?? 0)); // converti id en string
    if (formData.logoFile) {
      formDataToSend.append('avatar', formData.logoFile);
    }

    await saveItemImageForm('/edit_avatar', formDataToSend);
    loadData();
    handleCloseModalImage();
  };

  /*
  *
  *==========================
  * Utilisation de l'image
  *==========================
  *
  */



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
    <div className="col-md-12 mt-4">
      <h4 className="mb-3">{t('userPage_title') ?? ''}</h4>
      {/* loading component */}
      <LoaderAndError
        loading={loading}
        error={error}
        onClearError={() => setError(null)}
      />
      {/* fin loading component */}
      {/* modal image site */}
      <Modal title={isEditing ? "Modifier l'image" : "Ajouter son image"}
        show={showModalSiteLogo}
        onClose={handleCloseModalImage}
        dimension="modal-md">
        <form onSubmit={handleSubmitImage}>
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
            {/* formulaire */}
            <div className="row">
              <div className="col-md-12 mb-2">

                <input
                  type="file"
                  name="logo"
                  id="logo"
                  className='form-control'
                  onChange={handleInputChangeImage}
                  required
                />
              </div>

              <div className="col-md-12">
                {/* affichage de l'image selectionnée */}
                <img src={preview || fileUrl + '/images/' + formData.avatar} alt="image sélectionnée" className='img img-thumbnail col-md-6' width={50} height={50} />


              </div>
            </div>
            {/* fin formulaire */}
            {/* boutton */}
            <div className="row">
              <div className="col-md-12 d-flex justify-content-end mt-2">
                <button type="submit" className="btn btn-primary">
                  {isEditing ? 'Modifier' : 'Ajouter'}

                </button>
              </div>
            </div>
            {/* fin boutton */}
          </div>


        </form>
      </Modal>
      {/* fin modal image site */}

      {/* modal image site */}
      <Modal title={isEditing ? "Modifier le privilège et mot de passe" : "Ajouter privilège"}
        show={showModalRole}
        onClose={handleCloseModalRole}
        dimension="modal-md">
        <form onSubmit={handleSubmitRole}>
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
            {/* formulaire */}
            <div className="row">
              <div className="col-md-12 mb-2">
                <ComboBoxField
                  name="idRole"
                  value={formData.idRole || 0}
                  onChange={handleInputChange}
                  placeholder="Privilège"
                  icon="fas fa-genderless"
                  label="Privilège"
                  options={roles}
                  required
                />

              </div>
              <div className="col-md-12 mb-2">

                <TextField
                  name="passwords"
                  value={formData.passwords || ''}
                  onChange={handleInputChange}
                  label="Mot de passe"
                  placeholder="Mot de passe"
                  icon="fas fa-lock"
                  required
                />

              </div>


            </div>
            {/* fin formulaire */}
            {/* boutton */}
            <div className="row">
              <div className="col-md-12 d-flex justify-content-end mt-2">
                <button type="submit" className="btn btn-primary">
                  {isEditing ? 'Modifier' : 'Ajouter'}

                </button>
              </div>
            </div>
            {/* fin boutton */}
          </div>


        </form>
      </Modal>
      {/* fin modal image site */}




      {/* modal component */}
      <Modal
        title={isEditing ? 'Modifier les informations' : 'Ajouter un utilisateur'}
        show={showModal}
        onClose={handleCloseModal}
        dimension="modal-lg"
      >
        <form onSubmit={handleSubmit}>
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-md-6">
                <TextField
                  name="name"
                  value={formData.name || ''}
                  onChange={handleInputChange}
                  placeholder="Nom complet"
                  icon="fas fa-user-tag"
                  label="Nom complet"
                  required
                />
              </div>

              <div className="col-md-6">
                <TextField
                  type='email'
                  name="email"
                  value={formData.email || ''}
                  onChange={handleInputChange}
                  label="Adresse Mail"
                  placeholder="Adresse Mail"
                  icon="fas fa-envelope"
                  required
                />
              </div>


              <div className="col-md-6">
                <TextField
                  name="telephone"
                  value={formData.telephone || ''}
                  onChange={handleInputChange}
                  label="N° de téléphone principal"
                  placeholder="N° de téléphone principal"
                  icon="fas fa-phone"
                  required
                />
              </div>

              <div className="col-md-6">
                <ComboBoxField
                  name="sexe"
                  value={formData.sexe || ''}
                  onChange={handleInputChange}
                  placeholder="Sexe"
                  icon="fas fa-genderless"
                  label="Sexe"
                  options={SexeOptions}
                  required
                />
              </div>

              {!isEditing && (<div className="col-md-12">
                <TextField
                  name="passwords"
                  value={formData.passwords || ''}
                  onChange={handleInputChange}
                  label="Mot de passe"
                  placeholder="Mot de passe"
                  icon="fas fa-lock"
                  required
                />
              </div>)}



              {/* <div className="col-md-12">
                <TextAreaFild
                  name="description"
                  value={formData.description || ''}
                  onChange={handleInputChange}
                  placeholder="Description"
                  icon="fas fa-text-width"
                  label="Description du site"
                  required
                />
              </div> */}



            </div>

          </div>
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
              <th>Avatar</th>
              <th>Nom</th>
              <th>Sexe</th>
              <th>Email</th>
              <th>Téléphone principal</th>
              <th>Role</th>
              <th>Date de création</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center">
                  Aucune donnée trouvée
                </td>
              </tr>
            ) : (
              users.map((item) => (
                <tr key={item.id}>
                  <td><img src={fileUrl + '/images/' + item.avatar} alt={item.avatar} width={40} height={40} className='img rounded-circle' /></td>
                  <td>{truncateText(item.name ?? '', 40)}</td>
                  <td>{truncateText(item.sexe ?? '', 40)}</td>
                  <td>
                    <a href={'mailto:' + item.email} className='text-primary small'><i className='fas fa-envelope fa-sm me-1'></i>{truncateText(item.email ?? '', 20)}</a>

                  </td>
                  <td>
                    <a href={'tel:' + item.telephone} className='text-primary small'><i className='fas fa-phone fa-sm me-1'></i> {truncateText(item.telephone ?? '', 20)}</a>
                  </td>
                  <td>
                    <span className={item.idRole === 1 ? "badge badge-success" : item.idRole === 2 ? "badge badge-primary" : "badge badge-warning"}>{truncateText(item.role.nom ?? '', 20)}</span>

                  </td>
                  <td>{formatDateFR(item.createdAt ?? '')} {extractTime(item.createdAt ?? '')}</td>
                  <td>
                    <button
                      className="btn btn-secondary btn-circle btn-sm me-1"
                      onClick={() => handlEditImage(item.id!)}
                    >
                      <i className="fas fa-camera"></i>
                    </button>
                    <button
                      className="btn btn-primary btn-circle btn-sm me-1"
                      onClick={() => handlEditRole(item.id!)}
                    >
                      <i className="fas fa-lock"></i>
                    </button>
                    <button
                      className="btn btn-warning btn-circle btn-sm me-1"
                      onClick={() => handleEdit(item.id!)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="btn btn-danger btn-circle btn-sm"
                      onClick={() => handleDelete(item.id!)}
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
  )
}
