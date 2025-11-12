import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Modal from '../../../../components/Modal';
import { usePagination } from '../../../../hooks/usePagination';
import Pagination from '../../../../components/Pagination';
import {
    fetchItems,
    fetchItem,
    saveItem,
    removeItem,
    saveItemImageForm,
} from '../../../../hooks/useCrud';
import { extractTime, formatDateFR, showConfirmationDialog, showError, truncateText } from '../../../../api/callApi';
import LoaderAndError from '../../../../components/LoaderAndError';
import TextField from '../../../../components/TextField';
import { useTranslation } from 'react-i18next';
import { fileUrl } from '../../../../api/config';

export interface Equipe {
    id?: number;
    nom: string;
    ville: string;
    annee_fondation?: number;
    couleurs?: string;
    logo?: string;
    created_at?: string;
    updated_at?: string;
    logoFile?: File; // Pour le fichier image temporaire
}

export default function EquipePage() {
    // Déclaration de variables
    const [equipes, setEquipes] = useState<Equipe[]>([]);
    const [formData, setFormData] = useState<Partial<Equipe>>({});
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    // Pour la langue
    const { t, i18n } = useTranslation();

    // Déclaration de la pagination
    const { paginationRange, isCurrentPage, isFirstPage, isLastPage } = usePagination({
        currentPage,
        totalPages,
    });

    // Chargement des équipes
    const loadEquipes = async () => {
        setLoading(true);
        try {
            const res = await fetchItems<Equipe>('/fetch_equipes', {
                q: search,
                page: currentPage,
                limit,
            });
            setEquipes(res.data);
            setTotalPages(res.totalPages);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadEquipes();
    }, [search, currentPage, limit]);

    // Fonctions CRUD
    const handleEdit = async (id: number) => {
        try {
            const equipe = await fetchItem<Equipe>('/fetch_single_equipe', id);
            setFormData(equipe);
            setIsEditing(true);
            setShowModal(true);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleDelete = async (id: number) => {
        const confirmed = await showConfirmationDialog({
            title: 'Voulez-vous vraiment supprimer cette équipe ?',
            text: 'Cette action est définitive.',
            confirmButtonText: 'Oui, supprimer',
            icon: 'warning',
        });

        if (confirmed) {
            try {
                await removeItem('/delete_equipe', id);
                loadEquipes();
                Swal.fire('Supprimé', 'L\'équipe a été supprimée avec succès.', 'success');
            } catch (error) {
                showError('Erreur' + error);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await saveItem('/insert_equipe', formData);
            loadEquipes();
            handleCloseModal();
        } catch (err: any) {
            showError('Erreur' + err.message);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({});
        setIsEditing(false);
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Générer les années pour le select (1900 à année actuelle)
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);




    /*
    *
    *==========================
    * Utilisation de l'image
    *==========================
    *
    */
    const [showModalSiteLogo, setShowModalSiteLogo] = useState(false);
    const handlEditImage = async (id: number) => {
        const data = await fetchItem<Equipe>('/fetch_single_equipe', id);
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

        await saveItemImageForm('/edit_avatar_equipe', formDataToSend);
        loadEquipes();
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
        <div className="container mt-4">
            <h4 className="mb-3">Gestion des Équipes</h4>

            <LoaderAndError
                loading={loading}
                error={error}
                onClearError={() => setError(null)}
            />

            <Modal
                title={isEditing ? 'Modifier l\'équipe' : 'Ajouter une équipe'}
                show={showModal}
                onClose={handleCloseModal}
                dimension="modal-lg"
            >
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <TextField
                                name="nom"
                                value={formData.nom || ''}
                                onChange={handleInputChange}
                                placeholder="Nom de l'équipe"
                                icon="fas fa-users"
                                label="Nom de l'équipe"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <TextField
                                name="ville"
                                value={formData.ville || ''}
                                onChange={handleInputChange}
                                placeholder="Ville de l'équipe"
                                icon="fas fa-city"
                                label="Ville"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="annee_fondation" className="form-label">
                                    Année de fondation
                                </label>
                                <select
                                    id="annee_fondation"

                                    name="annee_fondation"
                                    value={formData.annee_fondation || ''}
                                    onChange={handleInputChange}
                                    className="form-control"
                                >
                                    <option value="">Sélectionner une année</option>
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <TextField
                                name="couleurs"
                                value={formData.couleurs || ''}
                                onChange={handleInputChange}
                                placeholder="Ex: Rouge et Bleu"
                                icon="fas fa-palette"
                                label="Couleurs"
                            />
                        </div>
                    </div>

                   
                    <div className="d-flex justify-content-end mt-3">
                        <button type="button" className="btn btn-secondary me-2" onClick={handleCloseModal}>
                            Annuler
                        </button>
                        <button type="submit" className="btn btn-primary">
                            {isEditing ? 'Modifier' : 'Ajouter'}
                        </button>
                    </div>
                </form>
            </Modal>


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

            {/* Entête de recherche */}
            <div className="d-flex justify-content-between mb-3">
                <div className="col-auto col-sm-4">
                    <div className="input-group mb-2">
                        <button
                            type="button"
                            className="btn btn-sm btn-primary me-1"
                            onClick={loadEquipes}
                            id='btn-search'
                        >
                            <i className="fas fa-sync"></i>
                        </button>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={t('textFild_search') ?? 'Rechercher...'}
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                </div>

                <button className="btn btn-primary btn-sm" onClick={() => setShowModal(true)}>
                    <i className="fas fa-plus me-1"></i> {t("btn_add") ?? 'Ajouter'}
                </button>
            </div>

            {/* Table des données */}
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>logo</th>
                            <th>Nom</th>
                            <th>Ville</th>
                            <th>Année fondation</th>
                            <th>Couleurs</th>
                            <th>Créé le</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipes.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="text-center">
                                    Aucune équipe trouvée
                                </td>
                            </tr>
                        ) : (
                            equipes.map((equipe) => (
                                <tr key={equipe.id}>

                                    <td>
                                        <img src={`${fileUrl}/images/${equipe.logo ?? 'logo.png'}`}
                                            alt={equipe.logo} width={40} height={40} className='img rounded-circle' />
                                    </td>

                                    <td>

                                        {truncateText(equipe.nom, 20)}
                                    </td>
                                    <td>{truncateText(equipe.ville, 15)}</td>
                                    <td>{equipe.annee_fondation || '-'}</td>
                                    <td>
                                        {equipe.couleurs ? (
                                            <span className="text-white badge bg-secondary">{truncateText(equipe.couleurs, 15)}</span>
                                        ) : (
                                            '-'
                                        )}
                                    </td>
                                    <td>{formatDateFR(equipe.created_at ?? '')} {extractTime(equipe.created_at ?? '')}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary btn-circle btn-sm me-1"
                                            onClick={() => handlEditImage(equipe.id!)}
                                        >
                                            <i className="fas fa-camera"></i>
                                        </button>
                                        <button
                                            className="btn btn-warning btn-circle btn-sm me-1"
                                            onClick={() => handleEdit(equipe.id!)}
                                            title="Modifier"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            className="btn btn-danger btn-circle btn-sm"
                                            onClick={() => handleDelete(equipe.id!)}
                                            title="Supprimer"
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

            {/* Pagination */}
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
        </div>
    );
}