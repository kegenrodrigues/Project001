<html>

<head>
	<title>This is PHP</title>
</head>

<body>

<?php

echo "Hello ".$_POST["firstname"]." ".$_POST["lastname"];
echo"<br>";
echo "Your Username is ".$_POST["username"]." and your Password is ".$_POST["password"];

?>

</body>

</html>