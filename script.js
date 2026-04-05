const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    portfolioCards.forEach((card) => {
      const category = card.dataset.category;
      const visible = filter === 'all' || category === filter;
      card.style.display = visible ? 'block' : 'none';
    });
  });
});

const leadForm = document.querySelector('.lead-form');

leadForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Terima kasih! Permintaan Anda sudah kami terima. Tim kami akan segera menghubungi Anda.');
  leadForm.reset();
});
