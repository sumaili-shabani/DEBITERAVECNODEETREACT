import React, { useEffect, useState } from 'react'
import { fetchListItems } from '../../../../hooks/useCrud';
import { Console } from 'console';
import LoaderAndError from '../../../../components/LoaderAndError';
import { useTranslation } from 'react-i18next';
import UserStatsCharts from '../Statistique/UserStatsCharts';
import PieStatsChart from '../Statistique/PieStatsChart';
import BarStatsChart from '../Statistique/BarStatsChart';
import ColumnStatsChart from '../Statistique/ColumnStatsChart';
import { formatChartData } from '../../../../api/callApi';
import { apiURL } from '../../../../api/config';
import { getToken } from '../../../../api/storage';

interface ChartData {
    category: string[];
    value: number[];
}

interface Statistique {
    nombreUtilisateurM: number | string;
    nombreUtilisateurF: number | string;
    nombreTotalUtilisateur: number | string;
    nombreTotalRole: number | string;
    nombreAdmin: number | string;
    nombreUtilisateur: number | string;
    chartData: ChartData | any;
    chartSexeData: ChartData | any;
}

export default function Dashboard() {

    // pour la langue
    const { t, i18n } = useTranslation();
    // fin langue
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [dashStatistique, setDashStatistique] = useState<Statistique[]>();
    const [chartSexeData, setChartSexeData] = useState<Partial<ChartData>>();
    const [chartRoleData, setChartRoleData] = useState<Partial<ChartData>>();



    const loadDashboardStat = async () => {
        setLoading(true);
        try {
            const res = await fetchListItems('/stats');

            // Mise à jour des statistiques principales
            setDashStatistique(res.data);

            if (res.data && res.data.length > 0) {
                const item = res.data[0]; // Il semble qu’il y a un seul objet
                setChartSexeData(item.chartSexeData);
                setChartRoleData(item.chartData);

                // console.log(JSON.stringify(item.chartData));
            }


        } catch (err) {
            setError("Erreur lors du chargement des statistiques");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };



    const formattedSexeData = formatChartData(chartSexeData);
    const formattedRoleData = formatChartData(chartRoleData);



    useEffect(() => {
        loadDashboardStat();

    }, []);

    const exportExcel = () => {
        const token = getToken(); // récupère le token si protégé
        const url = `${apiURL}/export-excel`;

        // Si la route est protégée, on passe le token en query string (ex: JWT simple)
        const fullUrl = `${url}`;

        // Ouvre l’URL dans une nouvelle fenêtre/onglet pour déclencher le téléchargement
        window.open(fullUrl, '_blank');
    };
    return (
        <div className="d-flex flex-column">
            <div className="content">

                {/* <!-- Page Heading --> */}


                <LoaderAndError
                    loading={loading}
                    error={error}
                    onClearError={() => setError(null)}
                />

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">{t('dashboardPage_title') ?? ''}</h1>
                    <button  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={exportExcel}><i
                        className="fas fa-download fa-sm text-white-50"></i> Exporter les données en excel</button>
                </div>


                {/* <!-- Content Row --> */}


                {dashStatistique?.map((item, index) => (
                    <div className="row" key={index}>
                        {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div className="col-xl-3 col-md-6 mb-4" >
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Nombre d'utilisateur</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{item.nombreTotalUtilisateur}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-users fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Nombre de privilège </div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{item.nombreTotalRole}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fab fa-accusoft fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-info shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Total Homme
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{item.nombreUtilisateurM}</div>
                                                </div>
                                                <div className="col">
                                                    <div className="progress progress-sm mr-2">
                                                        <div className="progress-bar bg-info" >

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-user fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Pending Requests Card Example --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                Total Femme</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{item.nombreUtilisateurF}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fab fa-hive fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}






                {/* Content Row  */}
                <div className="row">

                    {/* <!-- Area Chart --> */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Statiatique par sexe</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="javascript:void(0);" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink" >
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="javascript:void(0);">Action</a>
                                        <a className="dropdown-item" href="javascript:void(0);">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="javascript:void(0);">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-area"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>

                                    <UserStatsCharts data={formattedRoleData} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Pie Chart --> */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Statistique par sexe</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink" >
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-area"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>

                                    <PieStatsChart data={formattedSexeData} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
