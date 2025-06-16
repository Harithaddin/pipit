<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin - Pipit Patisserie Orders</title>
  <link rel="stylesheet" href="admin.css">
</head>
<body>
  <h1>Admin Orders Page</h1>
  <table>
    <tr>
      <th>Cake</th><th>Price (RM)</th><th>Buyer</th>
      <th>Card</th><th>CVV</th><th>Exp Date</th><th>Order Time</th>
    </tr>
    <?php
      if (file_exists('orders.txt')) {
        $orders = file('orders.txt');
        foreach ($orders as $order) {
          $parts = explode('|', trim($order));
          if (count($parts) === 7) {
            list($cake, $price, $buyer, $card, $cvv, $exp, $date) = $parts;
            echo "<tr>
              <td>$cake</td><td>$price</td><td>$buyer</td>
              <td>$card</td><td>$cvv</td><td>$exp</td><td>$date</td>
            </tr>";
          }
        }
      }
    ?>
  </table>
</body>
</html>
