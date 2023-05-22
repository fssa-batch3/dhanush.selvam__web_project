const params = new URLSearchParams(window.location.search);
const user = params.get('user');

window.addEventListener("load", function () {
    if (user === "rep") {
        document.querySelector("div.customerContainer").style.display = "none";
        document.getElementById("user_id").required = true;
    }

    else if (user === "customer") {
        document.querySelector("div.userIdContainer").style.display = "none";
        document.getElementById("phone_no").required = true;
    }
    document.getElementById("regLink").style.cursor = "pointer";
});

document.getElementById("regLink").addEventListener("click",() => {
  window.location.href = `register.html?user=${user}`
})

function signIn(e) {
  e.preventDefault();

  if(user === "customer"){

    const phone_no = document.getElementById("phone_no").value;
    const password = document.getElementById("password").value;

    const exist = JSON.parse(localStorage.getItem("userData")).some((data) => data.phone_no === phone_no && data.password === password);

    if (!exist) {
      alert("Incorrect login credentials");
    } else {
      localStorage.setItem("phone_no_id", JSON.stringify(phone_no));
      alert("Successfully logined");
      window.location.href = "../../pages/buyer_profile.html";
    }
  }

  else if(user === "rep"){

    const user_id = document.getElementById("user_id").value;
    const password = document.getElementById("password").value;

    const exist = JSON.parse(localStorage.getItem("rep_details")).some((data) => data.userId === user_id && data.password === password);

    if (!exist) {
      alert("Incorrect login credentials");
    } else {
      localStorage.setItem("rep_id", JSON.stringify(user_id));
      alert("Successfully logined");
      window.location.href = "../../pages/buyer_profile.html";
    }
  }

  document.querySelector("form").reset();
}

document.getElementById("loginForm").addEventListener("submit", signIn);
