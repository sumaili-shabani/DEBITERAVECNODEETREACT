-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 26 sep. 2025 à 18:02
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `siteswiftride`
--

-- --------------------------------------------------------

--
-- Structure de la table `basics`
--

CREATE TABLE `basics` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `basics`
--

INSERT INTO `basics` (`id`, `titre`, `description`, `icone`, `createdAt`, `updatedAt`) VALUES
(1, 'Payez comme vous voulez', 'Profitez du paiement flexible : Mobile Money, carte bancaire ou portefeuille électronique SWIFTRIDE.', '1752330189343-carousel5.png', '2025-07-10 13:07:58', '2025-07-12 14:23:09'),
(2, 'La technologie au service de votre tranquillité', 'Bouton SOS, partage de trajet et historique complet pour voyager sereinement, jour et nuit.', '1752330049211-carousel4.png', '2025-07-10 13:08:12', '2025-07-12 14:20:49'),
(3, 'Commandez votre trajet en toute sécurité', 'Réservez votre taxi ou moto taxi en quelques clics et suivez votre chauffeur en temps réel, où que vous soyez.', '1752329985503-carousel3.png', '2025-07-10 13:08:29', '2025-07-12 14:19:45'),
(5, 'Roulez malin, économisez plus', 'Bénéficiez de nos codes promo, offres exclusives et programme de parrainage pour réduire le coût de vos trajets.', '1752329859093-carousel2.png', '2025-07-12 14:14:48', '2025-07-12 14:17:39'),
(6, 'Vos trajets connectés et optimisés', 'Historique, recommandations et notifications en temps réel pour une expérience de mobilité personnalisée.', '1752329806382-carousel1.png', '2025-07-12 14:15:16', '2025-07-12 14:16:46');

-- --------------------------------------------------------

--
-- Structure de la table `basic_info`
--

CREATE TABLE `basic_info` (
  `id` int(11) NOT NULL,
  `apropos` text DEFAULT NULL,
  `travail` text DEFAULT NULL,
  `don` text DEFAULT NULL,
  `structuregestion` text DEFAULT NULL,
  `financement` text DEFAULT NULL,
  `carriere` text DEFAULT NULL,
  `partenariat` text DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `basic_info`
--

INSERT INTO `basic_info` (`id`, `apropos`, `travail`, `don`, `structuregestion`, `financement`, `carriere`, `partenariat`, `createdAt`, `updatedAt`) VALUES
(1, '<p><strong>SWIFTRIDE est bien plus qu’une simple application de transport urbain.</strong></p><p>Nous sommes une plateforme digitale innovante qui répond aux besoins réels des citoyens pour se déplacer de manière sécurisée, connectée et adaptée aux réalités locales. Conçu pour accompagner le développement des grandes villes africaines, notre site vise à informer, rassurer et engager une communauté d’utilisateurs et de partenaires partageant une même vision : rendre la mobilité urbaine plus intelligente, inclusive et durable. Ici, vous trouverez toutes les informations utiles pour découvrir nos services, rester informé des nouveautés, profiter de nos offres spéciales et participer activement à l’évolution de votre solution de mobilité préférée.</p>', '<p><strong>Chez SWIFTRIDE, nous révolutionnons vos déplacements quotidiens.</strong></p><p>Nous mettons à disposition une application mobile simple, intuitive et légère, permettant à chacun de commander un taxi, une moto taxi ou un véhicule premium en quelques clics. Nous intégrons des fonctionnalités de sécurité avancées : identification complète des chauffeurs, bouton SOS, partage de trajet et suivi en temps réel.</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span> Au-delà du transport, nous développons des solutions innovantes telles que la réservation à l’avance, la location de véhicules et des outils de recommandation intelligente pour optimiser vos itinéraires. Chaque jour, nous travaillons à simplifier votre quotidien, réduire les temps d’attente, garantir un service de qualité et renforcer la confiance entre passagers et chauffeurs. Notre mission est de contribuer à une mobilité plus fluide et plus responsable, partout où nous sommes présents.</li></ol>', '<h2><strong>Soutenez l’innovation locale et la mobilité durable</strong></h2><p>Chez <strong>SWIFTRIDE</strong>, nous sommes convaincus qu’une <strong>mobilité intelligente</strong> a le pouvoir de transformer nos villes et d’améliorer la vie de millions de personnes.</p><p>Pour poursuivre notre développement, renforcer notre impact social et étendre nos services aux communautés les plus vulnérables, nous avons besoin de votre soutien.</p><p>Chaque don contribue directement à :</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Le développement de <strong>nouvelles fonctionnalités innovantes</strong> pour rendre le service toujours plus efficace et accessible.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>La <strong>formation et l’accompagnement</strong> de nos chauffeurs partenaires, garants d’une expérience de qualité et sécurisée.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>L’amélioration constante de nos <strong>outils de sécurité</strong> pour protéger passagers et conducteurs.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>La création de <strong>programmes d’inclusion numérique</strong> destinés aux populations qui en ont le plus besoin.</li></ol><p>Rejoignez notre réseau de contributeurs engagés et participez activement à la construction d’une solution de transport urbain :</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Plus sûre</strong></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Plus équitable</strong></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Respectueuse de l’environnement</strong></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Votre générosité fait véritablement <strong>bouger nos villes vers un avenir meilleur</strong>. Ensemble, donnons du sens à la mobilité de demain !</li></ol>', '<p><strong>Une gouvernance transparente et responsable.</strong></p><p>SWIFTRIDE est géré par une équipe pluridisciplinaire composée de professionnels passionnés par la technologie, la mobilité urbaine et l’innovation sociale. Notre structure de gestion repose sur des principes de transparence, de responsabilité et de participation.</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span> Nous collaborons étroitement avec nos chauffeurs partenaires, nos utilisateurs et nos investisseurs pour garantir que chaque décision prise réponde aux besoins réels du terrain. Notre gouvernance intègre des comités dédiés à la sécurité, à l’innovation technologique, à la qualité de service et à la protection des données. Nous croyons fermement qu’une structure de gestion inclusive et ouverte est la clé pour bâtir une solution de transport durable et de confiance.</li></ol>', '<p><span style=\"background-color: rgb(248, 249, 252); color: rgb(0, 0, 0);\">Nous mettons en place des mécanismes innovants de financement afin de soutenir nos projets et initiatives. Nos ressources proviennent de partenaires institutionnels, d’organisations internationales, du secteur privé ainsi que de contributions individuelles.</span></p><p><span style=\"background-color: rgb(248, 249, 252); color: rgb(0, 0, 0);\">La transparence et la bonne gouvernance financière sont au cœur de notre gestion. Chaque financement reçu est utilisé de manière responsable et traçable pour maximiser l’impact sur le terrain.</span></p><h2><span style=\"background-color: rgb(248, 249, 252); color: rgb(108, 117, 125);\">Sources de financement</span></h2><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(248, 249, 252); color: rgb(0, 0, 0);\">Subventions gouvernementales</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(248, 249, 252); color: rgb(0, 0, 0);\">Partenariats avec ONG et agences internationales</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(248, 249, 252); color: rgb(0, 0, 0);\">Contributions du secteur privé</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(248, 249, 252); color: rgb(0, 0, 0);\">Dons de particuliers et mécènes</span></li></ol><h2><span style=\"background-color: rgb(248, 249, 252); color: rgb(108, 117, 125);\">Pourquoi soutenir notre mission ?</span></h2><p><span style=\"background-color: rgb(248, 249, 252); color: rgb(0, 0, 0);\">En finançant nos actions, vous participez directement à la mise en œuvre de projets durables ayant un impact concret sur les communautés. Votre soutien est un levier essentiel pour atteindre nos objectifs et favoriser le développement local.</span></p>', '<p>Le <strong>secteur numérique</strong> transforme profondément nos modes de vie, nos échanges et nos déplacements. Il englobe toutes les technologies qui permettent de connecter les personnes, les services et les données pour créer des solutions innovantes et accessibles.</p><p>Avec <strong>SWIFTRIDE</strong>, nous plaçons la <strong>mobilité urbaine</strong> au cœur de cette révolution numérique. Notre application mobile offre bien plus qu’un service de transport : elle ouvre la voie à une expérience connectée, sécurisée et intelligente.</p><h2><strong>Mobilité urbaine intelligente et inclusive</strong></h2><p>SWIFTRIDE évolue dans le <strong>secteur de la mobilité urbaine</strong>, un domaine en pleine transformation dans de nombreux pays africains.</p><p>Nous faisons partie d’un écosystème dynamique qui combine <strong>technologies de l’information</strong>, <strong>exploitation des données pour l’urbanisme</strong> et <strong>services connectés</strong>, afin d’offrir des solutions adaptées aux réalités locales.</p><p>Notre approche repose sur trois piliers :</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Inclusion</strong> : permettre à tous, y compris aux populations peu connectées, d’accéder à des solutions de transport modernes.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Sécurité</strong> : garantir la protection des passagers et des chauffeurs grâce au suivi en temps réel, à l’authentification et aux outils d’alerte.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Gouvernance durable</strong> : contribuer à des villes plus fluides, mieux organisées et respectueuses de l’environnement.</li></ol><p>Notre ambition est de devenir un <strong>acteur de référence de la smart mobility en Afrique</strong>, en créant des passerelles entre <strong>technologie</strong>, <strong>besoins locaux</strong> et <strong>opportunités économiques</strong>.</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span> Avec SWIFTRIDE, la mobilité urbaine devient <strong>plus intelligente, plus sûre et plus inclusive</strong>.</li></ol>', '<p><strong>Construire un réseau de partenaires engagés pour une mobilité durable.</strong></p><p>Chez SWIFTRIDE, nous croyons que la collaboration est un moteur puissant de transformation. Nous travaillons main dans la main avec des municipalités, des organisations de développement, des entreprises privées, des opérateurs de téléphonie mobile et des fintech pour créer un réseau solide et efficace au service des citoyens.</p><p>Nos partenariats nous permettent d’étendre notre couverture géographique, de diversifier nos moyens de paiement, d’offrir de meilleures conditions à nos chauffeurs et de proposer des services additionnels comme la réservation d’hôtels ou de billets de transport interurbain. Nous sommes ouverts à toutes les synergies qui partagent notre vision : améliorer la mobilité urbaine tout en contribuant à un impact social et environnemental positif.</p>', '2025-07-09 19:57:10', '2025-08-24 10:23:35');

-- --------------------------------------------------------

--
-- Structure de la table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `sousTitre` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT 'logo.png',
  `idCategory` int(11) NOT NULL DEFAULT 2,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `tug` varchar(255) DEFAULT NULL,
  `slug` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `blogs`
--

INSERT INTO `blogs` (`id`, `titre`, `sousTitre`, `description`, `icone`, `idCategory`, `createdAt`, `updatedAt`, `status`, `tug`, `slug`) VALUES
(2, ' Nos meilleures fonctionnalités pour un trajet 100% connecté', 'Découvrez comment SWIFTRIDE intègre la technologie pour vous offrir une expérience de transport fluide, personnalisée et totalement connectée à chaque étape de votre trajet.', '<p>L’innovation est au cœur de SWIFTRIDE. Notre application va bien au-delà d’une simple mise en relation avec un chauffeur : elle est pensée pour vous offrir une expérience de transport optimisée et intelligente. Grâce au tableau de bord personnel, vous pouvez retrouver l’historique complet de vos trajets, gérer vos paiements et suivre vos habitudes pour mieux planifier vos prochains déplacements. Le suivi en temps réel vous permet de localiser votre chauffeur dès la commande, de visualiser le temps d’attente et d’adapter votre emploi du temps en conséquence. Nos notifications intelligentes vous tiennent informé de l’évolution du trafic, des promotions en cours et des conseils pour voyager au meilleur prix. Plongez dans cet article pour découvrir comment chaque détail technologique est pensé pour simplifier votre quotidien et faire de chaque trajet une expérience fluide, sûre et connectée.</p>', '1752328483213-meilleur.png', 2, '2025-07-08 20:25:23', '2025-07-12 13:54:43', 1, 'super article,application de mobilité Afrique', 'lancer-sa-startup-tech-en-afrique-les-cles-du-succes'),
(3, 'Pourquoi choisir SWIFTRIDE plutôt qu’un taxi traditionnel ?', 'Découvrez tous les avantages concrets de SWIFTRIDE par rapport aux taxis traditionnels pour voyager plus sereinement, sans surprise et avec un maximum de confort.', '<p>Dans un contexte urbain souvent marqué par le manque de régulation des taxis informels, choisir SWIFTRIDE, c’est opter pour une solution sécurisée, moderne et plus pratique. Fini les négociations interminables ou les tarifs imprévisibles : vous connaissez toujours le prix estimatif de votre course avant de valider. Grâce à notre système de notation, chaque chauffeur est évalué par la communauté, garantissant un service de qualité et un comportement respectueux. Le suivi en temps réel sur la carte vous rassure quant à l’arrivée de votre véhicule et vous permet d’anticiper votre trajet sans stress. Cet article vous explique en détail pourquoi SWIFTRIDE est devenu le choix de confiance pour des milliers de passagers qui souhaitent se déplacer intelligemment, sans compromis sur la sécurité ni le confort.</p>', '1752328346219-Pourquoi choisir SWIFTRIDE plutÃ´t quâun taxi traditionnel.png', 7, '2025-07-08 20:26:08', '2025-07-12 13:52:26', 1, 'taxi urbain,transport urbain intelligent', 'comment-lever-des-fonds-efficacement'),
(4, 'Les tendances de la mobilité urbaine en Afrique', 'Un panorama des nouvelles solutions de transport qui redéfinissent la mobilité urbaine en Afrique et positionnent SWIFTRIDE comme acteur incontournable de ce changement.', '<p>La mobilité urbaine en Afrique connaît une transformation rapide portée par la croissance des villes, l’évolution des besoins des usagers et les avancées technologiques. Aujourd’hui, les applications de transport comme SWIFTRIDE apportent des solutions concrètes pour surmonter les défis d’insécurité, de congestion et de coûts imprévisibles. Dans cet article, nous faisons le point sur les grandes tendances : l’essor des motos-taxis connectés, l’importance du paiement mobile, le suivi GPS temps réel pour plus de transparence, et l’intégration de la data pour améliorer la planification urbaine. Vous découvrirez également comment SWIFTRIDE s’inscrit pleinement dans cette révolution, en proposant une expérience utilisateur adaptée aux réalités locales tout en contribuant à une mobilité plus durable et inclusive.</p>', '1752328293627-Les tendances de la mobilitÃ© urbaine en Afrique.png', 7, '2025-07-08 20:27:36', '2025-07-12 13:51:33', 1, 'transport urbain intelligent,taxi urbain,moto taxi sécurisé', 'le-parcours-de-marie-jeune-incubee-inspirante'),
(5, '5 astuces pour économiser sur vos courses SWIFTRIDE', 'Apprenez à profiter des codes promo, du programme de parrainage et des offres exclusives SWIFTRIDE pour réduire vos dépenses et voyager plus souvent sans dépasser votre budget.', '<p>Chez SWIFTRIDE, nous savons que chaque trajet compte et que le prix est un facteur décisif pour beaucoup d’utilisateurs. C’est pourquoi nous mettons régulièrement à disposition des codes promo pour vous faire profiter de réductions immédiates sur vos courses. Notre programme de parrainage vous permet également de gagner des crédits de trajet chaque fois que vous recommandez SWIFTRIDE à un proche : un moyen simple d’économiser tout en aidant votre entourage à découvrir une solution de mobilité plus sûre et plus connectée. Dans cet article, nous partageons 5 conseils pratiques pour cumuler les économies : de l’utilisation judicieuse des offres saisonnières à l’optimisation de vos trajets selon l’heure et la demande. Préparez-vous à bouger plus pour moins cher !</p>', '1752328225113-6.png', 11, '2025-07-08 20:28:26', '2025-07-12 13:50:25', 1, 'moto taxi sécurisé,code promo taxi', 'appel-a-projets-2025-postulez-des-maintenant'),
(7, 'Comment SWIFTRIDE rend vos trajets plus sûrs en ville ?', 'Découvrez toutes les fonctionnalités intégrées à SWIFTRIDE qui placent votre sécurité au centre de chaque trajet, du bouton SOS au partage de trajet en temps réel avec vos proches.', '<p>Dans de nombreuses villes africaines, la sécurité reste l’une des plus grandes préoccupations pour les passagers comme pour les chauffeurs. Avec SWIFTRIDE, la technologie devient votre meilleur allié pour voyager sereinement : chaque chauffeur est identifié et validé, vous pouvez partager votre trajet en temps réel avec vos proches pour être suivi à chaque étape, et un bouton SOS est disponible à tout moment en cas de problème. Grâce à l’historique de trajets, vous gardez une trace de tous vos déplacements pour une transparence totale. Découvrez dans cet article comment nous avons conçu un système complet pour vous protéger, rassurer votre famille et vous permettre de bouger en toute confiance.</p>', '1752328236226-Comment SWIFTRIDE rend vos trajets plus sÃ»rs en ville.png', 8, '2025-07-10 22:01:56', '2025-07-23 13:28:11', 1, 'taxi urbain,bouton SOS urgence', 'lagritech-une-revolution-silencieuse-au-cur-de-nos-communautes-rurales'),
(8, 'SwiftRide – Votre compagnon de transport rapide, sûr et intelligent', 'La nouvelle façon de se déplacer en toute sécurité dans votre ville, grâce à une application intuitive et fiable qui met en relation passagers et conducteurs certifiés, offrant confort, rapidité et tranquillité d’esprit à chaque trajet', '<p>SwiftRide est une application mobile innovante qui transforme votre expérience de transport urbain.</p><p> En quelques clics, vous pouvez commander un taxi fiable, suivre votre trajet en temps réel et profiter d’un service sécurisé grâce à nos chauffeurs vérifiés.</p><p>Avec une interface intuitive et des fonctionnalités avancées, SwiftRide met la technologie au service de votre mobilité :</p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Réservation rapide</strong> en quelques secondes</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Suivi GPS</strong> précis de votre chauffeur</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Paiement sécurisé</strong> intégré</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong>Support client 24/7</strong> pour vous accompagner à chaque étape</li></ol><p>Disponible dès maintenant sur <strong>Google Play</strong>, SwiftRide est la solution idéale pour vos déplacements quotidiens ou occasionnels.</p><p> Téléchargez l’application et découvrez la liberté de voyager en toute tranquillité.</p>', '1754739896787-premium_photo-1723741278812-06a9974e108d.avif', 2, '2025-08-09 11:38:30', '2025-08-09 11:44:56', 1, 'super article,taxi urbain,transport urbain intelligent,moto taxi sécurisé', 'swiftride-votre-compagnon-de-transport-rapide-sur-et-intelligent'),
(9, 'SwiftRide Connect : L’Application qui Transforme vos Déplacements en Taxi Voiture 🚖✨', 'Découvrez SwiftRide Connect, votre nouveau service de taxi fiable, rapide et sécurisé. Réservez en quelques clics, payez facilement et voyagez en toute sérénité partout en ville grâce à une application pensée pour vous.', '<p>SwiftRide Connect révolutionne vos déplacements urbains en proposant bien plus qu’un simple service de taxi. Cette application intuitive a été spécialement conçue pour répondre aux défis quotidiens de mobilité, en combinant rapidité, sécurité et simplicité d’utilisation.</p><p>Avec un temps d’attente moyen inférieur à 5 minutes dans les zones couvertes, SwiftRide Connect vous garantit un accès rapide à un taxi fiable, évitant les longues attentes et les incertitudes habituelles. Vous commandez en temps réel, où que vous soyez, grâce à une interface claire et fluide, accessible même avec une connexion internet limitée.</p><p>Côté paiement, SwiftRide Connect offre une flexibilité optimale : Mobile Money, carte bancaire ou portefeuille électronique, vous choisissez la méthode qui vous convient, sans tracas ni complication.</p><p>La sécurité est au cœur de l’application : un bouton SOS accessible en un clic, la possibilité de partager votre trajet en temps réel avec vos proches, et des chauffeurs soigneusement vérifiés pour votre tranquillité d’esprit. Vous voyagez ainsi en toute confiance, à chaque course.</p><p>Disponible 24 heures sur 24, 7 jours sur 7, avec un support client réactif en français et dans les langues locales, SwiftRide Connect s’adapte parfaitement à vos besoins et à votre environnement.</p><p>Faites le choix d’une mobilité moderne, sécurisée et adaptée à la réalité africaine. Téléchargez SwiftRide Connect dès aujourd’hui, et transformez vos déplacements quotidiens en expériences simples, rapides et sereines.</p>', '1754743870263-photo-1694813646391-4c505039c2ee.avif', 7, '2025-08-09 12:47:46', '2025-08-09 12:54:43', 1, 'super article,transport urbain intelligent,application de mobilité Afrique', 'swiftfly-reinventer-le-transport-aerien-local'),
(10, 'SwiftFly Connect : L’Application qui Transforme vos Déplacements', 'Réservez, gérez et voyagez… le tout dans le creux de votre main.', '<p>Avec l’application SwiftFly Connect, vous pouvez réserver vos vols en quelques clics, suivre l’état de votre trajet en temps réel et bénéficier d’offres personnalisées. Nous mettons la technologie au service de la simplicité : notifications intelligentes, check-in digital, choix des sièges et paiement sécurisé. Fini les files d’attente et les réservations compliquées — SwiftFly Connect vous accompagne avant, pendant et après chaque vol. Rejoignez dès aujourd’hui une nouvelle ère du voyage aérien où la liberté et la rapidité sont à portée de main.</p>', '1754743863590-photo-1548093357-d9e1db3a1b64.avif', 7, '2025-08-09 12:49:02', '2025-08-24 10:22:03', 1, 'transport urbain intelligent,Formations', 'swiftfly-connect-lapplication-qui-transforme-vos-deplacements');

-- --------------------------------------------------------

--
-- Structure de la table `carousels`
--

CREATE TABLE `carousels` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `titre`, `createdAt`, `updatedAt`, `slug`) VALUES
(2, 'Tech & Numérique', '2025-07-08 16:24:58', '2025-07-09 12:20:18', 'tech-numerique'),
(7, 'Mobilité urbaine et transport', '2025-07-12 13:35:01', '2025-07-12 13:35:01', 'mobilite-urbaine-et-transport'),
(8, 'Sécurité des déplacements', '2025-07-12 13:35:06', '2025-07-12 13:35:06', 'securite-des-deplacements'),
(11, 'Promotions & Offres exclusives', '2025-07-12 13:35:26', '2025-07-12 13:35:26', 'promotions-offres-exclusives'),
(12, 'Conseils & Astuces', '2025-08-09 12:43:23', '2025-08-09 12:43:23', 'conseils-astuces'),
(13, 'Tendances & Analyses du marché', '2025-08-09 12:43:39', '2025-08-09 12:43:39', 'tendances-analyses-du-marche'),
(14, 'Nouveautés & Lancements', '2025-08-09 12:43:53', '2025-08-24 10:21:25', 'nouveautes-lancements');

