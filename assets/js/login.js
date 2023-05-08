function signIn(e) {
  e.preventDefault();
  const phone_no = document.getElementById("phone_no").value;
  const password = document.getElementById("password").value;

  const exist = JSON.parse(localStorage.getItem("userData")).some(
    (data) => data.phone_no === phone_no && data.password === password
  );

  if (!exist) {
    alert("Incorrect login credentials");
  } else {
    localStorage.setItem("phone_no_id", JSON.stringify(phone_no));
    alert("Successfully logined");
    window.location.href = "../../pages/buyer_profile.html";
  }
  document.querySelector("form").reset();
}

document.getElementById("loginForm").addEventListener("submit", signIn);
