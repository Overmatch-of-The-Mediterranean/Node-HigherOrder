-- 新建一张表
CREATE TABLE `t_products`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(20) UNIQUE NOT NULL,
	description VARCHAR(20),
	price INT DEFAULT(0),
	createTime DATETime
)

-- 2.DML语句插入数据
INSERT INTO `t_products` (title, description, price, createTime) VALUES('苹果99', '苹果99只要99', 99, '2023-1-1');
INSERT INTO `t_products` (title, description, price, createTime) VALUES('小米88', '小米只要88', 88, '2023-2-2');
INSERT INTO `t_products` (title, description, price, createTime) VALUES('华为66', '华为66只要66', 66, '2023-3-3');

-- 3.DML删除语句
DELETE FROM `t_products`; -- 删除所有

-- 根据id删除某一条数据
DELETE FROM `t_products` where id = 4;

-- 根据id修改某一条数据
UPDATE `t_products` SET title = '小米100', price = 100 WHERE id = 5;

-- 修改数据后，直接显示最新的修改时间
ALTER TABLE `t_products` ADD updateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

UPDATE `t_products` SET title = '华为666', price = 666 WHERE id = 6;