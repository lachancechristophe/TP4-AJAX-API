<?php

if(empty($_REQUEST['id'])) die();
if(!empty($_REQUEST['name'])
&& !empty($_REQUEST['type'])
&& !empty($_REQUEST['company'])) {
    require_once 'connect.php';

    $sql_query = 'UPDATE software ';
    $sql_query .= 'SET name = :name, type = :type, company = :company ';
    $sql_query .= 'WHERE id = :id';

    $stmt = $pdo->prepare($sql_query);
    $stmt->execute(
        ['name' => $_REQUEST['name'], 
        'type' => $_REQUEST['type'],
        'id' => $_REQUEST['id'],
        'company' => $_REQUEST['company']]
    );
    echo json_encode($stmt);
}