<?php

$conn = new mysqli("localhost", "root", "", "pipit_patisserie");


if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT * FROM orders ORDER BY id DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pipit Patisserie Admin Dashboard</title>
  <link rel="stylesheet" href="admin.css">
</head>
<body>

  <div class="admin-header">
    <h1>Pipit Patisserie Orders</h1>
    <a href="index.html" class="back-btn">← Back to Shop</a>
  </div>

  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer Name</th>
          <th>Phone Number</th>
          <th>Card Number</th>
          <th>CVV</th>
          <th>Expiration</th>
          <th>Address</th>
          <th>Order Date</th>
        </tr>
      </thead>
      <tbody>
        <?php
        if ($result->num_rows > 0) {
          while($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>".$row["id"]."</td>";
            echo "<td>".$row["customer_name"]."</td>";
            echo "<td>".$row["phone_number"]."</td>";
            echo "<td>".$row["card_number"]."</td>";
            echo "<td>".$row["cvv"]."</td>";
            echo "<td>".$row["exp_date"]."</td>";
            echo "<td>".$row["address"]."</td>";
            echo "<td>".$row["order_date"]."</td>";
            echo "</tr>";
          }
        } else {
          echo "<tr><td colspan='7'>No orders yet.</td></tr>";
        }
        ?>
      </tbody>
    </table>
  </div>

</body>
</html>
