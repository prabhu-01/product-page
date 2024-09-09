document.addEventListener('DOMContentLoaded', () => {
  // Handle mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Redirect to the quote page when "Get Quote" is clicked
  const getQuoteButtons = document.querySelectorAll('.get-quote-btn');
  getQuoteButtons.forEach(button => {
    button.addEventListener('click', () => {
      const serviceId = button.getAttribute('data-id');
      window.location.href = `quote.html?serviceId=${serviceId}`;
    });
  });
});
