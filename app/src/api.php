<?php
header("Content-Type: application/json; charset=UTF-8");

$arr["sex"] = "male";
$arr["age"] = "35";

print json_encode($arr, JSON_PRETTY_PRINT);