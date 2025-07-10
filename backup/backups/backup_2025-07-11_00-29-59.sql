-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: elimu
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `basic_info`
--

DROP TABLE IF EXISTS `basic_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `basic_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `apropos` text DEFAULT NULL,
  `travail` text DEFAULT NULL,
  `don` text DEFAULT NULL,
  `structuregestion` text DEFAULT NULL,
  `financement` text DEFAULT NULL,
  `carriere` text DEFAULT NULL,
  `partenariat` text DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basic_info`
--

LOCK TABLES `basic_info` WRITE;
/*!40000 ALTER TABLE `basic_info` DISABLE KEYS */;
INSERT INTO `basic_info` VALUES (1,'<p><strong>À propos de M-HUB</strong></p><p>M-HUB est un incubateur d’innovation et d’impact qui accompagne les entrepreneurs, porteurs de projets et coopératives pour stimuler la croissance économique locale. Notre mission est de renforcer les compétences, d’encourager l’innovation durable et de créer de nouvelles opportunités d’emplois dans les secteurs stratégiques tels que l’agriculture, le numérique et l’entrepreneuriat.</p><p>À travers ce site, nous partageons nos programmes, nos réalisations, nos publications et nos opportunités pour que chacun puisse rejoindre notre communauté et contribuer à un développement inclusif et responsable.</p>','<blockquote><strong>Ce que nous faisons</strong></blockquote><blockquote>M-HUB conçoit et met en œuvre des programmes d’incubation et d’accompagnement sur mesure pour aider les entrepreneurs à transformer leurs idées en projets viables et impactants.</blockquote><blockquote>Nous proposons :</blockquote><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Des formations pratiques et certifiantes,</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Du mentorat individuel et collectif,</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Un accès facilité aux réseaux de partenaires et investisseurs,</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Des ateliers thématiques et des bootcamps sectoriels,</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Des opportunités de financements pour les projets à fort potentiel.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span> Nous croyons fermement qu’un écosystème dynamique, collaboratif et inclusif est la clé pour faire émerger une nouvelle génération de leaders et d’innovateurs.</li></ol>','<blockquote><strong>Soutenir M-HUB</strong></blockquote><blockquote>Grâce à vos dons et contributions, nous avons la capacité d’élargir nos actions, financer davantage de projets innovants et renforcer notre impact social et économique.</blockquote><blockquote>Chaque don contribue directement à :</blockquote><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Financer des formations pour des jeunes porteurs de projet,</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Équiper des incubateurs communautaires,</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Soutenir les femmes entrepreneures et les coopératives locales,</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Déployer des technologies adaptées pour une agriculture durable.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span> Vous pouvez faire un don sécurisé en ligne, parrainer un projet spécifique ou devenir partenaire de notre fonds d’innovation. Ensemble, investissons dans l’avenir !</li></ol>','<blockquote><strong>Structure de gestion</strong></blockquote><blockquote>M-HUB fonctionne selon un modèle de gouvernance transparent et participatif. Notre structure de gestion comprend :</blockquote><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Un <strong>Conseil d’administration</strong> composé de professionnels du secteur entrepreneurial, agricole et numérique,</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Une <strong>Équipe de coordination</strong> chargée de la gestion quotidienne des programmes et de l’incubation,</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Des <strong>Mentors et Experts sectoriels</strong> pour accompagner nos incubés,</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Un <strong>Comité de suivi et d’évaluation</strong> pour mesurer et optimiser l’impact de chaque action.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span> Ce modèle favorise la réactivité, la transparence et l’efficacité dans la mise en œuvre de toutes nos activités.</li></ol>','<p><strong>Financement</strong></p><p>Nos activités sont financées grâce à une combinaison de sources : subventions de bailleurs nationaux et internationaux, partenariats avec des entreprises privées, contributions de nos membres et revenus générés par certaines prestations de services.</p><p>Nous mettons un point d’honneur à assurer une gestion rigoureuse et responsable de nos ressources, et nous publions régulièrement des rapports financiers et d’impact pour garantir la confiance et la transparence vis-à-vis de nos partenaires et de notre communauté.</p>','<blockquote><strong>Nos secteurs d’intervention</strong></blockquote><blockquote>M-HUB concentre ses efforts sur trois secteurs prioritaires pour stimuler l’innovation et la création d’emplois :</blockquote><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Agricole :</strong> promotion de l’AgriTech, mécanisation adaptée et développement des chaînes de valeur locales.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Numérique :</strong> accompagnement des startups tech, inclusion numérique et développement de solutions innovantes.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Entrepreneuriat :</strong> formation, incubation et financement de projets à fort impact social et économique.</li></ol>','<p><strong>Partenariat</strong></p><p>M-HUB collabore étroitement avec un réseau diversifié de partenaires locaux et internationaux : ONG, entreprises privées, institutions académiques, bailleurs de fonds et investisseurs d’impact.</p><p>Ces partenariats nous permettent de multiplier les opportunités pour nos incubés, de mutualiser les ressources, de partager l’expertise et de développer des solutions innovantes répondant aux besoins réels des communautés.</p><p>Nous sommes toujours ouverts à de nouvelles collaborations pour renforcer notre impact collectif. Rejoignez notre réseau et contribuons ensemble à bâtir un écosystème durable !</p>','2025-07-09 19:57:10','2025-07-09 19:58:22');
/*!40000 ALTER TABLE `basic_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `basics`
--

