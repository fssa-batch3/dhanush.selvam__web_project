function signUp(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone_no = document.getElementById("phone_no").value;
  const user_uniqueId = uuidv4();
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirm_password").value;
  const address = "";
  const state = "";
  const pincode = "";

  const userData = JSON.parse(localStorage.getItem("userData")) || [];

  const exist = userData.some((data) => data.phone_no === phone_no);

  if (!exist) {
    if (password === confirm_password) {
      userData.push({
        name,
        phone_no,
        password,
        address,
        state,
        pincode,
        user_uniqueId,
      });
      localStorage.setItem("userData", JSON.stringify(userData));
      document.querySelector("form").reset();
      document.getElementById("phone_no").focus();
      alert("Account Created Successfully");
      window.location.href = "../../pages/sign in.html";
    } else {
      alert("Password doesn't matched!");
    }
  } else {
    alert("Ooopppssss... Duplicate found! You have already signed up");
  }
}

function signIn(e) {
  e.preventDefault();

  const phone_no = document.getElementById("phone_no").value;
  const password = document.getElementById("password").value;

  const userData = JSON.parse(localStorage.getItem("userData")) || [];

  const exist = JSON.parse(localStorage.getItem("userData")).some(
    (data) => data.phone_no === phone_no && data.password === password
  );

  if (!exist) {
    alert("Incorrect login credentials");
  } else {
    localStorage.setItem("phone_no_id", JSON.stringify(phone_no));
    alert("Successfully logined");
    window.location.href = "../../pages/buyer_profile.html";
    document.querySelector("form").reset();
  }
}
