SELECT email FROM Person
GROUP BY email
HAVING COUNT(email) > 1;

-- SELECT DISTINCT p1.Email
-- FROM Person p1, Person p2
-- WHERE p1.Email = p2.Email AND p1.Id != p2.Id;