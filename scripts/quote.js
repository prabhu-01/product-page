document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const serviceId = params.get('serviceId');
  
    // Fetch services data (you could load this from a server or JSON file)
    const services = {
      1: {
        name: 'Web Development',
        description: 'Custom web development services for dynamic and responsive websites.',
      },
      2: {
        name: 'Mobile App Development',
        description: 'Create user-friendly and high-performance mobile applications.',
      },
      3: {
        name: 'Digital Marketing',
        description: 'Comprehensive digital marketing solutions for businesses.',
      }
    };
  
    const service = services[serviceId];
    document.getElementById('service-title').textContent = service.name;
    document.getElementById('service-description').textContent = service.description;
  
    // Handle Avail Now button clicks
    const availButtons = document.querySelectorAll('.avail-btn');
    availButtons.forEach(button => {
      button.addEventListener('click', () => {
        document.getElementById('quote-form-popup').classList.remove('hidden');
      });
    });
  
    // Handle form submission
    const quoteForm = document.getElementById('quote-form');
    quoteForm.addEventListener('submit', (event) => {
      event.preventDefault();
      document.getElementById('quote-form-popup').classList.add('hidden');
      document.getElementById('quote-success-popup').classList.remove('hidden');
    });
  });
  