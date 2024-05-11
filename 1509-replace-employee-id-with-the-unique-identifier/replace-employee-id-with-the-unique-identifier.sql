-- Write your PostgreSQL query statement below
SELECT COALESCE (NULL, eu.unique_id) as unique_id, e.name
FROM Employees as e
LEFT JOIN EmployeeUNI as eu ON e.id = eu.id