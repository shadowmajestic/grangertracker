<?php
define("REMOTE","http://scan.acidtu.be/");
$context  = stream_context_create(array('http' => array('user_agent' => 'Acidtu.be Tracker')));
$cat = $_GET["cat"];
unset($_GET["cat"]);
$string = http_build_query($_GET);
echo file_get_contents(REMOTE . "/" . $cat . "/" . "?" . $string, false, $context);
