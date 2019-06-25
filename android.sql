/*
Source Server         : banco
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : android

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-06-12 20:07:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for pedidos
-- ----------------------------
DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `quantidade` int(11) NOT NULL,
  `status` enum('D','F','C') NOT NULL,
  `preco` float DEFAULT NULL,
  `pessoaId` int(11) NOT NULL,
  `produtoId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pessoaId` (`pessoaId`),
  KEY `produtoId` (`produtoId`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`pessoaId`) REFERENCES `pessoas` (`id`),
  CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`produtoId`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pedidos
-- ----------------------------
INSERT INTO `pedidos` VALUES ('1', 'COmpra pelo site', null, '2', 'C', null, '6', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `pedidos` VALUES ('2', 'compras diversas', null, '1', 'C', null, '12', '3', '2019-06-12 20:05:01', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for pessoas
-- ----------------------------
DROP TABLE IF EXISTS `pessoas`;
CREATE TABLE `pessoas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contato` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pessoas
-- ----------------------------
INSERT INTO `pessoas` VALUES ('6', 'Jonas', null, null, null, null, null, '2019-06-01 00:28:34', '2019-06-01 00:28:34');
INSERT INTO `pessoas` VALUES ('11', 'Jonas', 'Barracao', 'Orleans', '727813572461378', 'jonasvargaski@hotmail.com', 'teste', '2019-06-12 22:55:49', '2019-06-12 22:55:49');
INSERT INTO `pessoas` VALUES ('12', 'Colono', 'Boa vista', 'Orleans', '64782931438547', 'naotem.com', 'kadsjbhd', '2019-06-12 22:56:12', '2019-06-12 22:56:12');
INSERT INTO `pessoas` VALUES ('13', 'Zequinha', 'Meio do mato', 'Orleans', '7249813095', 'teste@teste.com', 'lkasjfd', '2019-06-12 22:56:37', '2019-06-12 22:56:37');

-- ----------------------------
-- Table structure for produtos
-- ----------------------------
DROP TABLE IF EXISTS `produtos`;
CREATE TABLE `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  `precoCusto` float NOT NULL,
  `precoVenda` float DEFAULT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `cor` varchar(255) DEFAULT NULL,
  `tamanho` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of produtos
-- ----------------------------
INSERT INTO `produtos` VALUES ('1', 'sapato', '29.99', '59.99', null, 'preto', '41', '2019-06-12 20:02:38', '0000-00-00 00:00:00');
INSERT INTO `produtos` VALUES ('2', 'bota', '19.89', '39.96', null, 'branco', '44', '2019-06-12 20:03:10', '0000-00-00 00:00:00');
INSERT INTO `produtos` VALUES ('3', 'celular', '899.99', '1350.9', 'nokia', 'preto', null, '2019-06-12 20:03:42', '0000-00-00 00:00:00');
