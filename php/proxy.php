<?php
define("REMOTE","http://scanner.alepe.com/");
define("KEY","4C1DTU83");
$context  = stream_context_create(array('http' => array('user_agent' => 'Acidtu.be Tracker')));
$cat = $_GET["cat"];
unset($_GET["cat"]);
$string = http_build_query($_GET);
echo file_get_contents(REMOTE . "/" . $cat . "/" . "?key=" . KEY . "&" . $string, false, $context);
