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


interface UiRapport {
    id?: number;
    titre?: string;
    sousTitre?: string;
    description?: string;
    annee?: string;
    icone?: string;
    logoFile?: File;
    slug?: String;
    createdAt?: string;
    updatedAt?: string;

}


export default function RapportPage() {
    // declaration de variables
    const [listData, setDataList] = useState<UiRapport[]>([]);
    const [formData, setFormData] = useState<Partial<UiRapport>>({});
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
            const res = await fetchItems<UiRapport>('/fetch_rapport', {
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
        const role = await fetchItem<UiRapport>('/fetch_single_rapport', id);
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
                await removeItem('/delete_rapport', id);
                loadlistData();
                Swal.fire('Supprimé', '', 'success');
            } catch (error) {
                Swal.fire('Erreur', 'Échec de la suppression.', 'error');
            }


        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await saveItem('/insert_rapport', formData);
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
        const data = await fetchItem<UiRapport>('/fetch_single_rapport', id);
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
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleInputChangeImage = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, files } = e.target as HTMLInputElement;

        if (name === 'logo' && files && files[0]) {
            const file = files[0];

            setFormData((prev) => ({
                ...prev,
                logoFile: file,
            }));

            // ✅ Mémoriser le fichier pour afficher son nom
            setSelectedFile(file);

            // ✅ Si c'est une image, créer un preview
            if (file.type.startsWith('image/')) {
                setPreview(URL.createObjectURL(file));
            } else {
                setPreview(null); // Pas d'image preview pour PDF/Word
            }
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

        await saveItemImageForm('/edit_rapport_logo', formDataToSend);
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
            <h4 className="mb-3">Liste des rapports</h4>
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
                        <div className="col-md-6">
                            <TextField
                                name="titre"
                                value={formData.titre || ''}
                                onChange={handleInputChange}
                                placeholder="Titre de rapport"
                                label="Titre de rapport"
                                icon="fas fa-text-width"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <TextField
                                name="annee"
                                value={formData.annee || ''}
                                onChange={handleInputChange}
                                placeholder="Année de résalisation"
                                label="Année de résalisation"
                                icon="fas fa-calendar"

                            />
                        </div>

                        <div className="col-md-12">
                            <TextAreaFild
                                name="sousTitre"
                                value={formData.sousTitre || ''}
                                onChange={handleInputChange}
                                placeholder="Sous titre de rapport"
                                label="Sous titre de rapport"
                                icon="fas fa-text-height"
                                rows={2}
                                required
                            />

                        </div>
                        <div className="col-md-12">
                            <RichTextField
                                name="description"
                                value={formData.description || ''}
                                onChange={handleInputChange}
                                placeholder="Description de rapport"
                                label="Description de rapport"
                                icon="fas fa-text-width"
                                required
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
                                    className="form-control"
                                    onChange={handleInputChangeImage}
                                    required
                                    accept=".pdf,.doc,.docx,.txt,.xls,.xlsx,.ppt,.pptx"

                                />
                            </div>

                            <div className="col-md-12">
                               
                                {/* ✅ Affiche l'image si c'est une image */}
                                {preview && (
                                    <img
                                        src={preview || fileUrl + '/images/' + formData.icone!}
                                        alt="Aperçu"
                                        className="img img-thumbnail col-md-6"
                                        width={50}
                                        height={50}
                                    />
                                )}

                                {/* ✅ Affiche le nom du fichier si non image */}
                                {selectedFile && !preview && (
                                    <div className="mt-2">
                                        <strong>Fichier sélectionné :</strong> {selectedFile.name}
                                    </div>
                                )}

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
                            <th>Fichier PDF</th>
                            <th>Titre</th>
                            <th>Sous titre</th>

                            <th>Année de réalisation</th>

                            <th>Date de création</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center">
                                    Aucune donnée trouvée
                                </td>
                            </tr>
                        ) : (
                            listData.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                       
                                        <a href={fileUrl + '/images/' + item.icone} download={true}>
                                            <i className='fas fa-file'></i> téléchanger
                                        </a>
                                    </td>

                                    <td>{truncateText(item.titre!, 20)}</td>
                                    <td>{truncateText(item.sousTitre!, 20)}</td>

                                    <td>{truncateText(item.annee ?? '', 20)}</td>


                                    <td>{formatDateFR(item.createdAt ?? '')} {extractTime(item.createdAt ?? '')}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary btn-circle btn-sm me-1"
                                            onClick={() => handlEditImage(item.id!)}
                                        >
                                            <i className="fas fa-file"></i>
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
