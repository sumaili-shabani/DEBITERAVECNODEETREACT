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
} from '../../../../hooks/useCrud';
import { extractTime, formatDateFR, showConfirmationDialog, showError, truncateText } from '../../../../api/callApi';
import LoaderAndError from '../../../../components/LoaderAndError';
import TextField from '../../../../components/TextField';
import ComboBoxField from '../../../../components/ComboBox';
import { useTranslation } from 'react-i18next';

export interface Arbitre {
    id?: number;
    nom: string;
    prenom: string;
    nationalite?: string;
    grade?: string;
    created_at?: string;
    updated_at?: string;
}

export default function ArbitrePage() {
    // Déclaration de variables
    const [arbitres, setArbitres] = useState<Arbitre[]>([]);
    const [formData, setFormData] = useState<Partial<Arbitre>>({});
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

    // Options pour les grades d'arbitres
    const gradeOptions = [
        { value: 'International', label: 'International' },
        { value: 'National', label: 'National' },
        { value: 'Regional', label: 'Régional' },
        { value: 'Departemental', label: 'Départemental' },
        { value: 'Debutant', label: 'Débutant' },
        { value: 'Junior', label: 'Junior' },
        { value: 'Professionnel', label: 'Professionnel' }
    ];

    // Options pour les nationalités (quelques exemples)
    const nationaliteOptions = [
        { value: 'Française', label: 'Française' },
        { value: 'Belge', label: 'Belge' },
        { value: 'Suisse', label: 'Suisse' },
        { value: 'Espagnole', label: 'Espagnole' },
        { value: 'Italienne', label: 'Italienne' },
        { value: 'Allemande', label: 'Allemande' },
        { value: 'Americaine', label: 'Américaine' },
        { value: 'Canadienne', label: 'Canadienne' },
        { value: 'Congolaise', label: 'Congolaise' },
        { value: 'Rwandaise', label: 'Rwandaise' },
        { value: 'Camerounaise', label: 'Camerounaise' },
        { value: 'Ivoirienne', label: 'Ivoirienne' },
        { value: 'Autre', label: 'Autre' },
    ];

    // Chargement des arbitres
    const loadArbitres = async () => {
        setLoading(true);
        try {
            const res = await fetchItems<Arbitre>('/fetch_arbitres', {
                q: search,
                page: currentPage,
                limit,
            });
            setArbitres(res.data);
            setTotalPages(res.totalPages);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadArbitres();
    }, [search, currentPage, limit]);

    // Fonctions CRUD
    const handleEdit = async (id: number) => {
        try {
            const arbitre = await fetchItem<Arbitre>('/fetch_single_arbitre', id);
            setFormData(arbitre);
            setIsEditing(true);
            setShowModal(true);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleDelete = async (id: number) => {
        const confirmed = await showConfirmationDialog({
            title: 'Voulez-vous vraiment supprimer cet arbitre ?',
            text: 'Cette action est définitive.',
            confirmButtonText: 'Oui, supprimer',
            icon: 'warning',
        });

        if (confirmed) {
            try {
                await removeItem('/delete_arbitre', id);
                loadArbitres();
                Swal.fire('Supprimé', 'L\'arbitre a été supprimé avec succès.', 'success');
            } catch (error) {
                showError('Erreur' + error);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await saveItem('/insert_arbitre', formData);
            loadArbitres();
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

    return (
        <div className="container mt-4">
            <h4 className="mb-3">Gestion des Arbitres</h4>

            <LoaderAndError
                loading={loading}
                error={error}
                onClearError={() => setError(null)}
            />

            <Modal
                title={isEditing ? 'Modifier l\'arbitre' : 'Ajouter un arbitre'}
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
                                placeholder="Prénom de l'arbitre"
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
                                placeholder="Nom de l'arbitre"
                                icon="fas fa-user"
                                label="Nom"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <ComboBoxField
                                name="nationalite"
                                value={formData.nationalite || ''}
                                onChange={handleInputChange}
                                options={nationaliteOptions}
                                label="Nationalité"
                                placeholder="Sélectionner une nationalité"
                            />
                        </div>
                        <div className="col-md-6">
                            <ComboBoxField
                                name="grade"
                                value={formData.grade || ''}
                                onChange={handleInputChange}
                                options={gradeOptions}
                                label="Grade"
                                placeholder="Sélectionner un grade"
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

            {/* Entête de recherche */}
            <div className="d-flex justify-content-between mb-3">
                <div className="col-auto col-sm-4">
                    <div className="input-group mb-2">
                        <button
                            type="button"
                            className="btn btn-sm btn-primary me-1"
                            onClick={loadArbitres}
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
                            <th>Nom complet</th>
                            <th>Nationalité</th>
                            <th>Grade</th>
                            <th>Créé le</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arbitres.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center">
                                    Aucun arbitre trouvé
                                </td>
                            </tr>
                        ) : (
                            arbitres.map((arbitre) => (
                                <tr key={arbitre.id}>
                                    <td>
                                        <strong>{arbitre.prenom} {arbitre.nom}</strong>
                                    </td>
                                    <td>
                                        {arbitre.nationalite ? (
                                            <span className="text-white badge bg-info">{arbitre.nationalite}</span>
                                        ) : (
                                            '-'
                                        )}
                                    </td>
                                    <td>
                                        {arbitre.grade ? (
                                            <span className={`text-white badge ${arbitre.grade === 'International' ? 'bg-danger' :
                                                arbitre.grade === 'National' ? 'bg-warning' :
                                                    arbitre.grade === 'Regional' ? 'bg-primary' :
                                                        'bg-secondary'
                                                }`}>
                                                {arbitre.grade}
                                            </span>
                                        ) : (
                                            '-'
                                        )}
                                    </td>
                                    <td>{formatDateFR(arbitre.created_at ?? '')} {extractTime(arbitre.created_at ?? '')}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning btn-circle btn-sm me-1"
                                            onClick={() => handleEdit(arbitre.id!)}
                                            title="Modifier"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            className="btn btn-danger btn-circle btn-sm"
                                            onClick={() => handleDelete(arbitre.id!)}
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