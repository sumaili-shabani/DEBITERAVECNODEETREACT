import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { usePagination } from '../../../hooks/usePagination';
import { fetchItem, fetchItems, removeItem, saveItem, saveItemImageForm } from '../../../hooks/useCrud';
import { extractTime, formatDateFR, showConfirmationDialog, truncateText } from '../../../api/callApi';
import Swal from 'sweetalert2';
import Pagination from '../../../components/Pagination';
import TextField from '../../../components/TextField';
import Modal from '../../../components/Modal';
import LoaderAndError from '../../../components/LoaderAndError';
import RichTextField from '../../../components/RichTextField';
import TextAreaFild from '../../../components/TextAreaField';
import { fileUrl } from '../../../api/config';

interface UiPhoto {
    id?: number;
    icone?: string;
    logoFile?: File;

    createdAt?: string;
    updatedAt?: string;
}
export default function ImagePage() {
    // declaration de variables
    const [listData, setDataList] = useState<UiPhoto[]>([]);
    const [formData, setFormData] = useState<Partial<UiPhoto>>({});
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(8);
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
            const res = await fetchItems<UiPhoto>('/fetch_galery', {
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
        const role = await fetchItem<UiPhoto>('/fetch_single_galery', id);
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
                await removeItem('/delete_galery', id);
                loadlistData();
                Swal.fire('Supprimé', '', 'success');
            } catch (error) {
                Swal.fire('Erreur', 'Échec de la suppression.', 'error');
            }


        }
    };

    //ouverture et fer;eture de modal
    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({});
        setIsEditing(false);
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
        const data = await fetchItem<UiPhoto>('/fetch_single_galery', id);
        // console.log("Site:" + role);
        setPreview('');
        setFormData({});
        setFormData(data);
        setIsEditing(true);
        setShowModalSiteLogo(true);

        setShowModal(true);



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

        if (isEditing) {

            await saveItemImageForm('/edit_galery_logo', formDataToSend);
            loadlistData();
            handleCloseModalImage();
            handleCloseModal();

        }
        else {
            await saveItemImageForm('/insert_galery', formDataToSend);
            loadlistData();
            handleCloseModalImage();
            handleCloseModal();
        }


    };

    /*
    *
    *==========================
    * Utilisation de l'image
    *==========================
    *
    */


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
                dimension="modal-md"
            >
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
                                <img src={preview || fileUrl + '/images/' + formData.icone!} alt="image sélectionnée"
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

            <div className="col-md-12">
                <div className="row">
                    {listData.length === 0 ? (
                        <div className="col-md-12 text-center">
                            Aucune donnée trouvée
                        </div>
                    ) : (
                        listData.map((item) => (
                            <div className="col-md-3 mb-2" key={item.id}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <img src={fileUrl + '/images/' + item.icone}
                                            alt={item.icone} width={200} height={200}
                                            className='img img-fluid' />

                                    </div>
                                    <div style={{ marginLeft: '-20px' }} className="col-md-12  mt-1 d-flex justify-content-center align-content-lg-center text-center">
                                        <button
                                            className="btn btn-warning btn-circle btn-sm me-2"
                                            onClick={() => handlEditImage(item.id!)}
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            className="btn btn-danger btn-circle btn-sm text-center"
                                            onClick={() => handleDelete(item.id!)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>

                                    </div>
                                </div>
                            </div>

                        ))
                    )}
                </div>
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
