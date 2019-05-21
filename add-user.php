<?php

if(!empty($_REQUEST['id'])) die();
if(!empty($_REQUEST['username'])
&& !empty($_REQUEST['is_admin'])) {
    require_once 'connect.php';

    $sql_query = 'INSERT INTO user ';
    $sql_query .= '(username, is_admin, created) ';
    $sql_query .= 'VALUES (:username, :is_admin, NOW()); ';

    $stmt = $pdo->prepare($sql_query);
    $admin = $_REQUEST['is_admin'] == "True" ? 1 : 0;
    $stmt->execute(['username' => $_REQUEST['username'], 'is_admin' => $admin]);
    echo json_encode($stmt);
}