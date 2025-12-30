SELECT id, username, email, status
FROM users
WHERE id = 101;

SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

SELECT o.id
FROM orders o
LEFT JOIN order_items oi ON o.id = oi.order_id
WHERE oi.order_id IS NULL;

SELECT o.id, o.total_amount,
       SUM(oi.price * oi.quantity) AS calculated_total
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
GROUP BY o.id, o.total_amount
HAVING o.total_amount <> SUM(oi.price * oi.quantity);

SELECT id, status, completed_at
FROM orders
WHERE status = 'COMPLETED'
  AND completed_at IS NULL;

