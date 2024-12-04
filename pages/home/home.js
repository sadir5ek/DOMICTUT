// document.addEventListener("DOMContentLoaded", () => {
//   const user = JSON.parse(localStorage.getItem("currendUser"));
//   if (!user) {
//     window, (location.href = "../../index.html");
//   } else {
//     document.getElementById("userName").textContent = user.name;
//   }

//   const logoutBtn = document.getElementById("logout");
//   logoutBtn.addEventListener("click", () => {
//     localStorage.removeItem("currendUser");
//     window.location.href = "../../index.html";
//   });
// });



// const openModal = document.getElementById("openModal");
// const closeModal = document.getElementById("closeModal");
// const modal = document.getElementById("modal");
// const overlay = document.getElementById("overlay");

// openModal.addEventListener('click', () => {
//   modal.style.display = "block";
//   overlay.style.display = "block";
// });

// closeModal.addEventListener("click", () => {
//   modal.style.display = "none";
//   overlay.style.display = "none";
// });

// overlay.addEventListener("click", () => {
//     modal.style.display = "none";
//     overlay.style.display = "none";   
// });


















document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currendUser"));
    if (!user) {
      window.location.href = "../../index.html";
    } else {
      document.getElementById("userName").textContent = user.name;
    }
  
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("currendUser");
        window.location.href = "../../index.html";
      });
    }
  
    
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
  
    openModal.addEventListener("click", () => {
      modal.style.display = "block";
      overlay.style.display = "block";
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      overlay.style.display = "none";
    });
  
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        modal.style.display = "none";
        overlay.style.display = "none";
      }
    });

    const profileImageInput = document.getElementById("profileImage");
    const profileImage = document.querySelector("#modal img");
  
    profileImageInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          profileImage.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  

    const createAccountBtn = document.getElementById("createAccountBtn");
    createAccountBtn.addEventListener("click", () => {
      alert("Жаңы аккаунт түзүлдү!");
    
    });
  });
  