
  <script>
    const toggleBtn = document.getElementById('mode-toggle');
    const body = document.body;

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault(); // prevents page jump
      body.classList.toggle('dark-mode');

      // Update button text/icon
      if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️ Light Mode';
      } else {
        toggleBtn.textContent = '🌙 Dark Mode';
      }
    ;
  </script>