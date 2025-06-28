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
INSERT INTO `sequelizemeta` VALUES ('20250430214907-create-roles.js'),('20250430215005-create-users.js'),('20250507153252-create-sites.js'),('20250509195255-create-password_resets.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-23 14:19:50
