/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 100137
 Source Host           : localhost:3306
 Source Schema         : test_node

 Target Server Type    : MySQL
 Target Server Version : 100137
 File Encoding         : 65001

 Date: 17/02/2019 13:47:38
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ilance_categories
-- ----------------------------
DROP TABLE IF EXISTS `ilance_categories`;
CREATE TABLE `ilance_categories`  (
  `cid` smallint(5) UNSIGNED NOT NULL,
  `name` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `parent` smallint(5) UNSIGNED NOT NULL,
  `degree` tinyint(3) UNSIGNED NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `deleted_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of ilance_categories
-- ----------------------------
INSERT INTO `ilance_categories` VALUES (1, 'a', 0, 1, 'http://piworld.oss-cn-beijing.aliyuncs.com/category/category_1.png', NULL);
INSERT INTO `ilance_categories` VALUES (2, 'b', 0, 1, 'http://piworld.oss-cn-beijing.aliyuncs.com/category/category_2.png', NULL);
INSERT INTO `ilance_categories` VALUES (3, 'c', 0, 1, 'http://piworld.oss-cn-beijing.aliyuncs.com/category/category_3.png', NULL);
INSERT INTO `ilance_categories` VALUES (4, 'd', 0, 1, 'http://piworld.oss-cn-beijing.aliyuncs.com/category/category_4.png', NULL);
INSERT INTO `ilance_categories` VALUES (5, 'e', 0, 1, 'http://piworld.oss-cn-beijing.aliyuncs.com/category/category_5.png', NULL);
INSERT INTO `ilance_categories` VALUES (6, 'f', 0, 1, 'http://piworld.oss-cn-beijing.aliyuncs.com/category/category_6.png', NULL);
INSERT INTO `ilance_categories` VALUES (7, 'g', 0, 1, 'http://piworld.oss-cn-beijing.aliyuncs.com/category/category_7.png', NULL);
INSERT INTO `ilance_categories` VALUES (8, 'h', 0, 1, 'http://piworld.oss-cn-beijing.aliyuncs.com/category/category_8.png', NULL);
INSERT INTO `ilance_categories` VALUES (9, 'i', 0, 1, 'http://piworld.oss-cn-beijing.aliyuncs.com/category/category_9.png', NULL);

SET FOREIGN_KEY_CHECKS = 1;
