
-- 为单独品牌创建一张表
CREATE TABLE `brands`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) UNIQUE NOT NULL,
	website VARCHAR(200),
	worldRank INT
)

INSERT INTO `brands` (name, website, worldRank) VALUES ('华为', 'www.huawei.com', 1);
INSERT INTO `brands` (name, website, worldRank) VALUES ('小米', 'www.mi.com', 10);
INSERT INTO `brands` (name, website, worldRank) VALUES ('苹果', 'www.apple.com', 5);
INSERT INTO `brands` (name, website, worldRank) VALUES ('oppo', 'www.oppo.com', 15);
INSERT INTO `brands` (name, website, worldRank) VALUES ('京东', 'www.jd.com', 3);
INSERT INTO `brands` (name, website, worldRank) VALUES ('Google', 'www.google.com', 8);

-- 为products表设置brand_id，并设置外键约束
ALTER TABLE `products` ADD brand_id INT;
ALTER TABLE `products` ADD FOREIGN KEY (brand_id) REFERENCES brands(id);


-- 设置products中华为手机的brand_id
UPDATE `products` SET brand_id = 1 WHERE brand_id IS NULL && brand = '华为';
UPDATE `products` SET brand_id = 2 WHERE brand_id IS NULL && brand = '小米';
UPDATE `products` SET brand_id = 3 WHERE brand_id IS NULL && brand = '苹果';
UPDATE `products` SET brand_id = 4 WHERE brand_id IS NULL && brand = 'oppo';
UPDATE `products` SET brand_id = 5 WHERE brand_id IS NULL && brand = '京东';
UPDATE `products` SET brand_id = 6 WHERE brand_id IS NULL && brand = 'Google';

-- 有外键约束的情况下，修改brands中的id
UPDATE `brands` SET id = 100 WHERE id = 1;


-- 查看products中目前的外键
SHOW CREATE TABLE `products`;

-- CREATE TABLE `products` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `brand` varchar(20) DEFAULT NULL,
--   `title` varchar(100) NOT NULL,
--   `price` double NOT NULL,
--   `score` decimal(2,1) DEFAULT NULL,
--   `voteCnt` int DEFAULT NULL,
--   `url` varchar(100) DEFAULT NULL,
--   `pid` int DEFAULT NULL,
--   `brand_id` int DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `brand_id` (`brand_id`),
--   CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

-- 删除外键
ALTER TABLE `products` DROP FOREIGN KEY products_ibfk_1;


ALTER TABLE `products` ADD FOREIGN KEY (brand_id) REFERENCES brands(id)
											 ON UPDATE CASCADE
											 ON DELETE CASCADE;
											 
											 
											 




