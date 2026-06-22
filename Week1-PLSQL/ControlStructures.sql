USE cognizant_dn5;

-- Scenario 1
-- Apply 1% discount to customers above 60

UPDATE Loans l
JOIN Customers c
ON l.CustomerID = c.CustomerID
SET l.InterestRate = l.InterestRate - 1
WHERE c.Age > 60;

SELECT * FROM Loans;

-- Scenario 2
-- Mark VIP customers

UPDATE Customers
SET IsVIP = TRUE
WHERE Balance > 10000;

SELECT * FROM Customers;

-- Scenario 3
-- Customers whose loans are due within 30 days

SELECT
    c.Name,
    l.LoanID,
    l.DueDate
FROM Customers c
JOIN Loans l
ON c.CustomerID = l.CustomerID
WHERE l.DueDate BETWEEN CURDATE()
AND DATE_ADD(CURDATE(), INTERVAL 30 DAY);