DROP TABLE IF EXISTS `basics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `basics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basics`
--

LOCK TABLES `basics` WRITE;
/*!40000 ALTER TABLE `basics` DISABLE KEYS */;
INSERT INTO `basics` VALUES (1,'Rejoignez la prochaine génération d’entrepreneurs','Donnez vie à vos idées grâce à notre programme complet d’incubation et de formation. Que vous soyez dans l’agriculture, le numérique ou l’entrepreneuriat, M-HUB vous accompagne pas à pas vers le succès.','1752153037316-agricole3.png','2025-07-10 13:07:58','2025-07-10 13:10:37'),(2,'Des opportunités concrètes pour changer votre avenir','Accédez à un réseau de mentors, de partenaires financiers et de ressources techniques pour transformer vos projets en entreprises viables. Bénéficiez de notre accompagnement sur mesure et faites décoller votre startup !','1752153007608-slider6.png','2025-07-10 13:08:12','2025-07-10 13:10:07'),(3,'Ensemble, créons un impact durable pour nos communautés ','Soutenez ou rejoignez un écosystème inclusif qui favorise la création d’emplois, l’innovation locale et la croissance partagée. Devenez acteur du changement avec M-HUB dès aujourd’hui !','1752152949444-slider1.png','2025-07-10 13:08:29','2025-07-10 13:09:09');
/*!40000 ALTER TABLE `basics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) DEFAULT NULL,
  `sousTitre` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT 'logo.png',
  `idCategory` int(11) NOT NULL DEFAULT 2,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `tug` varchar(255) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idCategory` (`idCategory`),
  CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,'5 startups agricoles incubées à succès','Zoom sur cinq projets agricoles innovants qui ont grandi grâce à M-HUB.','<p>L’incubateur M-HUB est fier d’avoir accompagné de jeunes entrepreneurs agricoles qui transforment aujourd’hui le paysage local. Parmi eux, <em>AgriGreenTech</em> développe des solutions IoT pour l’irrigation intelligente ; <em>BioNourish</em> valorise les déchets organiques en compost de qualité ; <em>AgriBoost</em> soutient la mécanisation pour de petites exploitations ; <em>UrbanHarvest</em> crée des potagers urbains collaboratifs ; enfin, <em>Farm2Market</em> relie producteurs et marchés grâce à une plateforme numérique.</p><p>Ces success stories démontrent le potentiel de l’agritech pour l’emploi, la sécurité alimentaire et la croissance durable.</p>','1752008030990-photo-1651478878062-957e88f3140b.png',1,'2025-07-08 20:18:24','2025-07-08 20:55:00',1,'Formations','5-startups-agricoles-incubees-a-succes'),(2,'Lancer sa startup tech en Afrique : les clés du succès','Conseils pratiques pour transformer une idée numérique en business rentable.','<p>Se lancer dans le numérique en Afrique demande plus qu’une idée brillante. Il faut comprendre les besoins locaux, développer une solution adaptée, tester le marché, constituer une équipe solide et rechercher des partenaires stratégiques. M-HUB accompagne les porteurs de projets tech grâce à ses ateliers, bootcamps et un réseau de mentors expérimentés.</p><p>Évitez l’erreur classique de développer sans feedback utilisateur : le prototypage et les itérations sont vos alliés pour réussir.</p>','1752008040894-premium_photo-1741807165779-17d96ec0d95d.png',2,'2025-07-08 20:25:23','2025-07-08 20:54:59',1,'super article','lancer-sa-startup-tech-en-afrique-les-cles-du-succes'),(3,'Comment lever des fonds efficacement ?',' Les étapes pour convaincre des investisseurs.','<p>La levée de fonds est une étape clé pour tout entrepreneur. M-HUB conseille de commencer par bien structurer son business plan : vision claire, indicateurs financiers réalistes, stratégie de croissance précise. Préparez un pitch convaincant, soignez votre storytelling et ciblez les investisseurs adaptés à votre domaine.</p><p>Enfin, ne négligez pas le réseautage : participez à des événements, pitchez votre projet et soyez prêt à répondre aux questions les plus pointues.</p>','1752008050872-premium_photo-1710593506473-44823462031d.png',3,'2025-07-08 20:26:08','2025-07-08 20:54:57',1,'Formations','comment-lever-des-fonds-efficacement'),(4,'Le parcours de Marie, jeune incubée inspirante','Le témoignage d’une entrepreneure motivante.','<p>Marie, 24 ans, a rejoint M-HUB en 2023 avec une idée simple : valoriser les cultures vivrières locales grâce à la transformation artisanale. Grâce au mentorat et aux formations en gestion, elle a structuré son business, recruté une équipe et conquis ses premiers clients. Aujourd’hui, son unité de production emploie 12 personnes.</p><p>« Sans M-HUB, je n’aurais jamais eu la confiance pour passer de l’idée à l’action. L’accompagnement et le réseau ont changé ma vie », témoigne-t-elle.</p>','1752008063824-istockphoto-1617383361-612x612.png',4,'2025-07-08 20:27:36','2025-07-09 10:37:15',1,'Formations,Événements & Ateliers,Programmes d\'incubation','le-parcours-de-marie-jeune-incubee-inspirante'),(5,'Appel à projets 2025 : Postulez dès maintenant !','Les informations pour soumettre un dossier.','<p>L’appel à projets 2025 de M-HUB est officiellement ouvert ! Vous êtes porteur d’une idée innovante dans l’agriculture, le numérique ou l’entrepreneuriat ? Rejoignez notre prochaine cohorte d’incubés et bénéficiez de formations, mentorat, réseautage et opportunités de financement.</p><p>Déposez votre candidature avant le <strong>15 décembre 2024</strong> sur notre plateforme dédiée. Notre équipe sélectionnera les projets les plus prometteurs pour transformer vos idées en entreprises durables.</p>','1752060954681-premium_photo-1679428900795-b1f5a6dd7d27.avif',5,'2025-07-08 20:28:26','2025-07-09 11:35:54',1,'super article,Formations','appel-a-projets-2025-postulez-des-maintenant'),(7,'L’AgriTech : une révolution silencieuse au cœur de nos communautés rurales','Comment les technologies agricoles transforment les méthodes de production, optimisent les rendements et améliorent durablement la sécurité alimentaire.','<p>Dans un contexte marqué par les défis climatiques et la pression démographique, l’AgriTech s’impose comme une réponse innovante aux enjeux de l’agriculture traditionnelle.</p><p> M-HUB accompagne les coopératives et jeunes agripreneurs dans l’adoption de solutions connectées, comme les capteurs IoT pour l’irrigation intelligente, le suivi en temps réel des sols ou encore l’usage de drones pour optimiser les récoltes.</p><p> Ces technologies permettent non seulement d’accroître les rendements, mais aussi de réduire les pertes post-récolte et de sécuriser les revenus des producteurs.</p><p> À travers nos formations pratiques et nos partenariats avec des startups technologiques, nous voulons démocratiser l’accès à ces outils pour créer une agriculture plus durable, résiliente et compétitive.</p><p> L’avenir de l’agriculture passe par l’innovation : M-HUB s’engage à rendre cette transformation accessible à tous.</p>','1752184935487-photo-1546483875-ad9014c88eba.avif',1,'2025-07-10 22:01:56','2025-07-10 22:02:15',1,'super article,Formations','lagritech-une-revolution-silencieuse-au-cur-de-nos-communautes-rurales');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carousels`
--

DROP TABLE IF EXISTS `carousels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carousels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carousels`
--

