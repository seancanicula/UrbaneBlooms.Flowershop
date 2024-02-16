function registerUser() {
    // Get form values
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Perform validation
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Check if user already exists in local storage
    var users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    var existingUser = users.find(user => user.email === email);

    if (existingUser) {
        alert("User with this email already exists. Please use a different email.");
        return;
    }

    // Add the new user to the local storage
    var newUser = {
        name: name,
        contact: contact,
        address: address,
        email: email,
        password: password
    };

    users.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(users));

    alert("Registration successful!");

    // Optionally, you can redirect the user to another page after successful registration
    window.location.href = "login.html";
}