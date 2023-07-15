-- 1.多对多关系
-- 1.1 创建学生表
CREATE TABLE IF NOT EXISTS `students`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	age INT
);

-- 1.2 创建课程表
CREATE TABLE IF NOT EXISTS `courses`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	price DOUBLE NOT NULL
);


-- 1.3 创建学生和课程的关系表
CREATE TABLE IF NOT EXISTS `students_select_courses`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	student_id INT NOT NULL,
	course_id INT NOT NULL,
	FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE ON DELETE CASCADE
);


-- 模拟学生数据
INSERT INTO `students` (name, age) VALUES('why', 18);
INSERT INTO `students` (name, age) VALUES('tom', 22);
INSERT INTO `students` (name, age) VALUES('lilei', 25);
INSERT INTO `students` (name, age) VALUES('lucy', 16);
INSERT INTO `students` (name, age) VALUES('lily', 20);

-- 模拟课程数据
INSERT INTO `courses` (name, price) VALUES ('英语', 100);
INSERT INTO `courses` (name, price) VALUES ('语文', 666);
INSERT INTO `courses` (name, price) VALUES ('数学', 888);
INSERT INTO `courses` (name, price) VALUES ('历史', 80);
INSERT INTO `courses` (name, price) VALUES ('物理', 80);


-- 模拟关系表数据
# why 选修了 英文和数学
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (1, 1);
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (1, 3);
# lilei选修了 语文和数学和历史
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (3, 2);
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (3, 3);
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (3, 4);


-- 查询数据
-- 1.所有选课学生的选课情况
SELECT
 stu.name stuName, stu.age stuAge, cs.name  csName, cs.price csPrice
FROM `students` stu
JOIN `students_select_courses` ssc ON ssc.student_id = stu.id
JOIN `courses` cs ON ssc.course_id = cs.id;


-- 2.所有学生的选课情况(不管有没有选课)
SELECT
 stu.name stuName, stu.age stuAge, cs.name  csName, cs.price csPrice
FROM `students` stu
LEFT JOIN `students_select_courses` ssc ON ssc.student_id = stu.id
LEFT JOIN `courses` cs ON ssc.course_id = cs.id;


-- 3.单个学生的选课情况（why）
SELECT
 stu.name stuName, stu.age stuAge, cs.name  csName, cs.price csPrice
FROM `students` stu
JOIN `students_select_courses` ssc ON ssc.student_id = stu.id
JOIN `courses` cs ON ssc.course_id = cs.id
WHERE stu.id = 1;

 
--  4.查询那些学生没有选课
SELECT
 stu.name stuName, stu.age stuAge, cs.name  csName, cs.price csPrice
FROM `students` stu
LEFT JOIN `students_select_courses` ssc ON ssc.student_id = stu.id
LEFT JOIN `courses` cs ON ssc.course_id = cs.id
WHERE cs.id IS NULL;


--  5.查询那些课没有被选
SELECT
 stu.name stuName, stu.age stuAge, cs.name  csName, cs.price csPrice
FROM `students` stu
RIGHT JOIN `students_select_courses` ssc ON ssc.student_id = stu.id
RIGHT JOIN `courses` cs ON ssc.course_id = cs.id
WHERE stu.id IS NULL;

 
