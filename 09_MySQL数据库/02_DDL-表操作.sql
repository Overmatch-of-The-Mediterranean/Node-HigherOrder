-- 1.创建一张新表
CREATE TABLE IF NOT EXISTS `users`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) UNIQUE NOT NULL,
	level INT DEFAULT(0),
	telephone VARCHAR(20) UNIQUE
)

-- 2.修改表结构
-- 2.1 修改表名
ALTER TABLE `users` RENAME `t_user`;

-- 2.2 添加新的字段(field)
ALTER TABLE `t_user` ADD createTime TIMESTAMP;
ALTER TABLE `t_user` ADD updateTime DATETIME;

-- 2.3 修改字段的名称
ALTER TABLE `t_user` CHANGE createTime createAt TIMESTAMP;

-- 2.4 删除字段
ALTER TABLE `t_user` DROP createAt;

-- 2.5 修改某一字段的类型