LOCK TABLES `carousels` WRITE;
/*!40000 ALTER TABLE `carousels` DISABLE KEYS */;
/*!40000 ALTER TABLE `carousels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Innovation Agricole','2025-07-08 16:24:46','2025-07-09 12:20:21','innovation-agricole'),(2,'Tech & Numérique','2025-07-08 16:24:58','2025-07-09 12:20:18','tech-numerique'),(3,'Entrepreneuriat','2025-07-08 16:25:04','2025-07-09 12:20:16','entrepreneuriat'),(4,'Leadership & Mentorat','2025-07-08 16:25:11','2025-07-09 12:20:13','leadership-mentorat'),(5,'Opportunités','2025-07-08 16:25:17','2025-07-09 12:20:10','opportunites');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `choix`
--

DROP TABLE IF EXISTS `choix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `choix` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `choix`
--

LOCK TABLES `choix` WRITE;
/*!40000 ALTER TABLE `choix` DISABLE KEYS */;
INSERT INTO `choix` VALUES (1,'Accompagnement sur mesure','Chaque projet bénéficie d’un suivi individualisé, de l’idée au lancement, grâce à un programme flexible, adapté à vos besoins spécifiques et piloté par des experts passionnés.','fas fa-user-check','2025-07-10 13:22:29','2025-07-10 13:22:29'),(2,'Réseau de partenaires solide','Profitez d’un réseau local et international de partenaires stratégiques, investisseurs et mentors pour maximiser vos chances de succès et booster la visibilité de votre projet.','fas fa-network-wired','2025-07-10 13:22:55','2025-07-10 13:22:55'),(3,'Expertise multisectorielle','Notre équipe couvre plusieurs secteurs stratégiques : agriculture, numérique, entrepreneuriat, exploitation minière et développement durable pour une approche vraiment holistique.','fas fa-cogs','2025-07-10 13:23:22','2025-07-10 13:23:22'),(4,'Impact local et durable','En nous choisissant, vous rejoignez un incubateur qui place l’impact social et environnemental au cœur de sa mission pour améliorer durablement la vie des communautés locales.','fas fa-hand-holding-heart','2025-07-10 13:23:48','2025-07-10 13:23:48'),(5,'Accès facilité au financement','Nous vous connectons aux opportunités de financement adaptées : subventions, microcrédits, business angels ou fonds d’investissement pour concrétiser vos ambitions.','fas fa-coins','2025-07-10 13:24:12','2025-07-10 13:24:12'),(6,'Espace collaboratif moderne','Bénéficiez d’un environnement de travail stimulant, entièrement équipé, favorisant l’innovation, la créativité et les synergies entre incubés, experts et partenaires.','fas fa-building','2025-07-10 13:24:37','2025-07-10 13:24:37');
/*!40000 ALTER TABLE `choix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `galeries`
--

DROP TABLE IF EXISTS `galeries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `galeries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `galeries`
--

LOCK TABLES `galeries` WRITE;
/*!40000 ALTER TABLE `galeries` DISABLE KEYS */;
INSERT INTO `galeries` VALUES (2,'1752176362855-agricole3.png','2025-07-10 19:39:22','2025-07-10 19:39:22'),(3,'1752176681640-premium_photo-1679428900795-b1f5a6dd7d27.avif','2025-07-10 19:44:41','2025-07-10 19:44:41'),(4,'1752176692335-realisation2.png','2025-07-10 19:44:52','2025-07-10 19:44:52'),(5,'1752176706247-coding2.png','2025-07-10 19:45:06','2025-07-10 19:45:06'),(6,'1752176732211-realisation4.png','2025-07-10 19:45:32','2025-07-10 19:45:32'),(7,'1752176741183-slider5.png','2025-07-10 19:45:41','2025-07-10 19:45:41'),(8,'1752176753157-slider6.png','2025-07-10 19:45:53','2025-07-10 19:45:53'),(9,'1752178037601-team3.png','2025-07-10 20:07:17','2025-07-10 20:07:17');
/*!40000 ALTER TABLE `galeries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offres`
--

DROP TABLE IF EXISTS `offres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dates` varchar(255) DEFAULT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `organisation` varchar(255) DEFAULT NULL,
  `lien` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `fichier` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offres`
--

LOCK TABLES `offres` WRITE;
/*!40000 ALTER TABLE `offres` DISABLE KEYS */;
INSERT INTO `offres` VALUES (1,'2025-09-09','Goma','M-HUB','https://getbootstrap.com/docs/5.0/components/list-group/','Chargé(e) de Formation Agricole','<p>Le/la Chargé(e) de Formation Agricole sera responsable de planifier, concevoir et animer les sessions de formation destinées aux jeunes agriculteurs accompagnés par M-HUB. Il/Elle devra élaborer des outils pédagogiques adaptés, assurer un suivi individuel des participants et collaborer avec les experts techniques pour intégrer les nouvelles technologies agricoles. Une expérience avérée dans la formation pratique, l’agriculture durable et l’accompagnement de jeunes porteurs de projet est fortement souhaitée.</p>','1752087628583-1752066880931-Proposition_Partenariat_M-Hub.pptx','2025-07-09 17:49:34','2025-07-09 19:00:28','chargee-de-formation-agricole'),(2,'2025-08-09','Goma','M-HUB','https://getbootstrap.com/docs/5.0/components/list-group/','Développeur(se) Web Full Stack','<p>Sous la supervision du Responsable IT, le/la Développeur(se) Web Full Stack participera à la conception de nouvelles fonctionnalités pour les outils internes et les plateformes destinées aux startups incubées. Il/Elle sera chargé(e) d’écrire un code propre et scalable, de collaborer avec les équipes de design et de garantir la sécurité et la performance des applications web. Maîtrise des technologies front-end et back-end (React, Node.js, ou équivalent) exigée. Une sensibilité pour l’innovation sociale et le secteur entrepreneurial est un atout.</p>','1752087717034-SerdiPay-Presentation-OffreMarchande.pdf','2025-07-09 19:01:42','2025-07-09 19:01:57','developpeurse-web-full-stack');
/*!40000 ALTER TABLE `offres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partenaires`
--

DROP TABLE IF EXISTS `partenaires`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partenaires` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partenaires`
--

LOCK TABLES `partenaires` WRITE;
/*!40000 ALTER TABLE `partenaires` DISABLE KEYS */;
INSERT INTO `partenaires` VALUES (1,'Casalind news','https://www.casalind-news.com','1752169631800-casalind news.png','2025-07-10 17:47:03','2025-07-10 17:47:11'),(2,'dream of drc','https://dreamofdrc.com','1752172100714-dream of drc.png','2025-07-10 18:22:03','2025-07-10 18:28:20'),(3,'Smico','https://www.smico.net','1752172002464-smico.jpg','2025-07-10 18:22:56','2025-07-10 18:26:42'),(5,'Yeba','https://yeba.co/fr','1752171997115-yeba.jpg','2025-07-10 18:26:29','2025-07-10 18:26:37'),(6,'Pnud','https://www.undp.org/fr/drcongo','1752172091347-pnud.png','2025-07-10 18:27:51','2025-07-10 18:28:11');
/*!40000 ALTER TABLE `partenaires` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `expiresAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projets`
--

DROP TABLE IF EXISTS `projets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idSecteur` int(11) DEFAULT NULL,
  `annee` varchar(255) DEFAULT NULL,
  `budget` varchar(255) DEFAULT NULL,
  `organisation` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `soustitre` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idSecteur` (`idSecteur`),
  CONSTRAINT `projets_ibfk_1` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projets`
--

LOCK TABLES `projets` WRITE;
/*!40000 ALTER TABLE `projets` DISABLE KEYS */;
INSERT INTO `projets` VALUES (1,3,'2025','100000','M-HUB','Programme de formation en exploitation minière responsable','Renforcer les compétences locales pour une extraction minière plus respectueuse de l’environnement, plus sécurisée et génératrice d’emplois durables pour les communautés riveraines.','<p>M-HUB a développé un programme spécifique visant à former les jeunes et les communautés locales aux techniques modernes d’exploitation minière artisanale et semi-industrielle. L’objectif est de réduire l’impact environnemental, améliorer les conditions de travail et valoriser les ressources extraites de manière éthique et durable. Grâce à ce projet, les bénéficiaires acquièrent des compétences pratiques, des connaissances en gestion des déchets miniers et un accompagnement pour développer des coopératives minières respectueuses des normes environnementales.</p>','1752080512368-projet1.png','2025-07-09 16:43:11','2025-07-09 17:01:52','programme-de-formation-en-exploitation-miniere-responsable'),(2,3,'2025','50000','M-HUB','Coopératives minières innovantes','Accompagner la structuration et la formalisation des petites exploitations minières pour garantir transparence, traçabilité et meilleure redistribution des revenus.','<p>À travers ce projet pilote, M-HUB soutient la création et la structuration de coopératives minières locales. Nous offrons un accompagnement administratif, technique et juridique pour permettre aux exploitants artisanaux de travailler légalement, en toute sécurité, tout en respectant les exigences de traçabilité des minerais. Cette approche contribue à stabiliser l’économie locale, limiter l’exploitation illégale et favoriser la négociation équitable des prix sur le marché régional et international.</p>','1752080501993-projet2.png','2025-07-09 16:50:37','2025-07-09 17:01:41','cooperatives-minieres-innovantes'),(3,1,'2025','50000','M-HUB','Ateliers de coding pour jeunes développeurs','Développer les compétences techniques et l’employabilité des jeunes passionnés de technologies grâce à des sessions pratiques de programmation et de prototypage.','<p>M-HUB propose toute l’année des ateliers pratiques pour initier ou perfectionner les jeunes aux langages de programmation les plus demandés (Python, JavaScript, PHP). Ces sessions favorisent le développement de prototypes innovants, de solutions mobiles ou web adaptées aux besoins locaux. Les bénéficiaires sont encadrés par des experts du secteur et peuvent présenter leurs projets lors de nos hackathons, facilitant ainsi leur insertion professionnelle ou la création de startups technologiques viables.</p>','1752080491902-coding.png','2025-07-09 16:51:38','2025-07-09 17:01:31','ateliers-de-coding-pour-jeunes-developpeurs'),(4,1,'2025','40000','M-HUB','Incubation de startups technologiques locales','Accompagner les porteurs d’idées numériques depuis la conception du prototype jusqu’à la mise sur le marché, tout en facilitant l’accès aux financements et aux partenaires.','<p>Ce projet phare de M-HUB vise à soutenir les jeunes entrepreneurs qui développent des applications mobiles, des plateformes SaaS ou des solutions digitales à impact. Les porteurs de projets reçoivent un accompagnement personnalisé : mentorat technique, formations en modèle économique, mise en réseau avec des investisseurs et opportunités de tests grandeur nature. Cette approche renforce l’écosystème numérique local et contribue à créer des emplois de qualité dans le secteur de la tech.</p>','1752080482211-coding2.png','2025-07-09 16:55:10','2025-07-09 17:01:22','incubation-de-startups-technologiques-locales'),(5,2,'2025','100000','M-HUB','Innovation AgriTech et irrigation intelligente','Déployer des solutions technologiques pour optimiser les rendements agricoles tout en préservant les ressources naturelles et en améliorant la sécurité alimentaire.','<p>M-HUB soutient la mise en place de projets AgriTech qui intègrent des capteurs IoT pour gérer l’irrigation de manière plus efficace. Grâce à ces technologies, les exploitants agricoles peuvent surveiller l’humidité du sol en temps réel, réduire les gaspillages d’eau et augmenter leur productivité. En parallèle, les formations dispensées aident les agriculteurs à maîtriser ces outils et à adopter de nouvelles pratiques durables adaptées aux changements climatiques.</p>','1752080389500-agricole3.png','2025-07-09 16:55:52','2025-07-09 16:59:49','innovation-agritech-et-irrigation-intelligente'),(6,2,'2025','100000','M-HUB','Transformation et valeur ajoutée des produits locaux','Former les agriculteurs et les coopératives à transformer et commercialiser leurs récoltes pour générer plus de revenus et dynamiser l’économie rurale.','<p>M-HUB met en place des ateliers de transformation agroalimentaire pour les producteurs locaux. L’objectif est de limiter les pertes post-récolte et d’augmenter la valeur des produits grâce à des techniques modernes de conditionnement, de conservation et de commercialisation. Ce projet contribue à créer de nouveaux débouchés commerciaux, renforcer la sécurité alimentaire et développer de petites industries agroalimentaires viables à l’échelle locale.</p>','1752080380387-agricole2.png','2025-07-09 16:56:22','2025-07-09 16:59:40','transformation-et-valeur-ajoutee-des-produits-locaux'),(7,2,'2025','7000','M-HUB','Formation des jeunes aux métiers agricoles modernes','Sensibiliser et former la jeunesse rurale aux techniques agricoles innovantes pour promouvoir un secteur plus attractif, productif et respectueux de l’environnement.','<p>Pour briser le mythe d’une agriculture archaïque, M-HUB forme la nouvelle génération aux méthodes modernes de culture, d’élevage et de gestion durable des exploitations. Des modules sur l’agriculture biologique, la mécanisation adaptée et la gestion financière permettent aux jeunes de se projeter dans un avenir agricole rentable. En intégrant de nouvelles technologies, cette initiative revitalise l’image du métier et favorise la relève paysanne indispensable pour nourrir nos communautés.</p>','1752080374146-agricole1.png','2025-07-09 16:56:57','2025-07-09 16:59:34','formation-des-jeunes-aux-metiers-agricoles-modernes');
/*!40000 ALTER TABLE `projets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rapports`
--

DROP TABLE IF EXISTS `rapports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rapports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `annee` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `sousTitre` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rapports`
--

LOCK TABLES `rapports` WRITE;
/*!40000 ALTER TABLE `rapports` DISABLE KEYS */;
INSERT INTO `rapports` VALUES (1,'2024','Rapport Annuel 2024','Bilan détaillé de toutes nos actions réalisées durant l’année 2024, illustrant notre engagement à transformer l’entrepreneuriat local, booster l’emploi des jeunes et maximiser l’impact positif pour nos communautés.','<blockquote>Le <strong>Rapport Annuel 2024</strong> revient sur une année marquée par la résilience, l’innovation et la croissance inclusive. Vous y découvrirez les résultats chiffrés de nos formations, le nombre de startups accompagnées, les success stories de nos incubés, ainsi qu’une analyse de l’impact social et économique généré grâce à nos programmes d’incubation agricole, numérique et entrepreneurial. Ce document témoigne de notre engagement continu à bâtir un écosystème entrepreneurial fort, durable et centré sur l’humain.</blockquote><p><br></p>','1752066932391-github-recovery-codes.txt','2025-07-09 13:08:33','2025-07-09 13:15:32','rapport-annuel-2024'),(2,'2024','Étude d’impact sur l’entrepreneuriat agricole','Évaluation approfondie de l’efficacité de nos programmes AgriTech pour démontrer comment nous contribuons à l’innovation, la modernisation agricole et la résilience alimentaire en milieu rural et périurbain.','<p>Cette étude met en lumière l’impact direct et indirect de notre accompagnement auprès des agripreneurs locaux. Elle analyse les parcours des bénéficiaires, mesure l’évolution de leurs rendements agricoles, la création d’emplois dans les zones rurales et la valorisation de pratiques agricoles durables. L’étude d’impact propose aussi des recommandations stratégiques pour renforcer l’agriculture intelligente, la mécanisation adaptée et l’accès aux marchés. Un outil précieux pour nos partenaires désireux de soutenir le développement agricole inclusif.</p>','1752066918890-Proposition_Partenariat_M-Hub.pptx','2025-07-09 13:09:06','2025-07-09 13:15:18','etude-dimpact-sur-lentrepreneuriat-agricole'),(3,'2024','Analyse de l’écosystème numérique local','Étude stratégique sur les obstacles structurels, les besoins en infrastructures numériques et les opportunités concrètes pour faire émerger des startups technologiques solides et durables dans notre région.','<p>Dans ce rapport, nous dévoilons un diagnostic complet de l’écosystème numérique local et régional. Les données présentées mettent en évidence les principaux freins rencontrés par nos incubés, notamment l’accès limité au financement, la fracture numérique et le manque de compétences spécialisées. Nous y proposons des pistes d’action concrètes pour améliorer l’environnement entrepreneurial numérique : renforcement des réseaux de mentors, accès à la connectivité haut débit, création de hubs techniques et partenariats avec des acteurs technologiques internationaux.</p>','1752066904463-taxes_mensuelles.xlsx','2025-07-09 13:09:30','2025-07-09 13:15:04','analyse-de-lecosysteme-numerique-local'),(4,'2024','Bilan Genre & Inclusion 2024','État des lieux complet sur nos actions, résultats et perspectives en matière de genre, équité et inclusion, mettant en avant les réussites, les témoignages et les engagements à long terme de M-HUB.','<p>Le Bilan Genre &amp; Inclusion 2024 dresse un panorama des initiatives concrètes menées pour promouvoir la participation active des femmes, des jeunes filles et des groupes sous-représentés dans l’entrepreneuriat. Le rapport met en avant des indicateurs précis sur la proportion de femmes incubées, les formations spécialisées, le mentorat au féminin et les mesures prises pour lever les freins structurels. Vous y trouverez aussi les témoignages inspirants de bénéficiaires, ainsi que notre feuille de route pour renforcer encore plus la parité et l’égalité des chances au sein de notre communauté.</p>','1752066898473-SerdiPay-Presentation-OffreMarchande.pdf','2025-07-09 13:09:57','2025-07-09 13:14:58','bilan-genre-inclusion-2024'),(5,'2025','Rapport Financier & Partenariats 2024','Document transparent détaillant la gestion des ressources financières, l’affectation des budgets par programme et la valeur créée grâce aux collaborations avec nos investisseurs, bailleurs et mécènes.','<p>Ce rapport présente de manière claire et structurée la santé financière de M-HUB sur l’année écoulée. Il détaille les sources de financement mobilisées, leur répartition entre les différents axes stratégiques (formation, incubation, recherche), ainsi que les impacts directs observés. La section partenariats met en lumière nos principales collaborations, les retombées concrètes pour les bénéficiaires et les perspectives de croissance à travers de nouveaux accords stratégiques. Un document essentiel pour tous nos partenaires actuels et futurs qui souhaitent évaluer notre efficacité et notre sérieux.</p>','1752066880931-Proposition_Partenariat_M-Hub.pptx','2025-07-09 13:10:21','2025-07-09 13:14:40','rapport-financier-partenariats-2024');
/*!40000 ALTER TABLE `rapports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `realisations`
--

DROP TABLE IF EXISTS `realisations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `realisations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `annee` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `sousTitre` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `realisations`
--

LOCK TABLES `realisations` WRITE;
/*!40000 ALTER TABLE `realisations` DISABLE KEYS */;
INSERT INTO `realisations` VALUES (1,'2024',' 50 jeunes agripreneurs formés en 2024','Accompagner la relève agricole','<p>En 2024, M-HUB a formé et accompagné plus de 50 jeunes agriculteurs vers une exploitation moderne, durable et rentable. Grâce à des modules pratiques et du mentorat, ces jeunes sont aujourd’hui capables de créer de l’emploi local et de contribuer à la sécurité alimentaire.</p>','1752064260846-realisation.png','2025-07-09 12:24:03','2025-07-09 12:31:00','50-jeunes-agripreneurs-formes-en-2024'),(2,'2024','Lancement de 10 startups numériques locales','Du prototype à la startup','<p>Dix projets numériques incubés au sein de M-HUB ont vu le jour grâce à notre programme d’incubation intensif : développement web, applications mobiles, plateformes e-commerce… Nous sommes fiers de soutenir ces jeunes talents qui boostent l’économie digitale africaine.</p>','1752064268509-realisation2.png','2025-07-09 12:25:33','2025-07-09 12:31:08','lancement-de-10-startups-numeriques-locales'),(3,'2024','Création de 120 emplois directs','L’impact concret sur le terrain','<p>En favorisant l’entrepreneuriat, M-HUB contribue directement à la création d’emplois pour les jeunes et les femmes. Nos incubés ont généré plus de 120 emplois stables et locaux, renforçant l’autonomie économique de toute une communauté.</p>','1752064287078-realisation3.png','2025-07-09 12:25:59','2025-07-09 12:31:27','creation-de-120-emplois-directs'),(4,'2025','Un réseau de 30 mentors engagés','Experts au service de l’impact','<p>Notre réseau de 30 mentors, issus de divers secteurs, accompagne chaque porteur de projet à chaque étape de son parcours. Leur expertise et leurs conseils personnalisés boostent les chances de réussite et d’expansion.</p>','1752064293022-istockphoto-1366938884-2048x2048.jpg','2025-07-09 12:26:27','2025-07-09 12:31:33','un-reseau-de-30-mentors-engages'),(5,'2025','Un partenariat stratégique avec 5 investisseurs clés','Financer l’innovation durable','<p><strong>M-HUB</strong> a établi des collaborations solides avec des investisseurs et bailleurs de fonds locaux et internationaux. Ces partenariats permettent à nos entrepreneurs d’accéder plus facilement aux financements nécessaires pour développer et pérenniser leurs entreprises.</p>','1752064301304-realisation4.png','2025-07-09 12:27:01','2025-07-09 12:31:41','un-partenariat-strategique-avec-5-investisseurs-cles');
/*!40000 ALTER TABLE `realisations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','2025-05-10 19:54:53','2025-05-10 19:54:53'),(2,'Utilisateur','2025-05-10 19:54:53','2025-05-10 19:54:53'),(3,'Formateur','2025-05-10 19:54:53','2025-06-20 15:32:33');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secteurs`
--

DROP TABLE IF EXISTS `secteurs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `secteurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomSecteur` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secteurs`
--

LOCK TABLES `secteurs` WRITE;
/*!40000 ALTER TABLE `secteurs` DISABLE KEYS */;
INSERT INTO `secteurs` VALUES (1,'Numérique','2025-07-09 14:55:06','2025-07-09 14:55:06'),(2,'Agricole','2025-07-09 14:55:26','2025-07-09 14:55:26'),(3,'Mine ','2025-07-09 14:55:37','2025-07-09 14:55:37');
/*!40000 ALTER TABLE `secteurs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20250430214907-create-roles.js'),('20250430215005-create-users.js'),('20250507153252-create-sites.js'),('20250509195255-create-password_resets.js'),('20250628115434-create-valeurs.js'),('20250628123535-create-choix.js'),('20250628123826-create-services.js'),('20250628124146-create-galeries.js'),('20250628124445-create-videos.js'),('20250628124921-create-partenaires.js'),('20250628125337-create-realisations.js'),('20250628125907-create-rapports.js'),('20250628130203-create-tugs.js'),('20250628130553-create-categories.js'),('20250628131211-create-blogs.js'),('20250628132026-create-teams.js'),('20250628133045-create-offres.js'),('20250628134919-create-secteurs.js'),('20250628135111-create-projets.js'),('20250628141750-create-carousels.js'),('20250628142840-create-basics.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,' Incubation & Accélératio','Accompagnement sur mesure pour transformer les idées innovantes en entreprises viables et impactantes grâce à un suivi personnalisé, du prototypage au lancement sur le marché.','<p>Notre service d’incubation offre un parcours complet aux porteurs de projet : diagnostic personnalisé, mentorat, coaching stratégique et accès à un réseau de partenaires et investisseurs. Nous proposons également des programmes d’accélération intensifs pour les startups matures souhaitant scaler rapidement et conquérir de nouveaux marchés. Chaque entrepreneur bénéficie d’un espace de coworking moderne et d’outils pratiques pour concrétiser sa vision dans un environnement collaboratif stimulant.</p>','fas fa-rocket','2025-07-10 12:41:22','2025-07-10 12:41:22','accompagnement-sur-mesure-pour-transformer-les-idees-innovantes-en-entreprises-viables-et-impactantes-grace-a-un-suivi-personnalise-du-prototypage-au-lancement-sur-le-marche'),(2,'Formation & Renforcement de capacités','Formations pratiques et certifiantes pour développer les compétences techniques et entrepreneuriales des jeunes, femmes et porteurs de projets dans divers secteurs stratégiques.','<p>Nous organisons des formations modulaires adaptées aux besoins des incubés et des communautés locales : leadership entrepreneurial, gestion financière, marketing digital, agriculture durable, technologies numériques et bien plus encore. Ces formations sont animées par des experts reconnus et visent à rendre chaque participant autonome, confiant et prêt à développer une activité génératrice de revenus. Nous mettons l’accent sur l’apprentissage par la pratique, les échanges de bonnes pratiques et la mise en réseau.</p>','fas fa-graduation-cap','2025-07-10 12:42:06','2025-07-10 12:42:06','formations-pratiques-et-certifiantes-pour-developper-les-competences-techniques-et-entrepreneuriales-des-jeunes-femmes-et-porteurs-de-projets-dans-divers-secteurs-strategiques'),(3,'Accès aux financements & opportunités','Faciliter la mise en relation avec des investisseurs, bailleurs de fonds et partenaires pour booster la levée de fonds et sécuriser la croissance des projets incubés.','<p>Grâce à notre réseau de partenaires financiers et investisseurs d’impact, nous connectons les entrepreneurs aux sources de financement adaptées : subventions, microcrédits, capital-risque ou levées de fonds participatives. M-HUB accompagne chaque incubé dans la préparation de son business plan, de son pitch deck et dans la négociation des conditions de financement. Ce service clé contribue à pérenniser les projets et à stimuler une croissance durable pour les entreprises naissantes.</p>','fas fa-hand-holding-usd','2025-07-10 12:42:41','2025-07-10 12:42:41','faciliter-la-mise-en-relation-avec-des-investisseurs-bailleurs-de-fonds-et-partenaires-pour-booster-la-levee-de-fonds-et-securiser-la-croissance-des-projets-incubes'),(4,' Coaching & Mentorat personnalisé','Accès à un réseau de mentors et coachs expérimentés pour guider les entrepreneurs à chaque étape de leur parcours et maximiser leurs chances de réussite.','<p>M-HUB met à disposition un large réseau de professionnels issus de divers secteurs : agriculture, numérique, gestion d’entreprise, marketing, juridique, etc. Chaque incubé bénéficie d’un accompagnement personnalisé et de séances de coaching individuelles ou collectives. Les mentors partagent leurs expériences, conseillent sur les défis quotidiens et apportent un regard stratégique pour affiner les modèles économiques et accélérer la prise de décision. Ce service fait toute la différence pour transformer des idées en succès concrets.</p>','fas fa-user-tie','2025-07-10 12:43:28','2025-07-10 12:43:28','acces-a-un-reseau-de-mentors-et-coachs-experimentes-pour-guider-les-entrepreneurs-a-chaque-etape-de-leur-parcours-et-maximiser-leurs-chances-de-reussite'),(5,'Espace de travail collaboratif','Un environnement moderne, équipé et sécurisé, favorisant l’innovation, le réseautage et la productivité pour les porteurs de projet et leurs équipes.','<p>Notre espace de coworking offre aux incubés des bureaux partagés, des salles de réunion, une connexion Internet haut débit, ainsi que des zones de détente pour encourager la créativité et l’échange d’idées. Des événements de networking, ateliers collaboratifs et conférences y sont régulièrement organisés pour renforcer les synergies entre entrepreneurs, mentors et partenaires. Cet espace dynamique crée un véritable esprit de communauté propice au développement de solutions innovantes.</p>','fas fa-people-arrows','2025-07-10 12:44:10','2025-07-10 12:44:10','un-environnement-moderne-equipe-et-securise-favorisant-linnovation-le-reseautage-et-la-productivite-pour-les-porteurs-de-projet-et-leurs-equipes'),(6,'Recherche & Développement','Stimuler la recherche appliquée et le développement de solutions innovantes adaptées aux besoins locaux, notamment dans l’AgriTech et les technologies numériques.','<p>M-HUB soutient les porteurs de projet qui souhaitent intégrer la R&amp;D dans leur stratégie de croissance. Nous favorisons l’émergence de prototypes, la réalisation d’études de faisabilité, les tests sur le terrain et le transfert de technologies. Grâce à des partenariats avec des universités et des centres de recherche, nous mettons à disposition des ressources scientifiques et techniques pour transformer les idées innovantes en solutions concrètes, durables et commercialisables.</p>','fas fa-flask','2025-07-10 12:44:46','2025-07-10 12:44:46','stimuler-la-recherche-appliquee-et-le-developpement-de-solutions-innovantes-adaptees-aux-besoins-locaux-notamment-dans-lagritech-et-les-technologies-numeriques'),(7,'Mise en réseau & Partenariats stratégiques','Connecter les entrepreneurs à un écosystème collaboratif de partenaires locaux et internationaux pour favoriser les synergies et le développement commun.','<p>M-HUB agit comme un catalyseur de collaborations entre entrepreneurs, entreprises privées, ONG, bailleurs de fonds et institutions publiques. Nous facilitons l’accès aux événements de réseautage, aux missions d’immersion, aux foires et salons sectoriels pour élargir la visibilité des projets incubés. En favorisant la mutualisation des ressources et le partage d’expertise, nous créons de nouvelles opportunités de croissance, d’exportation et de levée de fonds pour les startups et coopératives accompagnées.</p>','fas fa-network-wired','2025-07-10 12:45:22','2025-07-10 12:45:22','connecter-les-entrepreneurs-a-un-ecosysteme-collaboratif-de-partenaires-locaux-et-internationaux-pour-favoriser-les-synergies-et-le-developpement-commun');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sites`
--

DROP TABLE IF EXISTS `sites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(250) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `adresse` varchar(250) DEFAULT NULL,
  `tel1` varchar(250) DEFAULT NULL,
  `tel2` varchar(250) DEFAULT NULL,
  `tel3` varchar(250) DEFAULT NULL,
  `token` varchar(250) DEFAULT NULL,
  `about` varchar(250) DEFAULT NULL,
  `logo` varchar(250) DEFAULT 'logo.png',
  `facebook` varchar(500) DEFAULT NULL,
  `linkedin` varchar(500) DEFAULT NULL,
  `twitter` varchar(500) DEFAULT NULL,
  `youtube` varchar(500) DEFAULT NULL,
  `whatsapp` varchar(250) DEFAULT NULL,
  `mission` varchar(250) DEFAULT NULL,
  `objectif` varchar(250) DEFAULT NULL,
  `politique` text DEFAULT NULL,
  `condition` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sites`
--

LOCK TABLES `sites` WRITE;
/*!40000 ALTER TABLE `sites` DISABLE KEYS */;
INSERT INTO `sites` VALUES (3,'M-hub','<p><strong>M-HUB</strong> est un incubateur panafricain dédié à la formation et à l\'accompagnement de jeunes entrepreneurs dans les secteurs stratégiques de l\'agriculture, du numérique et de l\'entrepreneuriat.</p>','contact@elimu.com','Goma quartier katindo avenue de la frontière n°54','0817883541','0997345774','0843301387',NULL,'<p>Inculer l\'avenir, former l\'impact. M-HUB est un incubateur panafricain dédié à la formation et à l\'accompagnement des entrepreneurs.</p>','1750196914826-logom-hub.png','https://web.facebook.com/Dream-of-drc-114107447382924','https://www.linkedin.com/in/dream-of-drc-startup-872765217/','https://twitter.com/drc_dream',NULL,NULL,'<p>Chez <strong>M-HUB</strong>, notre mission est d’accélérer la transformation des talents et des idées en projets à fort impact. Nous accompagnons les jeunes, les porteurs de projets et les entrepreneurs dans les secteurs <strong>agricoles</strong>','<p>Offrir un <strong>cadre de formation professionnel</strong> de qualité dans les métiers d’avenir.</p><p>Stimuler la <strong>création d’emplois durables</strong> et de startups locales.</p><p>Accompagner les jeunes dans la <strong>maturation, l\'inc','<p>Chez <strong>M-HUB</strong>, la protection de vos données est une priorité. Nous nous engageons à :</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Ne collecter que les données strictement nécessaires (nom, e-mail, domaine d’activité, etc.).</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Garantir que ces données ne soient <strong>ni vendues ni partagées</strong> sans votre consentement.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Stocker les données de manière sécurisée sur des serveurs protégés.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Permettre à chaque utilisateur de <strong>modifier ou supprimer ses informations personnelles</strong> sur demande.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Utiliser les données pour des finalités précises : gestion de comptes, statistiques anonymes, envois d’informations liées à nos services.</li></ol><p>En accédant au site ou en vous inscrivant à une formation ou un programme, vous acceptez notre politique de confidentialité.</p>','<h3>📜 <strong>Conditions générales d\'utilisation du site (CGU)</strong></h3><ol><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Accès au site</strong></li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span> L’accès à notre site est ouvert à tout public. Certains services (inscription à des formations, espace incubé) nécessitent une création de compte.</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Utilisation des contenus</strong></li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span> Les contenus du site (textes, images, vidéos, logos) sont protégés par le droit d’auteur. Toute reproduction sans autorisation est interdite.</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Responsabilité</strong></li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span> M-HUB ne peut être tenu responsable des interruptions de service dues à des mises à jour, à des défaillances techniques ou à des cas de force majeure.</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Comportement de l’utilisateur</strong></li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span> L’utilisateur s’engage à ne pas :</li><li data-list=\"bullet\" class=\"ql-indent-1\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Utiliser le site à des fins frauduleuses ou illégales ;</li><li data-list=\"bullet\" class=\"ql-indent-1\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Tenter d’accéder aux espaces sécurisés sans autorisation ;</li><li data-list=\"bullet\" class=\"ql-indent-1\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Diffuser des contenus offensants ou malveillants via les formulaires ou plateformes communautaires.</li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Modifications</strong></li><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span> Les présentes conditions peuvent être modifiées à tout moment. Les utilisateurs seront notifiés des mises à jour importantes.</li></ol>','2025-06-17 19:49:43','2025-06-20 13:06:08');
/*!40000 ALTER TABLE `sites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `fonction` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'Roger Sumaili','Coach Chargé des affaires numériques','sumailiroger681@gmail.com','+243996618763','https://web.facebook.com/Dream-of-drc-114107447382924','https://twitter.com/drc_dream','https://www.linkedin.com/in/dream-of-drc-startup-872765217/','1752070889720-Team2.png','2025-07-09 14:10:07','2025-07-09 14:21:29'),(2,'Miradi Drey brenda','Hub manager','drey@gmail.com','+243976618769','https://web.facebook.com/Dream-of-drc-114107447382924','https://twitter.com/drc_dream','https://www.linkedin.com/in/dream-of-drc-startup-872765217/','1752070903019-team3.png','2025-07-09 14:11:18','2025-07-09 14:23:56'),(3,'Benit Bahati smith','Hub manager','benitbahati@gmail.com','+243996618763','https://web.facebook.com/Dream-of-drc-114107447382924','https://twitter.com/drc_dream','https://www.linkedin.com/in/dream-of-drc-startup-872765217/','1752071087918-team1.png','2025-07-09 14:12:19','2025-07-09 14:24:59');
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tugs`
--

DROP TABLE IF EXISTS `tugs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tugs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tugs`
--

LOCK TABLES `tugs` WRITE;
/*!40000 ALTER TABLE `tugs` DISABLE KEYS */;
INSERT INTO `tugs` VALUES (2,'super article','2025-07-08 16:13:03','2025-07-08 16:13:03'),(3,'Formations','2025-07-08 16:13:31','2025-07-08 16:17:46'),(5,'Programmes d\'incubation','2025-07-08 16:18:12','2025-07-08 16:18:12'),(6,'Événements & Ateliers','2025-07-08 16:18:19','2025-07-08 16:18:19'),(7,'Success Stories','2025-07-08 16:18:26','2025-07-08 16:18:26'),(8,'Partenaires & Investisseurs','2025-07-08 16:18:32','2025-07-08 16:18:32');
/*!40000 ALTER TABLE `tugs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT 'avatar.png',
  `passwords` varchar(255) DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `idRole` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idRole` (`idRole`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Roger Sumaili ','admin@demo.com','+243817883541','1750434625302-testimonial-1.jpg','$2b$10$6kPg.7BZX7Ck.5X5nyGXKO7rPZn76in/6/yUuxIS36m5bqu6n8sgK','M',1,'2025-05-10 19:55:12','2025-06-21 11:33:44'),(2,'Alice Admin','alice@demo.com','0123456789','avatar.png','$2b$10$h7rB3LCiJ/EmAppcto8AxOJYKrofxf6GcTra5HW04Br4p9WrUw0wu','F',1,'2025-05-10 19:55:12','2025-06-20 16:52:02'),(3,'Bob Utilisateur','bob@demo.com','0987654321','avatar.png','$2b$10$HkLYCs2NYwrWatRD55qEhOd/1jVqL93Dgb9kiB20iY2MGv02cryMq','M',2,'2025-05-10 19:55:12','2025-05-10 19:55:12'),(4,'Julie poma','julieboma@demo.com','0987654321','avatar.png','$2b$10$HkLYCs2NYwrWatRD55qEhOd/1jVqL93Dgb9kiB20iY2MGv02cryMq','F',2,'2025-05-10 19:55:12','2025-05-10 19:55:12'),(5,'Julienne tumba','julienne@gmail.com','+243996618763','1750434541903-team-member-2.jpg','$2b$10$8rNbDZVreX2VrrLaxOJoMebFAVu4S655eOPNOnFdhGRVWuiuYzaNu','F',3,'2025-06-20 14:05:34','2025-06-20 16:50:29'),(6,'Djimi vionde tshoy','djimy@gmail.com','+243996618763','avatar.png','$2b$10$Esvmo6dWczIGhNG1m4JgTelR52ImwWfPqPBd2KStQViEBotkHHzM2','M',2,'2025-06-20 15:51:29','2025-06-20 15:51:29');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `valeurs`
--

DROP TABLE IF EXISTS `valeurs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `valeurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valeurs`
--

LOCK TABLES `valeurs` WRITE;
/*!40000 ALTER TABLE `valeurs` DISABLE KEYS */;
INSERT INTO `valeurs` VALUES (1,'Innovation','Nous plaçons l’innovation au cœur de toutes nos actions pour développer des solutions créatives et adaptées aux défis locaux, stimuler l’esprit entrepreneurial et moderniser les secteurs stratégiques.','fas fa-lightbulb','2025-07-10 13:12:40','2025-07-10 13:12:40'),(2,'Inclusion','Nous croyons fermement en l’égalité des chances pour tous, en favorisant l’inclusion des jeunes, des femmes et des communautés marginalisées afin de bâtir un écosystème entrepreneurial plus équitable.','fas fa-users','2025-07-10 13:13:11','2025-07-10 13:13:11'),(3,'Impact Durable','Nous nous engageons à générer un impact social, économique et environnemental positif, mesurable et durable pour améliorer la qualité de vie de nos communautés et préserver les ressources.','fas fa-leaf','2025-07-10 13:13:36','2025-07-10 13:13:36'),(4,' Collaboration','La collaboration est un pilier de notre réussite. Nous créons des synergies entre incubés, partenaires, investisseurs et mentors pour accélérer la réussite collective et renforcer notre réseau.','fas fa-handshake','2025-07-10 13:15:25','2025-07-10 13:15:25'),(5,'Transparence','Nous cultivons la confiance grâce à une gestion transparente de nos ressources, à la diffusion régulière de rapports clairs et à un dialogue ouvert avec nos partenaires, bénéficiaires et donateurs.','fas fa-balance-scale','2025-07-10 13:15:56','2025-07-10 13:15:56'),(6,'Excellence','Nous visons l’excellence dans la conception et la mise en œuvre de nos programmes afin de garantir un accompagnement de qualité et des résultats concrets pour chaque entrepreneur accompagné.','fas fa-star','2025-07-10 13:16:17','2025-07-10 13:16:17');
/*!40000 ALTER TABLE `valeurs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `videos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `urlYoutube` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
INSERT INTO `videos` VALUES (1,'Bioman Courageux (Clip officiel )','https://www.youtube.com/embed/wJcz3iZAsmU?si=sEQ3JjuA6YySvKI_','BIOMAN - COURAGEUX \n\nProduction: @agencektk\n📌Chanteur/Auteur/Compositeur: Bioman\nManager: ON AIR By Beathe Malga\nBeatmeker: Jordan Strauss\nRéalisateur:  Dan Scott\nMix & mastering : Dj Vnr\nMakeup & coiffure: Mim’s Beauty studio\nStyliste : Miryame Manck\n\nS\'abonner à la chaine 👉 https://studio.youtube.com/video/wJcz...\n\nRetrouve BIOMAN sur : \n➡ Instagram :  / biomanofficiel  \n➡ Facebook : Bioman Badman Officiel\nwww.tiktok.com/@bioman_officiel\n\n📌Booking : +242066115391','2025-07-10 18:53:21','2025-07-10 18:53:21'),(2,' Ajouter à la file d\'attente Je publie mon jeu Flutter sur l\'Apple Store','https://www.youtube.com/embed/l92fBVWDBDs?si=nfZa37b2XncLUbLJ','<p><span style=\"color: rgb(19, 19, 19);\">Conseils et formations : 👉 </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbVBNZXVlNGFMdms2SmFBaGNielM3Q3RPQTFLZ3xBQ3Jtc0trYXVLV0MtalNhTUt2ekcyLXY2c2pZY0Q3anp1MmUwQ0dpVGFkb2dQNWdWV2drdjZvNkxIT0E2cE5GVW5xQ2hnVkE1ZXBZNDJZM3RNSUFkX0EtUEticTZ0YkdObExZLXA5UWdhU3p6Z2RicEdRQUxuNA&amp;q=https%3A%2F%2Fnico-develop.com%2Fformations&amp;v=l92fBVWDBDs\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">https://nico-develop.com/formations</a></p><p>Transcription</p>','2025-07-10 19:01:36','2025-07-10 19:02:33'),(3,'How to Submit Your iOS App to the App Store (Step-by-Step Xcode & App Store Connect Guide 2025)','https://www.youtube.com/embed/Qgq6jsRtfbA?si=hdtcJZMIJ48DVLI9','<p><span style=\"color: rgb(19, 19, 19);\">🎉 Just finished your iOS app? Time to ship it. In this video, I walk you through every step to submit your app to the App Store in 2025, using Xcode and App Store Connect. </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbnJvYmdDcXlidFV1RHhaUmZfU0dsbUJMWEc1QXxBQ3Jtc0tud1laa0JJRkU5TkJxc2FCQVIxa2xBZGZXaHM4TWNOajZWSlpfbE1TV29jNmdnSGtSeXBfYnBRQXU0aFcwNGtKTW13UTItbnFGQVB5YS16OF83QjFXLW9IdUJPS1RjOWtWeElYY1V0bEpOWjNlYTROOA&amp;q=https%3A%2F%2Fdeveloper.apple.com%2F&amp;v=Qgq6jsRtfbA\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">https://developer.apple.com/</a><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbHBhNzF1c3g3cFA4c1dGSWxwaDZIeFc4MHBZZ3xBQ3Jtc0tsc2dpMDRHd0NtY3dBWFpRRndjREV6SWRielNRR180ak54MnkwcXZZaC0tdDlxX1Nad2hkRldCWGdqeU1EVmtQbEtaZDBnSVdKSGJmWVFlc3diaVFmVXRVUENBVVEyMDdxNUxkVzVjdlU0NkFBX01fdw&amp;q=https%3A%2F%2Fappstoreconnect.apple.com%2Flogin&amp;v=Qgq6jsRtfbA\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">https://appstoreconnect.apple.com/login</a><span style=\"color: rgb(19, 19, 19);\"> For In app Purchases (IAP) I highly recommend checking out Revenue Cat\'s Guide: </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbC14WVNkb1hEZ3pUaDFrSkZkSzJOMnh1eVBXZ3xBQ3Jtc0tuSlVNalVscS04akxFN2xvSHBMdUNiaFVEaDduS216dDJLV29JaTJaOWplbHE5azhOZjk0NlAyaTlWYnlibXdNZ3V6MjBXRFFaa1FaZy1hZVAtSTh0R21qaVdXOUFWbU9sRW9yX2xGZFlNak1vZUxDWQ&amp;q=https%3A%2F%2Fwww.revenuecat.com%2Fdocs%2Fgetting-started%2Fentitlements%2Fios-products&amp;v=Qgq6jsRtfbA\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">https://www.revenuecat.com/docs/getti...</a><span style=\"color: rgb(19, 19, 19);\"> Whether you’re a first-time indie dev or just need a refresher, this guide will help you: 🧠 What You’ll Learn: ✅ How to archive &amp; upload your app in Xcode ✅ How to create your App Store listing &amp; fill in metadata ✅ Pricing, screenshots, privacy info, and more 💡 Bonus tips throughout the video for avoiding common rejection issues! In App Purchases Video: </span><a href=\"https://www.youtube.com/watch?v=IMYw5iDxI48\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0.05);\">  <img src=\"https://www.gstatic.com/youtube/img/watch/yt_favicon_ringo2.png\"> • In App Purchases in SwiftUI with RevenueCa...  </a><span style=\"color: rgb(19, 19, 19);\"> 🎯 By the end, you’ll go from “build complete” to “submitted for review” — with confidence. </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqa19XbTBMT2VMOS14aFA1LU1Ea0ZjLW1vZktid3xBQ3Jtc0tuZ2xrU0RETXlmT2FlUUEtX1dJb0E0aEQ1aEhoSng1dXFTdUtyVFVkZnNjS3dTLTZDcnJwUHQ3TGFIX3FHaTd3YnZXUmRkSTQzWUx4bDNxQjItTzlIT0hXbzh3UGE5eE1LOU5WdmtmenJDNkhta01wWQ&amp;q=https%3A%2F%2Fdeveloper.apple.com%2Fdistribute%2Fapp-review%2F&amp;v=Qgq6jsRtfbA\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">https://developer.apple.com/distribut...</a><span style=\"color: rgb(19, 19, 19);\"> 🔥 Download My Project Files &amp; More! 🔥 👉 </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqa1AyT2Yxd3F5ay03cUJaM2JWZ1VvbDZSWDhFUXxBQ3Jtc0trd2d0b2VoSE5YRHlaWUZla0w4cUJWeTRjZE9RQUZRSXZ4bVRUNExESGVUZm5saWw3OXg5SDMwb2dZYjFELTR6ZGRCOWdYWTJCaG1HSnhmMTE0VDh0MTFTM083UTlOb0JNaTgyUnJpUWVPRGJrbklVMA&amp;q=https%3A%2F%2Fndcswift.github.io%2FSwift-Projects%2F&amp;v=Qgq6jsRtfbA\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">https://ndcswift.github.io/Swift-Proj...</a><span style=\"color: rgb(19, 19, 19);\"> 👨‍💻 Join the Community: 👍 Like &amp; Subscribe for more Swift, Xcode, and indie dev tips. Timestamps: </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">00:00</a><span style=\"color: rgb(19, 19, 19);\"> – Intro: What We’re Covering </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=33s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">00:33</a><span style=\"color: rgb(19, 19, 19);\"> – Apple Developer Account Setup </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=88s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">01:28</a><span style=\"color: rgb(19, 19, 19);\"> – App Store Connect Overview </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=174s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">02:54</a><span style=\"color: rgb(19, 19, 19);\"> – Creating a New App Record </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=335s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">05:35</a><span style=\"color: rgb(19, 19, 19);\"> – Preparing Your Build in Xcode </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=398s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">06:38</a><span style=\"color: rgb(19, 19, 19);\"> – Uploading to App Store Connect </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=448s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">07:28</a><span style=\"color: rgb(19, 19, 19);\"> – Filling Out App Info </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=527s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">08:47</a><span style=\"color: rgb(19, 19, 19);\"> – Uploading Screenshots </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=605s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">10:05</a><span style=\"color: rgb(19, 19, 19);\"> – App MetaData cont\'d </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=724s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">12:04</a><span style=\"color: rgb(19, 19, 19);\"> – Selecting App Build </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=764s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">12:44</a><span style=\"color: rgb(19, 19, 19);\"> – App Review Information + Tips </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=884s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">14:44</a><span style=\"color: rgb(19, 19, 19);\"> – Pricing, Availability &amp; IAP </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=1031s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">17:11</a><span style=\"color: rgb(19, 19, 19);\"> – Submitting Your App for Review </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=1119s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">18:39</a><span style=\"color: rgb(19, 19, 19);\"> – How the app review went! </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=1161s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">19:21</a><span style=\"color: rgb(19, 19, 19);\"> – How to update app </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=1180s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">19:40</a><span style=\"color: rgb(19, 19, 19);\"> – App Store </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=1194s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">19:54</a><span style=\"color: rgb(19, 19, 19);\"> – Wrap-Up + GOOD LUCK!</span></p>','2025-07-10 19:06:48','2025-07-10 19:06:48');
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-11  0:30:01
