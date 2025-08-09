import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { usePagination } from '../../../hooks/usePagination';
import { fetchItem, fetchItems, gethItem, removeItem, saveItem } from '../../../hooks/useCrud';
import { extractTime, formatDateFR, showConfirmationDialog, showMessage, truncateText } from '../../../api/callApi';
import Swal from 'sweetalert2';
import Pagination from '../../../components/Pagination';
import TextField from '../../../components/TextField';
import Modal from '../../../components/Modal';
import LoaderAndError from '../../../components/LoaderAndError';
import RichTextField from '../../../components/RichTextField';
import TextAreaFild from '../../../components/TextAreaField';

interface UiVideo {
    id?: number;
    titre?: string;
    status?: number;
    description?: string;
    urlYoutube?: string;
    createdAt?: string;
    updatedAt?: string;
}
export default function VideoPage() {
    // declaration de variables
    const [listData, setDataList] = useState<UiVideo[]>([]);
    const [formData, setFormData] = useState<Partial<UiVideo>>({});
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
            const res = await fetchItems<UiVideo>('/fetch_video', {
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
        const role = await fetchItem<UiVideo>('/fetch_single_video', id);
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
                await removeItem('/delete_video', id);
                loadlistData();
                Swal.fire('Supprimé', '', 'success');
            } catch (error) {
                Swal.fire('Erreur', 'Échec de la suppression.', 'error');
            }


        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await saveItem('/insert_video', formData);
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


    const checkStatusBlog = async (id: number) => {
        setLoading(true);
        try {
            const res = await gethItem('/check_status_video', id);
            const message = res.message;
            showMessage(message);
            loadlistData();

        } finally {
            setLoading(false);
        }


    }


    return (
        <div className="container mt-4">
            <h4 className="mb-3">Liste des vidéos</h4>
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
                <form onSubmit={handleSubmit}>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">

                                <TextField
                                    name="titre"
                                    value={formData.titre || ''}
                                    onChange={handleInputChange}
                                    placeholder="Titre"
                                    label="Titre"
                                    icon="fas fa-text-width"
                                    required
                                />

                            </div>
                            <div className="col-md-6">
                                <TextField
                                    name="urlYoutube"
                                    value={formData.urlYoutube || ''}
                                    onChange={handleInputChange}
                                    placeholder="https://www.youtube.com/watch?"
                                    label="Url sur youtube"
                                    icon="fas fa-video"
                                    required

                                />

                            </div>

                            <div className="col-md-12">

                                <RichTextField
                                    name="description"
                                    value={formData.description || ''}
                                    onChange={handleInputChange}
                                    placeholder="Description"
                                    label="Description"
                                    icon="fas fa-text-width"

                                    required

                                />

                            </div>


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

                            <th>Vidéo</th>
                            <th>Titre</th>
                            <th>Pulicité d'accueil</th>

                            <th>Date de création</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center">
                                    Aucune donnée trouvée
                                </td>
                            </tr>
                        ) : (
                            listData.map((item) => (
                                <tr key={item.id}>

                                    <td>
                                        <div className="ratio ratio-16x9 w10">
                                            <iframe src={item.urlYoutube!} title="YouTube video" style={{ height: '40px' }}></iframe>
                                        </div>
                                    </td>
                                    <td>{truncateText(item.titre!, 20)}</td>

                                    <td>
                                        <span onClick={() => checkStatusBlog(item.id!)} style={{ cursor: 'pointer' }} className={`${item.status! == 1 ? 'badge rounded-pill bg-success text-white' : 'badge rounded-pill bg-danger text-white'}`}>
                                            {item.status! === 1 ? 'actif' : 'inactif'}
                                        </span>
                                    </td>

                                    <td>{formatDateFR(item.createdAt ?? '')} {extractTime(item.createdAt ?? '')}</td>
                                    <td>
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
