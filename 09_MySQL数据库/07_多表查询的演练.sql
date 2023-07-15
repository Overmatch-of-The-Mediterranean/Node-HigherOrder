-- 1.直接从两张表中得到数据
-- 结果为笛卡尔积，也称直积，总共有X*Y条数据
SELECT * FROM products, brands;

-- 2.从两张表中查询所有数据并进行过滤
SELECT * FROM products, brands WHERE brands.id = products.brand_id;



-- 表连接

-- 1.左连接 LEFT JOIN '表' ON '连接条件'
SELECT * FROM `products` LEFT JOIN `brands` ON products.brand_id = brands.id;


-- 2.右连接 RIGHT JOIN '表' ON '连接条件'
SELECT * FROM `products` RIGHT JOIN `brands` ON products.brand_id = brands.id;
SELECT * FROM `products` RIGHT JOIN `brands` ON products.brand_id = brands.id WHERE products.id IS NULL;

-- 3.内连接 JOIN '表' ON '连接条件'
SELECT * FROM `products` JOIN `brands` ON products.brand_id = brands.id;

-- 4.全连接 
SELECT * FROM `products` LEFT JOIN `brands` ON products.brand_id = brands.id
UNION
SELECT * FROM `products` RIGHT JOIN `brands` ON products.brand_id = brands.id;


SELECT * FROM `products` LEFT JOIN `brands` ON products.brand_id = brands.id WHERE brands.id IS NULL
UNION
SELECT * FROM `products` RIGHT JOIN `brands` ON products.brand_id = brands.id WHERE products.id IS NULL;