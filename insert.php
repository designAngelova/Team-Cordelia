<?php

// Get values from form
$name=$_POST['name'];
$city=$_POST['city'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$mess=$_POST['message1'];

$to = "design.angelova@gmail.com";
$subject = "Test";
$message = " Name: " . $name . "\r\n City: " . $city . "\r\n Phone: " . $phone . "\r\n Email: " . $email. $message1;


$from = "FutureTutorials";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
if($_POST['send']){
mail('design.angelova@gmail.com', 'My Subject', $message);
}
if(@mail($to,$subject,$message,$headers))
{
  print "<script>document.location.href='success.html';</script>";
  // Created by Future Tutorials
}else{
  echo "Error! Please try again.";
}



?>
