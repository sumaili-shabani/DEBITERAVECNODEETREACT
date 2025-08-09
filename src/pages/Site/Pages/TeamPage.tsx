import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { usePagination } from '../../../hooks/usePagination';
import { fetchItem, fetchItems, fetchListItems, gethItem, removeItem, saveItem, saveItemImageForm } from '../../../hooks/useCrud';
import { extractTime, formatDateFR, showConfirmationDialog, showMessage, truncateText } from '../../../api/callApi';
import Swal from 'sweetalert2';
import Pagination from '../../../components/Pagination';
import TextField from '../../../components/TextField';
import Modal from '../../../components/Modal';
import LoaderAndError from '../../../components/LoaderAndError';
import { fileUrl } from '../../../api/config';

import TextAreaFild from '../../../components/TextAreaField';
import RichTextField from '../../../components/RichTextField';



interface UiTeam {
    id?: number;
    nom?: string;
    fonction?: string;
    email?: string;
    logo?: string;
    telephone?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    logoFile?: File;

    createdAt?: string;
    updatedAt?: string;



}


export default function TeamPage() {
    // declaration de variables
    const [listData, setDataList] = useState<UiTeam[]>([]);
    const [formData, setFormData] = useState<Partial<UiTeam>>({});
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
    const loadlistData = async () => {
        setLoading(true);

        try {
            const res = await fetchItems<UiTeam>('/fetch_team', {
                q: search,
                page: currentPage,
                limit,
            });
            setDataList(res.data);
            setTotalPages(res.totalPages);


        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadlistData();

    }, [search, currentPage, limit]);

    /*
    *
    *===========================================
    * fonction globale des actions de crud
    *===========================================
    * 
    */
    const handleEdit = async (id: number) => {
        const role = await fetchItem<UiTeam>('/fetch_single_team', id);
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
                await removeItem('/delete_team', id);
                loadlistData();
                Swal.fire('Supprimé', '', 'success');
            } catch (error) {
                Swal.fire('Erreur', 'Échec de la suppression.', 'error');
            }


        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await saveItem('/insert_team', formData);
        loadlistData();
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

    /*
      *
      *==========================
      * Utilisation de l'image
      *==========================
      *
      */

    const [showModalSiteLogo, setShowModalSiteLogo] = useState(false);
    const handlEditImage = async (id: number) => {
        const data = await fetchItem<UiTeam>('/fetch_single_team', id);
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

        await saveItemImageForm('/edit_team_logo', formDataToSend);
        loadlistData();
        handleCloseModalImage();
    };

    /*
    *
    *==========================
    * Utilisation de l'image
    *==========================
    *
    */


    return (
        <div className="mt-4">
            <h4 className="mb-3">Liste des teams</h4>
            {/* loading component */}
            <LoaderAndError
                loading={loading}
                error={error}
                onClearError={() => setError(null)}
            />

            {/* fin loading component */}

            {/* modal component */}
            <Modal
                title={isEditing ? 'Modifier une donnée' : 'Ajouter une donnée'}
                show={showModal}
                onClose={handleCloseModal}
                dimension="modal-lg"
            >
                <form onSubmit={handleSubmit} className='col-md-12'>
                    <div className="row">
                        <div className="col-md-12">
                            <TextField
                                name="nom"
                                value={formData.nom || ''}
                                onChange={handleInputChange}
                                placeholder="Nom complet"
                                label="Nom complet"
                                icon="fas fa-text-width"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <TextField
                                name="fonction"
                                value={formData.fonction || ''}
                                onChange={handleInputChange}
                                placeholder="Fonction"
                                label="Fonction"
                                icon="fas fa-text-width"
                                required

                            />
                        </div>

                        <div className="col-md-6">
                            <TextField
                                type='tel'
                                name="telephone"
                                value={formData.telephone || ''}
                                onChange={handleInputChange}
                                placeholder="N° de téléphone"
                                label="N° de téléphone"
                                icon="fas fa-phone"
                                required

                            />

                        </div>

                        <div className="col-md-6">
                            <TextField
                                type='email'
                                name="email"
                                value={formData.email || ''}
                                onChange={handleInputChange}
                                placeholder="Adresse mail"
                                label="Adresse mail"
                                icon="fas fa-envelope"
                                required

                            />

                        </div>
                        <div className="col-md-6">
                            <TextField
                                name="facebook"
                                value={formData.facebook || ''}
                                onChange={handleInputChange}
                                placeholder="Facebook"
                                label="Facebook"
                                icon="fab fa-facebook"

                            />

                        </div>
                        <div className="col-md-6">
                            <TextField
                                name="twitter"
                                value={formData.twitter || ''}
                                onChange={handleInputChange}
                                placeholder="Twitter"
                                label="Twitter"
                                icon="fab fa-twitter"

                            />

                        </div>
                        <div className="col-md-6">
                            <TextField
                                name="linkedin"
                                value={formData.linkedin || ''}
                                onChange={handleInputChange}
                                placeholder="Linkedin"
                                label="Linkedin"
                                icon="fab fa-linkedin"

                            />

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
                                <img src={preview || fileUrl + '/images/' + formData.logo!} alt="image sélectionnée"
                                    className='img img-thumbnail col-md-6' width={50} height={50} />

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


            {/* entete de recherche */}
            <div className="d-flex justify-content-between mb-3">
                <div className="col-auto col-sm-4">
                    <div className="input-group mb-2">
                        <button
                            type="button"
                            className="btn btn-sm btn-primary me-1"
                            onClick={() => loadlistData()} // recharge
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
                            <th>Fonction</th>

                            <th>Téléphone/Email</th>
                            <th>Reseaux sociaux</th>



                            <th>Date de création</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="text-center">
                                    Aucune donnée trouvée
                                </td>
                            </tr>
                        ) : (
                            listData.map((item) => (
                                <tr key={item.id}>
                                    <td><img src={fileUrl + '/images/' + item.logo} alt={item.logo} width={40} height={40} className='img rounded-circle' /></td>

                                    <td>{truncateText(item.nom!, 20)}</td>
                                    <td>{truncateText(item.fonction!, 20)}</td>

                                    <td>
                                        <ul>
                                            <li>
                                                <a href={'tel:+' + item.telephone}><i className='fas fa-phone fa-sm'></i> {truncateText(item.telephone!, 20)}</a>

                                            </li>
                                            <li>
                                                <a href={'mailto:+' + item.email}><i className='fas fa-envelope fa-sm'></i> {truncateText(item.email!, 20)}</a>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li><a href={item.facebook} target='_blank'><i className='fab fa-facebook'></i> lien facebook</a></li>
                                            <li><a href={item.twitter} target='_blank'><i className='fab fa-twitter'></i> lien twitter</a></li>
                                            <li><a href={item.linkedin} target='_blank'><i className='fab fa-linkedin'></i> lien linkedin</a></li>
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
