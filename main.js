/**
 * ==============================================================================
 * OW-SERVIÇOS — PROTOCOLO, COORDENAÇÃO & GESTÃO OPERACIONAL DE EVENTOS
 * Maputo, Moçambique
 * 
 * Ficheiro Principal de Scripts (Vanilla JavaScript Puro)
 * Versão: 2.0.0 — Redesenho de Alta Conversão e Estética de Luxo
 * ==============================================================================
 * - Sem dependências externas nem bibliotecas pesadas.
 * - Conforme normas WCAG 2.1 AA de acessibilidade e foco visível.
 * - Respeito estrito a prefers-reduced-motion.
 * - Integração oficial e direta com WhatsApp (wa.me/258846161126).
 * ==============================================================================
 */

(function () {
  'use strict';

  /* ============================================================================
   * 1. DADOS DO PORTEFÓLIO DE EVENTOS
   * ============================================================================
   * Mantém apenas os eventos reais fornecidos. Os restantes são placeholders
   * marcados claramente como SUBSTITUIR para inclusão fácil de futuros eventos.
   */
  const PORTFOLIO_EVENTS = [
    {
      id: 1,
      title: 'Casamento Iracema & Matheus',
      category: 'social',
      type: 'Protocolo e coordenação',
      date: 'Outubro 2026',
      image: 'assets/placeholder-event-1.svg', // SUBSTITUIR: assets/foto-casamento.webp
      alt: 'Casamento Iracema & Matheus - protocolo e coordenação'
    },
    {
      id: 2,
      title: '17ª Conferência e Cerimónia da GRAF',
      category: 'institucional',
      type: 'Protocolo e apoio operacional',
      date: 'Setembro 2026',
      image: 'assets/placeholder-event-2.svg', // SUBSTITUIR: assets/foto-conferencia-graf.webp
      alt: '17ª Conferência GRAF - protocolo e apoio operacional'
    },
    {
      id: 3,
      // SUBSTITUIR: Substitua pelos dados de um evento corporativo real
      title: 'Evento Corporativo [SUBSTITUIR]',
      category: 'corporativo',
      type: 'Coordenação operacional',
      date: 'Agosto 2026',
      image: 'assets/placeholder-event-3.svg', // SUBSTITUIR: assets/foto-corporativo.webp
      alt: 'Evento Corporativo - coordenação e apoio protocolar'
    },
    {
      id: 4,
      // SUBSTITUIR: Substitua pelos dados de uma cerimónia oficial real
      title: 'Cerimónia Institucional [SUBSTITUIR]',
      category: 'institucional',
      type: 'Protocolo institucional',
      date: 'Julho 2026',
      image: 'assets/placeholder-event-4.svg', // SUBSTITUIR: assets/foto-institucional.webp
      alt: 'Cerimónia institucional e governação'
    }
  ];

  /* ============================================================================
   * 2. CONTADORES / ESTATÍSTICAS (OPCIONAIS)
   * ============================================================================
   * NOTA: Atualmente a secção exibe frases de compromisso institucional para
   * não inventar dados. Caso os números reais sejam confirmados, basta descomentar
   * a secção de contadores no ficheiro index.html.
   */
  const COUNTER_DATA = [
    { target: 150, label: 'Eventos acompanhados', prefix: '+' },
    { target: 12000, label: 'Convidados recebidos', prefix: '+' },
    { target: 8, label: 'Anos de experiência', prefix: '+' },
    { target: 50, label: 'Parceiros de confiança', prefix: '+' }
  ];

  /* ============================================================================
   * CONFIGURAÇÕES INSTITUCIONAIS
   * ============================================================================
   */
  const WHATSAPP_CONFIG = {
    phone: '258846161126',
    defaultMsg: 'Olá! Gostaria de saber mais sobre os serviços da OW-Serviços.'
  };

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================================
   * UTILITÁRIOS
   * ============================================================================
   */

  /** Formatação numérica para padrão local */
  function formatNumber(value) {
    try {
      return Math.round(value).toLocaleString('pt-MZ');
    } catch (e) {
      return Math.round(value).toLocaleString('pt-PT');
    }
  }

  /** Constrói o link oficial do WhatsApp */
  function getWhatsAppUrl(text) {
    return `https://wa.me/${WHATSAPP_CONFIG.phone}?text=${encodeURIComponent(text.trim())}`;
  }

  /** Armadilha de foco para acessibilidade em diálogos / modais */
  function createFocusTrap(containerElement) {
    const focusableSelectors = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

    function onKeyDown(event) {
      if (event.key !== 'Tab') return;
      const items = Array.from(containerElement.querySelectorAll(focusableSelectors)).filter(el => el.offsetParent !== null);
      if (!items.length) { event.preventDefault(); return; }

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    containerElement.addEventListener('keydown', onKeyDown);
    return () => containerElement.removeEventListener('keydown', onKeyDown);
  }

  /* ============================================================================
   * 3. CABEÇALHO — EFEITO DE SCROLL COM VIDRO FOSCO
   * ============================================================================
   */
  function initHeaderScroll() {
    const header = document.querySelector('.header') || document.querySelector('header');
    if (!header) return;

    let ticking = false;
    const threshold = 60;

    function handleScroll() {
      const isScrolled = window.scrollY > threshold;
      header.classList.toggle('header--scrolled', isScrolled);
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    }, { passive: true });

    handleScroll();
  }

  /* ============================================================================
   * 4. NAVEGAÇÃO SUAVE E SELEÇÃO DE LINK ATIVO
   * ============================================================================
   */
  function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    const header = document.querySelector('.header') || document.querySelector('header');

    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        event.preventDefault();
        const headerHeight = header ? header.offsetHeight : 76;
        const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: elementTop - headerHeight,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });

        if (history.pushState) {
          history.pushState(null, '', targetId);
        }
      });
    });

    const sections = document.querySelectorAll('section[id], header[id]');
    if (!sections.length || !('IntersectionObserver' in window)) return;

    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = `#${entry.target.getAttribute('id')}`;
          navLinks.forEach(link => {
            const isCurrent = link.getAttribute('href') === currentId;
            link.classList.toggle('is-active', isCurrent);
            link.classList.toggle('nav-link--active', isCurrent);
            if (isCurrent) {
              link.setAttribute('aria-current', 'page');
            } else if (link.getAttribute('aria-current') === 'page') {
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0.1 });

    sections.forEach(sec => navObserver.observe(sec));
  }

  /* ============================================================================
   * 5. MENU MOBILE RESPONSIVO E ACESSÍVEL
   * ============================================================================
   */
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger') || document.querySelector('#hamburger');
    const mobileMenu = document.querySelector('.mobile-menu') || document.querySelector('#mobileMenu');
    if (!hamburger || !mobileMenu) return;

    let destroyTrap = null;
    let lastFocus = null;

    function open() {
      lastFocus = document.activeElement;
      hamburger.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Fechar menu');
      mobileMenu.classList.add('is-open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';

      destroyTrap = createFocusTrap(mobileMenu);
      const firstTarget = mobileMenu.querySelector('a, button');
      if (firstTarget) firstTarget.focus();
    }

    function close() {
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Abrir menu');
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';

      if (destroyTrap) { destroyTrap(); destroyTrap = null; }
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    }

    hamburger.addEventListener('click', () => {
      hamburger.classList.contains('is-open') ? close() : open();
    });

    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && hamburger.classList.contains('is-open')) close();
    });

    document.addEventListener('click', event => {
      if (!hamburger.classList.contains('is-open')) return;
      if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) close();
    });
  }

  /* ============================================================================
   * 6. ANIMAÇÕES DE SCROLL SUAVES (REVEAL)
   * ============================================================================
   */
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .reveal, [data-animate]');
    if (!animatedElements.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      animatedElements.forEach(el => el.classList.add('visible', 'is-visible'));
      return;
    }

    // Escalonamento suave em grelhas
    const grids = document.querySelectorAll('.solutions__grid, .portfolio__grid, .event-grid, .for-whom__grid, .faq__grid, [data-stagger]');
    grids.forEach(grid => {
      Array.from(grid.children).forEach((child, index) => {
        if (!child.style.transitionDelay) {
          child.style.transitionDelay = `${(index % 6) * 90}ms`;
        }
      });
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', 'is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    animatedElements.forEach(el => observer.observe(el));
  }

  /* ============================================================================
   * 7. TIMELINE DE PROCESSO — PREENCHIMENTO PROGRESSIVO AO FAZER SCROLL
   * ============================================================================
   */
  function initProcessTimeline() {
    const processSection = document.querySelector('.process') || document.querySelector('#como-trabalhamos');
    if (!processSection) return;

    const lineFill = processSection.querySelector('.process__line-fill');
    const steps = processSection.querySelectorAll('.process__step');
    if (!steps.length) return;

    if (lineFill) {
      let isTicking = false;
      function updateFill() {
        const rect = processSection.getBoundingClientRect();
        const winHeight = window.innerHeight;
        if (rect.top <= winHeight && rect.bottom >= 0) {
          const totalDistance = rect.height + winHeight * 0.35;
          const currentDistance = winHeight - rect.top;
          const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));
          const percentage = Math.round(progress * 100);
          lineFill.style.height = `${percentage}%`;
          lineFill.style.width = `${percentage}%`;
        }
        isTicking = false;
      }

      window.addEventListener('scroll', () => {
        if (!isTicking) {
          window.requestAnimationFrame(updateFill);
          isTicking = true;
        }
      }, { passive: true });
      updateFill();
    }

    if ('IntersectionObserver' in window) {
      const stepObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-active', 'active');
          }
        });
      }, { threshold: 0.3, rootMargin: '0px 0px -15% 0px' });

      steps.forEach(s => stepObserver.observe(s));
    } else {
      steps.forEach(s => s.classList.add('is-active'));
    }
  }

  /* ============================================================================
   * 8. CONTADORES NUMÉRICOS DINÂMICOS (SE O CONTENTOR EXISTIR)
   * ============================================================================
   */
  function initCounters() {
    const container = document.querySelector('#counters') || document.querySelector('.counters');
    if (!container) return;

    if (container.children.length === 0) {
      container.innerHTML = COUNTER_DATA.map(item => `
        <div class="counter-card fade-in">
          <div class="counter-card__number" data-target="${item.target}" data-prefix="${item.prefix || ''}">0</div>
          <div class="counter-card__label">${item.label}</div>
        </div>
      `).join('');
    }

    const counterElements = container.querySelectorAll('.counter-card__number, [data-target]');
    if (!counterElements.length) return;

    let animated = false;

    function countUp(element, endVal, prefix) {
      if (prefersReducedMotion) {
        element.textContent = `${prefix}${formatNumber(endVal)}`;
        return;
      }

      const duration = 2000;
      const startTime = performance.now();

      function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = endVal * easeOut;

        element.textContent = `${prefix}${formatNumber(current)}`;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          element.textContent = `${prefix}${formatNumber(endVal)}`;
        }
      }

      window.requestAnimationFrame(step);
    }

    function startAll() {
      if (animated) return;
      animated = true;
      counterElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        const prefix = el.getAttribute('data-prefix') || '';
        countUp(el, target, prefix);
      });
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startAll();
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });
      observer.observe(container);
    } else {
      startAll();
    }
  }

  /* ============================================================================
   * 9. PORTFÓLIO DE EVENTOS — GERAÇÃO DINÂMICA E FILTRAGEM
   * ============================================================================
   */
  function initPortfolio() {
    const grid = document.querySelector('#portfolioGrid') || document.querySelector('.portfolio__grid');
    if (!grid) return;

    grid.innerHTML = PORTFOLIO_EVENTS.map(event => `
      <article class="portfolio-card fade-in" data-category="${event.category}" data-id="${event.id}" tabindex="0" role="button" aria-label="Ver detalhes de ${event.title}">
        <div class="portfolio-card__image-wrapper">
          <img class="portfolio-card__image" src="${event.image}" alt="${event.alt}" loading="lazy" width="600" height="400" />
          <span class="portfolio-card__badge">${event.category.toUpperCase()}</span>
          <div class="portfolio-card__overlay">
            <span class="portfolio-card__zoom-hint">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              Ver detalhe
            </span>
          </div>
        </div>
        <div class="portfolio-card__content">
          <span class="portfolio-card__type">${event.type}</span>
          <h3 class="portfolio-card__title">${event.title}</h3>
          <span class="portfolio-card__date">${event.date}</span>
        </div>
      </article>
    `).join('');

    // Filtros de categoria
    const filterButtons = document.querySelectorAll('.portfolio__filter, [data-filter]');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.classList.remove('portfolio__filter--active', 'is-active', 'active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('portfolio__filter--active');
        btn.setAttribute('aria-selected', 'true');

        const filter = (btn.getAttribute('data-filter') || 'todos').toLowerCase();
        const cards = grid.querySelectorAll('.portfolio-card');

        cards.forEach(card => {
          const match = filter === 'todos' || filter === 'all' || card.getAttribute('data-category') === filter;
          if (match) {
            card.style.display = '';
            window.requestAnimationFrame(() => {
              card.classList.remove('is-hidden');
              card.classList.add('visible');
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.classList.add('is-hidden');
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              if (card.classList.contains('is-hidden')) card.style.display = 'none';
            }, 250);
          }
        });
      });
    });

    function handleCardActivation(card) {
      const id = parseInt(card.getAttribute('data-id'), 10);
      const data = PORTFOLIO_EVENTS.find(item => item.id === id);
      if (data) openLightbox(data, card);
    }

    grid.addEventListener('click', event => {
      const card = event.target.closest('.portfolio-card');
      if (card) handleCardActivation(card);
    });

    grid.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        const card = event.target.closest('.portfolio-card');
        if (card) {
          event.preventDefault();
          handleCardActivation(card);
        }
      }
    });
  }

  /* ============================================================================
   * 10. LIGHTBOX ELEGANTE COM ACESSIBILIDADE E FOCO
   * ============================================================================
   */
  let lightboxModal = null;
  let triggerCard = null;
  let destroyLightboxTrap = null;

  function getLightbox() {
    let lb = document.getElementById('lightbox') || document.querySelector('.lightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.id = 'lightbox';
      lb.className = 'lightbox';
      lb.setAttribute('role', 'dialog');
      lb.setAttribute('aria-modal', 'true');
      lb.setAttribute('aria-hidden', 'true');
      lb.setAttribute('aria-label', 'Detalhes do evento');
      lb.innerHTML = `
        <div class="lightbox__overlay" data-lightbox-close></div>
        <div class="lightbox__container">
          <button class="lightbox__close" type="button" aria-label="Fechar (Esc)" data-lightbox-close>&times;</button>
          <div class="lightbox__media">
            <img class="lightbox__image" src="" alt="" />
          </div>
          <div class="lightbox__details">
            <span class="lightbox__badge"></span>
            <h3 class="lightbox__title"></h3>
            <p class="lightbox__type"></p>
            <span class="lightbox__date"></span>
          </div>
        </div>
      `;
      document.body.appendChild(lb);
    }
    return lb;
  }

  function openLightbox(eventData, originElement) {
    lightboxModal = getLightbox();
    triggerCard = originElement;

    const img = lightboxModal.querySelector('.lightbox__image');
    const title = lightboxModal.querySelector('.lightbox__title');
    const type = lightboxModal.querySelector('.lightbox__type');
    const date = lightboxModal.querySelector('.lightbox__date');
    const badge = lightboxModal.querySelector('.lightbox__badge');
    const closeBtn = lightboxModal.querySelector('.lightbox__close');

    if (img) { img.src = eventData.image; img.alt = eventData.alt; }
    if (title) title.textContent = eventData.title;
    if (type) type.textContent = eventData.type;
    if (date) date.textContent = eventData.date;
    if (badge) badge.textContent = eventData.category.toUpperCase();

    lightboxModal.classList.add('is-open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    document.body.style.overflow = 'hidden';

    destroyLightboxTrap = createFocusTrap(lightboxModal);
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    if (!lightboxModal || !lightboxModal.classList.contains('is-open')) return;
    lightboxModal.classList.remove('is-open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    document.body.style.overflow = '';

    if (destroyLightboxTrap) { destroyLightboxTrap(); destroyLightboxTrap = null; }
    if (triggerCard && typeof triggerCard.focus === 'function') triggerCard.focus();
  }

  function initLightboxEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches('[data-lightbox-close]') || event.target.closest('[data-lightbox-close]')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }

  /* ============================================================================
   * 11. NOVA SECÇÃO: ACORDEÃO DE PERGUNTAS FREQUENTES (FAQ)
   * ============================================================================
   */
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const button = item.querySelector('.faq-item__question');
      const answer = item.querySelector('.faq-item__answer');
      if (!button || !answer) return;

      button.addEventListener('click', () => {
        const isOpen = button.getAttribute('aria-expanded') === 'true';

        // Fecha os outros itens para manter elegância executiva
        faqItems.forEach(other => {
          if (other !== item) {
            const otherBtn = other.querySelector('.faq-item__question');
            const otherAns = other.querySelector('.faq-item__answer');
            if (otherBtn && otherAns) {
              otherBtn.setAttribute('aria-expanded', 'false');
              otherAns.style.maxHeight = null;
              other.classList.remove('is-active');
            }
          }
        });

        if (isOpen) {
          button.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
          item.classList.remove('is-active');
        } else {
          button.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
          item.classList.add('is-active');
        }
      });
    });
  }

  /* ============================================================================
   * 12. FORMULÁRIO DE CONTACTO — VALIDAÇÃO E ENCAMINHAMENTO WHATSAPP
   * ============================================================================
   */
  function initContactForm() {
    const form = document.querySelector('#contactForm') || document.querySelector('.contact__form');
    if (!form) return;

    form.setAttribute('novalidate', 'true');

    function showError(input, message) {
      input.classList.add('has-error');
      input.setAttribute('aria-invalid', 'true');
      const group = input.closest('.form-group') || input.parentElement;
      if (!group) return;

      let err = group.querySelector('.form-error, .form-error-message');
      if (!err) {
        err = document.createElement('span');
        err.className = 'form-error';
        err.setAttribute('role', 'alert');
        group.appendChild(err);
      }
      err.textContent = message;
    }

    function clearError(input) {
      input.classList.remove('has-error');
      input.removeAttribute('aria-invalid');
      const group = input.closest('.form-group') || input.parentElement;
      if (group) {
        const err = group.querySelector('.form-error, .form-error-message');
        if (err) err.textContent = '';
      }
    }

    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('input', () => clearError(field));
      field.addEventListener('change', () => clearError(field));
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      let valid = true;
      let firstErrorEl = null;

      const nameEl = form.querySelector('#nome, [name="nome"]');
      const phoneEl = form.querySelector('#telefone, [name="telefone"]');
      const emailEl = form.querySelector('#email, [name="email"]');
      const eventTypeEl = form.querySelector('#tipo-evento, [name="tipo-evento"]');
      const dateEl = form.querySelector('#data-evento, [name="data-evento"]');
      const messageEl = form.querySelector('#mensagem, [name="mensagem"]');

      // Nome obrigatório
      if (!nameEl || !nameEl.value.trim() || nameEl.value.trim().length < 2) {
        valid = false;
        if (nameEl) {
          showError(nameEl, 'Por favor, introduza o seu nome completo.');
          if (!firstErrorEl) firstErrorEl = nameEl;
        }
      }

      // Telefone obrigatório
      const phoneVal = phoneEl ? phoneEl.value.trim() : '';
      const phoneValid = /^[+]?[\d\s\-()]{7,18}$/.test(phoneVal);
      if (!phoneEl || !phoneVal || !phoneValid) {
        valid = false;
        if (phoneEl) {
          showError(phoneEl, 'Por favor, introduza um contacto telefónico válido.');
          if (!firstErrorEl) firstErrorEl = phoneEl;
        }
      }

      // Email (opcional, mas valida se preenchido)
      if (emailEl && emailEl.value.trim()) {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim());
        if (!emailValid) {
          valid = false;
          showError(emailEl, 'Por favor, introduza um e-mail válido.');
          if (!firstErrorEl) firstErrorEl = emailEl;
        }
      }

      if (!valid) {
        if (firstErrorEl) firstErrorEl.focus();
        return;
      }

      const name = nameEl ? nameEl.value.trim() : '';
      const phone = phoneVal;
      const email = emailEl && emailEl.value.trim() ? emailEl.value.trim() : 'Não informado';
      const eventType = eventTypeEl && eventTypeEl.value.trim() ? eventTypeEl.value.trim() : 'Geral';
      const date = dateEl && dateEl.value.trim() ? dateEl.value.trim() : 'A definir';
      const msg = messageEl && messageEl.value.trim() ? messageEl.value.trim() : 'Sem observações adicionais';

      const whatsappText = [
        '*Novo pedido de proposta via site OW-Serviços*',
        '',
        `*Nome:* ${name}`,
        `*Telefone:* ${phone}`,
        `*Email:* ${email}`,
        `*Tipo de evento:* ${eventType}`,
        `*Data prevista:* ${date}`,
        '',
        '*Mensagem:*',
        msg
      ].join('\n');

      const url = getWhatsAppUrl(whatsappText);
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'A abrir WhatsApp...';
      }

      setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 250);
    });
  }

  /* ============================================================================
   * 13. BOTÃO FLUTUANTE DO WHATSAPP (COM ETIQUETA EM DESKTOP)
   * ============================================================================
   */
  function initWhatsAppFloat() {
    let floatBtn = document.querySelector('.whatsapp-float') || document.querySelector('#whatsapp-float');
    const url = getWhatsAppUrl(WHATSAPP_CONFIG.defaultMsg);

    if (floatBtn) {
      floatBtn.href = url;
    }
  }

  /* ============================================================================
   * 14. CARTÕES DE SOLUÇÕES — LINKS DIRETOS PARA CADA SERVIÇO
   * ============================================================================
   */
  function initSolutionCards() {
    const cards = document.querySelectorAll('.solution-card');
    cards.forEach(card => {
      const titleEl = card.querySelector('.solution-card__title');
      const cta = card.querySelector('.solution-card__link');

      if (!cta || !titleEl) return;
      const serviceName = titleEl.textContent.trim();
      const message = `Olá! Gostaria de pedir uma proposta para o serviço: ${serviceName}.`;

      cta.href = getWhatsAppUrl(message);
      cta.target = '_blank';
      cta.rel = 'noopener noreferrer';
    });
  }

  /* ============================================================================
   * 15. BARRA FIXA MOBILE DE ALTA CONVERSÃO
   * ============================================================================
   */
  function initMobileBottomBar() {
    const bar = document.querySelector('.mobile-bottom-bar');
    if (!bar) return;

    let lastY = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentY = window.scrollY;
      // Mantém sempre visível para não perder conversão
      if (currentY > 120) {
        bar.classList.add('is-visible');
      } else {
        bar.classList.remove('is-visible');
      }
      lastY = currentY;
    }, { passive: true });
  }

  /* ============================================================================
   * 16. ACESSIBILIDADE GERAL (SKIP TO CONTENT)
   * ============================================================================
   */
  function initAccessibility() {
    const skipLink = document.querySelector('.skip-link');
    if (!skipLink) return;

    skipLink.addEventListener('click', event => {
      const targetId = skipLink.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.setAttribute('tabindex', '-1');
        target.focus();
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    });
  }

  /* ============================================================================
   * 17. INICIALIZAÇÃO
   * ============================================================================
   */
  function init() {
    initHeaderScroll();
    initSmoothScroll();
    initMobileMenu();
    initScrollAnimations();
    initProcessTimeline();
    initCounters();
    initPortfolio();
    initLightboxEvents();
    initFaqAccordion();
    initContactForm();
    initWhatsAppFloat();
    initSolutionCards();
    initMobileBottomBar();
    initAccessibility();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
