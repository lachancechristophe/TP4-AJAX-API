<?php

require_once 'connect.php';

$stmt = $pdo->query('SELECT * FROM software');
echo json_encode($stmt->fetchall());