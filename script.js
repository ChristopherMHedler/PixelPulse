// O JavaScript aqui adiciona uma animação para os cards de serviço
// quando eles entram na área de visualização do usuário.
document.addEventListener('DOMContentLoaded', () => {
  const serviceCards = document.querySelectorAll('.service-card');

  // Configura o observador para detectar quando os elementos se tornam visíveis.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Para de observar após a animação.
      }
    });
  }, {
    threshold: 0.5 // Aciona quando 50% do elemento está visível.
  });

  // Observa cada card de serviço.
  serviceCards.forEach(card => {
    observer.observe(card);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Verifica o tema preferido do usuário no localStorage
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    body.classList.add(currentTheme);
    updateToggleIcon(currentTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Se não houver tema no localStorage, verifica a preferência do sistema
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
    updateToggleIcon('dark-mode');
  }

  // Adiciona um evento de clique ao botão de alternância
  themeToggle.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no <body>
    body.classList.toggle('dark-mode');

    // Salva a preferência do usuário no localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark-mode');
      updateToggleIcon('dark-mode');
    } else {
      localStorage.setItem('theme', 'light-mode');
      updateToggleIcon('light-mode');
    }
  });

  function updateToggleIcon(theme) {
    const lightIcon = themeToggle.querySelector('.icon-light-mode');
    const darkIcon = themeToggle.querySelector('.icon-dark-mode');

    if (theme === 'dark-mode') {
      lightIcon.style.display = 'none';
      darkIcon.style.display = 'inline';
    } else {
      lightIcon.style.display = 'inline';
      darkIcon.style.display = 'none';
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('myTextarea');
  const charCountSpan = document.getElementById('charCount');
  const charLimitSpan = document.getElementById('charLimit');

  const characterLimit = parseInt(charLimitSpan.textContent);

  textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    charCountSpan.textContent = currentLength;

    if (currentLength > characterLimit) {
      charCountSpan.classList.add('char-counter-error');
    } else {
      charCountSpan.classList.remove('char-counter-error');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Código existente do contador e do alternador de tema
  const themeToggleButton = document.getElementById('theme-toggle');
  const lightModeIcon = document.querySelector('.icon-light-mode');
  const darkModeIcon = document.querySelector('.icon-dark-mode');
  const body = document.body;

  themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    lightModeIcon.style.display = body.classList.contains('dark-theme') ? 'none' : 'inline';
    darkModeIcon.style.display = body.classList.contains('dark-theme') ? 'inline' : 'none';
  });

  const myTextarea = document.getElementById('myTextarea');
  const charCountSpan = document.getElementById('charCount');

  if (myTextarea && charCountSpan) {
    myTextarea.addEventListener('input', () => {
      const currentLength = myTextarea.value.length;
      charCountSpan.textContent = currentLength;
    });
  }

  // Novo código para a mensagem de sucesso
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  if (form && successMessage) {
    form.addEventListener('submit', (event) => {
      // Evita que o formulário seja realmente enviado
      // Isso é ideal para simular o comportamento sem um backend
      // Se você tiver um backend, essa linha pode ser removida
      // e a lógica de exibição da mensagem deve ser ajustada
      // para ser disparada após a resposta bem-sucedida do servidor.
      event.preventDefault();

      // Exibe a mensagem de sucesso
      successMessage.style.display = 'block';

      // Opcional: Limpa os campos do formulário após o envio
      form.reset();
    });
  }
});

