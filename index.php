<!DOCTYPE html>
<html>
<head>
<title>Granger Tracker | Acidtu.be</title>
<link rel="stylesheet" href="css/general.css" />
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="/js/hcharts.js"></script>
<script type="text/javascript" src="/js/hchartheme.js"></script>
<script type="text/javascript" src="js/general.js"></script>
<?php if(isset($_GET["s"])) : ?>
<link rel="stylesheet" href="css/server.css" />
<script type="text/javascript" src="js/server.js"></script>
<?php elseif(isset($_GET["p"])) : ?>
<link rel="stylesheet" href="css/player.css" />
<script type="text/javascript" src="js/player.js"></script>
<?php else : ?>
<link rel="stylesheet" href="css/browser.css" />
<script type="text/javascript" src="js/browser.js"></script>
<?php endif; ?>
</head>
<body>
</body>
</html>