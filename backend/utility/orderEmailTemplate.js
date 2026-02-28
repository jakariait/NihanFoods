const generateOrderEmailHTML = (order) => {
  const productListHTML = order.items
    .map(
      (item) => `
        <tr>
          <td style="padding:8px;border:1px solid #ddd;">
            ${item.productId?.name || "N/A"}
          </td>
          <td style="padding:8px;border:1px solid #ddd;text-align:center;">
            ${item.quantity}
          </td>
          <td style="padding:8px;border:1px solid #ddd;text-align:right;">
            ৳${item.price}
          </td>
        </tr>
      `
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>New Order</title>
</head>

<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;">

  <div style="max-width:600px;margin:30px auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">

    <!-- Header -->
    <div style="background:#16a34a;color:#fff;padding:20px;text-align:center;">
      <h2 style="margin:0;">🛒 New Order Received</h2>
      <p style="margin:5px 0 0;font-size:14px;">
        Order No: <strong>${order.orderNo}</strong>
      </p>
    </div>

    <!-- Body -->
    <div style="padding:20px;color:#333;">

      <!-- Customer Info -->
      <h3 style="margin-bottom:10px;border-bottom:2px solid #eee;padding-bottom:5px;">
        Customer Details
      </h3>

      <p><strong>Name:</strong> ${order.shippingInfo.fullName}</p>
      <p><strong>Phone:</strong> ${order.shippingInfo.mobileNo}</p>
      <p><strong>Address:</strong> ${order.shippingInfo.address}</p>

      <!-- Order Info -->
      <h3 style="margin:20px 0 10px;border-bottom:2px solid #eee;padding-bottom:5px;">
        Order Summary
      </h3>

      <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
        <thead>
          <tr style="background:#f3f4f6;">
            <th style="padding:8px;border:1px solid #ddd;text-align:left;">Product</th>
            <th style="padding:8px;border:1px solid #ddd;">Qty</th>
            <th style="padding:8px;border:1px solid #ddd;text-align:right;">Price</th>
          </tr>
        </thead>

        <tbody>
          ${productListHTML}
        </tbody>
      </table>

      <!-- Total -->
      <div style="margin-top:20px;text-align:right;font-size:16px;">
        <strong>Total Amount:</strong>
        <span style="color:#16a34a;font-size:18px;">
          ৳${order.totalAmount}
        </span>
      </div>

    </div>

    <!-- Footer -->
    <div style="background:#f9fafb;padding:15px;text-align:center;font-size:13px;color:#777;">
      <p style="margin:0;">This is an automated order notification.</p>
      <p style="margin:5px 0 0;">
        © ${new Date().getFullYear()} Nihan Foods
      </p>
    </div>

  </div>

</body>
</html>
`;
};

module.exports = generateOrderEmailHTML;