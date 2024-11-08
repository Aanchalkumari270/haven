function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = "";

    if (username === "Aanchal" && password === "xyz123456") {
        window.location.href = "./test2_CE.html"
    }
       
}