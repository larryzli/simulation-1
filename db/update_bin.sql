UPDATE items SET name = $1 WHERE shelf = $3 AND bin_number = $4;
UPDATE items SET price = $2 WHERE shelf = $3 AND bin_number = $4;