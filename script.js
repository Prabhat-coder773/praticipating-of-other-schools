// Register button
document.querySelector('.register-btn').addEventListener('click', function () {
  alert('Registration coming soon!');
});

// Submit / Enquire form
document.querySelector('.submit-btn').addEventListener('click', function () {
  const name  = document.querySelectorAll('.enquire-form input')[0].value.trim();
  const phone = document.querySelectorAll('.enquire-form input')[1].value.trim();
  if (!name || !phone) {
    alert('Please fill in your name and phone number.');
    return;
  }
  alert('Thank you, ' + name + '! We will contact you shortly.');
});

// Pre-schedule button
document.querySelector('.preschedule-btn').addEventListener('click', function () {
  alert('Pre-scheduling portal opening soon!');
});

// Feature cards carousel
const strip = document.getElementById('featuresStrip');
const cardW = 214; // card width (200) + gap (14)

document.getElementById('nextBtn').addEventListener('click', function () {
  strip.scrollBy({ left: cardW, behavior: 'smooth' });
});

document.getElementById('prevBtn').addEventListener('click', function () {
  strip.scrollBy({ left: -cardW, behavior: 'smooth' });
});

// Scroll strip animation
const scrollOvals = document.querySelector('.scroll-strip');
let offset = 0;
setInterval(function () {
  offset = (offset + 1) % 60;
  scrollOvals.style.transform = 'translateX(-' + offset + 'px)';
}, 50);