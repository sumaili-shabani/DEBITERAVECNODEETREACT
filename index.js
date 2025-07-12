const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // 🔑 Charge les variables depuis .env
//sequelize
const sequelize = require('./config/sequelize');

const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const dashboardRoutes = require('./routes/dashboard');
const siteRoutes = require('./routes/SiteRoutes');

const backupRoutes = require('./backup/backupRoutes');
const exportRoutes = require('./backup/exportDatabaseToExcel'); // 👈 chemin correct ici

//suite de blog
const valeurRoute = require('./routes/ValeurRoute');//✅ 
const ChoixRoute = require('./routes/ChoixRoute');//✅ 
const ServiceRoute = require('./routes/ServiceRoute');//✅ 
const GaleryRoute = require('./routes/GaleryRoute');//✅ 
const VideoRoute = require('./routes/VideoRoute');//✅ 
const PartenaireRoute = require('./routes/PartenaireRoute');//✅ 
const TugRoute = require('./routes/TugRoute');//✅ 
const CategoryBlogRoute = require('./routes/CategoryBlogRoute');//✅ 
const BlogRoute = require('./routes/BlogRoute'); //✅ 
const TeamRoute = require('./routes/TeamRoute');//✅
const OffreRoute = require('./routes/OffreRoute');//✅
const RealisationRoute = require('./routes/RealisationRoute');//✅
const SecteurRoute = require('./routes/SecteurRoute');//✅ 
const BasicRoute = require('./routes/BasicRoute');//✅
const CarouselRoute = require('./routes/CarouselRoute');//✅ 
const ProjetRoute = require('./routes/ProjetRoute');//✅ 
const RapportRoute = require('./routes/RapportRoute');//✅
const FaqRoute = require('./routes/FaqRoute');//✅



// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📂 Serve les images statiques
app.use('/images', express.static(path.join(__dirname, 'upload/images')));

// Routes
app.use('/api', userRoutes);
app.use('/api', roleRoutes);
app.use('/api', dashboardRoutes);
app.use('/api', siteRoutes);
app.use('/api/backup', backupRoutes);
app.use('/api', exportRoutes);

//suite de blog
app.use('/api', valeurRoute);
app.use('/api', ChoixRoute);
app.use('/api', ServiceRoute);
app.use('/api', GaleryRoute);
app.use('/api', VideoRoute);
app.use('/api', PartenaireRoute);
app.use('/api', TugRoute);
app.use('/api', CategoryBlogRoute);
app.use('/api', TeamRoute);
app.use('/api', OffreRoute);
app.use('/api', RealisationRoute);
app.use('/api', BlogRoute);
app.use('/api', SecteurRoute);
app.use('/api', BasicRoute);
app.use('/api', ProjetRoute);
app.use('/api', CarouselRoute);
app.use('/api', RapportRoute);
app.use('/api', FaqRoute);

sequelize.authenticate()
    .then(() => console.log('Connexion Sequelize OK'))
    .catch(err => console.error('Erreur Sequelize :', err));

// importation des models
require('./models/User');
require('./models/Role');

sequelize.sync({ alter: true }).then(() => {
    console.log('Base de données synchronisée');
}).catch((err) => {
    console.error("Erreur de synchronisation des tables :", err);
});

// Démarrage serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Serveur lancé sur ${process.env.BASE_URL || `http://localhost:${PORT}`}`);
});
