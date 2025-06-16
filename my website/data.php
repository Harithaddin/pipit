<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $cakeName = $_POST['cakeName'];
  $cakePrice = $_POST['cakePrice'];
  $buyerName = $_POST['buyerName'];
  $phone_number  = $_POST['phone_number'];
  $cardNumber = $_POST['cardNumber'];
  $cvv = $_POST['cvv'];
  $expDate = $_POST['expDate'];
  $date = date('Y-m-d H:i:s');

  $line = "$cakeName|$cakePrice|$buyerName|$cardNumber|$phoneNumber|$cvv|$expDate|$date\n";
  file_put_contents('orders.txt', $line, FILE_APPEND);

  echo "Thank you $buyerName! Your order for $cakeName has been placed.";
}
?>
