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
} from '../../../../hooks/useCrud';
import { extractTime, formatDateFR, formatDateTimeFR, showConfirmationDialog, showError, truncateText } from '../../../../api/callApi';
import LoaderAndError from '../../../../components/LoaderAndError';
import TextField from '../../../../components/TextField';
import ComboBoxField from '../../../../components/ComboBox';
import { useTranslation } from 'react-i18next';

export interface Arbitrage {
    id?: number;
    match_id: number;
    arbitre_id: number;
    role: string;
    created_at?: string;
    updated_at?: string;
    match_date?: string;
    equipe_domicile_nom?: string;
    equipe_exterieur_nom?: string;
    arbitre_nom_complet?: string;
    arbitre_grade?: string;
    match?: any;
    arbitre?: any;
}

export interface Option {
    value: number;
    label: string;
}

export interface MatchOption extends Option {
    date?: string;
    equipe_domicile?: string;
    equipe_exterieur?: string;
}

export interface ArbitreOption extends Option {
    grade?: string;
}

export default function ArbitragePage() {
    // Déclaration de variables
    const [arbitrages, setArbitrages] = useState<Arbitrage[]>([]);
    const [matches, setMatches] = useState([]);
    const [arbitres, setArbitres] = useState([]);
    const [formData, setFormData] = useState<Partial<Arbitrage>>({});
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

    // Options pour les rôles d'arbitrage
    const roleOptions = [
        { value: 'Arbitre principal', label: 'Arbitre principal' },
        { value: 'Arbitre assistant', label: 'Arbitre assistant' },
        { value: 'Arbitre de ligne', label: 'Arbitre de ligne' },
        { value: 'Arbitre video', label: 'Arbitre vidéo' },
        { value: 'Commissaire', label: 'Commissaire' },
        { value: 'Observateur', label: 'Observateur' }
    ];

    // Chargement des arbitrages
    const loadArbitrages = async () => {
        setLoading(true);
        try {
            const res = await fetchItems<Arbitrage>('/fetch_arbitrages', {
                q: search,
                page: currentPage,
                limit,
            });
            console.log('Arbitrages chargés:', JSON.stringify(res.data));
            setArbitrages(res.data);
            setTotalPages(res.totalPages);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Chargement des matchs pour le select
    const loadMatches = async () => {
        try {
            const res = await fetchListItems<MatchOption>('/fetch_all_matchs');
            setMatches(res.data);
        } catch (err: any) {
            console.error('Erreur lors du chargement des matchs:', err);
        }
    };

    // Chargement des arbitres pour le select
    const loadArbitres = async () => {
        try {
            const res = await fetchListItems<ArbitreOption>('/fetch_all_arbitres');
            setArbitres(res.data);
        } catch (err: any) {
            console.error('Erreur lors du chargement des arbitres:', err);
        }
    };

    useEffect(() => {
        loadArbitrages();
        loadMatches();
        loadArbitres();
    }, [search, currentPage, limit]);

    // Fonctions CRUD
    const handleEdit = async (id: number) => {
        try {
            const arbitrage = await fetchItem<Arbitrage>('/fetch_single_arbitrage', id);
            setFormData(arbitrage);
            setIsEditing(true);
            setShowModal(true);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleDelete = async (id: number) => {
        const confirmed = await showConfirmationDialog({
            title: 'Voulez-vous vraiment supprimer cet arbitrage ?',
            text: 'Cette action est définitive.',
            confirmButtonText: 'Oui, supprimer',
            icon: 'warning',
        });

        if (confirmed) {
            try {
                await removeItem('/delete_arbitrage', id);
                loadArbitrages();
                Swal.fire('Supprimé', 'L\'arbitrage a été supprimé avec succès.', 'success');
            } catch (error) {
                showError('Erreur' + error);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await saveItem('/insert_arbitrage', formData);
            loadArbitrages();
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
            [name]: name === 'match_id' || name === 'arbitre_id' ? Number(value) : value,
        }));
    };

    // Vérifier si un arbitre est déjà assigné à ce match
    const isArbitreAlreadyAssigned = (arbitreId: number, matchId: number) => {
        return arbitrages.some(arbitrage =>
            arbitrage.arbitre_id === arbitreId &&
            arbitrage.match_id === matchId &&
            arbitrage.id !== formData.id // Exclure l'arbitrage en cours d'édition
        );
    };

    // Formater le label des matchs pour le select
    const formatMatchLabel = (match: MatchOption) => {
        if (match.equipe_domicile && match.equipe_exterieur && match.date) {
            return `${match.equipe_domicile} vs ${match.equipe_exterieur} - ${formatDateFR(match.date)}`;
        }
        return match.label;
    };

    // Formater le label des arbitres pour le select
    const formatArbitreLabel = (arbitre: ArbitreOption) => {
        if (arbitre.grade) {
            return `${arbitre.label} (${arbitre.grade})`;
        }
        return arbitre.label;
    };

    return (
        <div className="container mt-4">
            <h4 className="mb-3">Gestion des Arbitrages</h4>

            <LoaderAndError
                loading={loading}
                error={error}
                onClearError={() => setError(null)}
            />

            <Modal
                title={isEditing ? 'Modifier l\'arbitrage' : 'Ajouter un arbitrage'}
                show={showModal}
                onClose={handleCloseModal}
                dimension="modal-lg"
            >
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <ComboBoxField
                                name="match_id"
                                value={formData.match_id?.toString() || ''}
                                onChange={handleInputChange}
                                // options={matches.map(match => ({
                                //     value: match[0],
                                //     label: formatMatchLabel(match)
                                // }))}

                                options={matches}
                                label="Match"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <ComboBoxField
                                name="arbitre_id"
                                value={formData.arbitre_id?.toString() || ''}
                                onChange={handleInputChange}
                                // options={arbitres.map(arbitre => ({
                                //     value: arbitre[0],
                                //     label: formatArbitreLabel(arbitre)
                                // }))}
                                options={arbitres}
                                label="Arbitre"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <ComboBoxField
                                name="role"
                                value={formData.role || ''}
                                onChange={handleInputChange}
                                options={roleOptions}
                                label="Rôle"
                                required
                            />
                        </div>
                    </div>

                    {/* {formData.match_id && formData.arbitre_id &&
                        isArbitreAlreadyAssigned(formData.arbitre_id, formData.match_id) && (
                            <div className="alert alert-warning mt-3">
                                <i className="fas fa-exclamation-triangle me-2"></i>
                                Cet arbitre est déjà assigné à ce match.
                            </div>
                        )} */}

                    <div className="d-flex justify-content-end mt-3">
                        <button type="button" className="btn btn-secondary me-2" onClick={handleCloseModal}>
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={
                                isArbitreAlreadyAssigned(formData.arbitre_id ?? 0, formData.match_id ?? 0)
                            }
                        >
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
                            onClick={loadArbitrages}
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
                            <th>Match</th>
                            <th>Date du match</th>
                            <th>Arbitre</th>
                            <th>Grade</th>
                            <th>Rôle</th>
                            <th>Créé le</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arbitrages.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="text-center">
                                    Aucun arbitrage trouvé
                                </td>
                            </tr>
                        ) : (
                            arbitrages.map((arbitrage) => (
                                <tr key={arbitrage.id}>
                                    <td>
                                        <div className="d-flex flex-column">
                                            <span className="fw-bold">{arbitrage.match.equipe_domicile.nom || 'Domicile'}</span>
                                            <span className="text-muted small">vs</span>
                                            <span className="fw-bold">{arbitrage.match.equipe_exterieur.nom || 'Extérieur'}</span>
                                        </div>
                                    </td>
                                    <td>
                                        {arbitrage.match.date_match ? (
                                            <span className="text-muted small">
                                                {formatDateFR(arbitrage.match.date_match)}
                                            </span>
                                        ) : (
                                            '-'
                                        )}
                                    </td>
                                    <td>
                                        <strong>{arbitrage.arbitre?.nom + ' ' + arbitrage.arbitre?.prenom || 'Arbitre'}</strong>
                                    </td>
                                    <td>
                                        {arbitrage.arbitre?.grade ? (
                                            <span className={`text-white badge ${arbitrage.arbitre?.grade === 'International' ? 'bg-danger' :
                                                    arbitrage.arbitre?.grade === 'National' ? 'bg-warning' :
                                                        arbitrage.arbitre?.grade === 'Regional' ? 'bg-primary' :
                                                            'bg-secondary'
                                                }`}>
                                                {arbitrage.arbitre?.grade}
                                            </span>
                                        ) : (
                                            '-'
                                        )}
                                    </td>
                                    <td>
                                        <span className={`text-white badge ${arbitrage.role === 'Arbitre principal' ? 'bg-success' :
                                                arbitrage.role === 'Arbitre assistant' ? 'bg-info' :
                                                    arbitrage.role === 'Arbitre video' ? 'bg-purple' :
                                                        'bg-secondary'
                                            }`}>
                                            {arbitrage.role}
                                        </span>
                                    </td>
                                    <td>{formatDateFR(arbitrage.created_at ?? '')} {extractTime(arbitrage.created_at ?? '')}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning btn-circle btn-sm me-1"
                                            onClick={() => handleEdit(arbitrage.id!)}
                                            title="Modifier"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            className="btn btn-danger btn-circle btn-sm"
                                            onClick={() => handleDelete(arbitrage.id!)}
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