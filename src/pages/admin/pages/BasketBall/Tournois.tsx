import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Modal from '../../../../components/Modal';
import DynamicSidebar from '../../../../components/DynamicSidebar';
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


import { useTranslation } from 'react-i18next';
import ComboBoxField from '../../../../components/ComboBox';
export interface Tournoi {
    id?: number;
    nom: string;
    saison: string;
    date_debut: string;
    date_fin: string;
    lieu?: string;
    statut: 'planifie' | 'en_cours' | 'termine';
    created_at?: string;
    updated_at?: string;
}

export default function TournoiPage() {
    // Déclaration de variables
    const [tournois, setTournois] = useState<Tournoi[]>([]);
    const [formData, setFormData] = useState<Partial<Tournoi>>({});
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

    // Chargement des tournois
    const loadTournois = async () => {
        setLoading(true);
        try {
            const res = await fetchItems<Tournoi>('/fetch_tournois', {
                q: search,
                page: currentPage,
                limit,
            });
            setTournois(res.data);
            setTotalPages(res.totalPages);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadTournois();
    }, [search, currentPage, limit]);

    // Fonctions CRUD
    const handleEdit = async (id: number) => {
        try {
            const tournoi = await fetchItem<Tournoi>('/fetch_single_tournoi', id);
            setFormData(tournoi);
            setIsEditing(true);
            setShowModal(true);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleDelete = async (id: number) => {
        const confirmed = await showConfirmationDialog({
            title: 'Voulez-vous vraiment supprimer ce tournoi ?',
            text: 'Cette action est définitive.',
            confirmButtonText: 'Oui, supprimer',
            icon: 'warning',
        });

        if (confirmed) {
            try {
                await removeItem('/delete_tournoi', id);
                loadTournois();
                Swal.fire('Supprimé', 'Le tournoi a été supprimé avec succès.', 'success');
            } catch (error) {
                showError('Erreur' + error);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await saveItem('/insert_tournoi', formData);
            loadTournois();
            handleCloseModal();
            // Swal.fire('Succès', isEditing ? 'Tournoi modifié avec succès' : 'Tournoi créé avec succès', 'success');
        } catch (err: any) {
            showError('Erreur'+ err.message);
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

    const handleDateChange = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="container mt-4">
            <h4 className="mb-3">Gestion des Tournois</h4>

            <LoaderAndError
                loading={loading}
                error={error}
                onClearError={() => setError(null)}
            />

            <Modal
                title={isEditing ? 'Modifier le tournoi' : 'Ajouter un tournoi'}
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
                                placeholder="Nom du tournoi"
                                icon="fas fa-trophy"
                                label="Nom du tournoi"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <TextField
                                name="saison"
                                value={formData.saison || ''}
                                onChange={handleInputChange}
                                placeholder="Ex: 2023-2024"
                                icon="fas fa-calendar"
                                label="Saison"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <TextField
                                type='date'
                                name="date_debut"
                                value={formData.date_debut || ''}
                                onChange={handleInputChange}
                                label="Date de début"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <TextField
                                type='date'
                                name="date_fin"
                                value={formData.date_fin || ''}
                                onChange={handleInputChange}
                                label="Date de fin"
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
                                placeholder="Lieu du tournoi"
                                icon="fas fa-map-marker-alt"
                                label="Lieu"
                            />
                        </div>
                        <div className="col-md-6">


                            <ComboBoxField
                                name="statut"
                                value={formData.statut || ''}
                                onChange={handleInputChange}
                                placeholder="statut"
                                icon="fas fa-filter"
                                label="statut"
                                options={statutOptions}
                                required
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
                            onClick={loadTournois}
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
                            
                            <th>Nom</th>
                            <th>Saison</th>
                            <th>Date début</th>
                            <th>Date fin</th>
                            <th>Lieu</th>
                            <th>Statut</th>
                            <th>Créé le</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tournois.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="text-center">
                                    Aucun tournoi trouvé
                                </td>
                            </tr>
                        ) : (
                            tournois.map((tournoi) => (
                                <tr key={tournoi.id}>
                                  
                                    <td>{truncateText(tournoi.nom, 20)}</td>
                                    <td>{tournoi.saison}</td>
                                    <td>{formatDateFR(tournoi.date_debut)}</td>
                                    <td>{formatDateFR(tournoi.date_fin)}</td>
                                    <td>{truncateText(tournoi.lieu || '-', 15)}</td>
                                    <td>
                                        <span className={`text-white badge ${tournoi.statut === 'planifie' ? 'bg-warning' :
                                            tournoi.statut === 'en_cours' ? 'bg-success' :
                                                'bg-secondary'
                                            }`}>
                                            {tournoi.statut}
                                        </span>
                                    </td>
                                    <td>{formatDateFR(tournoi.created_at ?? '')} {extractTime(tournoi.created_at ?? '')}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning btn-circle btn-sm me-1"
                                            onClick={() => handleEdit(tournoi.id!)}
                                            title="Modifier"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            className="btn btn-danger btn-circle btn-sm"
                                            onClick={() => handleDelete(tournoi.id!)}
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