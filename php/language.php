<?php
//https://okaypanelback.ru/php/language.php
header('Access-Control-Allow-Origin: *');
$locale = Locale::acceptFromHttp($_SERVER['HTTP_ACCEPT_LANGUAGE']);
echo json_encode($locale);
