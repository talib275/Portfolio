function openModal(id) {
  document.getElementById(id).classList.add('show');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

window.addEventListener('click', function (e) {
  const modals = document.querySelectorAll('.modal-overlay.show');
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});


function sendEmail() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = `Message from ${name}`;
  const body = `Name: ${name}%0DEmail: ${email}%0D%0DMessage:%0D${message}`;

  window.location.href = `mailto:thossain180@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
}

/* type */
var typed = new Typed(".typing", {
    strings:["Data Scientist", "Graduate", "Data Analyst", "Bioengineer", "Optimist"],
    typeSpeed:100,
    BackSpeed:50,
    loop:true
})