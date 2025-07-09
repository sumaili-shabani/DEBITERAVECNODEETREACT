import React, { useEffect, useState } from 'react'
import LoaderAndError from '../../../../components/LoaderAndError'
import Modal from '../../../../components/Modal'
import { useTranslation } from 'react-i18next';
import { fetchItem, fetchItems, removeItem, saveItem, saveItemImageForm } from '../../../../hooks/useCrud';
import { extractTime, formatDateFR, showConfirmationDialog, truncateText } from '../../../../api/callApi';
import Swal from 'sweetalert2';
import TextField from '../../../../components/TextField';
import { usePagination } from '../../../../hooks/usePagination';
import TextAreaFild from '../../../../components/TextAreaField';
import Pagination from '../../../../components/Pagination';
import { fileUrl } from '../../../../api/config';
import RichTextField from '../../../../components/RichTextField';


interface Site {
  id?: number;
  nom?: string;
  description?: string;
  email?: string;
  adresse?: string;
  tel1?: string;
  tel2?: string;
  tel3?: string;
  token?: string;
  about?: string;
  mission?: string;
  objectif?: string;
  politique?: string;
  condition?: string;
  logo?: string;
  logoFile?: File;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  whatsapp?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function SitePage() {

  // declaration de variables
  const [sites, setSites] = useState<Site[]>([]);
  const [formData, setFormData] = useState<Partial<Site>>({});
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

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
      const res = await fetchItems<Site>('/fetch_site', {
        q: search,
        page: currentPage,
        limit,
      });
      setSites(res.data);
      setTotalPages(res.totalPages);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [search, currentPage, limit]);

  /*
  *
  *===========================================
  * fonction globale des actions de crud
  *===========================================
  * 
  */


