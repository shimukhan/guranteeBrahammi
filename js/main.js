// Smooth scrolling for navigation and CTA buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Video Play Trigger (Lazy Load & Click to Play)
function playVideo(element, type) {
  const thumbnail = element.querySelector('.video-thumbnail');
  const embed = element.querySelector('.video-embed-container');
  if (thumbnail && embed) {
    thumbnail.style.display = 'none';
    embed.style.display = 'block';
  }
}

// Package Selector & Real-Time Price Calculation
const packageOptions = document.querySelectorAll('.package-option');
const summarySubtotal = document.getElementById('summary-subtotal');
const summaryDelivery = document.getElementById('summary-delivery');
const summaryTotal = document.getElementById('summary-total');
const stickyTotalDisplay = document.getElementById('sticky-total-display');

packageOptions.forEach(opt => {
  opt.addEventListener('click', function() {
    packageOptions.forEach(p => {
      p.classList.remove('selected');
      p.querySelector('input[type="radio"]').checked = false;
    });
    this.classList.add('selected');
    this.querySelector('input[type="radio"]').checked = true;

    const price = parseInt(this.getAttribute('data-price'), 10);
    const delivery = parseInt(this.getAttribute('data-delivery'), 10);
    const total = price + delivery;

    if (summarySubtotal) summarySubtotal.textContent = `৳ ${price}`;
    if (summaryDelivery) summaryDelivery.textContent = delivery === 0 ? 'ফ্রি' : `৳ ${delivery}`;
    if (summaryTotal) summaryTotal.textContent = `৳ ${total}`;
    if (stickyTotalDisplay) stickyTotalDisplay.textContent = `৳ ${price}`;
  });
});

// FAQ Accordion Toggle
document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    parent.classList.toggle('active');
  });
});

// Form Submission Simulation
const checkoutForm = document.getElementById('checkout-form');
if (checkoutForm) {
  checkoutForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const address = document.getElementById('customer-address').value.trim();

    if (!name || !phone || !address) {
      alert('অনুগ্রহ করে সবগুলো প্রয়োজনীয় তথ্য পূরণ করুন।');
      return;
    }

    const alertBox = document.getElementById('success-alert');
    if (alertBox) {
      alertBox.style.display = 'block';
      alertBox.scrollIntoView({ behavior: 'smooth' });
    }

    // Reset form after submission
    this.reset();
    if (packageOptions.length > 0) {
      packageOptions[0].click();
    }
  });
}
