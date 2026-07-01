(function () {
  'use strict';

  /* ========== I18N TRANSLATIONS ========== */
  const i18n = {
    ru: {
      'nav.about': 'О нас',
      'nav.portfolio': 'Портфолио',
      'nav.testimonials': 'Отзывы',
      'nav.contact': 'Контакты',
      'hero.subtitle': 'Премиальные веб-решения',
      'hero.title': 'Создание сайтов <span class="gold-text">Vanguard</span>',
      'hero.desc': 'Эстетика глассморфизма, интерактивный дизайн и безупречная производительность 60 FPS.',
      'hero.portfolioBtn': 'Смотреть портфолио',
      'hero.contactBtn': 'Обсудить проект',
      'about.subtitle': 'Философия бренда',
      'about.title': 'Мы создаем цифровую <span class="gold-text">эстетику</span>',
      'about.text': 'Vanguard — это не просто разработка. Это манифест безупречного стиля и высоких технологий. Мы верим, что премиальный дизайн должен подкрепляться идеальным техническим исполнением на уровне 60 кадров в секунду.',
      'about.meta1Label': 'Лет опыта',
      'about.meta2Label': 'Премиум кейсов',
      'about.quote': 'Дизайн — это не то, как предмет выглядит. Дизайн — это то, как он работает. В Vanguard мы возводим интерфейсы в ранг искусства, убирая все лишнее ради чистой эстетики.',
      'about.founderName': 'Александр Вэнгард',
      'about.founderTitle': 'Основатель & CEO',
      'portfolio.subtitle': 'Наши работы',
      'portfolio.title': 'Избранное <span class="gold-text">Портфолио</span>',
      'services.subtitle': 'Что мы делаем',
      'services.title': 'Наши <span class="gold-text">Услуги</span>',
      'services.name1': 'Web Design',
      'services.text1': 'Создание уникальных премиальных интерфейсов с глубоким погружением в эстетику бренда.',
      'services.name2': 'Development',
      'services.text2': 'Высокопроизводительный код на чистом JS с плавной интерактивностью 60 FPS без задержек.',
      'services.name3': 'Glassmorphism UI',
      'services.text3': 'Интеграция современных визуальных трендов, матовых текстур и динамических размытий.',
      'services.name4': 'Optimization',
      'services.text4': 'Глубокий аудит производительности, устранение Layout Thrashing и ускорение рендеринга.',
      'testimonials.label': 'Доверие',
      'testimonials.title': 'Цифры и <span class="gold">отзывы</span>',
      'testimonials.stat1': 'Завершённых проектов',
      'testimonials.stat2': 'Международных наград',
      'testimonials.stat3': 'Стран-клиентов',
      'testimonials.stat4': 'Лет безупречной репутации',
      'testimonials.quote1': 'Vanguard превратили наше пространство в произведение искусства. Каждая деталь продумана до миллиметра.',
      'testimonials.author1Name': 'Александр Демидов',
      'testimonials.author1Role': 'Владелец Villa Lumière',
      'testimonials.quote2': 'Работать с Vanguard — это не просто заказать дизайн. Это погрузиться в мир безупречного вкуса и профессионализма.',
      'testimonials.author2Name': 'Мария Шевцова',
      'testimonials.author2Role': 'CEO, Noir Hotel Group',
      'contact.label': 'Связь',
      'contact.title': 'Обсудим <span class="gold">ваш проект</span>',
      'contact.desc': 'Оставьте заявку, и наша команда свяжется с вами в ближайшее время для предварительной консультации.',
      'contact.phoneLabel': 'Телефон',
      'contact.emailLabel': 'Почта',
      'contact.addressLabel': 'Адрес',
      'contact.address': 'Москва, Патриаршие пруды, 5',
      'contact.formName': 'Ваше имя',
      'contact.formEmail': 'Email',
      'contact.formMessage': 'Сообщение',
      'contact.submit': 'Отправить',
      'footer.copyright': '© 2026 Vanguard Studio. Все права защищены.',
      'footer.privacy': 'Политика конфиденциальности',
      'footer.terms': 'Условия использования',
      meta: { title: 'Vanguard — Архитектура и дизайн интерьеров', desc: 'Vanguard — студия архитектуры и дизайна интерьеров. Создаём пространства, вдохновляющие на величие.' },
      formSuccess: 'Отправлено'
    },
    en: {
      'nav.about': 'About',
      'nav.portfolio': 'Portfolio',
      'nav.testimonials': 'Testimonials',
      'nav.contact': 'Contact',
      'hero.subtitle': 'Premium Web Solutions',
      'hero.title': 'Website Creation <span class="gold-text">Vanguard</span>',
      'hero.desc': 'Glassmorphism aesthetics, interactive design, and flawless 60 FPS performance.',
      'hero.portfolioBtn': 'View Portfolio',
      'hero.contactBtn': 'Discuss Project',
      'about.subtitle': 'Brand Philosophy',
      'about.title': 'We Create Digital <span class="gold-text">Aesthetics</span>',
      'about.text': "Vanguard is not just development. It's a manifesto of impeccable style and high technology. We believe premium design must be backed by flawless technical execution at 60 frames per second.",
      'about.meta1Label': 'Years of Experience',
      'about.meta2Label': 'Premium Cases',
      'about.quote': "Design is not how a thing looks. Design is how it works. At Vanguard, we elevate interfaces to the level of art, removing everything unnecessary for pure aesthetics.",
      'about.founderName': 'Alexander Vanguard',
      'about.founderTitle': 'Founder & CEO',
      'portfolio.subtitle': 'Our Work',
      'portfolio.title': 'Featured <span class="gold-text">Portfolio</span>',
      'services.subtitle': 'What We Do',
      'services.title': 'Our <span class="gold-text">Services</span>',
      'services.name1': 'Web Design',
      'services.text1': 'Creating unique premium interfaces with deep immersion in the brand aesthetic.',
      'services.name2': 'Development',
      'services.text2': 'High-performance pure JS code with smooth 60 FPS interactivity and zero lag.',
      'services.name3': 'Glassmorphism UI',
      'services.text3': 'Integration of modern visual trends, frosted textures, and dynamic blurs.',
      'services.name4': 'Optimization',
      'services.text4': 'Deep performance audit, elimination of Layout Thrashing, and accelerated rendering.',
      'testimonials.label': 'Trust',
      'testimonials.title': 'Numbers & <span class="gold">Testimonials</span>',
      'testimonials.stat1': 'Completed Projects',
      'testimonials.stat2': 'International Awards',
      'testimonials.stat3': 'Client Countries',
      'testimonials.stat4': 'Years of Flawless Reputation',
      'testimonials.quote1': 'Vanguard turned our space into a work of art. Every detail is thought through to the millimeter.',
      'testimonials.author1Name': 'Alexander Demidov',
      'testimonials.author1Role': 'Owner of Villa Lumière',
      'testimonials.quote2': 'Working with Vanguard is not just ordering design. It is immersing yourself in a world of impeccable taste and professionalism.',
      'testimonials.author2Name': 'Maria Shevtsova',
      'testimonials.author2Role': 'CEO, Noir Hotel Group',
      'contact.label': 'Contact',
      'contact.title': "Let's Discuss <span class=\"gold\">Your Project</span>",
      'contact.desc': 'Leave a request and our team will contact you shortly for a preliminary consultation.',
      'contact.phoneLabel': 'Phone',
      'contact.emailLabel': 'Email',
      'contact.addressLabel': 'Address',
      'contact.address': 'Moscow, Patriarch Ponds, 5',
      'contact.formName': 'Your Name',
      'contact.formEmail': 'Email',
      'contact.formMessage': 'Message',
      'contact.submit': 'Send',
      'footer.copyright': '© 2026 Vanguard Studio. All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Use',
      meta: { title: 'Vanguard — Architecture & Interior Design', desc: 'Vanguard — architecture and interior design studio. Creating spaces that inspire greatness.' },
      formSuccess: 'Sent'
    },
    kz: {
      'nav.about': 'Біз туралы',
      'nav.portfolio': 'Портфолио',
      'nav.testimonials': 'Пікірлер',
      'nav.contact': 'Байланыс',
      'hero.subtitle': 'Премиум веб-шешімдер',
      'hero.title': 'Сайттар құру <span class="gold-text">Vanguard</span>',
      'hero.desc': 'Глассморфизм эстетикасы, интерактивті дизайн және 60 FPS үздіксіз өнімділік.',
      'hero.portfolioBtn': 'Портфолионы көру',
      'hero.contactBtn': 'Жобаны талқылау',
      'about.subtitle': 'Бренд философиясы',
      'about.title': 'Біз цифрлық <span class="gold-text">эстетиканы</span> жасаймыз',
      'about.text': 'Vanguard — бұл жай ғана әзірлеу емес. Бұл кемел стиль мен жоғары технологиялардың манифесті. Біз премиум дизайн 60 кадр/сек деңгейіндегі мінсіз техникалық орындалумен қамтамасыз етілуі керек деп сенеміз.',
      'about.meta1Label': 'Тәжірибе жылдары',
      'about.meta2Label': 'Премиум кейстер',
      'about.quote': 'Дизайн — бұл заттың көрінісі емес. Дизайн — бұл оның қалай жұмыс істейтіні. Vanguard-та біз интерфейстерді өнер дәрежесіне көтеріп, таза эстетика үшін артықтың бәрін алып тастаймыз.',
      'about.founderName': 'Александр Вэнгард',
      'about.founderTitle': 'Негізін қалаушы & CEO',
      'portfolio.subtitle': 'Біздің жұмыстар',
      'portfolio.title': 'Таңдаулы <span class="gold-text">Портфолио</span>',
      'services.subtitle': 'Біз не істейміз',
      'services.title': 'Біздің <span class="gold-text">Қызметтер</span>',
      'services.name1': 'Web Design',
      'services.text1': 'Бренд эстетикасына терең ену арқылы бірегей премиум интерфейстерді құру.',
      'services.name2': 'Development',
      'services.text2': 'Кідіріссіз 60 FPS тегіс интерактивтілігі бар таза JS жоғары өнімді коды.',
      'services.name3': 'Glassmorphism UI',
      'services.text3': 'Қазіргі заманғы визуалды трендтерді, күңгірт текстуралар мен динамикалық бұлыңғырлықтарды интеграциялау.',
      'services.name4': 'Optimization',
      'services.text4': 'Өнімділікті терең аудиттеу, Layout Thrashing жою және рендерингті жеделдету.',
      'testimonials.label': 'Сенім',
      'testimonials.title': 'Сандар мен <span class="gold">пікірлер</span>',
      'testimonials.stat1': 'Аяқталған жобалар',
      'testimonials.stat2': 'Халықаралық марапаттар',
      'testimonials.stat3': 'Клиент елдер',
      'testimonials.stat4': 'Мінсіз бедел жылдары',
      'testimonials.quote1': 'Vanguard біздің кеңістікті өнер туындысына айналдырды. Әрбір бөлшек миллиметрге дейін ойластырылған.',
      'testimonials.author1Name': 'Александр Демидов',
      'testimonials.author1Role': 'Villa Lumière иесі',
      'testimonials.quote2': 'Vanguard-пен жұмыс істеу — бұл жай дизайнға тапсырыс беру емес. Бұл кемелді талғам мен кәсібилік әлеміне ену.',
      'testimonials.author2Name': 'Мария Шевцова',
      'testimonials.author2Role': 'Noir Hotel Group, CEO',
      'contact.label': 'Байланыс',
      'contact.title': '<span class="gold">Жобаңызды</span> талқылайық',
      'contact.desc': 'Өтініш қалдырыңыз, біздің команда алдын ала кеңес беру үшін жақын арада сізбен байланысады.',
      'contact.phoneLabel': 'Телефон',
      'contact.emailLabel': 'Пошта',
      'contact.addressLabel': 'Мекенжай',
      'contact.address': 'Мәскеу, Патриарх тоғандары, 5',
      'contact.formName': 'Атыңыз',
      'contact.formEmail': 'Email',
      'contact.formMessage': 'Хабарлама',
      'contact.submit': 'Жіберу',
      'footer.copyright': '© 2026 Vanguard Studio. Барлық құқықтар қорғалған.',
      'footer.privacy': 'Құпиялылық саясаты',
      'footer.terms': 'Қолдану шарттары',
      meta: { title: 'Vanguard — Сәулет және интерьер дизайны', desc: 'Vanguard — сәулет және интерьер дизайны студиясы. Ұлылыққа шабыттандыратын кеңістіктер жасаймыз.' },
      formSuccess: 'Жіберілді'
    }
  };

  /* ========== I18N ENGINE ========== */
  let currentLang = localStorage.getItem('vanguard-lang') || 'ru';

  function applyLanguage(lang) {
    const t = i18n[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });
    document.documentElement.lang = lang === 'kz' ? 'kk' : lang;
    if (t.meta) {
      document.title = t.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.content = t.meta.desc;
    }
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    currentLang = lang;
    localStorage.setItem('vanguard-lang', lang);
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  applyLanguage(currentLang);

  /* ========== CUSTOM CURSOR ========== */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.08;
      followerY += (mouseY - followerY) * 0.08;
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effect on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, .btn-primary, .portfolio-card, .service-card, .bento-item');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        follower.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        follower.classList.remove('cursor-hover');
      });
    });

    // Click effect
    document.addEventListener('mousedown', () => cursor.classList.add('cursor-active'));
    document.addEventListener('mouseup', () => cursor.classList.remove('cursor-active'));
  }

  /* ========== SCROLL PROGRESS ========== */
  const scrollProgress = document.getElementById('scrollProgress');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = progress + '%';
  }, { passive: true });

  /* ========== NAVBAR SCROLL EFFECT ========== */
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  /* ========== MOBILE NAV TOGGLE ========== */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ========== SCROLL REVEAL ANIMATIONS ========== */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ========== COUNTER ANIMATION ========== */
  const statElements = document.querySelectorAll('.bento-stat[data-count]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const startTime = performance.now();
        const hasPlus = target > 100;

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          el.textContent = current + (hasPlus ? '+' : '');
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target + (hasPlus ? '+' : '');
          }
        }
        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statElements.forEach(el => counterObserver.observe(el));

  /* ========== HERO GEOMETRY PARALLAX ========== */
  const heroShapes = document.querySelectorAll('.shape-glow-circle, .shape-cube, .shape-lines');
  const hero = document.getElementById('hero');

  if (hero && heroShapes.length) {
    window.addEventListener('scroll', () => {
      const rect = hero.getBoundingClientRect();
      const progress = 1 - (rect.bottom / window.innerHeight);
      const clamped = Math.max(0, Math.min(1, progress));

      heroShapes.forEach((shape, i) => {
        const speed = 0.1 + (i * 0.05);
        const yOffset = clamped * 80 * speed;
        shape.style.transform = shape.style.transform.replace(/translateY\([^)]+\)/g, '') + ` translateY(${yOffset}px)`;
      });
    }, { passive: true });
  }

  /* ========== SMOOTH NAV LINKS ========== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  /* ========== FORM HANDLING ========== */
  const form = document.getElementById('contactForm');
  if (form) {
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => {
      input.setAttribute('placeholder', ' ');
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn-submit');
      const originalText = btn.innerHTML;

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Telegram Bot config — замените на свои
      const TELEGRAM_TOKEN = ''; // ваш токен бота
      const TELEGRAM_CHAT_ID = ''; // ваш chat ID

      const sendToTelegram = TELEGRAM_TOKEN && TELEGRAM_CHAT_ID;

      if (sendToTelegram) {
        const text = `Vanguard\n\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;
        fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text })
        }).catch(() => {});
      }

      btn.innerHTML = '<span>' + i18n[currentLang].formSuccess + '</span>';
      btn.style.pointerEvents = 'none';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.pointerEvents = '';
        form.reset();
      }, 2000);
    });
  }

  /* ========== PORTFOLIO CARDS TILT ========== */
  const initTiltEffect = () => {
    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        const cardRect = card.getBoundingClientRect();
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.top;
        const centerX = cardRect.width / 2;
        const centerY = cardRect.height / 2;
        const maxTilt = 15;
        const tiltX = ((centerY - y) / centerY) * maxTilt;
        const tiltY = ((x - centerX) / centerX) * maxTilt;
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        if (window.innerWidth <= 768) return;
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });

      card.addEventListener('mouseenter', () => {
        if (window.innerWidth <= 768) return;
        card.style.transition = 'none';
      });
    });
  };

  initTiltEffect();

  /* ========== MAGNETIC BUTTONS ========== */
  const magneticBtns = document.querySelectorAll('.btn-primary, .btn-secondary');

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 768) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      if (window.innerWidth <= 768) return;
      btn.style.transition = 'transform 0.4s ease';
      btn.style.transform = 'translate(0, 0)';
      setTimeout(() => { btn.style.transition = ''; }, 400);
    });
  });

  /* ========== SMOOTH SECTION DIVIDERS ========== */
  document.querySelectorAll('.services, .testimonials, .contact').forEach(section => {
    const divider = document.createElement('div');
    divider.className = 'section-divider';
    section.prepend(divider);
  });

  /* ========== MOUSE GLOW SPOTLIGHT ========== */
  const heroEl = document.querySelector('.hero');
  if (heroEl && window.innerWidth > 768) {
    const spotlight = document.createElement('div');
    spotlight.className = 'hero-spotlight';
    heroEl.querySelector('.hero-art-container').appendChild(spotlight);

    heroEl.addEventListener('mousemove', (e) => {
      const rect = heroEl.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      spotlight.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(207, 180, 140, 0.06) 0%, transparent 50%)`;
    });
  }

  /* ========== COUNTER ANIMATION ========== */
  function animateCounter(el, target) {
    const text = target;
    const hasPlus = text.includes('+');
    const num = parseInt(text, 10);
    if (isNaN(num)) return;
    let current = 0;
    const step = Math.max(1, Math.floor(num / 40));
    const duration = 1200;
    const interval = Math.floor(duration / (num / step));
    const timer = setInterval(() => {
      current += step;
      if (current >= num) {
        current = num;
        clearInterval(timer);
      }
      el.textContent = current + (hasPlus ? '+' : '');
    }, interval);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent.trim();
        animateCounter(el, text);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.meta-number').forEach(el => counterObserver.observe(el));

})();
