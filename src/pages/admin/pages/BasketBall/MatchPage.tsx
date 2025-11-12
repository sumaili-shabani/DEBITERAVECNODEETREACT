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
import { fileUrl } from '../../../../api/config';

export interface Match {
    id?: number;
    tournoi_id: number;
    equipe_domicile_id: number;
    equipe_exterieur_id: number;
    date_match: string;
    lieu?: string;
    statut: 'planifie' | 'en_cours' | 'termine';
    score_domicile?: string | number;
    score_exterieur?: string | number;
    created_at?: string;
    updated_at?: string;
    tournoi_nom?: string;
    tournoi?: any;
    equipe_domicile?: any;
    equipe_exterieur?: any;
    
}



export default function MatchPage() {
    // Déclaration de variables
    const [matchs, setMatchs] = useState<Match[]>([]);
    const [tournois, setTournois] = useState([]);
    const [equipes, setEquipes] = useState([]);
    const [formData, setFormData] = useState<Partial<Match>>({});
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

    // Options pour le statut
    const statutOptions = [
        { value: 'planifie', label: 'Planifié' },
        { value: 'en_cours', label: 'En cours' },
        { value: 'termine', label: 'Terminé' }
    ];

    // Chargement des matchs
    const loadMatchs = async () => {
        setLoading(true);
        try {
            const res = await fetchItems<Match>('/fetch_matchs', {
                q: search,
                page: currentPage,
                limit,
            });
            setMatchs(res.data);
            setTotalPages(res.totalPages);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Chargement des tournois pour le select
    const loadTournois = async () => {
        try {
            const res = await fetchListItems('/fetch_all_tournois');
            setTournois(res.data);
        } catch (err: any) {
            console.error('Erreur lors du chargement des tournois:', err);
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
        loadMatchs();
        loadTournois();
        loadEquipes();
    }, [search, currentPage, limit]);

    // Fonctions CRUD
    const handleEdit = async (id: number) => {
        try {
            const match = await fetchItem<Match>('/fetch_single_match', id);
            setFormData(match);
            setIsEditing(true);
            setShowModal(true);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleDelete = async (id: number) => {
        const confirmed = await showConfirmationDialog({
            title: 'Voulez-vous vraiment supprimer ce match ?',
            text: 'Cette action est définitive.',
            confirmButtonText: 'Oui, supprimer',
            icon: 'warning',
        });

        if (confirmed) {
            try {
                await removeItem('/delete_match', id);
                loadMatchs();
                Swal.fire('Supprimé', 'Le match a été supprimé avec succès.', 'success');
            } catch (error) {
                showError('Erreur' + error);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await saveItem('/insert_match', formData);
            loadMatchs();
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
            [name]: name === 'tournoi_id' || name === 'equipe_domicile_id' || name === 'equipe_exterieur_id' ||
                name === 'score_domicile' || name === 'score_exterieur' ? Number(value) : value,
        }));
    };

    // Filtrer les équipes pour éviter qu'une équipe soit à la fois domicile et extérieur
    const getEquipeOptions = (currentEquipeId?: number, opposingEquipeId?: number) => {
        return equipes.filter(equipe =>
            equipe[0] !== opposingEquipeId || equipe[0] === currentEquipeId
        );
    };

    // Obtenir le résultat du match
    const getResultat = (match: Match) => {
        if (match.statut !== 'termine' || match.score_domicile === undefined || match.score_exterieur === undefined) {
            return null;
        }

        if (match.score_domicile > match.score_exterieur) {
            return { victoire: 'domicile', score: `${match.score_domicile}-${match.score_exterieur}` };
        } else if (match.score_domicile < match.score_exterieur) {
            return { victoire: 'exterieur', score: `${match.score_domicile}-${match.score_exterieur}` };
        } else {
            return { victoire: 'nul', score: `${match.score_domicile}-${match.score_exterieur}` };
        }
    };

    return (
        <div className="col-md-12 mt-4">
            <h4 className="mb-3">Gestion des Matchs</h4>

            <LoaderAndError
                loading={loading}
                error={error}
                onClearError={() => setError(null)}
            />

            <Modal
                title={isEditing ? 'Modifier le match' : 'Ajouter un match'}
                show={showModal}
                onClose={handleCloseModal}
                dimension="modal-lg"
            >
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <ComboBoxField
                                name="tournoi_id"
                                value={formData.tournoi_id?.toString() || ''}
                                onChange={handleInputChange}
                                options={tournois}
                                label="Tournoi"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <TextField
                                type="datetime-local"
                                name="date_match"
                                value={formData.date_match || ''}
                                onChange={handleInputChange}
                                label="Date et heure du match"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <ComboBoxField
                                name="equipe_domicile_id"
                                value={formData.equipe_domicile_id?.toString() || ''}
                                onChange={handleInputChange}
                                options={getEquipeOptions(formData.equipe_domicile_id, formData.equipe_exterieur_id)}
                                label="Équipe domicile"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <ComboBoxField
                                name="equipe_exterieur_id"
                                value={formData.equipe_exterieur_id?.toString() || ''}
                                onChange={handleInputChange}
                                options={getEquipeOptions(formData.equipe_exterieur_id, formData.equipe_domicile_id)}
                                label="Équipe extérieur"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <TextField
                                name="lieu"
                                value={formData.lieu || ''}
                                onChange={handleInputChange}
                                placeholder="Lieu du match"
                                icon="fas fa-map-marker-alt"
                                label="Lieu"
                            />
                        </div>
                        <div className="col-md-6">
                            <ComboBoxField
                                name="statut"
                                value={formData.statut || ''}
                                onChange={handleInputChange}
                                options={statutOptions}
                                label="Statut"
                                required
                            />
                        </div>
                    </div>

                    {(formData.statut === 'termine' || formData.statut === 'en_cours') && (
                        <div className="row">
                            <div className="col-md-6">
                                <TextField
                                    type="number"
                                    name="score_domicile"
                                    value={formData.score_domicile?.toString() || ''}
                                    onChange={handleInputChange}
                                    placeholder="Score domicile"
                                    label="Score domicile"

                                />
                            </div>
                            <div className="col-md-6">
                                <TextField
                                    type="number"
                                    name="score_exterieur"
                                    value={formData.score_exterieur?.toString() || ''}
                                    onChange={handleInputChange}
                                    placeholder="Score extérieur"
                                    label="Score extérieur"

                                />
                            </div>
                        </div>
                    )}

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
                            onClick={loadMatchs}
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
                            <th>Tournoi</th>

                            <th>Match</th>
                            <th>Logo</th>
                            <th>Date et heure</th>
                            <th>Lieu</th>
                            <th>Statut</th>
                            <th>Score</th>
                            <th>Créé le</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matchs.length === 0 ? (
                            <tr>
                                <td colSpan={9} className="text-center">
                                    Aucun match trouvé
                                </td>
                            </tr>
                        ) : (
                            matchs.map((match) => {
                                const resultat = getResultat(match);

                                return (
                                    <tr key={match.id}>
                                        <td>{truncateText(match.tournoi.nom || '-', 25)}</td>
                                        <td>
                                            <div className="d-flex flex-column">
                                                <span className="fw-bold">{match.equipe_domicile?.nom || 'Domicile'}</span>
                                                <span className="text-muted small">vs</span>
                                                <span className="fw-bold">{match.equipe_exterieur?.nom || 'Extérieur'}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <img src={`${fileUrl}/images/${match.equipe_domicile?.logo ?? 'logo.png'}`}
                                                alt={match.equipe_domicile?.logo} width={40} height={40} className='img rounded-circle' />
                                                vs 

                                           
                                            <img src={`${fileUrl}/images/${match.equipe_exterieur?.logo ?? 'logo.png'}`}
                                                alt={match.equipe_exterieur?.logo} width={40} height={40} className='img rounded-circle' />
                                        </td>
                                        <td>{formatDateTimeFR(match.date_match)}</td>
                                        <td>{truncateText(match.lieu || '-', 15)}</td>
                                        <td>
                                            <span className={`text-white badge ${match.statut === 'planifie' ? 'bg-warning' :
                                                match.statut === 'en_cours' ? 'bg-success' :
                                                    'bg-secondary'
                                                }`}>
                                                {match.statut}
                                            </span>
                                        </td>
                                        <td>

                                            {match.score_domicile && match.score_exterieur !== undefined ? (<span className={`text-white badge ${match.score_domicile > match.score_exterieur ? 'bg-primary' :
                                                match.score_domicile < match.score_exterieur ? 'bg-info' :
                                                    'bg-secondary'
                                                }`}>
                                                {match.score_domicile} - {match.score_exterieur} points
                                            </span>) : (<span className="badge bg-light text-dark">-</span>)}
                                           
                                        </td>
                                        <td>{formatDateFR(match.created_at ?? '')} {extractTime(match.created_at ?? '')}</td>
                                        <td>
                                            <button
                                                className="btn btn-warning btn-circle btn-sm me-1"
                                                onClick={() => handleEdit(match.id!)}
                                                title="Modifier"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button
                                                className="btn btn-danger btn-circle btn-sm"
                                                onClick={() => handleDelete(match.id!)}
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