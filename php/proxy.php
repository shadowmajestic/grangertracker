<?php
define("REMOTE","http://scanner.rn/");
define("KEY","4C1DTU83");
$context  = stream_context_create(array('http' => array('user_agent' => 'Acidtu.be Tracker')));
echo file_get_contents(REMOTE . "/general/" . "?key=" . KEY . "&" . $_SERVER["QUERY_STRING"], false, $context);