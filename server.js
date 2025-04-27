<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin Login</title>
</head>
<body>
  <h2>Admin Login</h2>
  <form id="loginForm">
    <input type="text" id="username" placeholder="Username" required><br><br>
    <input type="password" id="password" placeholder="Password" required><br><br>
    <button type="submit">Login</button>
  </form>

  <script>
    document.getElementById('loginForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const response = await fetch('https://your-vercel-backend-url/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to admin dashboard
      } else {
        alert("Invalid Username or Password!");
      }
    });
  </script>
</body>
</html>
