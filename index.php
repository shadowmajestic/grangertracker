<!DOCTYPE html>
<html>
<head>
	<title>Granger Tracker | Acidtu.be</title>
	<link rel="stylesheet" href="css/general.css" />
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="/js/hcharts.js"></script>
	<script type="text/javascript" src="/js/hchartheme.js"></script>
	<script type="text/javascript" src="js/transparency.js"></script>
	<script type="text/javascript" src="js/chic.js"></script>
	<script type="text/javascript" src="js/require.js"></script>
	<script type="text/javascript" src="js/general.js"></script>
	<script type="text/javascript" src="js/UI.js"></script>
<?php if(isset($_GET["s"])) : //Servers ?>
	<link rel="stylesheet" href="css/server.css" />
	<script type="text/javascript" src="js/server.js"></script>
<?php elseif(isset($_GET["p"])) : //Players ?>
	<link rel="stylesheet" href="css/player.css" />
	<script type="text/javascript" src="js/player.js"></script>
<?php else : //Browser ?>
	<link rel="stylesheet" href="css/browser.css" />
	<script type="text/javascript" src="js/browser.js"></script>
<?php endif; ?>
</head>
<body>
	<header>
		<a href="http://track.acidtu.be/" id="tohome"></a>
		<div id="msg" class="warn">Granger Tracker is in Beta Stage.</div>
	</header>
	<aside id="left" class="win">
	</aside>
	<section id="main" class="win">
	</section>
	<aside id="right" class="win">
	</aside>
	<footer>
	</footer>
</body>
</html>
