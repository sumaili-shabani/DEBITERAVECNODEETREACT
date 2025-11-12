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
    fetchListItems,
    saveItemImageForm,
} from '../../../../hooks/useCrud';
import { extractTime, formatDateFR, showConfirmationDialog, showError, truncateText } from '../../../../api/callApi';
import LoaderAndError from '../../../../components/LoaderAndError';
import TextField from '../../../../components/TextField';
import ComboBoxField from '../../../../components/ComboBox';
import { useTranslation } from 'react-i18next';
import { fileUrl } from '../../../../api/config';

export interface Joueur {
    id?: number;
    equipe_id: number;
    nom: string;
    prenom: string;
    date_naissance: string;
    taille?: string | number;
    poids?: string | number;
    poste?: 'Meneur' | 'Arriere' | 'Ailier' | 'Ailier_fort' | 'Pivot';
    numero_maillot?: string | number;
    photo?: string;
    logoFile?: File; // Pour le fichier image temporaire
    equipe?: any; // Inclure les détails de l'équipe

    created_at?: string;
    updated_at?: string;
    equipe_nom?: string;
}



export default function JoueurPage() {
    // Déclaration de variables
    const [joueurs, setJoueurs] = useState<Joueur[]>([]);
    const [equipes, setEquipes] = useState([]);
    const [formData, setFormData] = useState<Partial<Joueur>>({});
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

    // Options pour les postes
    const posteOptions = [
        { value: 'Meneur', label: 'Meneur' },
        { value: 'Arriere', label: 'Arrière' },
        { value: 'Ailier', label: 'Ailier' },
        { value: 'Ailier_fort', label: 'Ailier fort' },
        { value: 'Pivot', label: 'Pivot' }
    ];

    // Chargement des joueurs
    const loadJoueurs = async () => {
        setLoading(true);
        try {
            const res = await fetchItems<Joueur>('/fetch_joueurs', {
                q: search,
                page: currentPage,
                limit,
            });
            setJoueurs(res.data);
            setTotalPages(res.totalPages);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Chargement des équipes pour le select
    const loadEquipes = async () => {
        try {
            const res = await fetchListItems('/fetch_all_equipes');
            setEquipes(res.data);
        } catch (err: any) {
            console.error('Erreur lors du chargement des équipes:', err);
        }
    };

    useEffect(() => {
        loadJoueurs();
        loadEquipes();
    }, [search, currentPage, limit]);

    // Fonctions CRUD
    const handleEdit = async (id: number) => {
        try {
            const joueur = await fetchItem<Joueur>('/fetch_single_joueur', id);
            setFormData(joueur);
            setIsEditing(true);
            setShowModal(true);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleDelete = async (id: number) => {
        const confirmed = await showConfirmationDialog({
            title: 'Voulez-vous vraiment supprimer ce joueur ?',
            text: 'Cette action est définitive.',
            confirmButtonText: 'Oui, supprimer',
            icon: 'warning',
        });

        if (confirmed) {
            try {
                await removeItem('/delete_joueur', id);
                loadJoueurs();
                Swal.fire('Supprimé', 'Le joueur a été supprimé avec succès.', 'success');
            } catch (error) {
                showError('Erreur' + error);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await saveItem('/insert_joueur', formData);
            loadJoueurs();
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
            [name]: name === 'equipe_id' || name === 'poids' || name === 'numero_maillot' ? Number(value) : value,
        }));
    };

    // Calculer l'âge à partir de la date de naissance
    const calculateAge = (dateNaissance: string): number => {
        const today = new Date();
        const birthDate = new Date(dateNaissance);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
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
        const data = await fetchItem<Joueur>('/fetch_single_joueur', id);
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

        await saveItemImageForm('/edit_avatar_joueur', formDataToSend);
        loadJoueurs();
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
        <div className="col-md-12 mt-2">
            <h4 className="mb-3">Gestion des Joueurs</h4>

            <LoaderAndError
                loading={loading}
                error={error}
                onClearError={() => setError(null)}
            />

            <Modal
                title={isEditing ? 'Modifier le joueur' : 'Ajouter un joueur'}
                show={showModal}
                onClose={handleCloseModal}
                dimension="modal-lg"
            >
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <TextField
                                name="prenom"
                                value={formData.prenom || ''}
                                onChange={handleInputChange}
                                placeholder="Prénom du joueur"
                                icon="fas fa-user"
                                label="Prénom"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <TextField
                                name="nom"
                                value={formData.nom || ''}
                                onChange={handleInputChange}
                                placeholder="Nom du joueur"
                                icon="fas fa-user"
                                label="Nom"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <TextField
                                type="date"
                                name="date_naissance"
                                value={formData.date_naissance || ''}
                                onChange={handleInputChange}
                                label="Date de naissance"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <ComboBoxField
                                name="equipe_id"
                                value={formData.equipe_id?.toString() || ''}
                                onChange={handleInputChange}
                                options={equipes}
                                label="Équipe"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <TextField
                                type="number"
                                name="taille"
                                value={formData.taille?.toString() || ''}
                                onChange={handleInputChange}
                                placeholder="Taille en mètres"
                                icon="fas fa-ruler-vertical"
                                label="Taille (m)"

                            />
                        </div>
                        <div className="col-md-6">
                            <TextField
                                type="number"
                                name="poids"
                                value={formData.poids?.toString() || ''}
                                onChange={handleInputChange}
                                placeholder="Poids en kg"
                                icon="fas fa-weight"
                                label="Poids (kg)"

                            />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <ComboBoxField
                                name="poste"
                                value={formData.poste || ''}
                                onChange={handleInputChange}
                                options={posteOptions}
                                label="Poste"
                            />
                        </div>
                        <div className="col-md-6">
                            <TextField
                                type="number"
                                name="numero_maillot"
                                value={formData.numero_maillot?.toString() || ''}
                                onChange={handleInputChange}
                                placeholder="Numéro de maillot"
                                icon="fas fa-tshirt"
                                label="Numéro de maillot"

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
                                <img src={preview || fileUrl + '/images/' + formData.photo} alt="image sélectionnée" className='img img-thumbnail col-md-6' width={50} height={50} />


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
                            onClick={loadJoueurs}
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
                            <th>Photo</th>
                            <th>Joueur</th>
                            <th>Âge</th>
                            <th>Équipe</th>
                            <th>Logo</th>
                            <th>Taille</th>
                            <th>Poids</th>
                            <th>Poste</th>
                            <th>N° Maillot</th>
                            <th>Créé le</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {joueurs.length === 0 ? (
                            <tr>
                                <td colSpan={10} className="text-center">
                                    Aucun joueur trouvé
                                </td>
                            </tr>
                        ) : (
                            joueurs.map((joueur) => {
                                const age = joueur.date_naissance ? calculateAge(joueur.date_naissance) : '-';

                                return (
                                    <tr key={joueur.id}>

                                        <td>
                                            <img src={`${fileUrl}/images/${joueur.photo ?? 'avatar.png'}`}
                                                alt={joueur.photo} width={40} height={40}
                                                className="rounded-circle d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    backgroundColor: '#f8f9fa',
                                                    border: '1px solid #dee2e6'
                                                }} />
                                        </td>
                                        <td>
                                            <div>
                                                <strong>{joueur.prenom} {joueur.nom}</strong>
                                            </div>
                                        </td>
                                        <td>{age} ans</td>
                                        <td>{joueur.equipe.nom || '-'}</td>
                                        <td>
                                            <img src={`${fileUrl}/images/${joueur.equipe.logo ?? 'logo.png'}`}
                                                alt={joueur.equipe.logo} width={40} height={40} className='img rounded-circle' />
                                        </td>
                                        <td>{joueur.taille ? `${joueur.taille}m` : '-'}</td>
                                        <td>{joueur.poids ? `${joueur.poids}kg` : '-'}</td>
                                        <td>
                                            {joueur.poste ? (
                                                <span className="text-white badge bg-primary">{joueur.poste}</span>
                                            ) : (
                                                '-'
                                            )}
                                        </td>
                                        <td>
                                            {joueur.numero_maillot ? (
                                                <span className="text-white badge bg-secondary">#{joueur.numero_maillot}</span>
                                            ) : (
                                                '-'
                                            )}
                                        </td>
                                        <td>{formatDateFR(joueur.created_at ?? '')} {extractTime(joueur.created_at ?? '')}</td>
                                        <td>
                                            <button
                                                className="btn btn-secondary btn-circle btn-sm me-1"
                                                onClick={() => handlEditImage(joueur.id!)}
                                            >
                                                <i className="fas fa-camera"></i>
                                            </button>
                                            <button
                                                className="btn btn-warning btn-circle btn-sm me-1"
                                                onClick={() => handleEdit(joueur.id!)}
                                                title="Modifier"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button
                                                className="btn btn-danger btn-circle btn-sm"
                                                onClick={() => handleDelete(joueur.id!)}
                                                title="Supprimer"
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
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