// Show an alert when the page loads
window.addEventListener('DOMContentLoaded', function() {
  alert('Welcome to my portfolio website!');

  // Display the current year in the footer (requires an element with id="year")
  var yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Smooth scroll for navigation links (requires nav links with href starting with #)
  var navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href').substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Form validation and thank you message
  var form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      var requiredFields = form.querySelectorAll('input, textarea');
      var allFilled = true;
      requiredFields.forEach(function(field) {
        if (field.value.trim() === '') {
          allFilled = false;
          field.style.border = '2px solid red';
        } else {
          field.style.border = '';
        }
      });
      if (!allFilled) {
        e.preventDefault();
        alert('Please fill in all fields.');
      } else {
        e.preventDefault();
        form.reset();
        alert('Thank you for your message!');
      }
    });
  }
});
