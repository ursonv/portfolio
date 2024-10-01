-- MariaDB dump 10.19  Distrib 10.4.31-MariaDB, for debian-linux-gnu (aarch64)
--
-- Host: localhost    Database: db
-- ------------------------------------------------------
-- Server version	10.4.31-MariaDB-1:10.4.31+maria~ubu2004-log

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
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cyclists`
--

DROP TABLE IF EXISTS `cyclists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cyclists` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `team_id` bigint(20) unsigned NOT NULL,
  `slug` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cyclists`
--

LOCK TABLES `cyclists` WRITE;
/*!40000 ALTER TABLE `cyclists` DISABLE KEYS */;
INSERT INTO `cyclists` VALUES (1,1,'peter-sagan','Peter Sagan','Slovakia','Peter Sagan is a Slovakian cyclist, known for his sprinting and climbing abilities.','https://cyclingflash.ams3.cdn.digitaloceanspaces.com/506/01HXC9RNCVCZFZCH4A7BKZ64X9.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(2,2,'egan-bernal','Egan Bernal','Colombia','Egan Bernal is a Colombian cyclist, who won the Tour de France in 2019.','https://res.cloudinary.com/team-sky/image/upload/c_auto,g_auto,w_584,ar_1:1,q_90/umbraco-cms/media/cductitm/885x765pixels-riders3.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(3,1,'primoz-roglic','Primoz Roglic','Slovenia','Primoz Roglic is a Slovenian cyclist, known for his time trial abilities and climbing prowess.','https://www.bora-hansgrohe.com/_next/image?url=https%3A%2F%2Fbora-hansgrohe-cms.s3.eu-central-1.amazonaws.com%2F20231207_Riders_Headshots24_8151_5f2eebeddf.jpg&w=1200&q=85','2024-06-10 19:59:49','2024-06-10 19:59:49'),(4,10,'mathieu-van-der-poel','Mathieu van der Poel','Netherlands','Mathieu van der Poel is a Dutch cyclist, excelling in various disciplines like road racing, cyclocross, and mountain biking.','https://www.alpecin-deceuninck.com/images/team/vdp-wc.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(5,4,'julian-alaphilippe','Julian Alaphilippe','France','Julian Alaphilippe is a French cyclist, known for his attacking style of riding and climbing ability.','https://www.soudal-quickstepteam.com/images/team_rider/c_c/740x1020/alaphilippeportrait_1703412496.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(6,6,'tadej-pogacar','Tadej Pogacar','Slovenia','Tadej Pogacar is a Slovenian cyclist, known for his climbing ability and his victory in the 2020 Tour de France.','https://www.uaeteamemirates.com/wp-content/uploads/2021/12/Pogacar-285x492.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(7,9,'richard-carapaz','Richard Carapaz','Ecuador','Richard Carapaz is an Ecuadorian cyclist, known for his climbing ability and his victory in the 2019 Giro d\'Italia.','https://a.storyblok.com/f/135147/1080x1620/4bed26c051/24-01-03_richard-carapaz_our-team_1.jpg/m/828x1242/filters:quality(75)','2024-06-10 19:59:49','2024-06-10 19:59:49'),(8,4,'remco-evenepoel','Remco Evenepoel','Belgium','Remco Evenepoel is a Belgian cyclist, known for his exceptional time trial abilities and climbing skills. He is considered one of the most promising young talents in professional cycling.','https://www.soudal-quickstepteam.com/images/team_rider/c_c/740x1020/evenepoelportrait_1703412858.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(9,3,'wout-van-aert','Wout van Aert','Belgium','Wout van Aert is a Belgian cyclist, known for his versatility in various terrains such as sprinting, time trialing, and cyclocross.','https://d1lk6qpkbduawh.cloudfront.net/_810x1038_crop_top-center_85_none/Portret-renner-World-Tour-2024-vrijstaand-4_2023-12-20-150241_snfy.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(10,2,'elia-viviani','Elia Viviani','Italy','Elia Viviani is an Italian cyclist, known for his sprinting prowess and multiple stage victories in Grand Tours.','https://res.cloudinary.com/team-sky/image/upload/c_auto,g_auto,w_584,ar_1:1,q_90/umbraco-cms/media/vl3b1jzs/885x765pixels-riders29.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(11,4,'mikel-landa','Mikel Landa','Spain','Mikel Landa is a Spanish cyclist, known for his climbing ability and podium finishes in Grand Tours.','https://www.soudal-quickstepteam.com/images/team_rider/c_c/740x1020/landaportrait_1703415850.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(12,8,'michael-matthews','Michael Matthews','Australia','Michael Matthews is an Australian cyclist, known for his sprinting abilities and victories in one-day races and stages of Grand Tours.','https://greenedgecycling.com/2024/wp-content/uploads/2024/04/MICHAEL-MATTHEWS-1-1366x2048.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(13,11,'romain-bardet','Romain Bardet','France','Romain Bardet is a French cyclist, known for his climbing ability and podium finishes in Grand Tours.','https://www.teamdsmfirmenich-postnl.com/wp-content/uploads/2023/12/15.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(14,3,'jonas-vingegaard','Jonas Vingegaard','Denmark','Jonas Vingegaard is a Danish cyclist, known for his climbing abilities and impressive performances in stage races. He has shown great potential in several WorldTour events.','https://d1lk6qpkbduawh.cloudfront.net/_810x1038_crop_top-center_85_none/Portret-renner-World-Tour-2024-vrijstaand-3_2023-12-20-145822_flge.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(15,11,'fabio-jakobsen','Fabio Jakobsen','Netherlands','Fabio Jakobsen is a Dutch cyclist, known for his sprinting abilities and victories in stages of Grand Tours and one-day races.','https://www.teamdsmfirmenich-postnl.com/wp-content/uploads/2023/12/18.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(16,2,'filippo-ganna','Filippo Ganna','Italy','Filippo Ganna is an Italian cyclist, known for his exceptional time trial abilities and strong performances in track cycling. He has won multiple world championships and Olympic gold medals.','https://res.cloudinary.com/team-sky/image/upload/c_auto,g_auto,w_584,ar_1:1,q_90/umbraco-cms/media/4hrjbkof/885x765pixels-riders9.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49');
/*!40000 ALTER TABLE `cyclists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2024_05_16_161040_create_predictions_table',1),(5,'2024_05_16_161107_create_cyclists_table',1),(6,'2024_05_16_161118_create_races_table',1),(7,'2024_05_16_161139_create_teams_table',1),(8,'2024_05_19_192313_create_reviews_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `predictions`
--

DROP TABLE IF EXISTS `predictions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `predictions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `race_id` bigint(20) unsigned NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `cyclist_id` bigint(20) unsigned NOT NULL,
  `slug` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `comment` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `predictions`
--

LOCK TABLES `predictions` WRITE;
/*!40000 ALTER TABLE `predictions` DISABLE KEYS */;
INSERT INTO `predictions` VALUES (1,3,1,8,'et-id','5','Maxime hic enim consequatur. Libero rerum est qui quas in repellendus impedit. Ut voluptatem aut ea quisquam ad vero. Velit necessitatibus consectetur quia aut ea est. Ut inventore eaque aperiam sunt. Aut qui non tenetur molestias. Autem labore recusandae sunt voluptatem aspernatur aspernatur.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(2,1,1,4,'animi-ut-enim','35','Qui temporibus labore repudiandae. Tenetur fuga minus mollitia deserunt fugiat quis. Distinctio facere cumque magni ut explicabo quis. Nostrum asperiores officia alias rem sint inventore sit. Qui perferendis quam atque et. Blanditiis at atque dolor. Nulla quis iste et nobis neque maiores sed. Quidem dicta sed alias aut. Est iste recusandae in et nihil. Cum et sapiente vero quod aut aut. Voluptatem excepturi qui tempore iusto doloribus adipisci. Quasi ipsum dolor est voluptas laboriosam.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(3,10,1,3,'maxime-adipisci-eveniet','82','Sed quos vero vel. Et beatae at veniam aperiam. Consequatur odit repellat vitae tempora. Quia et omnis sit. Qui est cum eos aut molestias officiis. Quae est magni et sint. Occaecati rerum quaerat sed ad eos. Aut sequi eaque voluptatem soluta. Quae iste quae et alias magnam ipsa tempore. Aut ut repellendus quia impedit voluptatibus. Quo ratione mollitia eligendi sit.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(4,7,1,8,'voluptatibus-aperiam-aut','70','Et quis quis libero ea placeat. Temporibus harum dignissimos est sit. Expedita consequuntur in quaerat velit. Totam quae tempora dolore sunt facilis suscipit. Soluta excepturi placeat quis maxime nulla recusandae praesentium. Consequatur temporibus enim ut non. Sit qui deserunt quisquam illum reprehenderit vero aut. Sunt quae ipsum rem culpa inventore sequi dolor. Hic magni quia nobis.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(5,7,1,4,'exercitationem-est-vero','42','Enim quas itaque dolorum illum distinctio qui excepturi. Ea necessitatibus autem ipsam recusandae quisquam tempora voluptatem autem. Aliquid praesentium qui doloribus exercitationem ipsam. In quas dolorum ducimus suscipit quis quas. Sed magnam labore eligendi eaque qui. Nostrum quam ut consectetur similique sunt. Et amet officiis molestiae quidem alias velit. Nobis molestiae magnam odio ipsam sapiente.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(6,6,1,9,'iure-tenetur-magnam','37','Ut harum sed magnam. Repellendus sunt corrupti sit consequatur eos iure. Neque quos molestiae corporis assumenda natus. Facere sed molestias quo et id. Quia magni eveniet veritatis quis omnis mollitia blanditiis. Libero est quod architecto dolores eveniet iusto. Officia cumque excepturi voluptas saepe laudantium.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(7,7,1,3,'cupiditate-aut','63','Sit voluptatibus aut temporibus quaerat incidunt et autem. Temporibus nostrum qui repudiandae omnis et. Et quidem dolorum blanditiis illum eius. Ut cum nihil veritatis magnam perferendis. Perferendis nesciunt ad dignissimos fugiat labore suscipit necessitatibus. Dolorem pariatur laborum quod temporibus blanditiis sunt repudiandae cupiditate. Autem accusantium nulla quibusdam sint fugiat placeat nihil. Deleniti ut dicta molestias commodi optio sed laudantium.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(8,7,1,11,'recusandae-labore-blanditiis','147','Non sed perspiciatis sint ipsam voluptatibus et quod vitae. Quisquam voluptate sint quo qui nulla quo. Beatae qui repudiandae repudiandae itaque. Velit sed eum qui. Illo consequatur est illum quo blanditiis aliquam. Modi beatae odit et est sed fugit voluptas. Quis voluptatibus eveniet nisi amet magni. Id laboriosam quidem maiores et autem est aut. Earum perferendis eum voluptas sapiente. Cumque rem cumque veniam maiores. Hic ad dolor ullam qui in inventore ducimus. Aut ut voluptates dolore assumenda laboriosam odio.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(9,7,1,10,'eum-tempora','93','In debitis veritatis ut. Explicabo quo accusantium sit veritatis. Quibusdam velit expedita quaerat adipisci. Consectetur ea non et est quis est repellendus. Quis ab reiciendis nostrum magnam. Voluptatem aut nemo et eum quos ut nulla. Fugit labore ut voluptatem. Et ducimus sed ut neque pariatur.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(10,7,1,16,'qui-quidem','46','Ea sed ex et nobis eos et. Explicabo in natus eos commodi. Ratione velit et voluptatem ut dolor. Eveniet modi inventore repellendus facere quam eos. Atque et delectus sit deleniti cupiditate tempora incidunt. Facere qui ut possimus est consequatur id illum consectetur. Rerum aperiam sed nihil. Reiciendis dolores officia ea est illum aut repudiandae repellat. Maxime iure et libero ea sit corrupti possimus ut. Illum dolores exercitationem velit deleniti et non magnam. Facilis dolorem rerum accusantium dignissimos optio ipsam qui.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(11,10,1,1,'enim-est-voluptatem','97','Et dolor enim aut sequi quod. Officiis rem quo quisquam adipisci. Reiciendis a est temporibus quia. Voluptate quam quis minus officia. Consequatur voluptatum repellendus nesciunt. Quis incidunt deleniti nulla praesentium quae blanditiis. Qui omnis consectetur placeat animi et ab et rerum.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(12,9,1,8,'vitae-aut-asperiores','8','Iusto totam ut qui. Excepturi aut quia voluptatem numquam ipsum dolor. Id impedit et ratione et qui. Autem sunt maxime laboriosam consequatur consequatur enim. Et rerum quia saepe consequuntur dolor reprehenderit porro. Quod qui ipsam ducimus quod aut explicabo. Et ipsam sit illo dignissimos. Qui quo voluptas voluptas.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(13,4,1,2,'ex-nisi','37','Reiciendis enim non suscipit voluptates. Harum distinctio recusandae nemo eius et mollitia quas. Perspiciatis eveniet maxime nihil. Deleniti aspernatur perferendis dolores et repellendus consequatur in. Quod vitae provident quo. Aut praesentium ea aut minus voluptas quod ipsum. Ut rerum eos unde exercitationem tenetur assumenda. Et ut blanditiis rerum fugit illum. Aut qui vel laborum alias dolores. Enim laboriosam ut quidem assumenda.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(14,5,1,16,'expedita-et-corporis','88','Vel similique et quia est sit in saepe. Esse necessitatibus pariatur voluptatem corrupti incidunt. Ducimus fuga ad qui. Commodi omnis ratione dolor facilis inventore fugiat. Optio dolor iusto sit. Voluptas magnam autem inventore velit voluptate magni. Qui sunt qui velit molestiae sint dolore voluptatem. Eos ut et dignissimos nulla quia pariatur reprehenderit accusantium. Reiciendis suscipit tempora quae cumque.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(15,8,1,1,'sit-dolores-commodi','79','Totam officiis ipsum et quis voluptas sunt voluptates culpa. Nihil dolorem omnis dolores voluptatem et placeat ut. Praesentium velit dolor itaque cumque sint cum ipsa. Reprehenderit amet repudiandae eum perferendis ipsa. Voluptas rerum commodi quo repudiandae. Doloremque id laborum eum quod ducimus. Repellat quis officia et provident iusto quisquam consectetur est. Dolor voluptatem quas nam. Modi quisquam nisi quam ut. Consectetur perspiciatis impedit omnis voluptatem.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(16,4,1,11,'est-ullam-eaque','123','Rem consectetur qui esse enim delectus facere ea voluptatibus. Adipisci ab corporis amet. Delectus officiis eligendi cum possimus qui. Sed enim qui omnis vel eum laudantium et. Et eaque iste aliquam quia saepe. Illo non architecto qui quidem optio molestias rerum. Perspiciatis commodi inventore ut rem sequi assumenda dolores. Tenetur et fugiat maxime quibusdam praesentium eaque illo. Est non occaecati a sint. Hic placeat pariatur atque esse.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(17,9,1,16,'qui-dolor','11','Voluptatem rerum fuga aut. Rerum voluptatem ducimus vitae ipsa vel commodi. Aut repellat non quisquam repellendus dolores dolor. Et debitis non sunt consectetur vel. Sit autem voluptatem velit necessitatibus. Enim aut libero reiciendis inventore eum perferendis. Quis quis placeat unde minus. Dolorem et quia labore ex dolorem. Eius saepe necessitatibus aut veniam. Expedita quaerat totam veritatis similique et. Minima dignissimos qui quia maiores illum. Esse autem sit nisi commodi eveniet aut.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(18,1,1,7,'fugiat-soluta','38','Et facilis doloribus eos omnis. Veritatis molestias delectus quibusdam dolor odit. Delectus et quisquam recusandae iste nostrum. Inventore sunt adipisci dolorem. Qui laboriosam neque ratione dolores fugit et iusto. Molestiae iste adipisci est facilis ipsa accusamus et. Aut ut voluptas expedita fugit temporibus. Adipisci aut omnis fugit praesentium autem quo. Et consequatur porro qui animi animi quibusdam fuga. Laudantium commodi mollitia aut numquam dicta ut qui. Omnis et dolore aut.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(19,7,1,3,'reprehenderit-velit','104','Ea sunt nostrum animi. Et in distinctio perspiciatis omnis molestiae sit quos dicta. Quo voluptates pariatur necessitatibus et aliquid odio aspernatur. Rerum dolore nostrum sed distinctio. Harum et expedita facilis sapiente. Molestiae facere voluptates rerum repellendus sed quis. Eius ipsum corrupti facilis voluptas voluptas nisi aut. Et unde eveniet quo est sapiente veritatis.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(20,4,1,11,'doloribus-consequatur-ea','23','Id iure adipisci illo amet in maiores eos. Sint necessitatibus at et sit consequatur. Quo sunt quia dolores voluptatem doloribus iusto numquam. Consequatur nihil et hic nemo. Consequatur consequatur perferendis vel qui sunt. Excepturi omnis dolorum iure sit dignissimos sequi porro. Soluta explicabo nesciunt dolores maiores corrupti qui. Architecto nam eum accusantium ut nostrum voluptas dolor ratione. Expedita itaque ea ut similique. Dolores deserunt molestias corrupti aut. Qui labore voluptatem excepturi adipisci ratione qui fugit. Quod reiciendis commodi iusto nisi odit officiis. Molestiae sit voluptate ipsam dolore. Culpa eos quia molestiae consequuntur perferendis ab placeat.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(21,3,1,9,'delectus-dignissimos-molestiae','139','Velit accusantium qui sed quas iure necessitatibus dicta. Nemo ea vitae ut autem. Dolor quidem excepturi veniam soluta nemo aut in. Ut atque laudantium nesciunt reprehenderit. Vel aut eaque dolores mollitia unde. Enim quaerat ut nulla mollitia est. Enim eum delectus vel laudantium atque omnis. Est quasi cumque aperiam recusandae voluptatem architecto ratione.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(22,5,1,5,'inventore-non','85','Veritatis optio inventore doloribus atque aut. Et perspiciatis maxime eum illo deleniti earum deleniti esse. Facere aperiam sed sed. Blanditiis dolor expedita consequatur incidunt sit. Officia eaque voluptates corporis voluptatem. In quasi ab iure saepe cum fuga ex provident. Dolores quam officia voluptatibus debitis. Autem occaecati sit molestias aliquid odio enim. Non qui minus facere velit dolorem tempora. Suscipit dolores quis est asperiores nemo eos. Tempore fuga ipsa nihil animi. Et doloremque ut alias aut ut in deleniti. Sed aut et natus rerum error.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(23,4,1,6,'voluptas-veniam','38','Illo minima quod perspiciatis quam sint repudiandae. Et exercitationem iusto est soluta qui vitae. Sed harum tempora dolor delectus quam harum. Consequatur rerum non provident rem. Quam sint quam amet commodi ducimus commodi dolorem. Placeat fuga odit eum molestiae perspiciatis. Non recusandae laudantium libero assumenda accusamus in veritatis ut.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(24,6,1,15,'amet-autem-earum','1','Id sapiente blanditiis nihil fuga eligendi aliquam. Sit blanditiis quo nam ipsam rerum. Quo asperiores quo sit eos veritatis. Molestiae ut eaque qui at. Commodi a tenetur eveniet laborum ab. Iure rerum corporis aut et et quod minima. Molestiae dolor quibusdam exercitationem distinctio nisi. Rem ratione vel nihil impedit sit odit. Aut nulla facilis quas et ex nihil. Beatae cumque et dolore velit maiores eum voluptatem ut. Reprehenderit omnis aut eveniet error repudiandae porro. Doloribus et voluptas quo. Sunt enim eaque et.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(25,9,1,14,'et-in','144','Dolor qui qui iusto cum. Nemo quas ad facilis harum eum. Aut doloremque provident dolorum. Ipsa quia est ipsum laborum. Est rem perferendis nobis quos facilis velit placeat ut. Distinctio sit quia in eius aut. Cum minima dolorem provident doloremque. Minima libero consectetur quia quia consequatur. In totam et fugiat et error doloribus inventore. Officia deleniti quia assumenda dolore nam. Expedita a aspernatur consectetur quibusdam. Et facilis cum nemo. Animi molestiae ipsum debitis quis officia quasi. Provident qui corrupti provident pariatur.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(26,6,1,10,'perferendis-sed','2','Ipsa accusamus modi ratione sed repudiandae illo necessitatibus. Occaecati sed placeat ea assumenda. Recusandae perspiciatis et sunt minima. Quia hic optio ex commodi accusamus dignissimos in. Sequi ut possimus natus cum quasi culpa quo quia. Cumque voluptatem quia sequi quia ipsam eum voluptatibus inventore. Unde quis consectetur voluptatem possimus doloremque modi. Ut aliquam voluptas dignissimos quod. Numquam autem voluptatibus magnam libero iusto illo atque.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(27,8,1,9,'laborum-voluptatibus-fuga','108','Aliquam eligendi quia et accusamus qui fuga quia saepe. Excepturi quia veritatis necessitatibus eos autem. Recusandae dolorum at laudantium non. Quia repudiandae aut quisquam officia. Facere iusto distinctio dolore quia accusamus odio inventore. Quod architecto et ea sint. Sequi itaque dolorum ut expedita vero nam voluptatem voluptates. Reprehenderit saepe veritatis et molestias sed consectetur atque. Molestiae voluptas optio ad iste. Sunt est vel libero minus tempora.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(28,11,1,2,'quidem-quam','135','Distinctio animi ipsa magnam neque et placeat qui. Praesentium vitae sit ipsa molestiae. Sapiente qui ea inventore est ducimus. Delectus nam placeat fuga accusantium ea. Tenetur et pariatur perspiciatis quo fugiat cum possimus. Dolorem porro ea beatae est cupiditate. Voluptas dicta enim veritatis quo esse.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(29,7,1,16,'velit-dolorem-quia','110','Corrupti inventore pariatur ab error. Inventore repellendus non officiis vero nobis est quasi. Placeat deserunt harum voluptatem eaque. Eum perferendis reiciendis dicta earum voluptas saepe. Repudiandae omnis eaque minima eum similique tempore quidem inventore. Nihil voluptatem exercitationem eos. Sint iure veritatis magnam deleniti. Saepe sit vero veritatis totam excepturi voluptas.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(30,2,1,7,'rerum-voluptatum-sapiente','121','Velit ea eum ad quia alias aperiam architecto. Vitae sunt ab ut ut. Quod laboriosam in tempora dolore repudiandae sit rerum. Omnis non temporibus sed voluptas unde molestiae eius omnis. Enim ipsa rem deleniti dolores ab. Modi adipisci et nam ipsum porro eligendi. Ullam non nobis aut voluptas voluptate distinctio. Rerum doloribus repellat eos occaecati debitis.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(31,3,1,5,'voluptas-repellendus','104','Qui ipsa deleniti quae aliquam totam. Nisi molestiae sit dicta quaerat laboriosam. Adipisci nostrum quia cumque pariatur. Porro est quia saepe ratione animi ea accusamus corporis. Odit tenetur non enim ut ut. At tenetur et consequatur fugiat quo non. Autem dolorem asperiores perferendis impedit. Ad voluptatum quos earum recusandae omnis qui. Molestiae commodi labore fugit cupiditate. Labore magni velit sunt ipsam rerum possimus voluptas. Provident impedit velit ipsa. In quasi sed error qui animi reprehenderit.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(32,10,1,8,'reiciendis-voluptatibus-ex','93','Aut facere vero qui mollitia ducimus ea et. Possimus aut in recusandae voluptates voluptatum consequatur. Omnis pariatur voluptas est molestias cumque voluptates odit reiciendis. Incidunt voluptas eius cum qui ut. Et omnis mollitia cum consequatur est asperiores aut autem. Dignissimos molestiae dolores blanditiis nihil omnis maxime ut. Quibusdam libero repellat eum. Omnis sunt nulla dolorem quis. Aperiam quibusdam architecto optio fuga. Quae nostrum voluptatem corrupti temporibus provident quisquam temporibus. Debitis est itaque laudantium nihil. Ut quaerat voluptates minima dignissimos maiores. Culpa aut asperiores quae provident dolores est. Sit doloribus dolorem facilis accusantium qui tenetur alias.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(33,10,1,1,'quia-est-iure','50','Culpa itaque nostrum nostrum molestias assumenda vel incidunt. Autem voluptatem rerum consectetur et. Ea dolores incidunt sed eum ipsum. Et et laborum aliquid rerum quis iure recusandae. Velit et nisi aliquam odio labore at. Autem nihil et eius enim. Minima excepturi et vel natus accusamus aut qui sunt. Quis at culpa et labore id. Eos rerum itaque eius aut quo praesentium. Deserunt eaque sunt quibusdam.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(34,5,1,6,'perspiciatis-et-consequuntur','103','Id quasi rerum hic assumenda consequatur voluptas ab. Magnam quo quis ex eos sequi et. Aperiam quisquam magnam deserunt facere suscipit. Eveniet vel odit aut est sunt sint. Magni odit aut ipsum et. Adipisci tempora dolores aut sed laudantium. Distinctio impedit provident amet perspiciatis. Dolore repudiandae et veritatis est. Dolorem ducimus et omnis qui voluptas ut asperiores. Optio commodi ad deleniti iusto voluptatem. Odio ut non fugiat. Aliquam vel beatae cupiditate voluptate.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(35,2,1,15,'esse-ratione','101','Ullam enim provident nam qui. Quos error dolorum exercitationem. Totam eius rerum aspernatur qui earum saepe. Numquam voluptas maxime vitae velit aperiam. Suscipit libero tempora sed ut nesciunt odit qui. Et alias est enim occaecati voluptate dignissimos vel. Et hic et necessitatibus natus dolores. Adipisci voluptatem et et corporis non quasi tempora. Accusantium optio voluptate placeat omnis deserunt qui dolor. Voluptates explicabo illo amet et suscipit quos nihil repellendus.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(36,3,1,6,'saepe-est-omnis','58','Reiciendis itaque quia explicabo eius et voluptates voluptatem. Asperiores et repudiandae optio deleniti repellendus quia recusandae. Soluta ut sequi qui quia architecto aliquam earum. Est id exercitationem explicabo animi. Veritatis quo laborum voluptatem non doloremque repellendus. Modi nam nesciunt necessitatibus iusto. Vero aut dolores et omnis. Adipisci distinctio voluptatem atque aut doloribus.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(37,8,1,13,'atque-est','120','Omnis ex atque architecto expedita rerum libero aut magnam. Perspiciatis occaecati officiis quo quo ad et. Est recusandae sequi voluptatem esse. Necessitatibus est assumenda corrupti et dolore qui. Sint accusantium quisquam qui. Explicabo maxime laborum animi sit quis. Amet nemo quos eaque optio. Ipsum voluptas et est vitae. Ducimus quaerat quaerat harum est consequatur nulla.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(38,8,1,12,'harum-dolor-voluptas','134','Veritatis illum ipsum vero nihil et consequatur. Doloribus a voluptas dicta odit autem qui. A sapiente id repudiandae et. Veritatis magnam quos assumenda qui tempora qui. Sapiente voluptates tenetur qui voluptatibus hic est. Ea odit consequatur deserunt possimus. Sequi consequatur et est quo. Sit possimus id maxime aut autem ad commodi. Odit esse ut eveniet cupiditate cupiditate minus. Reiciendis in et delectus odio et sed molestiae accusantium.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(39,11,1,6,'molestias-modi-expedita','59','Cumque qui itaque officiis qui doloremque officia itaque. Sequi repudiandae ut numquam nobis dolores. Sint quas ex distinctio voluptatem. Nam voluptas consequatur magnam animi sit quia voluptas. Quaerat dolorum quidem voluptates praesentium aut et esse voluptatem. Ab id qui similique dicta aspernatur repudiandae tempora quo. Pariatur impedit provident repellendus corrupti delectus.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(40,2,1,9,'ducimus-non-expedita','54','Officiis perspiciatis doloribus qui aut. Minus qui saepe quas accusantium quia quae ut. In nihil beatae maiores rerum minus. Praesentium dicta dolore veritatis veritatis delectus. Eum voluptatem ipsa consequatur aut. Id minima nihil impedit. Alias et aut aut ut. Mollitia aliquid eveniet sunt aliquam. Quia sed consectetur ut non minima et accusamus. Repudiandae esse illo rerum. Eveniet quod dolorem explicabo iure nihil libero. Ut magni corrupti et ut.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(41,9,1,11,'et-molestiae-id','143','Molestiae qui hic nostrum. Eos ipsum non occaecati id ut veritatis voluptate. Quis dolorum in qui eveniet fugiat laboriosam. Consequatur vel voluptatem omnis voluptatem dolor ut repellat. Ea sed sed et et deserunt sunt. Aut et occaecati consequatur quibusdam. Dolorum iure eveniet non. Officia aperiam et quisquam a dolor. Eum exercitationem cupiditate aut aliquam quis et nesciunt enim. Voluptatem quia aliquid dolores sint. Ut voluptatibus aspernatur voluptatibus a et dolorum ipsum consequatur. Sed fugiat qui sit qui nemo eligendi.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(42,11,1,11,'iure-cumque-modi','142','Natus est error ex aut est. Cum sed id et eos eius sed. Rem placeat et ipsum assumenda. Recusandae ex ea qui id expedita voluptatem dolorum provident. Vel ea et qui expedita. Vitae voluptas similique magni a quo veritatis temporibus. Libero omnis sint sed. Perferendis alias placeat ab quo earum autem. Veritatis sunt quos consequatur totam. Ut inventore est officiis et illo quia. Repudiandae dolor suscipit et ut et in eius inventore.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(43,5,1,8,'tempore-in-deserunt','149','Quibusdam quia vitae expedita minima expedita beatae. Dolore fuga libero saepe illo voluptatem quos quia. Rerum unde corporis eaque harum soluta error. Doloribus eum perspiciatis et maiores aperiam enim. Hic aliquid dolorum est dolore rerum non. Autem dolor quia eius assumenda. Corrupti quia earum doloribus.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(44,1,1,11,'natus-amet-esse','98','Nam molestiae ea explicabo dolorem. Non et eaque cupiditate neque et ratione cupiditate. Dolorum corporis aut illum sapiente. Delectus fuga natus eos voluptatem explicabo quia. Similique aliquam nobis quia sed. Aperiam voluptas facilis aliquam. Adipisci corporis modi facere ipsa sed sed. Quasi est est sed libero. Et nam commodi quaerat deleniti ut alias in. Et odio odio veniam qui cupiditate. Quisquam dolor eos quod ad quia suscipit fugiat. Voluptatem minima incidunt enim earum quas consequatur. Et perferendis magnam officiis consectetur architecto nesciunt necessitatibus. Et quisquam velit rerum est.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(45,6,1,5,'dolorem-culpa','61','Sed voluptas accusantium aut sed vel. Nulla vitae officia dolores eos tempora cum. Cupiditate aut accusantium reprehenderit officia. Maiores atque ipsum at itaque alias. Voluptatem qui doloribus perferendis sunt. Amet at doloribus deserunt ab. Laboriosam incidunt nostrum sit molestias est. Veniam voluptatum impedit officiis ut voluptas corporis consequatur. Et et hic minus repellat odit. Quo qui ab doloribus quam sapiente. Quia quae sit vero dignissimos fugit. Quia possimus voluptatibus corporis. Aperiam illo eaque et mollitia blanditiis sint. Iure dolores iure recusandae.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(46,9,1,16,'et-possimus','6','Culpa dolores ipsa et fuga sequi explicabo est. Id error laudantium vel et. Deserunt repellat impedit iusto sint voluptatibus. Odit est placeat sit reprehenderit sunt ipsum. Necessitatibus quam ad quam at fuga tempora. Culpa architecto ex mollitia impedit ex eum possimus. Aut asperiores quos ipsa accusamus fuga vitae.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(47,5,1,1,'omnis-totam','94','Et dolorem voluptatem incidunt dolorem sed soluta. Facere sint ut consequatur doloremque explicabo. Cupiditate rem sed impedit doloribus ut laboriosam in. Aspernatur tempora odio itaque animi sed aut. Voluptatibus exercitationem et voluptates beatae. Deleniti omnis odio quisquam odit aut. Alias iure praesentium non quibusdam veniam. Eveniet quisquam eligendi non aut ratione quia. Optio vel quia dolorem. Unde odit consectetur repellendus voluptatem libero. Temporibus consequatur quis nesciunt voluptates ut laudantium architecto. Ea ab quae ducimus omnis sapiente id omnis. Provident explicabo dolores praesentium omnis nostrum ut.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(48,9,1,16,'dolores-aut-maxime','101','Laborum nobis officiis vel quae eveniet. Eaque fuga aliquam et qui qui at. Sed architecto doloremque inventore officiis possimus sunt quaerat. Accusantium natus doloribus ipsa ut quo totam itaque. Et porro consequatur provident maiores consequatur. Voluptas mollitia eveniet tempora aliquam. Ut dolorum mollitia adipisci numquam dolorem est fuga reprehenderit. Ut doloremque nam cupiditate sed dolores et. Aut voluptatibus ut sunt est rerum nihil incidunt. Qui eius totam ratione omnis.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(49,3,1,10,'suscipit-officiis','12','Qui vitae optio at dolores cumque quaerat mollitia eaque. Et suscipit nobis doloremque qui maiores beatae. Est et reprehenderit illum quo et magnam et. Autem illum enim est velit. Molestiae praesentium laboriosam quae autem et maxime rerum. Quaerat impedit et repudiandae repellat qui consequatur. Sit at non illum ad sunt praesentium facilis ea. Alias reiciendis eos quam blanditiis excepturi fuga. Nihil exercitationem ratione odio ut earum deserunt. Et omnis ut architecto. Nobis ut commodi sint. Deleniti debitis ducimus doloremque quis molestias.','2024-06-10 19:59:49','2024-06-10 19:59:49'),(50,7,1,13,'qui-quia','24','In rem nihil quisquam in exercitationem explicabo. Modi totam a aliquam consequatur. Optio nobis doloremque ex dicta et. Aut nobis sit facere dicta nisi assumenda. Non perferendis vel vel est architecto autem. Ipsa deleniti ducimus est delectus laborum mollitia. Odio aliquid similique molestiae occaecati dolore. Quae rem tempore eius eum dolorem aliquid illo.','2024-06-10 19:59:49','2024-06-10 19:59:49');
/*!40000 ALTER TABLE `predictions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `races`
--

DROP TABLE IF EXISTS `races`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `races` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `distance` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `races`
--

LOCK TABLES `races` WRITE;
/*!40000 ALTER TABLE `races` DISABLE KEYS */;
INSERT INTO `races` VALUES (1,'tour-de-france','Tour de France','3360','France','https://upload.wikimedia.org/wikipedia/en/6/60/Tour_de_France_logo_since_2019.svg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(2,'giro-d-italia','Giro d\'Italia','3446','Italy','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQqfKK-e_gilNGdnaO9Nfh41FZAtr53A9Nw&s','2024-06-10 19:59:49','2024-06-10 19:59:49'),(3,'vuelta-a-espana','Vuelta a España','3290','Spain','https://i0.wp.com/bicis.frangandara.net/wp-content/uploads/2022/08/vuelta-logo.jpg?ssl=1','2024-06-10 19:59:49','2024-06-10 19:59:49'),(4,'paris-roubaix','Paris-Roubaix','257','France','https://www.paris-roubaix.fr/img/global/logo@2x.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(5,'milano-sanremo','Milano-Sanremo','298','Italy','https://upload.wikimedia.org/wikipedia/fr/a/af/MILANO_SAN_REMO_LOGO_2020.svg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(6,'liege-bastogne-liege','Liege-Bastogne-Liege','259','Belgium','https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Li%C3%A8ge%E2%80%93Bastogne%E2%80%93Li%C3%A8ge_logo.svg/1200px-Li%C3%A8ge%E2%80%93Bastogne%E2%80%93Li%C3%A8ge_logo.svg.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(7,'amstel-gold-race','Amstel Gold Race','260.1','Netherlands','https://upload.wikimedia.org/wikipedia/fr/thumb/0/0b/Logo_Amstel_Gold_Race.svg/1200px-Logo_Amstel_Gold_Race.svg.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(8,'tour-of-flanders','Tour of Flanders','267','Belgium','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2QSKVb8ZKMhCyjtL7OnJg06CNMkSJmf4eQ&s','2024-06-10 19:59:49','2024-06-10 19:59:49'),(9,'strade-bianche','Strade Bianche','184','Italy','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Strade_Bianche_logo.svg/1200px-Strade_Bianche_logo.svg.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(10,'il-lombardia','Il Lombardia','243','Italy','https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Il_Lombardia.svg/640px-Il_Lombardia.svg.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(11,'la-fleche-wallonne','La Fleche Wallonne','193.6','Belgium','https://cdn.cookielaw.org/logos/1cb7fe57-d2de-4bbe-be68-495598d39f44/a3e2907d-9f15-4bc2-9980-963c444c0f5d/f3bb9214-401d-437a-a7c5-9547338a2b96/FW_Logo_Q.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(12,'tirreno-adriatico','Tirreno-Adriatico','1100','Italy','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHW9sRoWLMwaFt1qkzRwPCp8sY35oT_ozuA&s','2024-06-10 19:59:49','2024-06-10 19:59:49'),(13,'tour-of-california','Tour of California','1000','United States','https://endurance.biz/wp-content/uploads/2017/10/171030_Amgen-Tour-of-California-logo.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(14,'tour-down-under','Tour Down Under','850','Australia','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlq-yCyV-fdcPcd0Lz_2zMfE0wU7Or_JIX8A&s','2024-06-10 19:59:49','2024-06-10 19:59:49'),(15,'tour-de-suisse','Tour de Suisse','1200','Switzerland','https://upload.wikimedia.org/wikipedia/de/thumb/a/a0/Logo_Tour_de_Suisse.svg/2560px-Logo_Tour_de_Suisse.svg.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(16,'tour-of-oman','Tour of Oman','900','Oman','https://upload.wikimedia.org/wikipedia/en/5/54/Tour_of_oman_logo.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(17,'tour-de-romandie','Tour de Romandie','800','Switzerland','https://www.tourderomandie.ch/wp-content/uploads/2019/12/logo-tdr.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(18,'tour-of-britain','Tour of Britain','1500','United Kingdom','https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Tour_of_Britain_logo.svg/1200px-Tour_of_Britain_logo.svg.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(19,'tour-of-turkey','Tour of Turkey','1100','Turkey','https://www.tourofturkiye.org.tr/Content/images/2022/temsilihaber.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(20,'tour-de-pologne','Tour de Pologne','1000','Poland','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwRYXQrG4xp_Q-gyfAWoA37HiyyGv30rhwQ&s','2024-06-10 19:59:49','2024-06-10 19:59:49');
/*!40000 ALTER TABLE `races` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `prediction_id` bigint(20) unsigned NOT NULL,
  `content` text NOT NULL,
  `rating` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('gXF5nq59HgS3pJfX3sRcbz1RxWV9dEu5TkOUIixY',NULL,'172.18.0.4','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiSnR2SWhjdUpnZmNiaFU5Yjd1cWNFTHFxRmZXYUNlazJyVGcxRlMwWSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDU6Imh0dHBzOi8vZWluZG9wZHJhY2h0LXVyc29udi5kZGV2LnNpdGUvP3BhZ2U9MSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1718050758);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teams` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `mainsponsor` varchar(255) NOT NULL,
  `foundationdate` date NOT NULL,
  `img` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'bora-hansgrohe','BORA-hansgrohe','Germany','BORA','2010-01-01','https://seeklogo.com/images/B/bora-hansgohe-logo-EF9C610B65-seeklogo.com.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(2,'ineos-grenadiers','INEOS Grenadiers','United Kingdom','INEOS','2010-01-01','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqA9IWemRoy7SxUAZJGPsl9oAmx4YFEq2CKA&s','2024-06-10 19:59:49','2024-06-10 19:59:49'),(3,'team-visma-lease-a-bike','Team Visma-Lease a bike','Netherlands','Jumbo','2013-01-01','https://upload.wikimedia.org/wikipedia/fr/thumb/4/47/Logo_Visma-Lease_a_Bike.svg/1200px-Logo_Visma-Lease_a_Bike.svg.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(4,'soudal-quick-step','Soudal Quick-Step','Belgium','Deceuninck','2003-01-01','https://upload.wikimedia.org/wikipedia/en/e/e8/Soudal_Quick-Step_logo.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(5,'movistar-team','Movistar Team','Spain','Movistar','1980-01-01','https://i1.sndcdn.com/avatars-000364491323-971l3l-t1080x1080.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(6,'uae-team-emirates','UAE Team Emirates','United Arab Emirates','UAE','2017-01-01','https://upload.wikimedia.org/wikipedia/en/c/c8/UAE_Team_Emirates.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(7,'bahrain-victorious','Bahrain Victorious','Bahrain','Bahrain','2017-01-01','https://upload.wikimedia.org/wikipedia/fr/thumb/e/e4/Logo_%C3%89quipe_Cycliste_Barhain_Victorious_-_2021.svg/2048px-Logo_%C3%89quipe_Cycliste_Barhain_Victorious_-_2021.svg.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(8,'team-jayco-aiuia','Team Jayco AIUIa','Australia','BikeExchange','2011-01-01','https://upload.wikimedia.org/wikipedia/en/6/6d/Jayco_Logo_2019.jpg','2024-06-10 19:59:49','2024-06-10 19:59:49'),(9,'ef-education-easypost','EF Education - EasyPost','United States','EF Education','2007-01-01','https://yt3.googleusercontent.com/eLKmwzVmbhbgRGI9GvkPbb1UyoQu1PLYdTLlbaBKw_kV-TsY86fwxrtpDsz1_FBqZkIIPSZMmg=s900-c-k-c0x00ffffff-no-rj','2024-06-10 19:59:49','2024-06-10 19:59:49'),(10,'alpecin-deceuninck','Alpecin - Deceuninck','Belgium','Alpecin','2013-01-01','https://firstcycling.com/img/teamlogo/21845.png','2024-06-10 19:59:49','2024-06-10 19:59:49'),(11,'team-dsm-firmenich-postnl','Team dsm-firmenich PostNL','Netherlands','DSM','2015-01-01','https://asset.scott-sports.com/fit-in/1200x675/sco/sco-bike-team-dsm-team-profile-team-profile-picture-1000x1000_2124496.jpg?signature=90b34ee27448797ca6efa64be850144a6250dde44756c78d283ecdaf1ebb5770','2024-06-10 19:59:49','2024-06-10 19:59:49');
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Urson Vermeersch',1,'urson.vermeersch@student.arteveldehs.be','2024-06-10 19:59:49','$2y$12$Hds3rxhreJsbKk/.Yl1ZeuxwqbcZP8kDJbgDX7MJqmGeBHtm/Fd5S','5Z6OrAAfNh','2024-06-10 19:59:50','2024-06-10 19:59:50');
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

-- Dump completed on 2024-06-10 20:20:35
