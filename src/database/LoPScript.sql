CREATE DATABASE LiesOfP;

CREATE TABLE avaliacoes_tierlist (
  id int NOT NULL AUTO_INCREMENT,
  id_usuario int DEFAULT NULL,
  id_boss int DEFAULT NULL,
  nota decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY id_usuario (id_usuario),
  KEY id_boss (id_boss),
  CONSTRAINT avaliacoes_tierlist_ibfk_1 FOREIGN KEY (id_usuario) REFERENCES usuario (id),
  CONSTRAINT avaliacoes_tierlist_ibfk_2 FOREIGN KEY (id_boss) REFERENCES bosses (id)
) 


INSERT INTO avaliacoes_tierlist VALUES (1,1,1,5),(2,1,7,5),(3,1,4,4),(4,1,6,4),(5,1,5,5),(6,1,1,3),(7,1,14,4),(8,1,15,4),(9,1,23,2),(10,1,8,5),(11,1,11,4),(12,1,26,1),(13,1,18,2),(14,1,17,2),(15,1,9,1),(16,1,21,1),(17,1,24,3),(18,1,12,5),(19,1,3,3),(20,1,10,3),(21,1,22,1),(22,1,25,1),(23,1,2,2),(24,1,16,1),(25,1,13,3),(26,1,20,1),(27,1,19,5),(28,1,1,2),(29,1,2,1),(30,9,14,5),(31,9,26,5),(32,9,21,5),(33,9,12,5),(34,9,22,5),(35,9,1,1),(36,9,19,5),(37,9,4,5),(38,9,17,5),(39,9,7,5),(40,9,9,5),(41,9,24,5),(42,9,23,1),(43,9,10,1),(44,9,3,5),(45,9,15,1),(46,9,13,1),(47,9,18,1),(48,9,2,1),(49,9,20,1),(50,9,11,1),(51,9,25,5),(52,9,5,1),(53,9,6,1),(54,9,8,1),(55,9,16,1),(56,1,1,1),(57,1,11,1),(58,1,4,2),(59,1,6,2),(60,1,10,1),(61,1,12,2),(62,1,7,2),(63,1,8,1),(64,1,3,1),(65,1,2,2),(66,1,14,1),(67,1,13,2),(68,1,5,1),(69,1,12,5),(70,1,14,5),(71,1,5,3),(72,1,11,4),(73,1,26,3),(74,1,6,4),(75,1,10,3),(76,1,16,2),(77,1,3,2),(78,1,2,2),(79,1,4,3),(80,1,22,1),(81,1,9,1),(82,1,19,4),(83,1,21,3),(84,1,7,5),(85,1,18,2),(86,1,1,2),(87,1,24,3),(88,1,15,1),(89,1,13,4),(90,1,25,3),(91,1,23,3),(92,1,8,5),(93,1,20,1),(94,1,17,2),(95,1,1,5),(96,1,1,5),(97,1,1,5),(98,1,1,5),(99,1,1,5),(100,1,1,5),(101,1,1,5),(102,1,12,1),(103,1,1,5),(104,1,19,1),(105,1,7,1),(106,1,1,5),(107,1,3,3),(108,1,2,2),(109,14,2,5);

CREATE TABLE bosses (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(80) DEFAULT NULL,
  tag varchar(80) DEFAULT NULL,
  PRIMARY KEY (id)
) 

INSERT INTO bosses VALUES (1,'Mestre do Desfile','ParadeMaster'),(2,'Vigia Sucateado','ScrappedWatchman'),(3,'Chama do Rei, Fuoco','Fuoco'),(4,'Arcebispo caído, Andreus','Andreus'),(5,'O mais velho da Irmandade da Lebre Negra','EldestBlackRabbit'),(6,'Rei dos títeres','KingOfPuppets'),(7,'Romeo, Rei dos Títeres','Romeo'),(8,'Campeão Victor','Victor'),(9,'Monstro Verde Devorador de Marionetes','GreenMonster'),(10,'Mestre do Desfile Corrompido','CorruptedParadeMaster'),(11,'Irmandade da Lebre Negra','BlackRabbitBrotherhood'),(12,'Laxasia, a Completa','Laxasia'),(13,'Simon Manus, Hand of God','Simon'),(14,'Títere sem nome','Nameless'),(15,'Burro Ensandecido','MadDonkey'),(16,'Marionete do Futuro','PuppetOfTheFuture'),(17,'Sobrevivente','Survivor'),(18,'A Expiada','TheAtoned'),(19,'Senhorita Branca','WhiteLady'),(20,'Marionete do Palhaço Louco','MadClown'),(21,'Doutor Coruja','OwlDoctor'),(22,'Andarilha das Ilusões','WalkerOfIllusions'),(23,'Guardião do Portão','DoorGuardian'),(24,'Ladra Doninha','RobberWeasel'),(25,'Raposa Vermelha','RedFox'),(26,'Gato Preto','BlackCat');

CREATE TABLE resultado_quiz (
  idResultado int NOT NULL AUTO_INCREMENT,
  fkUsuario int DEFAULT NULL,
  pontuacao_humanidade int DEFAULT NULL,
  data_hora datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (idResultado),
  KEY fk_usuario_quiz (fkUsuario),
  CONSTRAINT fk_usuario_quiz FOREIGN KEY (fkUsuario) REFERENCES usuario (id)
) 

INSERT INTO resultado_quiz VALUES (1,1,100,'2026-05-04 12:38:43'),(2,1,20,'2026-05-05 14:36:53'),(3,1,60,'2026-05-05 15:04:19'),(4,1,50,'2026-05-05 17:32:38'),(5,1,50,'2026-05-06 19:19:22'),(6,1,40,'2026-05-07 13:35:59'),(7,1,40,'2026-05-08 14:41:01'),(8,1,70,'2026-05-08 19:07:17'),(9,1,40,'2026-05-18 19:10:23'),(10,12,50,'2026-05-18 19:11:32'),(11,1,90,'2026-05-19 14:42:10'),(12,1,20,'2026-05-19 16:03:23'),(13,1,90,'2026-05-19 16:04:11'),(14,1,20,'2026-05-19 16:11:09'),(15,1,90,'2026-05-19 17:16:57'),(16,1,50,'2026-05-19 18:14:56'),(17,13,60,'2026-05-19 18:18:24'),(18,1,50,'2026-05-20 18:09:49'),(19,1,90,'2026-05-21 09:06:14'),(20,1,50,'2026-05-23 12:22:22'),(21,1,50,'2026-05-26 10:29:15'),(22,14,50,'2026-06-02 08:38:33');

CREATE TABLE usuario (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  senha varchar(255) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY email (email)
) 

INSERT INTO usuario VALUES (1,'teste','teste@gmail.com','teste1'),(2,'carlos','carlos@gmail.com','carlos'),(5,'61','6@gmail.com','123123'),(9,'Jacobeee','matheusj@gmail.com','Senha123!'),(10,'delete from usuario;','teste2@gmail.com','DELETE FROM usuario;'),(12,'teste3','teste3@gmail.com','teste3'),(13,'teste67','teste67@gmail.com','teste67'),(14,'teste4','teste4@gmail.com','teste4');
