-- 对数据库进行操作
-- 1.查看当前所有数据库
SHOW DATABASES;

-- 2.创建一个新的数据库
CREATE DATABASE IF NOT EXISTS `user`;

-- 3.使用某一个数据库
USE `user`;

-- 4.删除某一个数据库
DROP DATABASE IF EXISTS test;

-- 5.修改数据库（了解）