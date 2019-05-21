<?php

require_once 'connect.php';

$stmt = $pdo->query('SELECT * FROM user');
echo json_encode($stmt->fetchall());