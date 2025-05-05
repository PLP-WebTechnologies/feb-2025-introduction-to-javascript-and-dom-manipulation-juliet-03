document.getElementById("clickBtn").addEventListener("click",()=>
{alert("button clicked");
});
document.getElementById("hoverText").addEventListener("mouseover", () => {
    document.getElementById("hoverText").style.color = "blue";
  });
  document.getElementById("changeBtn").addEventListener("click", () => {
    const btn = document.getElementById("changeBtn");
    btn.style.backgroundColor = "purple";
    btn.textContent = "Changed!";
  });

  document.getElementById("signupForm").addEventListener("submit", (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    let valid = true;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        valid = false;
      }
    
      if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        valid = false;
      }
    if (!valid) e.preventDefault();
    });

    document.getElementById("password").addEventListener("input", (e) => {
        const feedback = document.getElementById("passwordFeedback");
        if (e.target.value.length < 8) {
          feedback.textContent = "Password too short!";
          feedback.style.color = "red";
        } else {
          feedback.textContent = "Looking good!";
          feedback.style.color = "green";
        }
      });
