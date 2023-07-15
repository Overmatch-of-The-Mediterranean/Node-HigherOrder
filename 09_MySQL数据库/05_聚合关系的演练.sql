-- 1.计算华为手机的平均价格
SELECT ROUND(AVG(price),2) FROM `products` WHERE brand = '华为';

-- 2.计算华为手机的平均评分
SELECT ROUND(AVG(score),2) FROM `products` WHERE brand = '华为';

-- 3.选择手机中评分最高/最低的分数
SELECT MAX(score) FROM `products`; 
SELECT MIN(score) FROM `products`; 

-- 4.所有手机一共有多少人投过票
SELECT sum(voteCnt) FROM `products`;

-- 5.一共有多少个商品
SELECT COUNT(*) FROM `products`;

-- 6.group by:数据根据brand进行分组
-- Having通常和GROUP BY一起使用
SELECT
	brand, MAX(price),AVG(price) AS avgPrice, AVG(score) AS avgScore
FROM `products`
GROUP BY brand
HAVING avgScore > 7 AND avgPrice < 4000;