<?php
$_POST = json_decode(file_get_contents("php://input"), true); // позволяет работать с json
echo var_dump($_POST); //берет данные из клиента, превращает в строку и обратно показывает на клиенте
