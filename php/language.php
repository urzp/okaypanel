<?php
//https://okaypanelback.ru/php/language.php
header('Access-Control-Allow-Origin: *');

function getFirstTwoCharsInLowercase($string) {
    $firstTwoChars = substr($string, 0, 2);
    $lowercaseChars = strtolower($firstTwoChars);
    return $lowercaseChars;
}

$locale = Locale::acceptFromHttp($_SERVER['HTTP_ACCEPT_LANGUAGE']);
$locale = getFirstTwoCharsInLowercase($locale);
//echo json_encode($locale);

include 'languages.php';
$languages = json_decode($languagesList, true);

if (array_key_exists($locale, $languages)) {
    $value = $languages[$locale];
    echo json_encode($value);
} else {
    echo json_encode("fall");
}
