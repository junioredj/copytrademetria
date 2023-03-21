<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Methods: *");

    require_once "autoload.php";

    //$dados = json_decode(file_get_contents('php://input'));

    var_dump(file_get_contents('php://input'));
?>