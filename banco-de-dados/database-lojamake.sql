SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "-03:00";

CREATE DATABASE IF NOT EXISTS `lojamake` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `lojamake`;

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome_completo` char(255) NOT NULL,
  `cpf` decimal(11) NOT NULL,
  `data_nascimento` date DEFAULT NULL,
  `telefone` char(15) DEFAULT NULL,
  `email` varchar(120) DEFAULT 'DF',
  `senha` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `usuarios` ( `nome_completo`, `cpf`, `data_nascimento`, `telefone`, `email`, `senha`) VALUES
('Elizabete Caviar Silveira', '98989898989', '2000-06-25', '61985854545', 'elizabete.44@gmail.com', 'Elize@44');
COMMIT;