  const handleEdit = async (id: number) => {
    const role = await fetchItem<Site>('/fetch_single_site', id);
    // console.log("Site:" + role);
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
        await removeItem('/delete_site', id);
        loadData();
        Swal.fire('Supprimé', '', 'success');
      } catch (error) {
        Swal.fire('Erreur', 'Échec de la suppression.', 'error');
      }


    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveItem('/insert_site', formData);
    loadData();
    handleCloseModal();
  };

  /*
  *
  *==========================
  * Utilisation de l'image
  *==========================
  *
  */
  const handlEditImage = async (id: number) => {
    const data = await fetchItem<Site>('/fetch_single_site', id);
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
      formDataToSend.append('logo', formData.logoFile);
    }

    await saveItemImageForm('/edit_site_logo', formDataToSend);
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

      <h4 className="mb-3">{t('sitePage_title') ?? ''}</h4>
      {/* loading component */}
      <LoaderAndError
        loading={loading}
        error={error}
        onClearError={() => setError(null)}
      />
      {/* fin loading component */}
      {/* modal image site */}
      <Modal title={isEditing ? "Modifier l'image" : "Ajouter l'image"}
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
                <img src={preview || fileUrl + '/images/' + formData.logo} alt="image sélectionnée" className='img img-thumbnail col-md-6' width={50} height={50} />


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
        title={isEditing ? 'Modifier le site' : 'Ajouter un site'}
        show={showModal}
        onClose={handleCloseModal}
        dimension="modal-lg"
      >
        <form onSubmit={handleSubmit}>
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-md-12">
                <TextField
                  name="nom"
                  value={formData.nom || ''}
                  onChange={handleInputChange}
                  placeholder="Nom du Site"
                  icon="fas fa-user-tag"
                  label="Nom du Site"
                  required
                />
              </div>
              <div className="col-md-6">
                <TextField
                  name="adresse"
                  value={formData.adresse || ''}
                  onChange={handleInputChange}
                  placeholder="Adresse"
                  icon="fas fa-map-location-dot"
                  label="Adresse domicile"
                  required
                />
              </div>
              <div className="col-md-6">
                <TextField
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
                  name="tel1"
                  value={formData.tel1 || ''}
                  onChange={handleInputChange}
                  label="N° de téléphone principal"
                  placeholder="N° de téléphone principal"
                  icon="fas fa-phone"
                  required
                />
              </div>
              <div className="col-md-6">
                <TextField
                  name="tel2"
                  value={formData.tel2 || ''}
                  onChange={handleInputChange}
                  label="N° de téléphone Secondaire"
                  placeholder="N° de téléphone Secondaire"
                  icon="fas fa-phone"

                />
              </div>
              <div className="col-md-6">
                <TextField
                  name="tel3"
                  value={formData.tel3 || ''}
                  onChange={handleInputChange}
                  label="N° de téléphone 3"
                  placeholder="N° de téléphone 3"
                  icon="fas fa-phone"

                />
              </div>

              <div className="col-md-6">
                <TextField
                  name="token"
                  value={formData.token || ''}
                  onChange={handleInputChange}
                  label="Token"
                  placeholder="Token"
                  icon="fas fa-code"

                />
              </div>


              <div className="col-md-6">
                <TextField
                  name="facebook"
                  value={formData.facebook || ''}
                  onChange={handleInputChange}
                  label="facebook"
                  placeholder="facebook"
                  icon="fab fa-facebook"

                />
              </div>

              <div className="col-md-6">
                <TextField
                  name="linkedin"
                  value={formData.linkedin || ''}
                  onChange={handleInputChange}
                  label="linkedin"
                  placeholder="linkedin"
                  icon="fab fa-linkedin"

                />
              </div>

              <div className="col-md-6">
                <TextField
                  name="twitter"
                  value={formData.twitter || ''}
                  onChange={handleInputChange}
                  label="twitter"
                  placeholder="twitter"
                  icon="fab fa-twitter"

                />
              </div>

              <div className="col-md-6">
                <TextField
                  name="youtube"
                  value={formData.youtube || ''}
                  onChange={handleInputChange}
                  label="youtube"
                  placeholder="youtube"
                  icon="fab fa-youtube"

                />
              </div>

              <div className="col-md-12">
                <TextField
                  name="whatsapp"
                  value={formData.whatsapp || ''}
                  onChange={handleInputChange}
                  label="whatsapp"
                  placeholder="whatsapp"
                  icon="fab fa-whatsapp"

                />
              </div>

              <div className="col-md-12">
                <RichTextField
                  name="about"
                  value={formData.about || ''}
                  onChange={handleInputChange}
                  label="A propos"
                  placeholder="A propos"
                  icon="fas fa-text-width"

                />
              </div>
              <div className="col-md-12">
                <RichTextField
                  name="mission"
                  value={formData.mission || ''}
                  onChange={handleInputChange}
                  label="Mission"
                  placeholder="Mission"
                  icon="fas fa-text-width"

                />
              </div>

              <div className="col-md-12">
                <RichTextField
                  name="objectif"
                  value={formData.objectif || ''}
                  onChange={handleInputChange}
                  label="Objectif"
                  placeholder="Objectif"
                  icon="fas fa-text-width"

                />
              </div>

              <div className="col-md-12">
                <RichTextField
                  name="politique"
                  value={formData.politique || ''}
                  onChange={handleInputChange}
                  label="Politique de protection des données"
                  placeholder="Politique de protection des données"
                  icon="fas fa-text-width"

                />
              </div>

              <div className="col-md-12">
                <RichTextField
                  name="condition"
                  value={formData.condition || ''}
                  onChange={handleInputChange}
                  label="Condition d'utilisation"
                  placeholder="Condition d'utilisation"
                  icon="fas fa-text-width"

                />
              </div>

              <div className="col-md-12">
                <RichTextField
                  name="description"
                  value={formData.description || ''}
                  onChange={handleInputChange}
                  label="Description complète"
                  placeholder="Description complète du site"

                />
              </div>

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
              onClick={() => loadData()} // recharge
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
              <th>Logo</th>
              <th>Nom</th>
              <th>Adresse</th>
              <th>Email</th>
              <th>Téléphone principal</th>
              <th>Date de création</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sites.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center">
                  Aucune donnée trouvée
                </td>
              </tr>
            ) : (
              sites.map((item) => (
                <tr key={item.id}>
                  <td><img src={fileUrl + '/images/' + item.logo} alt={item.logo} width={40} height={40} className='img rounded-circle' /></td>
                  <td>{truncateText(item.nom ?? '', 20)}</td>
                  <td>{truncateText(item.adresse ?? '', 40)}</td>
                  <td>
                    <a href={'mailto:' + item.email} className='text-primary small'>{truncateText(item.email ?? '', 20)}</a>

                  </td>
                  <td>
                    <ul>
                      <li>
                        <a href={'tel:' + item.tel1} className='text-primary small'>{truncateText(item.tel1 ?? '', 20)}</a>
                      </li>
                      <li>
                        <a href={'tel:' + item.tel2} className='text-primary small'>{truncateText(item.tel2 ?? '', 20)}</a>
                      </li>
                    </ul>
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
