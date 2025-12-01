  const form = document.getElementById('loginForm');
  const submitBtn = document.getElementById('submitBtn');
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  let darkTheme = true;
  const captchaQuestion = document.getElementById('captchaQuestion');
  const captchaInput = document.getElementById('captchaInput');
  let a, b, captchaAnswer;

  function generateCaptcha() {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    captchaAnswer = a + b;
    captchaQuestion.textContent = `${a} + ${b} = ?`;
  }

  function validateCaptcha() {
    return parseInt(captchaInput.value, 10) === captchaAnswer;
  }

  function checkFormValidity() {
    if (form.checkValidity() && validateCaptcha()) {
      submitBtn.disabled = false;
      submitBtn.classList.add('enabled');
    } else {
      submitBtn.disabled = true;
      submitBtn.classList.remove('enabled');
    }
  }

  form.addEventListener('input', checkFormValidity);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateCaptcha()) {
      alert('Captcha answer is incorrect. Please try again.');
      generateCaptcha();
      captchaInput.value = '';
      checkFormValidity();
      captchaInput.focus();
      return;
    }
    if (form.checkValidity()) {
      window.location.href = 'file:///C:/Users/HP/OneDrive/Desktop/Job%20Appliances%20Site%202.html';
    }
  });

  themeToggle.addEventListener('click', () => {
    darkTheme = !darkTheme;
    if (darkTheme) {
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
    }
  });

  generateCaptcha();
  checkFormValidity();
