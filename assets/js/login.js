function signUp(e) {
    e.preventDefault();

    let name = document.getElementById("name").value,
        phone_no = document.getElementById("phone_no").value,
        email = document.getElementById("email").value,
        password = document.getElementById("password").value,
        confirm_password = document.getElementById("confirm_password").value;

    let userData = JSON.parse(localStorage.getItem('userData')) || [];

    let exist = userData.length &&
        JSON.parse(localStorage.getItem('userData')).some(data =>
            data.phone_no.toLowerCase() == phone_no.toLowerCase() ||
            data.email.toLowerCase() == email.toLowerCase()
        );

    if (!exist) {
        userData.push({ name, phone_no, email, password, confirm_password });
        localStorage.setItem('userData', JSON.stringify(userData));
        document.querySelector('form').reset();
        document.getElementById('phone_no').focus();
        document.getElementById('email').focus();
        alert("Account Created Successfully");
        location.href = "../../pages/sign in.html";
    }
    else {
        alert("Ooopppssss... Duplicate found! You have already signed up");
    }
}

function signIn(e) {
    e.preventDefault();

    let email = document.getElementById('email').value,
        phone_no = document.getElementById('phone_no').value,
        password = document.getElementById('password').value;

    let userData = JSON.parse(localStorage.getItem('userData')) || [];

    let exist = userData.length &&
        JSON.parse(localStorage.getItem('userData')).some(data =>
            data.email.toLowerCase() == email &&
            data.phone_no.toLowerCase() == phone_no &&
            data.password.toLowerCase() == password);

    if (!exist) {
        alert("Incorrect login credentials");
    }
    else {
        alert("Successfully logined");
        location.href = "../../index.html";
    }
}
