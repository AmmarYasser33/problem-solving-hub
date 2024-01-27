SELECT P.firstName, P.lastName, A.city, A.state
FROM Person P LEFT JOIN Address A
on P.personId = A.personId

-- SELECT P.firstName, P.lastName, A.city, A.state
-- FROM Person P
-- LEFT JOIN Address A USING (personId)