function login() {
    // Get values from the login form
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    // Validate the values (add more validation as needed)
    if (loginUsername && loginPassword) {
        // Retrieve user data from localStorage (replace with server-side logic in a real application)
        var users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        // Check if the user exists and the password matches
        var user = users.find(u => u.email === loginUsername && u.password === loginPassword);

        if (user) {
            alert("Login successful!");
            // Redirect to the homepage or another page after successful login
            window.location.href = "home.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    } else {
        alert("Please fill in all fields.");
    }
}