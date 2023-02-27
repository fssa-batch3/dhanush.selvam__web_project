function signUp(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
        phone_no = document.getElementById("phone_no").value;
        // email = document.getElementById("email").value,
        user_uniqueId = uuidv4();
        password = document.getElementById("password").value;
        confirm_password = document.getElementById("confirm_password").value;
        address_line1 = "";
        address_line2 = "";
        pincode = "";


    let userData = JSON.parse(localStorage.getItem('userData')) || [];     

    let exist = userData.some( data =>
        data.phone_no == phone_no);

    if (!exist) {
        if(password == confirm_password){ 
            userData.push({ name, phone_no, password, confirm_password, address_line1, address_line2, pincode, user_uniqueId });
            localStorage.setItem('userData', JSON.stringify(userData));
            document.querySelector('form').reset();
            document.getElementById('phone_no').focus();
            // document.getElementById('email').focus();
            alert("Account Created Successfully");
            location.href = "../../pages/sign in.html";
        }  
        else{  
            alert("Password doesn't matched!");  
        }          
    }
    else {
        alert("Ooopppssss... Duplicate found! You have already signed up");
    }
}

function signIn(e) {
    e.preventDefault();

    let phone_no = document.getElementById('phone_no').value;
        password = document.getElementById('password').value;

    let userData = JSON.parse(localStorage.getItem('userData')) || [];

    let exist = JSON.parse(localStorage.getItem('userData')).some(data =>
            data.phone_no.toLowerCase() == phone_no.toLowerCase() &&
            data.password == password);

    if (!exist) {
        alert("Incorrect login credentials");
    }
    else {
        localStorage.setItem("phone_no_id",JSON.stringify(phone_no));
        alert("Successfully logined");
        location.href = "../../pages/buyer_profile.html";
        document.querySelector('form').reset();
    }
}