-- --------------------------------------------------------

--
-- Structure de la table `choix`
--

CREATE TABLE `choix` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `choix`
--

INSERT INTO `choix` (`id`, `titre`, `description`, `icone`, `createdAt`, `updatedAt`) VALUES
(1, 'Communauté Fiable', 'Rejoignez une communauté de passagers et de chauffeurs partenaires engagés pour un service respectueux et professionnel.', 'fas fa-users', '2025-07-10 13:22:29', '2025-07-12 14:11:23'),
(2, 'Flexibilité Totale', 'Réservez à l’avance, choisissez un véhicule premium ou optez pour une location selon vos besoins.', 'fas fa-calendar-check', '2025-07-10 13:22:55', '2025-07-12 14:11:03'),
(3, 'Service 24h/24', 'Commandez un taxi ou une moto à tout moment, même de nuit, avec une assistance disponible 24h/24.', 'fas fa-clock', '2025-07-10 13:23:22', '2025-07-12 14:10:46'),
(4, 'Prix Clairs & Justes', 'Évitez les surprises ! Connaissez le prix estimatif avant chaque course et payez facilement via Mobile Money ou carte bancaire.', 'fas fa-wallet', '2025-07-10 13:23:48', '2025-07-12 14:10:27'),
(5, 'Technologie Intelligente', 'Profitez d’un suivi en temps réel, d’un tableau de bord personnel et de trajets optimisés pour un transport plus fluide.', 'fas fa-microchip', '2025-07-10 13:24:12', '2025-07-12 14:10:08'),
(6, 'Sécurité Renforcée', 'Voyagez l’esprit tranquille grâce à l’identification des chauffeurs, le bouton SOS et le partage de trajet en temps réel.', 'fas fa-shield-alt', '2025-07-10 13:24:37', '2025-07-12 14:09:53'),
(8, 'Adapté à l’Afrique', 'Une application pensée pour les réalités locales : légère, rapide, efficace même avec une faible connexion internet.', 'fas fa-globe-africa', '2025-07-12 14:11:46', '2025-08-13 17:35:42'),
(9, 'Tarifs compétitifs et transparents', 'Des prix clairs, sans frais cachés, adaptés au pouvoir d’achat local.', 'fas fa-money-bill-wave', '2025-08-08 16:05:54', '2025-08-08 16:05:54');

-- --------------------------------------------------------

--
-- Structure de la table `faqs`
--

