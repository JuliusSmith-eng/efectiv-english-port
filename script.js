// 1. Глобальная функция переключения панели «Досвід»
window.toggleDetails = function (element, event) {
  if (event) {
    event.stopPropagation();
  }

  const card = element.closest(".team-card");
  if (!card) return;

  const panel = card.querySelector(".details-panel");
  if (panel) {
    panel.classList.toggle("active");
  }
};

// 2. Глобальная функция инициализации 3D-эффекта и Стрелок
window.initTeamSection = function () {
  const cards = document.querySelectorAll(".team-card");

  function handleMouseMove(e) {
    if (window.innerWidth < 1024) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  function handleMouseLeave(e) {
    const card = e.currentTarget;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  }

  cards.forEach((card) => {
    card.removeEventListener("mousemove", handleMouseMove);
    card.removeEventListener("mouseleave", handleMouseLeave);

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
  });

  const carousel = document.getElementById("team-carousel");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (carousel && prevBtn && nextBtn) {
    const newPrevBtn = prevBtn.cloneNode(true);
    const newNextBtn = nextBtn.cloneNode(true);

    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);

    newNextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft >= maxScroll - 5) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: 320, behavior: "smooth" });
      }
    });

    newPrevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (carousel.scrollLeft <= 5) {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        carousel.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: -320, behavior: "smooth" });
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  // --- Форматирование Имени ---
  document.querySelectorAll("#name-input").forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^a-zA-Zа-яА-ЯіІїЇєЄґҐ\s-]/g, "");
    });

    input.addEventListener("blur", () => {
      let value = input.value.trim();
      if (value) {
        input.value = value.replace(/(^|[\s-])\p{L}/gu, (match) =>
          match.toUpperCase(),
        );
      }
    });
  });

  // --- Форматирование Телефона ---
  document.querySelectorAll("#phone-input").forEach((input) => {
    input.addEventListener("focus", () => {
      if (!input.value.startsWith("+380")) {
        input.value = "+380 ";
      }
    });

    input.addEventListener("input", () => {
      let digits = input.value.replace(/\D/g, "");
      if (!digits.startsWith("380")) {
        digits = "380" + digits;
      }
      digits = digits.substring(0, 12);

      let formatted = "+380";
      if (digits.length > 3) formatted += " (" + digits.substring(3, 5);
      if (digits.length >= 5) formatted += ") " + digits.substring(5, 8);
      if (digits.length >= 8) formatted += "-" + digits.substring(8, 10);
      if (digits.length >= 10) formatted += "-" + digits.substring(10, 12);

      input.value = formatted;
    });

    input.addEventListener("keydown", (e) => {
      if (
        (e.key === "Backspace" || e.key === "Delete") &&
        input.value.length <= 5
      ) {
        e.preventDefault();
      }
    });
  });

  // --- Модальное окно успешной отправки ---
  const trialForm = document.getElementById("trial-form");
  const formSuccess = document.getElementById("form-success");

  if (!document.getElementById("custom-success-modal")) {
    const uiHTML = `
      <div id="custom-success-modal" style="display: none;" class="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 px-4">
        <div class="bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 border border-white/20 rounded-3xl p-8 max-w-md w-full text-center text-white shadow-2xl transform scale-95 transition-transform duration-300">
          <div class="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mx-auto mb-6 shadow-lg text-3xl">
            🥳
          </div>
          <h3 class="text-2xl font-black mb-2 uppercase tracking-tight" data-i18n="trial.successTitle">Заявку успішно надіслано! 🎉</h3>
          <p class="text-sky-100 text-sm mb-8" data-i18n="trial.successText">Найближчим часом ми зв’яжемося з вами, підберемо викладача та зручний час для безкоштовного пробного заняття.</p>
          <button id="close-success-modal" class="w-full py-3.5 px-6 bg-white hover:bg-sky-50 text-slate-900 font-extrabold text-base rounded-2xl shadow-lg transition-all" data-i18n="modal.closeBtn">
            Чудово! 🎉
          </button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", uiHTML);
    // Переводимо щойно вставлену модалку відповідно до поточної мови
    if (window.siteI18n) window.siteI18n.apply(window.siteI18n.lang);
  }

  // Хелпер локалізованих текстів (падає назад на українську, якщо i18n ще не завантажився)
  function t(key, fallback) {
    return window.siteI18n ? window.siteI18n.t(key) : fallback;
  }

  const successModal = document.getElementById("custom-success-modal");
  const successModalContent = successModal?.querySelector("div > div");
  const closeSuccessBtn = document.getElementById("close-success-modal");

  function showSuccessModal() {
    if (!successModal || !successModalContent) return;
    // Показываем модалку и запускаем анимацию
    successModal.style.display = "flex";
    setTimeout(() => {
      successModal.classList.remove("opacity-0", "pointer-events-none");
      successModalContent.classList.remove("scale-95");
      successModalContent.classList.add("scale-100");
    }, 10);
  }

  function hideSuccessModal() {
    if (!successModal || !successModalContent) return;
    successModal.classList.add("opacity-0", "pointer-events-none");
    successModalContent.classList.remove("scale-100");
    successModalContent.classList.add("scale-95");
    setTimeout(() => {
      successModal.style.display = "none";
    }, 300); // Ждем окончания CSS-транзишна перед утаиванием
  }

  closeSuccessBtn?.addEventListener("click", hideSuccessModal);
  successModal?.addEventListener("click", (e) => {
    if (e.target === successModal) hideSuccessModal();
  });

  // --- Валидация и отправка формы ---
  if (trialForm) {
    const nameInput = trialForm.querySelector("#name-input");
    const phoneInput = trialForm.querySelector("#phone-input");
    const submitBtn = trialForm.querySelector('button[type="submit"]');

    // Кастомный перевод стандартных ошибок браузера на украинский
    [nameInput, phoneInput].forEach((input) => {
      if (!input) return;
      input.addEventListener("invalid", () => {
        if (input.validity.valueMissing) {
          input.setCustomValidity(
            t("validation.nameRequired", "Будь ласка, заповніть це поле."),
          );
        }
      });
      input.addEventListener("input", () => {
        input.setCustomValidity("");
      });
    });

    // Блокировка кнопки на 60 секунд (Rate Limit)
    function startCooldown(seconds = 60) {
      if (!submitBtn) return;
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      let timeLeft = seconds;

      const timer = setInterval(() => {
        submitBtn.textContent = `${t("validation.wait", "Зачекайте")} ${timeLeft} ${window.siteI18n && window.siteI18n.lang === "en" ? "sec..." : "сек..."}`;
        timeLeft--;

        if (timeLeft < 0) {
          clearInterval(timer);
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }
      }, 1000);
    }

    trialForm.addEventListener("submit", async (e) => {
      // 1. Обязательно сбрасываем предыдущие ошибки
      if (nameInput) nameInput.setCustomValidity("");
      if (phoneInput) phoneInput.setCustomValidity("");

      const nameValue = nameInput?.value.trim() || "";
      const phoneValue = phoneInput?.value.trim() || "";
      const phoneDigits = phoneValue.replace(/\D/g, "");

      // 2. Проверка имени
      if (!nameValue) {
        e.preventDefault();
        nameInput.setCustomValidity("Будь ласка, заповніть це поле.");
        nameInput.reportValidity();
        return;
      }

      // 3. Проверка телефона (должно быть ровно 12 цифр: 380XXXXXXXXX)
      if (phoneDigits.length < 12) {
        e.preventDefault(); // Блокируем отправку формы
        phoneInput.setCustomValidity(
          t(
            "validation.phoneRequired",
            "Будь ласка, повністю введіть номер телефону.",
          ),
        );
        phoneInput.reportValidity(); // Показываем тултип прямо над полем
        return;
      }

      // Если есть спам-поле
      const honeypot = trialForm.querySelector("#honeypot")?.value;
      if (honeypot) {
        e.preventDefault();
        trialForm.classList.add("hidden");
        if (formSuccess) formSuccess.classList.remove("hidden");
        return;
      }

      e.preventDefault(); // Перехватываем стандартную отправку HTML

      const formatSelect = trialForm.querySelector("#format-select");
      const subjectSelect = trialForm.querySelector("#subject-select"); // <-- Получаем селект предмета

      // Данные заявки (пригодятся, если в будущем подключите свой обработчик отправки)
      const submission = {
        name: nameValue,
        phone: phoneValue,
        subject: subjectSelect?.value || "",
        format: formatSelect?.value || "",
      };

      // --- ВІДПРАВКА НА СЕРВЕР ВІДКЛЮЧЕНА (демо-версія для портфоліо) ---
      // У бойовій версії сайту тут був fetch("send.php", { method: "POST", body: formData })
      // з реальною відправкою заявки в Telegram-бота. Замість цього імітуємо
      // успішну відправку з коротким штучним затримуванням, зберігаючи всю
      // валідацію, форматування полів, honeypot-захист і UX без змін.
      try {
        if (submitBtn) submitBtn.disabled = true;

        await new Promise((resolve) => setTimeout(resolve, 600));

        // --- Отправка конверсии в Google Analytics 4 ---
        if (typeof gtag === "function") {
          gtag("event", "generate_lead", {
            event_category: "Contact Form",
            event_label: "Форма заявки",
          });
        }

        trialForm.reset();
        showSuccessModal();
        startCooldown(60);
      } catch (error) {
        phoneInput.setCustomValidity(
          t(
            "validation.networkError",
            "Помилка мережі при відправці. Перевірте з'єднання.",
          ),
        );
        phoneInput.reportValidity();
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  // --- Модальное окно контактов ---
  const modal = document.getElementById("contacts-modal");
  const openBtns = document.querySelectorAll('a[href="#contacts"]');
  const closeBtn = document.getElementById("close-contacts-modal");

  openBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal?.classList.remove("hidden");
    });
  });

  closeBtn?.addEventListener("click", () => {
    modal?.classList.add("hidden");
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // --- Кнопка "Безкоштовний урок" (Искорки) ---
  const sparkleBtn = document.getElementById("sparkleBtn");

  if (sparkleBtn) {
    sparkleBtn.addEventListener("click", (e) => {
      const rect = sparkleBtn.getBoundingClientRect();
      const clickX = e.clientX ? e.clientX - rect.left : rect.width / 2;
      const clickY = e.clientY ? e.clientY - rect.top : rect.height / 2;
      const particlesCount = 20;

      for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement("span");
        particle.classList.add("sparkle-particle");

        const size = Math.random() * 4 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const colors = ["#00a2ff", "#00ffff", "#ffffff", "#7dd3fc"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 8px ${color}`;

        particle.style.left = `${clickX}px`;
        particle.style.top = `${clickY}px`;

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 60 + 30;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        particle.style.setProperty("--tx", `${tx}px`);
        particle.style.setProperty("--ty", `${ty}px`);

        sparkleBtn.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 600);
      }

      const targetSection = document.getElementById("trial-section");
      if (targetSection) {
        setTimeout(() => {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 200);
      }
    });
  }

  // --- Логика Бургер-меню ---
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const burgerIcon = document.getElementById("burger-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      burgerIcon?.classList.toggle("hidden");
      closeIcon?.classList.toggle("hidden");
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        burgerIcon?.classList.remove("hidden");
        closeIcon?.classList.add("hidden");
      });
    });
  }

  // --- Анимация, жестко привязанная к прогрессу скролла ---
  const boundElements = document.querySelectorAll(".scroll-bound");

  function updateScrollAnimation() {
    if (boundElements.length === 0) return;

    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth < 768;

    boundElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const direction = el.getAttribute("data-direction");

      const elCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;

      const distanceFromCenter = Math.abs(screenCenter - elCenter);
      const maxDistance = isMobile ? windowHeight * 0.6 : windowHeight * 0.8;

      let progress = 1 - distanceFromCenter / maxDistance;
      progress = Math.max(0, Math.min(1, progress));

      const maxOffset = isMobile ? 120 : 300;

      const offset = (1 - progress) * maxOffset;
      const translateX = direction === "left" ? -offset : offset;

      el.style.transform = `translate3d(${translateX.toFixed(1)}px, 0, 0)`;
    });
  }

  window.addEventListener("scroll", () =>
    requestAnimationFrame(updateScrollAnimation),
  );
  window.addEventListener("resize", updateScrollAnimation);
  updateScrollAnimation();
});
