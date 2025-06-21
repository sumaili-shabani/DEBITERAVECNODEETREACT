import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiURL } from '../../../../api/config';

interface BackupFile {
    name: string;
    date: string;
}

const BackupPage = () => {
    const [backups, setBackups] = useState<BackupFile[]>([]);
    const [loading, setLoading] = useState(false);

    const loadBackups = async () => {
        const res = await axios.get(`${apiURL}/backup/list`);
        setBackups(res.data.backups);
    };

    const generateBackup = async () => {
        setLoading(true);
        await axios.get(`${apiURL}/backup/generate`);
        await loadBackups();
        setLoading(false);
    };

    const downloadBackup = (filename: string) => {
        window.open(`${apiURL}/backup/download/${filename}`, '_blank');
    };

    useEffect(() => {
        loadBackups();
    }, []);

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h3 className="mb-4 text-primary">
                    <i className="fas fa-database me-2"></i> Système de sauvegarde de la base de données
                </h3>

                <button
                    className="btn btn-success mb-4"
                    onClick={generateBackup}
                    disabled={loading}
                >
                    <i className={`fas fa-cloud-upload-alt me-2 ${loading ? 'fa-spin' : ''}`}></i>
                    {loading ? 'Sauvegarde en cours...' : 'Générer une sauvegarde'}
                </button>

                <ul className="list-group">
                    {backups.length > 0 ? (
                        backups.map((file, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <div>
                                    <i className="fas fa-file-archive text-secondary me-2"></i>
                                    <strong>{file.name}</strong>
                                    <span className="badge bg-light text-dark ms-3">
                                        <i className="far fa-clock me-1"></i>
                                        {new Date(file.date).toLocaleString()}
                                    </span>
                                </div>
                                <button
                                    className="btn btn-outline-primary btn-sm"
                                    onClick={() => downloadBackup(file.name)}
                                >
                                    <i className="fas fa-download me-1"></i> Télécharger
                                </button>
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item text-muted text-center">
                            <i className="fas fa-info-circle me-2"></i> Aucune sauvegarde disponible pour le moment.
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default BackupPage;