CREATE TABLE `faqs` (
  `id` int(11) NOT NULL,
  `question` varchar(255) DEFAULT NULL,
  `reponse` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `faqs`
--

INSERT INTO `faqs` (`id`, `question`, `reponse`, `createdAt`, `updatedAt`) VALUES
(1, 'Quels types de véhicules puis-je réserver ?', '<p>SWIFTRIDE propose plusieurs options selon vos besoins : taxi standard, moto taxi, véhicule privé premium ou location de véhicule longue durée.</p>', '2025-07-12 13:25:19', '2025-07-12 15:06:13'),
(3, 'Comment puis-je commander un taxi avec SWIFTRIDE ?', '<p>Téléchargez l’application, créez votre compte, activez votre localisation et en quelques clics, trouvez un chauffeur à proximité. Vous pouvez suivre son arrivée en temps réel et connaître le prix estimatif avant de valider.</p>', '2025-07-12 15:05:55', '2025-07-12 15:05:55'),
(4, 'Comment fonctionne le bouton SOS ?', '<p>En cas de problème pendant votre trajet, appuyez sur le bouton SOS dans l’application. Votre position sera partagée immédiatement avec vos contacts d’urgence et notre centre d’assistance.</p>', '2025-07-12 15:06:24', '2025-07-12 15:06:24'),
(5, 'Quels moyens de paiement sont acceptés ?', '<p>Vous pouvez régler vos courses via Mobile Money (M-Pesa, Airtel Money, Orange Money), carte bancaire ou avec votre portefeuille électronique SWIFTRIDE.</p>', '2025-07-12 15:06:45', '2025-07-12 15:06:45'),
(6, 'Est-ce que SWIFTRIDE fonctionne sans connexion Internet rapide ?', '<p>Oui ! Notre application est optimisée pour fonctionner même avec une connexion Internet faible ou instable, pour rester accessible à tous.</p>', '2025-07-12 15:06:55', '2025-07-12 15:06:55'),
(7, 'Comment devenir chauffeur partenaire ?', '<p>Rendez-vous sur notre site ou téléchargez l’application SWIFTRIDE, remplissez le formulaire d’inscription et fournissez les documents requis. Notre équipe vous contactera pour finaliser votre enregistrement et votre formation.</p>', '2025-07-12 15:07:23', '2025-07-12 15:07:23'),
(8, 'Puis-je partager mon trajet avec mes proches ?', '<p>Oui, à chaque course vous pouvez activer l’option « Partager le trajet » pour que vos proches suivent votre position en temps réel jusqu’à votre arrivée.</p>', '2025-07-12 15:07:39', '2025-07-12 15:07:39'),
(9, 'SWIFTRIDE est-il disponible dans toutes les villes ?', '<p>Nous commençons dans plusieurs grandes villes et élargissons progressivement notre couverture. Consultez notre carte des zones desservies dans l’application ou sur le site.</p>', '2025-07-12 15:07:57', '2025-07-12 15:07:57'),
(10, 'Que faire en cas de problème avec un chauffeur ?', '<p>Contactez notre support 24h/24 via l’application ou le site. Chaque trajet est tracé, et nous agissons rapidement pour résoudre tout incident signalé.</p>', '2025-07-12 15:08:18', '2025-07-12 15:08:18'),
(11, 'Puis-je annuler une course ?', '<p>Oui, vous pouvez annuler une course gratuitement dans un délai raisonnable avant l’arrivée du chauffeur. Des frais peuvent s’appliquer si l’annulation est tardive.</p>', '2025-07-12 15:08:32', '2025-08-12 11:11:34');

-- --------------------------------------------------------

--
-- Structure de la table `fonctionalites`
--

CREATE TABLE `fonctionalites` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `fonctionalites`
--

INSERT INTO `fonctionalites` (`id`, `titre`, `description`, `icone`, `createdAt`, `updatedAt`) VALUES
(1, 'Sécurité renforcée', 'Bouton SOS, partage de trajet en temps réel et chauffeurs vérifiés', 'fas fa-shield-alt', '2025-07-21 13:47:16', '2025-07-21 13:47:16'),
(2, 'Paiements flexibles', 'Mobile Money, carte bancaire ou portefeuille électronique', 'fas fa-money-bill-wave', '2025-07-21 13:48:13', '2025-07-21 13:48:13'),
(3, 'Rapidité', 'Temps d\'attente moyen de moins de 5 minutes en zone couverte', 'fas fa-bolt', '2025-07-21 13:48:53', '2025-07-21 13:48:53'),
(4, 'Support 24/7', 'Assistance en français et langues locales par chat ou appel', 'fas fa-user-friends', '2025-07-21 13:49:34', '2025-07-21 13:49:34'),
(6, 'Réservation immédiate ou planifiée', 'Choisissez un trajet instantané ou programmez votre course à l’avance.', 'fas fa-calendar-check', '2025-08-08 15:19:36', '2025-08-08 15:19:36'),
(7, 'Suivi GPS en temps réel', 'Localisez votre chauffeur et suivez le trajet directement depuis l’application.', 'fas fa-map-marked-alt', '2025-08-08 15:20:33', '2025-08-08 15:20:33'),
(8, 'Estimation du prix', 'Consultez le tarif exact avant de confirmer votre commande', 'fas fa-tags', '2025-08-08 15:21:42', '2025-08-08 15:21:42'),
(9, 'Notations et avis', 'Évaluez votre chauffeur et consultez les avis des autres utilisateurs', 'fas fa-star', '2025-08-08 15:22:39', '2025-08-08 15:22:39'),
(10, 'Covoiturage', 'Réduisez vos frais en partageant le trajet avec d’autres passagers', 'fas fa-users', '2025-08-08 15:23:19', '2025-08-13 17:58:24');

-- --------------------------------------------------------

--
-- Structure de la table `galeries`
--

CREATE TABLE `galeries` (
  `id` int(11) NOT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `galeries`
--

INSERT INTO `galeries` (`id`, `icone`, `createdAt`, `updatedAt`) VALUES
(2, '1752176362855-agricole3.png', '2025-07-10 19:39:22', '2025-07-10 19:39:22'),
(3, '1752176681640-premium_photo-1679428900795-b1f5a6dd7d27.avif', '2025-07-10 19:44:41', '2025-07-10 19:44:41'),
(4, '1752176692335-realisation2.png', '2025-07-10 19:44:52', '2025-07-10 19:44:52'),
(5, '1752176706247-coding2.png', '2025-07-10 19:45:06', '2025-07-10 19:45:06'),
(6, '1752176732211-realisation4.png', '2025-07-10 19:45:32', '2025-07-10 19:45:32'),
(7, '1752176741183-slider5.png', '2025-07-10 19:45:41', '2025-07-10 19:45:41'),
(8, '1752176753157-slider6.png', '2025-07-10 19:45:53', '2025-07-10 19:45:53'),
(9, '1752178037601-team3.png', '2025-07-10 20:07:17', '2025-07-10 20:07:17');

-- --------------------------------------------------------

--
-- Structure de la table `offres`
--

CREATE TABLE `offres` (
  `id` int(11) NOT NULL,
  `dates` varchar(255) DEFAULT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `organisation` varchar(255) DEFAULT NULL,
  `lien` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `fichier` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `offres`
--

INSERT INTO `offres` (`id`, `dates`, `lieu`, `organisation`, `lien`, `titre`, `description`, `fichier`, `createdAt`, `updatedAt`, `slug`) VALUES
(1, '2025-09-09', 'Goma', 'SWIFTRIDE', 'https://getbootstrap.com/docs/5.0/components/list-group/', 'Chargé(e) de Formation Agricole', '<p><strong>Description du poste :</strong></p><p> Nous recherchons un(e) Chargé(e) de Formation Agricole motivé(e) et engagé(e) pour concevoir, organiser et animer des sessions de formation destinées aux agriculteurs, coopératives et acteurs du secteur agricole. Vous jouerez un rôle clé dans le transfert de connaissances et le renforcement des capacités pour améliorer les pratiques agricoles et promouvoir des techniques durables.</p><p><strong>Responsabilités :</strong></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Élaborer des programmes et supports pédagogiques adaptés aux besoins des bénéficiaires.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Animer des sessions de formation théoriques et pratiques sur les bonnes pratiques agricoles, la gestion des cultures, l’utilisation des intrants, la protection des cultures et l’agriculture durable.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Évaluer les connaissances et compétences acquises par les participants.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Assurer un suivi post-formation auprès des agriculteurs pour mesurer l’impact et apporter un appui technique continu.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Collaborer avec les partenaires locaux, ONG et institutions pour organiser des formations et ateliers.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Collecter et analyser les données relatives aux formations pour améliorer continuellement les contenus et méthodes pédagogiques.</li></ol><p><strong>Profil recherché :</strong></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Formation supérieure en agriculture, agronomie, développement rural ou domaine connexe.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Expérience dans la conduite de formations agricoles ou en vulgarisation agricole.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Excellentes compétences pédagogiques et capacité à transmettre des connaissances de manière claire et accessible.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Connaissance des réalités et défis du secteur agricole local.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Bonnes capacités relationnelles et esprit d’équipe.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Maîtrise des outils bureautiques et des technologies de communication.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>La maîtrise des langues locales est un plus.</li></ol><p><br></p>', '1752087628583-1752066880931-Proposition_Partenariat_M-Hub.pptx', '2025-07-09 17:49:34', '2025-08-09 13:57:49', 'chargee-de-formation-agricole'),
(2, '2025-08-08', 'Goma', 'SWIFTRIDE', 'https://getbootstrap.com/docs/5.0/components/list-group/', 'Développeur(se) Web Full Stack', '<p><strong>Description du poste :</strong></p><p>Nous recherchons un(e) Développeur(se) Web Full Stack passionné(e) et polyvalent(e) pour rejoindre notre équipe dynamique. Vous serez responsable du développement, de la maintenance et de l’évolution de nos applications web, en intervenant à la fois sur le front-end et le back-end.</p><p>Vous participerez activement à la conception technique, à l’implémentation de nouvelles fonctionnalités, à l’optimisation des performances, ainsi qu’à la résolution des problématiques techniques. Vous travaillerez en collaboration étroite avec les équipes produit, design et infrastructure pour offrir une expérience utilisateur optimale et des solutions robustes.</p><p><strong>Responsabilités :</strong></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Concevoir, développer et maintenir des applications web modernes, performantes et sécurisées.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Implémenter des interfaces utilisateur intuitives et responsives.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Développer des API RESTful efficaces et évolutives.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Assurer la qualité du code grâce aux tests automatisés et aux revues de code.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Participer à l’analyse des besoins fonctionnels et techniques.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Collaborer avec les équipes multidisciplinaires dans un environnement agile.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Optimiser les applications pour une meilleure performance et scalabilité.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Assurer la veille technologique et proposer des améliorations continues.</li></ol><p><strong>Profil recherché :</strong></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Maîtrise des technologies front-end (React, Vue.js, Angular ou équivalent).</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Solide expérience en développement back-end (Node.js, Python, PHP, Java, ou autre).</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Bonne connaissance des bases de données relationnelles et NoSQL.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Expérience avec les API RESTful et la gestion de l’authentification.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Compréhension des bonnes pratiques de sécurité web.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Capacité à travailler en équipe et bonne communication.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Autonomie, rigueur et sens du détail.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Connaissance des outils DevOps et CI/CD est un plus.</li></ol>', '1752087717034-SerdiPay-Presentation-OffreMarchande.pdf', '2025-07-09 19:01:42', '2025-08-09 13:56:05', 'developpeurse-web-full-stack');

-- --------------------------------------------------------

--
-- Structure de la table `partenaires`
--

CREATE TABLE `partenaires` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `partenaires`
--

INSERT INTO `partenaires` (`id`, `nom`, `url`, `icone`, `createdAt`, `updatedAt`) VALUES
(1, 'Casalind news', 'https://www.casalind-news.com', '1752169631800-casalind news.png', '2025-07-10 17:47:03', '2025-07-10 17:47:11'),
(2, 'dream of drc', 'https://dreamofdrc.com', '1752172100714-dream of drc.png', '2025-07-10 18:22:03', '2025-07-10 18:28:20'),
(3, 'Smico', 'https://www.smico.net', '1752172002464-smico.jpg', '2025-07-10 18:22:56', '2025-07-10 18:26:42'),
(5, 'E-serv', 'https://e-serv.org/', '1754670336663-iconlogo.jpg', '2025-07-10 18:26:29', '2025-08-08 16:25:36'),
(6, 'Pnud', 'https://www.undp.org/fr/drcongo', '1752172091347-pnud.png', '2025-07-10 18:27:51', '2025-07-10 18:28:11');

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

CREATE TABLE `password_resets` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `expiresAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `projets`
--

CREATE TABLE `projets` (
  `id` int(11) NOT NULL,
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
  `slug` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `projets`
--

INSERT INTO `projets` (`id`, `idSecteur`, `annee`, `budget`, `organisation`, `titre`, `soustitre`, `description`, `icone`, `createdAt`, `updatedAt`, `slug`) VALUES
(5, 1, '2025', '100000', 'SWIFTRIDE', 'SwiftStock – ERP de gestion de stock & vente', 'Une solution ERP complète pour piloter les stocks, la vente point à point et la comptabilité conforme au référentiel OHADA.', '<p>SwiftStock répond au besoin croissant des PME, commerçants et distributeurs de disposer d’un outil performant pour gérer leurs opérations commerciales de manière fluide et conforme. Le projet comprend un module de gestion de stocks en temps réel, un système de vente point à point, une gestion des achats et des ventes multi-canaux, ainsi qu’un module de facturation intégré. SwiftStock va plus loin en intégrant une comptabilité complète conforme aux normes OHADA, facilitant ainsi le suivi fiscal et les obligations légales. Grâce à une interface intuitive et accessible depuis tout support connecté, les utilisateurs peuvent piloter leur activité, suivre leurs indicateurs clés et générer des rapports détaillés pour une prise de décision éclairée. En connectant vendeurs, fournisseurs et comptables sur une même plateforme, SwiftStock participe à la modernisation de la gestion d’entreprise dans la région.</p>', '1754672990841-ChatGPT Image 8 aoÃ»t 2025, 19_09_05.png', '2025-07-09 16:55:52', '2025-08-08 17:22:07', 'swiftstock-erp-de-gestion-de-stock-vente'),
(6, 1, '2025', '150000 ', 'SWIFTRIDE', 'SwiftFly – Réservation de voyages & hébergements', 'Une plateforme unique pour réserver vos billets d’avion, de train ou de bateau et vos chambres d’hôtel en toute simplicité.', '<p>SwiftFly élargit l’offre SWIFTRIDE en facilitant l’organisation de voyages locaux et internationaux depuis une seule application. Le projet propose un moteur de recherche puissant pour comparer les prix des billets d’avion, de train ou de bateau, vérifier les disponibilités en temps réel et réserver en quelques clics. L’utilisateur peut également planifier son séjour grâce à un système de réservation d’hôtels avec recommandations basées sur ses préférences. L’objectif est de rendre l’expérience de voyage plus fluide, plus accessible et plus transparente, même pour ceux qui n’ont pas l’habitude de réserver en ligne. SwiftFly intègre plusieurs moyens de paiement locaux et internationaux, un tableau de bord pour gérer ses réservations et des notifications en temps réel pour ne manquer aucun détail. Le projet soutient aussi les acteurs du tourisme local en mettant en avant des hébergements partenaires et des itinéraires sur mesure.</p>', '1754672983266-ChatGPT Image 8 aoÃ»t 2025, 19_09_08.png', '2025-07-09 16:56:22', '2025-08-08 17:22:01', 'swiftfly-reservation-de-voyages-hebergements'),
(7, 3, '2025', '85000', 'SWIFTRIDE', 'SwifEat – Livraison intelligente de nourriture', 'Une solution numérique pour commander vos repas favoris, suivre la livraison en temps réel et soutenir les restaurateurs locaux.', '<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>SwifEat est né de la volonté de compléter l’écosystème SWIFTRIDE en répondant à un besoin concret : offrir une plateforme fiable, rapide et connectée pour la livraison de repas dans les grandes villes africaines. Grâce à une application intuitive, les utilisateurs peuvent commander leurs plats préférés auprès de restaurants partenaires, suivre leur commande pas à pas et payer facilement via Mobile Money, carte bancaire ou portefeuille SwifEat. Le projet intègre aussi un module pour aider les restaurateurs à gérer leurs commandes, leurs stocks et leurs promotions, tout en augmentant leur visibilité en ligne. SwifEat contribue ainsi à dynamiser l’économie locale, à créer des opportunités pour les livreurs indépendants et à offrir un service de livraison sûr et efficace à tous les citoyens.</li></ol>', '1754672977280-ChatGPT Image 8 aoÃ»t 2025, 19_09_10.png', '2025-07-09 16:56:57', '2025-08-13 18:03:13', 'swifeat-livraison-intelligente-de-nourriture');

-- --------------------------------------------------------

--
-- Structure de la table `rapports`
--

CREATE TABLE `rapports` (
  `id` int(11) NOT NULL,
  `annee` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `sousTitre` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `rapports`
--

INSERT INTO `rapports` (`id`, `annee`, `titre`, `sousTitre`, `description`, `icone`, `createdAt`, `updatedAt`, `slug`) VALUES
(3, '2024', 'Analyse de l’écosystème numérique local', 'Étude stratégique sur les obstacles structurels, les besoins en infrastructures numériques et les opportunités concrètes pour faire émerger des startups technologiques solides et durables dans notre région.', '<p>Dans ce rapport, nous dévoilons un diagnostic complet de l’écosystème numérique local et régional. Les données présentées mettent en évidence les principaux freins rencontrés par nos incubés, notamment l’accès limité au financement, la fracture numérique et le manque de compétences spécialisées. Nous y proposons des pistes d’action concrètes pour améliorer l’environnement entrepreneurial numérique : renforcement des réseaux de mentors, accès à la connectivité haut débit, création de hubs techniques et partenariats avec des acteurs technologiques internationaux.</p>', '1752066904463-taxes_mensuelles.xlsx', '2025-07-09 13:09:30', '2025-07-09 13:15:04', 'analyse-de-lecosysteme-numerique-local'),
(4, '2024', 'Bilan Genre & Inclusion 2024', 'État des lieux complet sur nos actions, résultats et perspectives en matière de genre, équité et inclusion, mettant en avant les réussites, les témoignages et les engagements à long terme de M-HUB.', '<p>Le Bilan Genre &amp; Inclusion 2024 dresse un panorama des initiatives concrètes menées pour promouvoir la participation active des femmes, des jeunes filles et des groupes sous-représentés dans l’entrepreneuriat. Le rapport met en avant des indicateurs précis sur la proportion de femmes incubées, les formations spécialisées, le mentorat au féminin et les mesures prises pour lever les freins structurels. Vous y trouverez aussi les témoignages inspirants de bénéficiaires, ainsi que notre feuille de route pour renforcer encore plus la parité et l’égalité des chances au sein de notre communauté.</p>', '1752066898473-SerdiPay-Presentation-OffreMarchande.pdf', '2025-07-09 13:09:57', '2025-07-09 13:14:58', 'bilan-genre-inclusion-2024');

-- --------------------------------------------------------

--
-- Structure de la table `realisations`
--

CREATE TABLE `realisations` (
  `id` int(11) NOT NULL,
  `annee` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `sousTitre` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `realisations`
--

INSERT INTO `realisations` (`id`, `annee`, `titre`, `sousTitre`, `description`, `icone`, `createdAt`, `updatedAt`, `slug`) VALUES
(4, '2025', 'Mise en place des fonctionnalités de sécurité avancées', 'Des outils technologiques pour rassurer et protéger nos utilisateurs à chaque trajet.', '<p>Parce que la sécurité est au cœur de notre engagement, SWIFTRIDE a intégré un bouquet de fonctionnalités innovantes : bouton d’alerte SOS, partage de trajet en temps réel avec ses proches, historique des courses, vérification complète des profils chauffeurs et système de traçabilité intégré.</p><p> Cette réalisation a été rendue possible grâce à un partenariat étroit avec les autorités locales et des experts en cybersécurité pour garantir la confidentialité et la protection des données. Aujourd’hui, nos passagers se déplacent avec l’assurance que chaque trajet est suivi, enregistré et sécurisé, contribuant ainsi à renforcer la confiance dans notre plateforme.</p>', '1752332543960-istockphoto-1075599562-612x612.jpg', '2025-07-09 12:26:27', '2025-07-12 15:02:23', 'un-reseau-de-30-mentors-engages'),
(5, '2025', 'Déploiement du réseau de chauffeurs partenaires', 'Former, équiper et accompagner une nouvelle génération de chauffeurs responsables et connectés.', '<p>L’un des piliers de SWIFTRIDE est la qualité et la fiabilité de son réseau de chauffeurs. Notre équipe a finalisé un vaste programme de recrutement et de formation, en étroite collaboration avec des syndicats de transport urbain et des associations de conducteurs.</p><p> Chaque partenaire est désormais équipé d’outils numériques pour gérer ses courses, suivre ses revenus et garantir un service sécurisé aux passagers. Cette réalisation s’accompagne aussi d’un système de suivi et de notation pour encourager l’excellence et la confiance entre conducteurs et clients. Nous sommes fiers de contribuer à la professionnalisation du secteur du transport urbain.</p>', '1752332416628-realisation2.png', '2025-07-09 12:27:01', '2025-07-12 15:00:16', 'un-partenariat-strategique-avec-5-investisseurs-cles'),
(7, '2025', 'Lancement officiel de l’application SWIFTRIDE', 'Une étape clé pour transformer la mobilité urbaine en Afrique, avec une solution innovante, locale et sécurisée.', '<p>Après plusieurs mois de recherche, de développement et de tests sur le terrain, SWIFTRIDE a officiellement été lancée dans les grandes villes pilotes. Cette réalisation marque un tournant pour la mobilité urbaine : elle offre aux citoyens une alternative moderne, connectée et fiable pour leurs déplacements quotidiens.</p><p> Les premiers retours des utilisateurs et des chauffeurs partenaires sont très positifs, mettant en avant la simplicité d’utilisation de l’application, la réactivité du service client et l’impact direct sur la sécurité. Cette étape concrétise la vision de notre équipe : proposer une plateforme technologique qui améliore réellement la vie des communautés urbaines.</p>', '1752332330608-realisation1.png', '2025-07-12 14:55:36', '2025-07-12 14:58:50', 'lancement-officiel-de-lapplication-swiftride');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `nom`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', '2025-05-10 19:54:53', '2025-05-10 19:54:53'),
(2, 'Utilisateur', '2025-05-10 19:54:53', '2025-05-10 19:54:53'),
(3, 'Formateur', '2025-05-10 19:54:53', '2025-06-20 15:32:33');

-- --------------------------------------------------------

--
-- Structure de la table `secteurs`
--

CREATE TABLE `secteurs` (
  `id` int(11) NOT NULL,
  `nomSecteur` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `secteurs`
--

INSERT INTO `secteurs` (`id`, `nomSecteur`, `createdAt`, `updatedAt`) VALUES
(1, 'Numérique', '2025-07-09 14:55:06', '2025-07-09 14:55:06'),
(3, 'Mobilité urbaine et transport', '2025-07-09 14:55:37', '2025-07-12 15:22:07');

-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20250430214907-create-roles.js'),
('20250430215005-create-users.js'),
('20250507153252-create-sites.js'),
('20250509195255-create-password_resets.js'),
('20250628115434-create-valeurs.js'),
('20250628123535-create-choix.js'),
('20250628123826-create-services.js'),
('20250628124146-create-galeries.js'),
('20250628124445-create-videos.js'),
('20250628124921-create-partenaires.js'),
('20250628125337-create-realisations.js'),
('20250628125907-create-rapports.js'),
('20250628130203-create-tugs.js'),
('20250628130553-create-categories.js'),
('20250628131211-create-blogs.js'),
('20250628132026-create-teams.js'),
('20250628133045-create-offres.js'),
('20250628134919-create-secteurs.js'),
('20250628135111-create-projets.js'),
('20250628141750-create-carousels.js'),
('20250628142840-create-basics.js'),
('20250712131121-create-faqs.js'),
('20250721115736-create-fonctionalites.js');

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `services`
--

INSERT INTO `services` (`id`, `nom`, `titre`, `description`, `icone`, `createdAt`, `updatedAt`, `slug`) VALUES
(1, 'Location de Véhicules', 'Louez facilement un véhicule adapté à vos besoins, que ce soit pour un déplacement ponctuel, une journée complète ou plusieurs jours, avec la flexibilité et la sécurité SWIFTRIDE.', '<p>Avec notre service de location de véhicules, SWIFTRIDE répond à tous vos besoins de mobilité ponctuelle ou prolongée. Vous pouvez réserver un véhicule fiable, propre et parfaitement entretenu, choisi parmi notre flotte de voitures adaptées à différents usages : déplacements professionnels, événements privés, sorties en famille ou escapades le week-end. Nos chauffeurs partenaires peuvent également assurer la conduite si vous le souhaitez, pour un maximum de confort et de tranquillité. Le processus est simple et transparent : vérifiez la disponibilité, choisissez vos options, estimez le coût et réglez via Mobile Money, carte bancaire ou portefeuille électronique SWIFTRIDE. Notre objectif est de rendre la location de véhicule plus simple, plus sécurisée et plus accessible, avec un accompagnement et une assistance 24h/24.</p>', 'fas fa-car-side', '2025-07-10 12:41:22', '2025-09-26 11:37:39', 'location-de-vehicules'),
(2, 'Bouton SOS d’Urgence', 'Restez maître de votre sécurité avec un bouton SOS accessible en un clic pour alerter nos équipes et vos contacts en cas d’urgence.', '<p>Parce que chaque seconde compte en cas d’imprévu, SWIFTRIDE a intégré un bouton SOS directement dans son application. En cas de problème lors de votre trajet, vous pouvez déclencher une alerte instantanée qui avertit notre centre d’assistance et vos contacts de confiance. Notre équipe dédiée réagit immédiatement pour coordonner l’assistance nécessaire et s’assurer de votre sécurité. Cette fonctionnalité renforce la confiance et rassure nos utilisateurs qui savent qu’ils ne sont jamais seuls, même dans les situations délicates.</p>', 'fas fa-exclamation-triangle', '2025-07-10 12:42:06', '2025-09-26 11:37:37', 'bouton-sos-durgence'),
(3, 'Partage de Trajet Sécurisé', 'Gardez vos proches rassurés grâce à la fonction de partage de trajet qui vous permet d’envoyer votre position et l’état de votre course en temps réel.', '<p>La sécurité de nos utilisateurs est au cœur de notre mission. Avec la fonctionnalité de partage de trajet, vous pouvez informer vos proches de votre localisation et du suivi de votre course en temps réel. À chaque étape, ils reçoivent les informations nécessaires pour s’assurer que tout se passe bien. Cette fonctionnalité est particulièrement utile lors de trajets de nuit ou dans des zones moins familières. Combinée au bouton SOS et à l’identification complète des chauffeurs, elle fait de SWIFTRIDE l’une des solutions de transport les plus sécurisées du marché.</p>', 'fas fa-user-shield', '2025-07-10 12:42:41', '2025-09-26 11:37:35', 'partage-de-trajet-securise'),
(4, 'Réservation à l’Avance', 'Planifiez vos trajets à l’avance pour garantir votre tranquillité, même lors des périodes de forte demande ou pour des événements particuliers.', '<p>Ne laissez rien au hasard ! SWIFTRIDE vous offre la possibilité de réserver votre taxi ou moto à l’avance pour vos rendez-vous, transferts aéroport ou sorties importantes. Indiquez simplement l’heure et le lieu souhaités et soyez assuré que votre chauffeur sera ponctuel et prêt. Notre système vous envoie des rappels et notifications pour que vous restiez informé en temps réel. Cette option est idéale pour ceux qui veulent éviter les imprévus et s’assurer un transport fiable même lors des pics de circulation ou des horaires atypiques.</p>', 'fas fa-calendar-check', '2025-07-10 12:43:28', '2025-09-26 11:37:34', 'reservation-a-lavance'),
(5, 'Véhicule Premium', 'Réservez un véhicule premium pour vos déplacements professionnels ou privés et bénéficiez d’un service haut de gamme avec confort et tranquillité.', '<p>Pour vos trajets importants, vos rendez-vous professionnels ou vos moments spéciaux, SWIFTRIDE met à votre disposition une flotte de véhicules premium. Nos chauffeurs expérimentés vous garantissent ponctualité, discrétion et courtoisie. Les véhicules sont soigneusement sélectionnés pour leur confort et leur propreté. Vous profitez du même niveau de sécurité que pour nos autres services, avec l’identification des chauffeurs et le suivi temps réel. Le tout est accessible directement via l’application, avec une estimation de tarif claire et des options de paiement multiples. Voyagez avec style et sérénité.</p>', 'fas fa-car', '2025-07-10 12:44:10', '2025-09-26 11:37:31', 'vehicule-premium'),
(6, 'Commande de Moto Taxi', 'Profitez d’un service de moto taxi rapide et pratique pour éviter les embouteillages tout en gardant le contrôle sur votre sécurité et vos trajets.', '<p>Dans les villes à forte densité de circulation, la moto taxi est une solution idéale pour gagner du temps et contourner les embouteillages. SWIFTRIDE vous permet de commander une moto taxi fiable, conduite par un chauffeur formé et enregistré. Vous suivez votre moto en temps réel, partagez votre trajet avec vos proches et accédez à toutes les informations sur le conducteur. Le paiement est simple et flexible : Mobile Money, carte bancaire ou portefeuille électronique SWIFTRIDE. Notre objectif : rendre vos déplacements aussi rapides que sûrs, même aux heures de pointe.</p>', 'fas fa-motorcycle', '2025-07-10 12:44:46', '2025-09-26 11:37:29', 'commande-de-moto-taxi'),
(7, 'Commande de Taxi', 'Commandez facilement un taxi sécurisé, suivez votre chauffeur en temps réel et voyagez l’esprit tranquille où que vous soyez, même dans les grandes agglomérations.', '<p>Avec SWIFTRIDE, commander un taxi n’a jamais été aussi simple ni aussi sécurisé. Fini les longues attentes au coin de la rue ou les négociations sans fin. Notre application vous connecte instantanément au chauffeur le plus proche, identifié et validé par nos équipes. Grâce au suivi GPS en temps réel, vous savez exactement où se trouve votre véhicule et quand il arrivera. Vous bénéficiez d’une estimation transparente du prix de votre trajet avant même de monter à bord. Chaque course est enregistrée, traçable et évaluable, pour une expérience de mobilité fiable et rassurante, jour et nuit.</p>', 'fas fa-taxi', '2025-07-10 12:45:22', '2025-09-26 11:37:27', 'commande-de-taxi');

-- --------------------------------------------------------

--
-- Structure de la table `sites`
--

CREATE TABLE `sites` (
  `id` int(11) NOT NULL,
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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `sites`
--

INSERT INTO `sites` (`id`, `nom`, `description`, `email`, `adresse`, `tel1`, `tel2`, `tel3`, `token`, `about`, `logo`, `facebook`, `linkedin`, `twitter`, `youtube`, `whatsapp`, `mission`, `objectif`, `politique`, `condition`, `createdAt`, `updatedAt`) VALUES
(3, 'SwiftRide', '<p><strong>SWIFTRIDE – Bougez intelligemment, vivez en sécurité.</strong></p><p>Plus qu’une simple application, SWIFTRIDE est une solution intégrée qui vise à améliorer la mobilité urbaine grâce à une approche centrée sur l’utilisateur.</p><p>Notre plateforme permet de commander un taxi ou une moto en quelques clics, de suivre le trajet en temps réel, de partager sa position pour rassurer ses proches, et de payer selon le mode de paiement qui vous convient.</p><p>L’innovation est au cœur de notre modèle : système de recommandations, itinéraires optimisés, support client réactif, tableau de bord personnalisé et nouvelles fonctionnalités pour répondre aux besoins grandissants des grandes agglomérations.</p><p>En collaborant avec des chauffeurs partenaires engagés, des acteurs publics et des entreprises technologiques, nous contribuons à une mobilité plus efficace, plus humaine et plus durable.</p>', 'contact@swiftride.com', 'Goma quartier katindo avenue de la frontière n°54', '+243817883541', '243997345774', '243843301387', NULL, '<p>Simplifiez vos déplacements en toute sécurité. Commandez votre taxi ou moto en un clic, à tout moment.</p>', '1752333674687-logo.png', 'https://web.facebook.com/Dream-of-drc-114107447382924', 'https://www.linkedin.com/in/dream-of-drc-startup-872765217/', 'https://twitter.com/drc_dream', NULL, NULL, '<p><strong>Notre mission est de rendre la mobilité urbaine plus intelligente, accessible et sécurisée pour tous.</strong></p><p>Nous mettons la technologie au service de chaque trajet pour garantir confort, sécurité et transparence. En soutenant nos&', '<p><strong>Notre objectif est d’accompagner la transformation des villes africaines grâce à une solution de transport adaptée, fiable et évolutive.</strong></p><p>Nous visons à couvrir progressivement plusieurs villes, à développer de nouvelles fonct', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">SwiftRide respecte la vie privée de ses utilisateurs. Cette application ne collecte ni ne partage vos informations personnelles sans votre consentement explicite.</span></p><h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">1. Données collectées</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Nous collectons les données suivantes uniquement pour permettre le bon fonctionnement de l’application :</span></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Position géographique (pour localiser votre point de départ/destination)</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Adresse email et nom d’utilisateur (lors de l’inscription)</span></li></ol><h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">2. Utilisation des données</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Ces données sont utilisées uniquement pour :</span></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Fournir les services de transport demandés</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Améliorer la qualité de service</span></li></ol><h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">3. Partage des données</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Nous ne partageons aucune donnée personnelle avec des tiers sans votre consentement.</span></p><h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">4. Sécurité</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Vos données sont stockées de manière sécurisée sur nos serveurs. Nous appliquons des mesures strictes de protection des données.</span></p><h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">5. Suppression de compte et données personnelles</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Pour demander la suppression de votre compte SwiftRide et de toutes les données associées, veuillez nous contacter à l’adresse suivante : </span><u style=\"background-color: rgb(255, 255, 255); color: rgb(13, 110, 253);\"><a href=\"mailto:support@swiftride.com\" rel=\"noopener noreferrer\" target=\"_blank\">support@swiftride.com</a></u><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">.</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Les données supprimées comprennent notamment :</span></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Votre profil (nom, email, numéro de téléphone)</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">L’historique des trajets</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Les informations de paiement et de facturation</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Toute autre donnée d’utilisation liée à votre compte</span></li></ol><p><br></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Vous pouvez également demander la suppression </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">partielle</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\"> de vos données personnelles (par exemple, l\'historique de trajets uniquement), sans avoir à supprimer votre compte. Pour cela, veuillez contacter notre support à la même adresse.</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Nous nous engageons à supprimer les données demandées dans un délai maximal de </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">90 jours</strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\"> à compter de la réception de votre demande, sauf en cas d’obligation légale ou de nécessité de sécurité empêchant la suppression immédiate.</span></p><h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">6. Contact</span></h2><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(33, 37, 41);\">Pour toute autre question concernant cette politique, contactez-nous à : </span><u style=\"background-color: rgb(255, 255, 255); color: rgb(13, 110, 253);\"><a href=\"mailto:sumailiroger681@gmail.com\" rel=\"noopener noreferrer\" target=\"_blank\">info@swiftride.com</a></u></p>', '<p><strong>L’utilisation de l’application SWIFTRIDE implique l’acceptation de nos conditions générales d’utilisation.</strong></p><p>Celles-ci précisent les droits et obligations de chaque partie : utilisateurs, chauffeurs partenaires et administrateurs de la plateforme.</p><p>Nos conditions encadrent notamment la réservation, l’annulation, le paiement, la notation des trajets, ainsi que les responsabilités en matière de sécurité et de respect mutuel.</p><p>Tout manquement aux règles de conduite ou tentative de fraude peut entraîner la suspension ou la résiliation du compte utilisateur ou partenaire.</p><ol><li data-list=\"ordered\"><span class=\"ql-ui\" contenteditable=\"false\"></span> Nous encourageons chaque membre de la communauté SWIFTRIDE à lire attentivement nos CGU afin de garantir une expérience fluide et équitable pour tous.</li></ol>', '2025-06-17 19:49:43', '2025-08-13 18:20:09');

-- --------------------------------------------------------

--
-- Structure de la table `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `fonction` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `teams`
--

INSERT INTO `teams` (`id`, `nom`, `fonction`, `email`, `telephone`, `facebook`, `twitter`, `linkedin`, `logo`, `createdAt`, `updatedAt`) VALUES
(1, 'Roger Sumaili', 'Coach Chargé des affaires numériques', 'sumailiroger681@gmail.com', '+243996618763', 'https://web.facebook.com/Dream-of-drc-114107447382924', 'https://twitter.com/drc_dream', 'https://www.linkedin.com/in/dream-of-drc-startup-872765217/', '1752070889720-Team2.png', '2025-07-09 14:10:07', '2025-07-09 14:21:29'),
(2, 'Miradi Drey brenda', 'Chargé d\'administration et finance', 'miradi@gmail.com', '+243976618769', '', '', 'https://www.linkedin.com/in/dream-of-drc-startup-872765217/', '1752070903019-team3.png', '2025-07-09 14:11:18', '2025-08-09 15:44:15'),
(3, 'Benit Bahati smith', 'Expérience Client', 'benitbahati@gmail.com', '+243996618763', 'https://web.facebook.com/Dream-of-drc-114107447382924', 'https://twitter.com/drc_dream', 'https://www.linkedin.com/in/dream-of-drc-startup-872765217/', '1752071087918-team1.png', '2025-07-09 14:12:19', '2025-08-09 15:00:21'),
(5, 'Élodie N\'Guessan', 'Expérience Client: Spécialiste UX/UI, elle conçoit l\'expérience utilisateur la plus intuitive d\'Afrique.', 'admin@gmail.com', '+243 817 883 541', 'https://web.facebook.com/Dream-of-drc-114107447382924', 'https://twitter.com/drc_dream', 'https://www.linkedin.com/in/dream-of-drc-startup-872765217/', '1754752271829-istockphoto-2207541639-612x612.webp', '2025-08-09 15:01:01', '2025-08-09 15:11:11'),
(6, 'Amina Diallo', 'Directrice Technique: Architecte système primée, spécialiste en IA et sécurité des applications mobiles.', 'drey@gmail.com', '+243996618763', 'https://web.facebook.com/Dream-of-drc-114107447382924', NULL, NULL, '1754752194402-photo-1573496359142-b8d87734a5a2.avif', '2025-08-09 15:01:43', '2025-08-09 15:09:54'),
(7, 'Marc Kouamé', 'Responsable Sécurité: Ancien officier de police, expert en systèmes de protection des utilisateurs.', 'drey@gmail.com', '+243 817 883 541', NULL, NULL, 'https://www.linkedin.com/in/dream-of-drc-startup-872765217/', '1754752185595-photo-1580489944761-15a19d654956.avif', '2025-08-09 15:02:22', '2025-08-09 15:09:45'),
(8, 'Jean Koffi', 'CEO & Fondateur: Ancien de Google Afrique, visionnaire de la mobilité urbaine avec 15 ans d\'expérience.', 'jean@gmail.com', '+243996618763', 'https://web.facebook.com/Dream-of-drc-114107447382924', NULL, 'https://www.linkedin.com/in/dream-of-drc-startup-872765217/', '1754752153115-photo-1560250097-0b93528c311a.avif', '2025-08-09 15:04:22', '2025-08-24 10:24:52');

-- --------------------------------------------------------

--
-- Structure de la table `tugs`
--

CREATE TABLE `tugs` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `tugs`
--

INSERT INTO `tugs` (`id`, `titre`, `createdAt`, `updatedAt`) VALUES
(2, 'super article', '2025-07-08 16:13:03', '2025-07-08 16:13:03'),
(3, 'Formations', '2025-07-08 16:13:31', '2025-07-08 16:17:46'),
(5, 'Programmes d\'incubation', '2025-07-08 16:18:12', '2025-07-08 16:18:12'),
(6, 'Événements & Ateliers', '2025-07-08 16:18:19', '2025-07-08 16:18:19'),
(7, 'Success Stories', '2025-07-08 16:18:26', '2025-07-08 16:18:26'),
(8, 'Partenaires & Investisseurs', '2025-07-08 16:18:32', '2025-07-08 16:18:32'),
(9, 'taxi urbain', '2025-07-12 13:33:52', '2025-07-12 13:33:52'),
(10, 'moto taxi sécurisé', '2025-07-12 13:33:56', '2025-07-12 13:33:56'),
(11, 'transport urbain intelligent', '2025-07-12 13:34:04', '2025-07-12 13:34:04'),
(12, 'application de mobilité Afrique', '2025-07-12 13:34:09', '2025-07-12 13:34:09'),
(13, 'bouton SOS urgence', '2025-07-12 13:34:17', '2025-07-12 13:34:17'),
(14, 'suivi trajet temps réel', '2025-07-12 13:34:22', '2025-07-12 13:34:22'),
(15, 'SWIFTRIDE taxi moto', '2025-07-12 13:34:31', '2025-07-12 13:34:31'),
(16, 'paiement mobile taxi', '2025-07-12 13:34:38', '2025-07-12 13:34:38'),
(17, 'code promo taxi', '2025-07-12 13:34:45', '2025-07-12 13:34:45'),
(18, 'service premium taxi', '2025-07-12 13:34:51', '2025-07-12 13:34:51');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT 'avatar.png',
  `passwords` varchar(255) DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `idRole` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `telephone`, `avatar`, `passwords`, `sexe`, `idRole`, `createdAt`, `updatedAt`) VALUES
(1, 'Roger Sumaili  patrona', 'admin@demo.com', '+243817883541', '1750434625302-testimonial-1.jpg', '$2b$10$b5bpU27EUjVG1zp6HCkEDeywAxZXVohcqs7CYreBzwJr1P1ZAGxN6', 'M', 1, '2025-05-10 19:55:12', '2025-08-12 17:15:26'),
(2, 'Alice Admin', 'alice@demo.com', '0123456789', 'avatar.png', '$2b$10$h7rB3LCiJ/EmAppcto8AxOJYKrofxf6GcTra5HW04Br4p9WrUw0wu', 'F', 1, '2025-05-10 19:55:12', '2025-06-20 16:52:02'),
(3, 'Bob Utilisateur', 'bob@demo.com', '0987654321', 'avatar.png', '$2b$10$HkLYCs2NYwrWatRD55qEhOd/1jVqL93Dgb9kiB20iY2MGv02cryMq', 'M', 2, '2025-05-10 19:55:12', '2025-05-10 19:55:12'),
(4, 'Julie poma', 'julieboma@demo.com', '0987654321', 'avatar.png', '$2b$10$HkLYCs2NYwrWatRD55qEhOd/1jVqL93Dgb9kiB20iY2MGv02cryMq', 'F', 2, '2025-05-10 19:55:12', '2025-05-10 19:55:12'),
(5, 'Julienne tumba', 'julienne@gmail.com', '+243996618763', '1750434541903-team-member-2.jpg', '$2b$10$8rNbDZVreX2VrrLaxOJoMebFAVu4S655eOPNOnFdhGRVWuiuYzaNu', 'F', 3, '2025-06-20 14:05:34', '2025-06-20 16:50:29'),
(6, 'Djimi vionde tshoy', 'djimy@gmail.com', '+243996618763', 'avatar.png', '$2b$10$Esvmo6dWczIGhNG1m4JgTelR52ImwWfPqPBd2KStQViEBotkHHzM2', 'M', 2, '2025-06-20 15:51:29', '2025-06-20 15:51:29');

-- --------------------------------------------------------

--
-- Structure de la table `valeurs`
--

CREATE TABLE `valeurs` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `valeurs`
--

INSERT INTO `valeurs` (`id`, `titre`, `description`, `icone`, `createdAt`, `updatedAt`) VALUES
(2, 'Impact positif', 'Nous croyons qu’une mobilité intelligente contribue à une meilleure gouvernance urbaine et à la réduction des embouteillages. Grâce à la data, nous aidons les villes à optimiser la circulation et à réduire l’impact environnemental.', 'fas fa-leaf', '2025-07-10 13:13:11', '2025-07-12 13:58:06'),
(3, 'Communauté & Confiance', 'SWIFTRIDE, c’est avant tout une communauté de passagers et de chauffeurs partenaires qui partagent des valeurs de confiance, de respect et de professionnalisme. Nous cultivons une relation de proximité pour construire ensemble une mobilité plus sûre.', 'fas fa-users', '2025-07-10 13:13:36', '2025-07-12 13:57:45'),
(4, 'Simplicité & Confort', 'Commander un taxi ne devrait jamais être un casse-tête. Avec SWIFTRIDE, tout est fait pour vous simplifier la vie : estimation de prix à l’avance, interface intuitive, suivi de votre véhicule sur la carte et notation des chauffeurs.', 'fas fa-smile', '2025-07-10 13:15:25', '2025-07-12 13:57:23'),
(6, 'Sécurité avant tout', 'Votre protection est notre priorité absolue. Chaque fonctionnalité de SWIFTRIDE est pensée pour garantir la sécurité des passagers et des chauffeurs : de l’identification complète des conducteurs au bouton d’alerte SOS en passant par le partage de trajet avec vos proches.', 'fas fa-shield-alt', '2025-07-10 13:16:17', '2025-08-24 10:22:32');

-- --------------------------------------------------------

--
-- Structure de la table `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `urlYoutube` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `videos`
--

INSERT INTO `videos` (`id`, `titre`, `urlYoutube`, `description`, `createdAt`, `updatedAt`, `status`) VALUES
(1, 'Bioman Courageux (Clip officiel )', 'https://www.youtube.com/embed/wJcz3iZAsmU?si=sEQ3JjuA6YySvKI_', 'BIOMAN - COURAGEUX \n\nProduction: @agencektk\n📌Chanteur/Auteur/Compositeur: Bioman\nManager: ON AIR By Beathe Malga\nBeatmeker: Jordan Strauss\nRéalisateur:  Dan Scott\nMix & mastering : Dj Vnr\nMakeup & coiffure: Mim’s Beauty studio\nStyliste : Miryame Manck\n\nS\'abonner à la chaine 👉 https://studio.youtube.com/video/wJcz...\n\nRetrouve BIOMAN sur : \n➡ Instagram :  / biomanofficiel  \n➡ Facebook : Bioman Badman Officiel\nwww.tiktok.com/@bioman_officiel\n\n📌Booking : +242066115391', '2025-07-10 18:53:21', '2025-07-10 18:53:21', 0),
(2, ' Ajouter à la file d\'attente Je publie mon jeu Flutter sur l\'Apple Store', 'https://www.youtube.com/embed/l92fBVWDBDs?si=nfZa37b2XncLUbLJ', '<p><span style=\"color: rgb(19, 19, 19);\">Conseils et formations : 👉 </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbVBNZXVlNGFMdms2SmFBaGNielM3Q3RPQTFLZ3xBQ3Jtc0trYXVLV0MtalNhTUt2ekcyLXY2c2pZY0Q3anp1MmUwQ0dpVGFkb2dQNWdWV2drdjZvNkxIT0E2cE5GVW5xQ2hnVkE1ZXBZNDJZM3RNSUFkX0EtUEticTZ0YkdObExZLXA5UWdhU3p6Z2RicEdRQUxuNA&amp;q=https%3A%2F%2Fnico-develop.com%2Fformations&amp;v=l92fBVWDBDs\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">https://nico-develop.com/formations</a></p><p>Transcription</p>', '2025-07-10 19:01:36', '2025-07-10 19:02:33', 0),
(3, 'How to Submit Your iOS App to the App Store (Step-by-Step Xcode & App Store Connect Guide 2025)', 'https://www.youtube.com/embed/Qgq6jsRtfbA?si=hdtcJZMIJ48DVLI9', '<p><span style=\"color: rgb(19, 19, 19);\">🎉 Just finished your iOS app? Time to ship it. In this video, I walk you through every step to submit your app to the App Store in 2025, using Xcode and App Store Connect. </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbnJvYmdDcXlidFV1RHhaUmZfU0dsbUJMWEc1QXxBQ3Jtc0tud1laa0JJRkU5TkJxc2FCQVIxa2xBZGZXaHM4TWNOajZWSlpfbE1TV29jNmdnSGtSeXBfYnBRQXU0aFcwNGtKTW13UTItbnFGQVB5YS16OF83QjFXLW9IdUJPS1RjOWtWeElYY1V0bEpOWjNlYTROOA&amp;q=https%3A%2F%2Fdeveloper.apple.com%2F&amp;v=Qgq6jsRtfbA\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">https://developer.apple.com/</a><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbHBhNzF1c3g3cFA4c1dGSWxwaDZIeFc4MHBZZ3xBQ3Jtc0tsc2dpMDRHd0NtY3dBWFpRRndjREV6SWRielNRR180ak54MnkwcXZZaC0tdDlxX1Nad2hkRldCWGdqeU1EVmtQbEtaZDBnSVdKSGJmWVFlc3diaVFmVXRVUENBVVEyMDdxNUxkVzVjdlU0NkFBX01fdw&amp;q=https%3A%2F%2Fappstoreconnect.apple.com%2Flogin&amp;v=Qgq6jsRtfbA\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">https://appstoreconnect.apple.com/login</a><span style=\"color: rgb(19, 19, 19);\"> For In app Purchases (IAP) I highly recommend checking out Revenue Cat\'s Guide: </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbC14WVNkb1hEZ3pUaDFrSkZkSzJOMnh1eVBXZ3xBQ3Jtc0tuSlVNalVscS04akxFN2xvSHBMdUNiaFVEaDduS216dDJLV29JaTJaOWplbHE5azhOZjk0NlAyaTlWYnlibXdNZ3V6MjBXRFFaa1FaZy1hZVAtSTh0R21qaVdXOUFWbU9sRW9yX2xGZFlNak1vZUxDWQ&amp;q=https%3A%2F%2Fwww.revenuecat.com%2Fdocs%2Fgetting-started%2Fentitlements%2Fios-products&amp;v=Qgq6jsRtfbA\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">https://www.revenuecat.com/docs/getti...</a><span style=\"color: rgb(19, 19, 19);\"> Whether you’re a first-time indie dev or just need a refresher, this guide will help you: 🧠 What You’ll Learn: ✅ How to archive &amp; upload your app in Xcode ✅ How to create your App Store listing &amp; fill in metadata ✅ Pricing, screenshots, privacy info, and more 💡 Bonus tips throughout the video for avoiding common rejection issues! In App Purchases Video: </span><a href=\"https://www.youtube.com/watch?v=IMYw5iDxI48\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0.05);\">  <img src=\"https://www.gstatic.com/youtube/img/watch/yt_favicon_ringo2.png\"> • In App Purchases in SwiftUI with RevenueCa...  </a><span style=\"color: rgb(19, 19, 19);\"> 🎯 By the end, you’ll go from “build complete” to “submitted for review” — with confidence. </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqa19XbTBMT2VMOS14aFA1LU1Ea0ZjLW1vZktid3xBQ3Jtc0tuZ2xrU0RETXlmT2FlUUEtX1dJb0E0aEQ1aEhoSng1dXFTdUtyVFVkZnNjS3dTLTZDcnJwUHQ3TGFIX3FHaTd3YnZXUmRkSTQzWUx4bDNxQjItTzlIT0hXbzh3UGE5eE1LOU5WdmtmenJDNkhta01wWQ&amp;q=https%3A%2F%2Fdeveloper.apple.com%2Fdistribute%2Fapp-review%2F&amp;v=Qgq6jsRtfbA\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">https://developer.apple.com/distribut...</a><span style=\"color: rgb(19, 19, 19);\"> 🔥 Download My Project Files &amp; More! 🔥 👉 </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqa1AyT2Yxd3F5ay03cUJaM2JWZ1VvbDZSWDhFUXxBQ3Jtc0trd2d0b2VoSE5YRHlaWUZla0w4cUJWeTRjZE9RQUZRSXZ4bVRUNExESGVUZm5saWw3OXg5SDMwb2dZYjFELTR6ZGRCOWdYWTJCaG1HSnhmMTE0VDh0MTFTM083UTlOb0JNaTgyUnJpUWVPRGJrbklVMA&amp;q=https%3A%2F%2Fndcswift.github.io%2FSwift-Projects%2F&amp;v=Qgq6jsRtfbA\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">https://ndcswift.github.io/Swift-Proj...</a><span style=\"color: rgb(19, 19, 19);\"> 👨‍💻 Join the Community: 👍 Like &amp; Subscribe for more Swift, Xcode, and indie dev tips. Timestamps: </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">00:00</a><span style=\"color: rgb(19, 19, 19);\"> – Intro: What We’re Covering </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=33s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">00:33</a><span style=\"color: rgb(19, 19, 19);\"> – Apple Developer Account Setup </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=88s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">01:28</a><span style=\"color: rgb(19, 19, 19);\"> – App Store Connect Overview </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=174s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">02:54</a><span style=\"color: rgb(19, 19, 19);\"> – Creating a New App Record </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=335s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">05:35</a><span style=\"color: rgb(19, 19, 19);\"> – Preparing Your Build in Xcode </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=398s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">06:38</a><span style=\"color: rgb(19, 19, 19);\"> – Uploading to App Store Connect </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=448s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">07:28</a><span style=\"color: rgb(19, 19, 19);\"> – Filling Out App Info </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=527s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">08:47</a><span style=\"color: rgb(19, 19, 19);\"> – Uploading Screenshots </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=605s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">10:05</a><span style=\"color: rgb(19, 19, 19);\"> – App MetaData cont\'d </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=724s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">12:04</a><span style=\"color: rgb(19, 19, 19);\"> – Selecting App Build </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=764s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">12:44</a><span style=\"color: rgb(19, 19, 19);\"> – App Review Information + Tips </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=884s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">14:44</a><span style=\"color: rgb(19, 19, 19);\"> – Pricing, Availability &amp; IAP </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=1031s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">17:11</a><span style=\"color: rgb(19, 19, 19);\"> – Submitting Your App for Review </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=1119s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">18:39</a><span style=\"color: rgb(19, 19, 19);\"> – How the app review went! </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=1161s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">19:21</a><span style=\"color: rgb(19, 19, 19);\"> – How to update app </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=1180s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">19:40</a><span style=\"color: rgb(19, 19, 19);\"> – App Store </span><a href=\"https://www.youtube.com/watch?v=Qgq6jsRtfbA&amp;t=1194s\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(6, 95, 212);\">19:54</a><span style=\"color: rgb(19, 19, 19);\"> – Wrap-Up + GOOD LUCK!</span></p>', '2025-07-10 19:06:48', '2025-07-10 19:06:48', 0),
(5, '5 signes que Dieu utilise quelqu\'un pour vous guérir', 'https://www.youtube.com/embed/p-JHTJtXRc4?si=vlAT538gYbggI_03', '<p><span style=\"background-color: rgba(0, 0, 0, 0.05); color: rgb(19, 19, 19);\">Signes que Dieu utilise quelqu\'un pour vous guérir révèle comment Dieu utilise souvent des personnes inattendues pour déclencher une guérison émotionnelle, réveiller des douleurs enfouies et apporter une clarté spirituelle.</span></p><p><span style=\"background-color: rgba(0, 0, 0, 0.05); color: rgb(19, 19, 19);\">Il ne s\'agit pas d\'une attirance fortuite, mais d\'une mission divine.</span></p><p><span style=\"background-color: rgba(0, 0, 0, 0.05); color: rgb(19, 19, 19);\">Lorsqu\'une personne entre dans votre vie et éveille des sentiments profonds, Dieu l\'utilise peut-être pour vous aider à voir ce qui a besoin de guérison dans votre cœur.</span></p><p><span style=\"background-color: rgba(0, 0, 0, 0.05); color: rgb(19, 19, 19);\">Sa présence peut être brève mais significative, forte dans le silence et puissante dans son impact.</span></p><p><span style=\"background-color: rgba(0, 0, 0, 0.05); color: rgb(19, 19, 19);\">Dieu utilise les gens pour atteindre ce que vous avez caché.</span></p>', '2025-08-09 14:43:43', '2025-08-09 14:43:43', 0),
(6, 'Whether you\'re an experienced iOS developer or just getting started, this video will provide you with a comprehensive overview on how Flutter works on iOS and how it can help you build beautiful apps.', 'https://www.youtube.com/embed/ceMsPBbcEGg?si=Jf0DEatuHf3L3aAB', '<p><span style=\"color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0.05);\">Whether you\'re an experienced iOS developer or just getting started, this video will provide you with a comprehensive overview on how Flutter works on iOS and how it can help you build beautiful apps. Learning Dart as a Swift developer → </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqa0x2eXZ6NXNicTFhaFd0OVEybC16N0JRdlMtUXxBQ3Jtc0tsMFdLcjRSXy1EM0lLMmFOdVBkZzdLUmhRYzdJR1B6UHE5SnBGYnlYTG9IVDJkUHJWMk9LdHFhNWdzSmRmdVNoTktLXzJqVlN4aHJEZHptMjVkbVA1SHNTMllkZ2VhZVJSNExYcTg5ek9lTERjOGdRVQ&amp;q=https%3A%2F%2Fgoo.gle%2F3DTBHNI&amp;v=ceMsPBbcEGg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit; background-color: rgba(0, 0, 0, 0.05);\">https://goo.gle/3DTBHNI</a><span style=\"color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0.05);\"> Flutter for SwiftUI Developers → </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbnhzSEs1cG1HcGN6VklnWURCNE01NlpnOVJJZ3xBQ3Jtc0tsQUdGYlRXSTV3MjR1c2VVdVgwVmJ5U19mX3ctang3OFZFSVVaS29zZllVSUtneUZhMzhUUXdTa3Q3bmYtMlhYRlg5TDZVVy1fNFNxcnpDaU8wdVpPLUtWYm5OTWJZTUZEUU9ZMXFEZzRiTmEzTlR1Yw&amp;q=https%3A%2F%2Fgoo.gle%2F3qw26y2&amp;v=ceMsPBbcEGg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit; background-color: rgba(0, 0, 0, 0.05);\">https://goo.gle/3qw26y2</a><span style=\"color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0.05);\"> ffigen package → </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqa2liNWRlbW9KRFVCOE1lZTZ1ZlhEMHdPZEYzQXxBQ3Jtc0tuZG5hWDVLX3dWdDdmZ2dQUW1kRWdqdmVoYW9kcHppd2hNVDFKTHR5WXpLVUNnODFfdDNJeEVldVlhZ3NDOGRZSExabVFDaDhWLTlNdDh2TjFNV0RHSldfUFlZTFRaVnZIZ2NVRjg2TnZRQUtEQklxVQ&amp;q=https%3A%2F%2Fgoo.gle%2F3qoTvgB&amp;v=ceMsPBbcEGg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit; background-color: rgba(0, 0, 0, 0.05);\">https://goo.gle/3qoTvgB</a><span style=\"color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0.05);\"> Object-C and Swift interop → </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbjdlSUZ1RVdfRTlwbTFaUG5HeDNGVmtBUUNid3xBQ3Jtc0ttdDZMWDlhVEhYVmUySkpodjNua3VLdVgxcFhlYm02S0pkTHV3YUxNRm9naU5iZF9HX1NwcXJiVVp2d2lOaTRFeFR2UjdTNjBYX3QwZnU5OXBhNUlud011cVRpY0lPYXVJdjFudmxaM1JpbHcyT3lkRQ&amp;q=https%3A%2F%2Fgoo.gle%2F456ZVzZ&amp;v=ceMsPBbcEGg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit; background-color: rgba(0, 0, 0, 0.05);\">https://goo.gle/456ZVzZ</a><span style=\"color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0.05);\"> Wonderous App → </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbU1jQV9zclNZQkxueXRwQS1qSGpPZmdqeGN4Z3xBQ3Jtc0trbjZDQWYxeGRKZEtjM3IxNXhfaUJrY1hjTmRDUDhUcXBvd1UxcjNfa2Y0WmRkSFlWMVFSaVpOWHpDTTNYVVB2cUxoTWEwMTBIOE5LemtTdzBvcUQ0cm1wWkxEbE9PX2Y1T3VyT2VsWDljNVBURm96SQ&amp;q=https%3A%2F%2Fgoo.gle%2F3KTcUvD&amp;v=ceMsPBbcEGg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit; background-color: rgba(0, 0, 0, 0.05);\">https://goo.gle/3KTcUvD</a><span style=\"color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0.05);\"> Begin learning Flutter → </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbEtQcGtzNTZyQW1BUHRjUkZLMUpHTmJZU01TQXxBQ3Jtc0tubjBjcVBYbnJOVWc3bDBLOF9uMTdtZHNUUENyZmJsS2piNTMxWld3RGhBSGhkT0FkRFVxbDJ2UTJveEtlUWowZlEzQUNxRUw1T210dE9ZUTB0NHZ1NnliYVJGRkRIVmJmSFpqWExvWEM3M0pBSEI1QQ&amp;q=https%3A%2F%2Fgoo.gle%2FLearnFlutter&amp;v=ceMsPBbcEGg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit; background-color: rgba(0, 0, 0, 0.05);\">https://goo.gle/LearnFlutter</a><span style=\"color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0.05);\"> Subscribe to Flutter → </span><a href=\"https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbTVzeHFHcnl4X1pOanBfVjJzYXFqaXE5UWwzQXxBQ3Jtc0traURicl9IRTgzSU13UDl1cEZMc1E5dzZlTHBrVGV2TkdZYUFtaWNLQ3NZRGdscnFqMlpRRnF0eXdPeVY5NGozT0J0VExoY0NGSGRFRVpTRmhNRF9tMlpmM0FoNENfMFh1UDdnNnNudGthWDdkaTdoYw&amp;q=https%3A%2F%2Fgoo.gle%2FFlutterYT&amp;v=ceMsPBbcEGg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit; background-color: rgba(0, 0, 0, 0.05);\">https://goo.gle/FlutterYT</a><span style=\"color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0.05);\"> </span></p>', '2025-08-09 14:45:32', '2025-08-09 17:12:25', 1),
(8, 'Déploiement complet de Node.js : NGINX, SSL avec Lets Encrypt', 'https://www.youtube.com/embed/oykl1Ih9pMg?si=9C_-b-uirRCvvtww', '<p><span style=\"color: rgb(19, 19, 19);\">Dans cette vidéo, nous allons déployer Node.js en utilisant PM2, un proxy inverse NGINX et un SSL gratuit de Lets Encrypt vers une droplet DigitalOcean.</span></p>', '2025-08-13 18:33:11', '2025-08-13 18:33:11', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `basics`
--
ALTER TABLE `basics`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `basic_info`
--
ALTER TABLE `basic_info`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCategory` (`idCategory`);

--
-- Index pour la table `carousels`
--
ALTER TABLE `carousels`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `choix`
--
ALTER TABLE `choix`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `fonctionalites`
--
ALTER TABLE `fonctionalites`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `galeries`
--
ALTER TABLE `galeries`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `offres`
--
ALTER TABLE `offres`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `partenaires`
--
ALTER TABLE `partenaires`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `projets`
--
ALTER TABLE `projets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idSecteur` (`idSecteur`);

--
-- Index pour la table `rapports`
--
ALTER TABLE `rapports`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `realisations`
--
ALTER TABLE `realisations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `secteurs`
--
ALTER TABLE `secteurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sites`
--
ALTER TABLE `sites`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tugs`
--
ALTER TABLE `tugs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idRole` (`idRole`);

--
-- Index pour la table `valeurs`
--
ALTER TABLE `valeurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `basics`
--
ALTER TABLE `basics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `basic_info`
--
ALTER TABLE `basic_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `carousels`
--
ALTER TABLE `carousels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `choix`
--
ALTER TABLE `choix`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `fonctionalites`
--
ALTER TABLE `fonctionalites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `galeries`
--
ALTER TABLE `galeries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `offres`
--
ALTER TABLE `offres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `partenaires`
--
ALTER TABLE `partenaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `password_resets`
--
ALTER TABLE `password_resets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `projets`
--
ALTER TABLE `projets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `rapports`
--
ALTER TABLE `rapports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `realisations`
--
ALTER TABLE `realisations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `secteurs`
--
ALTER TABLE `secteurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `sites`
--
ALTER TABLE `sites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `tugs`
--
ALTER TABLE `tugs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `valeurs`
--
ALTER TABLE `valeurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_10` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_100` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_101` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_102` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_103` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_104` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_105` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_106` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_107` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_108` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_109` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_11` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_110` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_111` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_112` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_113` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_114` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_115` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_116` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_117` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_118` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_119` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_12` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_120` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_121` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_122` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_123` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_124` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_125` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_126` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_127` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_128` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_129` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_13` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_130` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_131` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_132` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_133` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_134` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_135` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_136` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_137` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_138` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_139` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_14` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_140` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_141` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_142` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_143` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_144` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_145` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_146` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_147` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_148` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_149` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_15` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_150` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_151` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_152` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_153` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_154` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_155` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_156` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_157` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_158` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_159` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_16` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_160` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_161` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_162` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_163` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_164` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_165` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_166` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_167` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_168` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_169` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_17` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_170` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_171` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_172` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_173` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_174` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_175` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_176` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_177` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_178` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_179` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_18` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_180` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_181` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_182` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_183` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_184` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_185` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_186` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_187` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_188` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_189` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_19` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_190` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_191` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_192` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_193` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_194` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_195` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_196` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_197` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_198` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_199` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_2` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_20` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_200` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_201` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_202` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_203` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_204` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_205` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_206` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_207` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_208` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_209` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_21` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_210` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_211` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_212` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_213` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_214` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_215` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_216` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_217` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_218` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_219` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_22` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_220` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_221` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_222` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_223` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_224` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_225` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_226` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_227` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_228` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_229` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_23` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_230` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_231` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_232` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_233` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_234` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_235` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_236` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_237` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_238` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_239` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_24` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_240` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_241` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_242` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_243` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_244` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_245` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_246` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_247` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_248` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_249` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_25` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_250` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_251` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_252` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_253` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_254` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_255` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_256` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_257` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_258` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_259` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_26` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_260` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_261` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_262` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_263` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_264` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_265` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_266` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_267` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_268` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_269` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_27` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_270` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_271` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_272` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_273` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_274` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_275` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_276` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_277` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_278` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_279` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_28` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_280` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_281` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_282` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_283` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_284` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_285` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_286` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_287` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_288` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_289` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_29` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_290` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_291` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_292` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_293` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_294` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_295` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_296` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_297` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_298` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_299` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_3` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_30` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_300` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_301` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_302` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_303` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_304` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_305` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_306` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_307` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_308` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_309` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_31` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_310` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_311` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_312` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_313` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_314` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_315` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_316` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_317` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_318` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_319` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_32` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_320` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_321` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_322` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_323` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_324` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_325` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_326` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_327` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_328` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_329` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_33` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_330` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_331` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_332` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_333` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_334` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_335` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_336` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_337` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_338` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_339` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_34` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_340` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_341` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_342` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_343` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_344` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_345` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_346` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_347` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_348` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_349` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_35` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_350` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_351` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_352` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_353` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_354` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_355` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_356` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_357` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_358` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_359` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_36` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_360` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_361` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_362` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_363` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_364` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_365` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_366` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_367` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_368` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_369` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_37` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_370` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_371` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_372` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_373` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_374` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_375` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_376` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_377` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_378` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_379` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_38` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_380` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_381` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_382` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_383` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_384` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_385` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_386` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_387` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_388` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_389` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_39` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_390` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_391` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_392` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_393` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_394` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_395` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_396` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_397` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_398` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_399` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_4` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_40` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_400` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_401` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_402` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_403` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_404` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_405` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_406` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_407` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_408` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_409` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_41` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_410` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_411` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_412` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_413` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_414` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_415` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_416` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_417` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_418` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_419` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_42` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_420` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_421` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_422` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_423` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_424` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_425` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_426` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_427` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_428` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_429` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_43` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_430` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_431` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_432` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_433` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_434` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_435` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_436` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_437` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_438` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_439` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_44` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_440` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_441` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_442` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_443` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_444` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_445` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_446` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_447` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_448` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_449` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_45` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_450` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_451` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_452` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_453` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_454` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_455` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_456` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_457` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_458` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_459` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_46` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_460` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_461` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_462` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_463` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_464` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_465` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_466` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_467` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_468` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_469` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_47` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_470` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_471` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_472` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_473` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_474` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_475` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_476` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_477` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_478` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_479` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_48` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_480` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_481` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_482` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_483` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_484` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_485` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_486` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_487` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_488` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_489` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_49` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_490` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_491` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_492` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_493` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_494` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_495` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_496` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_497` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_498` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_499` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_5` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_50` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_500` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_501` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_502` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_503` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_504` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_505` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_506` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_507` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_508` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_509` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_51` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_510` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_511` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_512` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_513` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_514` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_515` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_516` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_517` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_518` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_519` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_52` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_520` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_521` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_522` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_523` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_524` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_525` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_526` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_527` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_528` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_529` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_53` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_530` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_531` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_532` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_533` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_534` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_535` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_536` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_537` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_538` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_539` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_54` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_540` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_541` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_542` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_543` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_544` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_545` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_546` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_547` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_548` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_549` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_55` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_550` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_551` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_552` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_553` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_554` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_555` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_556` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_557` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_558` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_559` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_56` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_560` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_561` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_562` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_563` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_564` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_565` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_566` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_567` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_568` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_569` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_57` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_570` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_571` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_572` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_573` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_574` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_575` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_576` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_577` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_578` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_579` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_58` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_580` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_581` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_582` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_583` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_584` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_585` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_59` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_6` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_60` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_61` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_62` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_63` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_64` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_65` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_66` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_67` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_68` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_69` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_7` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_70` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_71` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_72` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_73` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_74` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_75` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_76` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_77` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_78` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_79` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_8` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_80` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_81` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_82` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_83` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_84` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_85` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_86` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_87` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_88` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_89` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_9` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_90` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_91` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_92` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_93` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_94` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_95` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_96` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_97` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_98` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `blogs_ibfk_99` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Contraintes pour la table `projets`
--
ALTER TABLE `projets`
  ADD CONSTRAINT `projets_ibfk_1` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_10` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_100` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_101` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_102` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_103` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_104` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_105` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_106` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_107` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_108` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_109` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_11` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_110` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_111` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_112` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_113` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_114` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_115` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_116` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_117` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_118` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_119` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_12` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_120` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_121` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_122` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_123` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_124` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_125` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_126` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_127` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_128` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_129` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_13` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_130` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_131` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_132` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_133` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_134` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_135` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_136` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_137` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_138` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_139` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_14` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_140` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_141` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_142` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_143` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_144` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_145` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_146` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_147` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_148` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_149` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_15` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_150` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_151` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_152` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_153` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_154` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_155` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_156` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_157` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_158` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_159` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_16` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_160` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_161` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_162` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_163` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_164` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_165` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_166` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_167` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_168` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_169` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_17` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_170` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_171` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_172` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_173` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_174` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_175` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_176` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_177` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_178` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_179` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_18` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_180` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_181` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_182` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_183` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_184` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_185` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_186` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_187` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_188` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_189` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_19` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_190` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_191` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_192` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_193` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_194` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_195` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_196` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_197` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_198` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_199` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_2` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_20` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_200` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_201` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_202` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_203` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_204` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_205` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_206` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_207` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_208` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_209` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_21` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_210` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_211` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_212` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_213` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_214` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_215` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_216` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_217` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_218` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_219` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_22` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_220` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_221` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_222` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_223` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_224` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_225` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_226` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_227` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_228` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_229` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_23` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_230` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_231` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_232` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_233` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_234` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_235` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_236` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_237` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_238` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_239` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_24` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_240` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_241` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_242` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_243` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_244` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_245` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_246` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_247` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_248` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_249` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_25` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_250` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_251` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_252` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_253` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_254` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_255` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_256` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_257` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_258` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_259` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_26` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_260` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_261` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_262` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_263` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_264` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_265` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_266` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_267` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_268` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_269` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_27` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_270` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_271` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_272` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_273` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_274` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_275` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_276` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_277` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_278` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_279` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_28` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_280` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_281` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_282` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_283` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_284` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_285` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_286` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_287` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_288` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_289` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_29` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_290` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_291` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_292` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_293` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_294` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_295` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_296` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_297` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_298` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_299` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_3` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_30` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_300` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_301` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_302` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_303` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_304` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_305` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_306` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_307` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_308` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_309` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_31` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_310` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_311` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_312` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_313` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_314` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_315` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_316` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_317` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_318` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_319` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_32` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_320` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_321` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_322` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_323` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_324` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_325` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_326` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_327` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_328` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_329` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_33` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_330` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_331` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_332` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_333` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_334` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_335` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_336` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_337` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_338` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_339` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_34` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_340` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_341` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_342` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_343` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_344` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_345` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_346` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_347` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_348` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_349` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_35` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_350` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_351` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_352` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_353` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_354` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_355` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_356` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_357` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_358` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_359` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_36` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_360` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_361` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_362` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_363` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_364` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_365` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_366` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_367` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_368` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_369` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_37` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_370` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_371` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_372` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_373` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_374` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_375` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_376` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_377` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_378` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_379` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_38` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_380` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_381` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_382` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_383` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_384` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_385` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_386` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_387` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_388` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_389` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_39` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_390` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_391` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_392` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_393` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_394` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_395` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_396` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_397` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_398` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_399` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_4` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_40` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_400` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_401` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_402` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_403` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_404` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_405` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_406` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_407` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_408` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_409` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_41` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_410` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_411` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_412` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_413` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_414` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_415` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_416` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_417` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_418` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_419` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_42` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_420` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_421` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_422` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_423` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_424` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_425` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_426` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_427` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_428` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_429` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_43` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_430` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_431` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_432` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_433` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_434` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_435` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_436` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_437` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_438` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_439` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_44` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_440` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_441` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_442` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_443` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_444` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_445` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_446` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_447` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_448` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_449` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_45` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_450` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_451` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_452` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_453` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_454` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_455` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_456` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_457` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_458` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_459` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_46` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_460` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_461` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_462` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_463` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_464` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_465` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_466` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_467` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_468` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_469` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_47` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_470` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_471` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_472` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_473` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_474` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_475` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_476` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_477` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_478` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_479` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_48` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_480` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_481` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_482` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_483` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_484` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_485` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_486` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_487` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_488` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_489` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_49` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_490` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_491` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_492` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_493` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_494` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_495` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_496` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_497` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_498` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_499` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_5` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_50` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_500` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_501` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_502` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_503` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_504` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_505` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_506` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_507` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_508` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_509` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_51` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_510` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_511` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_512` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_513` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_514` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_515` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_516` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_517` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_518` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_519` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_52` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_520` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_521` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_522` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_523` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_524` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_525` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_526` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_527` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_528` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_529` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_53` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_530` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_531` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_532` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_533` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_534` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_535` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_536` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_537` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_538` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_539` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_54` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_540` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_541` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_542` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_543` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_544` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_545` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_546` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_547` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_548` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_549` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_55` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_550` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_551` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_552` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_553` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_554` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_555` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_56` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_57` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_58` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_59` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_6` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_60` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_61` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_62` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_63` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_64` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_65` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_66` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_67` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_68` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_69` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_7` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_70` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_71` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_72` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_73` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_74` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_75` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_76` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_77` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_78` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_79` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_8` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_80` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_81` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_82` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_83` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_84` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_85` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_86` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_87` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_88` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_89` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_9` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_90` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_91` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_92` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_93` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_94` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_95` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_96` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_97` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_98` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `projets_ibfk_99` FOREIGN KEY (`idSecteur`) REFERENCES `secteurs` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_10` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_100` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_101` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_102` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_103` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_104` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_105` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_106` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_107` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_108` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_109` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_11` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_110` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_111` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_112` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_113` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_114` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_115` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_116` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_117` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_118` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_119` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_12` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_120` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_121` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_122` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_123` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_124` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_125` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_126` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_127` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_128` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_129` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_13` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_130` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_131` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_132` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_133` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_134` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_135` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_136` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_137` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_138` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_139` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_14` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_140` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_141` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_142` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_143` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_144` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_145` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_146` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_147` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_148` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_149` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_15` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_150` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_151` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_152` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_153` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_154` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_155` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_156` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_157` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_158` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_159` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_16` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_160` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_161` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_162` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_163` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_164` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_165` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_166` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_167` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_168` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_169` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_17` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_170` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_171` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_172` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_173` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_174` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_175` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_176` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_177` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_178` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_179` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_18` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_180` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_181` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_182` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_183` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_184` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_185` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_186` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_187` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_188` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_189` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_19` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_190` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_191` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_192` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_193` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_194` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_195` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_196` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_197` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_198` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_199` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_20` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_200` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_201` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_202` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_203` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_204` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_205` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_206` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_207` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_208` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_209` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_21` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_210` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_211` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_212` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_213` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_214` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_215` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_216` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_217` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_218` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_219` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_22` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_220` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_221` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_222` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_223` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_224` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_225` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_226` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_227` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_228` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_229` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_23` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_230` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_231` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_232` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_233` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_234` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_235` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_236` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_237` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_238` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_239` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_24` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_240` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_241` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_242` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_243` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_244` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_245` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_246` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_247` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_248` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_249` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_25` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_250` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_251` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_252` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_253` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_254` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_255` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_256` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_257` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_258` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_259` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_26` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_260` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_261` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_262` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_263` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_264` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_265` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_266` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_267` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_268` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_269` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_27` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_270` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_271` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_272` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_273` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_274` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_275` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_276` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_277` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_278` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_279` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_28` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_280` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_281` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_282` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_283` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_284` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_285` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_286` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_287` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_288` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_289` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_29` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_290` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_291` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_292` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_293` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_294` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_295` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_296` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_297` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_298` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_299` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_3` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_30` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_300` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_301` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_302` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_303` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_304` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_305` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_306` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_307` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_308` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_309` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_31` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_310` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_311` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_312` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_313` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_314` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_315` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_316` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_317` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_318` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_319` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_32` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_320` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_321` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_322` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_323` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_324` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_325` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_326` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_327` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_328` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_329` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_33` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_330` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_331` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_332` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_333` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_334` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_335` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_336` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_337` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_338` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_339` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_34` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_340` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_341` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_342` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_343` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_344` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_345` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_346` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_347` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_348` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_349` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_35` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_350` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_351` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_352` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_353` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_354` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_355` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_356` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_357` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_358` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_359` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_36` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_360` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_361` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_362` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_363` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_364` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_365` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_366` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_367` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_368` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_369` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_37` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_370` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_371` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_372` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_373` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_374` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_375` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_376` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_377` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_378` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_379` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_38` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_380` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_381` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_382` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_383` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_384` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_385` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_386` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_387` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_388` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_389` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_39` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_390` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_391` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_392` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_393` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_394` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_395` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_396` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_397` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_398` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_399` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_4` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_40` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_400` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_401` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_402` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_403` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_404` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_405` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_406` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_407` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_408` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_409` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_41` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_410` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_411` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_412` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_413` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_414` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_415` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_416` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_417` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_418` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_419` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_42` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_420` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_421` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_422` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_423` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_424` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_425` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_426` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_427` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_428` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_429` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_43` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_430` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_431` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_432` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_433` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_434` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_435` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_436` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_437` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_438` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_439` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_44` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_440` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_441` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_442` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_443` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_444` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_445` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_446` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_447` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_448` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_449` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_45` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_450` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_451` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_452` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_453` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_454` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_455` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_456` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_457` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_458` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_459` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_46` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_460` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_461` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_462` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_463` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_464` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_465` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_466` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_467` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_468` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_469` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_47` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_470` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_471` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_472` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_473` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_474` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_475` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_476` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_477` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_478` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_479` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_48` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_480` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_481` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_482` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_483` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_484` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_485` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_486` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_487` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_488` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_489` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_49` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_490` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_491` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_492` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_493` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_494` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_495` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_496` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_497` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_498` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_499` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_5` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_50` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_500` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_501` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_502` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_503` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_504` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_505` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_506` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_507` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_508` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_509` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_51` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_510` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_511` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_512` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_513` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_514` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_515` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_516` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_517` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_518` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_519` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_52` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_520` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_521` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_522` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_523` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_524` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_525` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_526` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_527` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_528` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_529` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_53` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_530` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_531` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_532` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_533` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_534` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_535` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_536` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_537` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_538` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_539` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_54` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_540` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_541` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_542` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_543` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_544` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_545` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_546` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_547` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_548` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_549` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_55` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_550` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_551` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_552` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_553` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_554` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_555` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_556` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_557` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_558` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_559` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_56` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_560` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_561` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_562` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_563` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_564` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_565` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_566` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_567` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_568` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_569` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_57` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_570` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_571` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_572` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_573` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_574` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_575` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_576` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_577` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_578` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_579` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_58` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_580` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_581` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_582` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_583` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_584` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_585` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_586` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_587` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_588` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_589` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_59` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_590` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_591` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_592` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_593` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_594` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_595` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_596` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_597` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_598` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_599` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_6` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_60` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_600` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_601` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_602` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_603` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_604` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_605` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_606` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_607` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_608` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_609` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_61` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_610` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_611` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_612` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_613` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_614` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_615` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_616` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_617` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_618` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_619` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_62` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_620` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_621` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_63` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_64` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_65` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_66` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_67` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_68` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_69` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_7` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_70` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_71` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_72` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_73` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_74` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_75` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_76` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_77` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_78` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_79` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_8` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_80` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_81` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_82` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_83` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_84` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_85` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_86` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_87` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_88` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_89` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_9` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_90` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_91` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_92` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_93` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_94` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_95` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_96` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_97` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_98` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_99` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
