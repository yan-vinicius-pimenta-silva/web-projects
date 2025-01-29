<?php 

  //let's get all form values

  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  echo "<pre>";
  print_r($_POST);
  echo "</pre>";

  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $website = $_POST["website"];
  $message  = $_POST["message"];

  echo $name;

  


?>