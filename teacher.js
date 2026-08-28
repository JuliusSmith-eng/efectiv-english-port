// Данные всех преподавателей (uk / en)
const teachersData = [
  //------------------ Карточка №1---------------
  {
    photo: "images/Alexandra.webp",
    socials: {
      instagram:
        "https://www.instagram.com/effective.study.ua?igsh=MWhzZDZhdWRrM2Rhcw==",
      email: "effectivestudy20@gmal.com",
      phone: "+380637804655",
    },
    uk: {
      name: "Олександра Коваленко",
      role: "Засновниця навчального центру «Ефектив»",
      subject: "АНГЛІЙСЬКА МОВА",
      alt: "Олександра Коваленко — засновниця навчального центру Ефектив, викладач англійської мови",
      experience: "8 років",
      targetAudience: "діти від 4–5 років та школярі, офлайн і онлайн",
      description:
        "Багато подорожує та показує учням, що англійська — це не просто шкільний предмет, а інструмент для подорожей, спілкування та нових можливостей у житті.",
    },
    en: {
      name: "Oleksandra Kovalenko",
      role: "Founder of the Efectiv Learning Center",
      subject: "ENGLISH",
      alt: "Oleksandra Kovalenko — founder of the Efectiv Learning Center, English teacher",
      experience: "8 years",
      targetAudience:
        "children from age 4–5 and school students, offline and online",
      description:
        "Travels a lot and shows students that English isn't just a school subject, but a tool for travel, communication, and new opportunities in life.",
    },
  },
  //------------------ Карточка №2---------------
  {
    photo: "images/Illya.webp",
    socials: {
      instagram:
        "https://www.instagram.com/effective.study.ua?igsh=MWhzZDZhdWRrM2Rhcw==",
      email: "effectivestudy20@gmal.com",
      phone: "+380637804655",
    },
    uk: {
      name: "Коваленко Ілля",
      role: "Співзасновник навчального центру «Ефектив»",
      subject: "ДОПОМОГА ЗІ ШКІЛЬНОЮ ПРОГРАМОЮ",
      alt: "Коваленко Ілля — співзасновник навчального центру Ефектив, допомога зі шкільною програмою",
      experience: "3 років",
      targetAudience: "учні до 7 класу, онлайн та офлайн",
      description:
        "Допомагає з виконанням домашніх завдань з усіх шкільних предметів «під ключ» — не просто дає готову відповідь, а пояснює матеріал та допомагає дитині його зрозуміти. Легко знаходить спільну мову з дітьми та підхід до кожного учня.",
    },
    en: {
      name: "Illia Kovalenko",
      role: "Co-founder of the Efectiv Learning Center",
      subject: "SCHOOL CURRICULUM HELP",
      alt: "Illia Kovalenko — co-founder of the Efectiv Learning Center, school curriculum help",
      experience: "3 years",
      targetAudience: "students up to grade 7, online and offline",
      description:
        "Helps with homework across all school subjects from start to finish — not just giving the answer, but explaining the material so the child truly understands it. Easily finds common ground and the right approach with every student.",
    },
  },
  //------------------ Карточка №3---------------
  {
    photo: "images/Alina.webp",
    socials: {
      instagram:
        "https://www.instagram.com/effective.study.ua?igsh=MWhzZDZhdWRrM2Rhcw==",
      email: "effectivestudy20@gmal.com",
      phone: "+380637804655",
    },
    uk: {
      name: "Аліна Сінкевіч",
      role: "Керуюча Effective Study",
      subject: "АНГЛІЙСЬКА МОВА",
      alt: "Аліна Сінкевіч — керуюча Effective Study, викладач англійської мови та підготовка до НМТ",
      experience: "9 років",
      targetAudience: "підлітки та дорослі, підготовка до НМТ",
      description:
        "Вміє пояснювати складне просто та знає, як зробити навчання цікавим, зрозумілим і ефективним.",
    },
    en: {
      name: "Alina Sinkevych",
      role: "Manager at Effective Study",
      subject: "ENGLISH",
      alt: "Alina Sinkevych — manager at Effective Study, English teacher and NMT exam prep",
      experience: "9 years",
      targetAudience: "teenagers and adults, NMT exam preparation",
      description:
        "Knows how to explain complex things simply, and how to make learning interesting, clear, and effective.",
    },
  },
  //------------------ Карточка №4---------------
  {
    photo: "images/Ira.webp",
    socials: {
      instagram:
        "https://www.instagram.com/effective.study.ua?igsh=MWhzZDZhdWRrM2Rhcw==",
      email: "effectivestudy20@gmal.com",
      phone: "+380637804655",
    },
    uk: {
      name: "Ірина Юріс",
      role: "Вчитель",
      subject: "АНГЛІЙСЬКА ТА НІМЕЦЬКА МОВИ",
      alt: "Ірина Юріс — вчитель англійської та німецької мови, підготовка до НМТ",
      experience: "11 років",
      targetAudience: "підлітки та дорослі, підготовка до НМТ",
      description:
        "Завжди з учнями «на одній хвилі» — створює комфортну атмосферу, у якій навчання проходить легко та результативно.",
    },
    en: {
      name: "Iryna Yuris",
      role: "Teacher",
      subject: "ENGLISH & GERMAN",
      alt: "Iryna Yuris — English and German teacher, NMT exam prep",
      experience: "11 years",
      targetAudience: "teenagers and adults, NMT exam preparation",
      description:
        "Always in tune with her students — creates a comfortable atmosphere where learning feels easy and effective.",
    },
  },
  //------------------ Карточка №5---------------
  {
    photo: "images/Daria.webp",
    socials: {
      instagram:
        "https://www.instagram.com/effective.study.ua?igsh=MWhzZDZhdWRrM2Rhcw==",
      email: "effectivestudy20@gmal.com",
      phone: "+380637804655",
    },
    uk: {
      name: "Дар’я Кірєєва",
      role: "Вчитель",
      subject: "АНГЛІЙСЬКА МОВА",
      alt: "Дар’я Кірєєва — вчитель англійської мови, підготовка до НМТ, ЄВІ, IELTS та FLEX",
      experience: "1,5 року",
      targetAudience: "школярі та дорослі",
      description:
        "Допомагає покращити загальний рівень англійської та готує до НМТ, ЄВІ, IELTS і FLEX. Будує заняття відповідно до цілей та потреб кожного учня.",
    },
    en: {
      name: "Daria Kirieieva",
      role: "Teacher",
      subject: "ENGLISH",
      alt: "Daria Kirieieva — English teacher, NMT, EVI, IELTS and FLEX exam prep",
      experience: "1.5 years",
      targetAudience: "school students and adults",
      description:
        "Helps improve overall English proficiency and prepares students for the NMT, EVI, IELTS, and FLEX exams. Builds lessons around each student's goals and needs.",
    },
  },
  //------------------ Карточка №6---------------
  {
    photo: "images/Anna.webp",
    socials: {
      instagram:
        "https://www.instagram.com/effective.study.ua?igsh=MWhzZDZhdWRrM2Rhcw==",
      email: "effectivestudy20@gmal.com",
      phone: "+380637804655",
    },
    uk: {
      name: "Анна Бекецька",
      role: "Вчитель",
      subject: "УКРАЇНСЬКА МОВА",
      alt: "Анна Бекецька — вчитель української мови, підготовка до НМТ",
      experience: "1 рік",
      targetAudience: "5–11 класи, підготовка до НМТ",
      description:
        "Створює дружню атмосферу на уроках, а складні теми пояснює просто — через ігри, асоціації та сучасні тренди.",
    },
    en: {
      name: "Anna Beketska",
      role: "Teacher",
      subject: "UKRAINIAN",
      alt: "Anna Beketska — Ukrainian language teacher, NMT exam prep",
      experience: "1 year",
      targetAudience: "grades 5–11, NMT exam preparation",
      description:
        "Creates a friendly atmosphere in class and explains complex topics simply — through games, associations, and current trends.",
    },
  },
  //------------------ Карточка №7---------------
  {
    photo: "images/Olena.webp",
    socials: {
      instagram:
        "https://www.instagram.com/effective.study.ua?igsh=MWhzZDZhdWRrM2Rhcw==",
      email: "effectivestudy20@gmal.com",
      phone: "+380637804655",
    },
    uk: {
      name: "Олена Кафтанова",
      role: "Вчитель",
      subject: "МАТЕМАТИКА",
      alt: "Олена Кафтанова — вчитель математики для підлітків",
      experience: "4 роки",
      targetAudience: "підлітки",
      description:
        "Допомагає крок за кроком розібратися з математикою. Пояснює складні теми спокійно та просто, створюючи теплу й доброзичливу атмосферу на заняттях.",
    },
    en: {
      name: "Olena Kaftanova",
      role: "Teacher",
      subject: "MATH",
      alt: "Olena Kaftanova — math teacher for teenagers",
      experience: "4 years",
      targetAudience: "teenagers",
      description:
        "Helps students work through math step by step. Explains complex topics calmly and simply, creating a warm and friendly atmosphere in class.",
    },
  },
  //------------------ Карточка №8---------------
  {
    photo: "images/Rostislav.webp",
    socials: {
      instagram:
        "https://www.instagram.com/effective.study.ua?igsh=MWhzZDZhdWRrM2Rhcw==",
      email: "effectivestudy20@gmal.com",
      phone: "+380637804655",
    },
    uk: {
      name: "Ростислав Васильченко",
      role: "Вчитель",
      subject: "БІОЛОГІЯ ТА ХІМІЯ",
      alt: "Ростислав Васильченко — вчитель біології та хімії, підготовка до НМТ та вступу в медичні ВНЗ",
      experience: "2+ роки",
      targetAudience: "підлітки та дорослі",
      description:
        "Готує до НМТ, вступних і міжнародних іспитів, зокрема до вступу в медичні заклади освіти. Допомагає не просто запам’ятовувати факти, а розуміти процеси та взаємозв’язки.",
    },
    en: {
      name: "Rostyslav Vasylchenko",
      role: "Teacher",
      subject: "BIOLOGY & CHEMISTRY",
      alt: "Rostyslav Vasylchenko — biology and chemistry teacher, NMT exam prep and medical school admissions",
      experience: "2+ years",
      targetAudience: "teenagers and adults",
      description:
        "Prepares students for the NMT, admissions, and international exams, including medical school admissions. Helps students not just memorize facts, but understand processes and connections.",
    },
  },
  //------------------ Карточка №9---------------
  {
    photo: "images/Oksana.webp",
    socials: {
      instagram:
        "https://www.instagram.com/effective.study.ua?igsh=MWhzZDZhdWRrM2Rhcw==",
      email: "effectivestudy20@gmal.com",
      phone: "+380637804655",
    },
    uk: {
      name: "Оксана Іванова",
      role: "Вчитель",
      subject: "ПОЛЬСЬКА МОВА",
      alt: "Оксана Іванова — вчитель польської мови для дітей та підлітків",
      experience: "3 роки",
      targetAudience: "молодші школярі та підлітки",
      description:
        "Допомагає опанувати польську мову для навчання, спілкування та комфортного життя в іншій країні.",
    },
    en: {
      name: "Oksana Ivanova",
      role: "Teacher",
      subject: "POLISH",
      alt: "Oksana Ivanova — Polish language teacher for children and teenagers",
      experience: "3 years",
      targetAudience: "younger school students and teenagers",
      description:
        "Helps students learn Polish for studying, communication, and comfortable life in another country.",
    },
  },
  //------------------ Карточка #10---------------
  {
    photo: "images/Evgenia.webp",
    socials: {
      instagram:
        "https://www.instagram.com/effective.study.ua?igsh=MWhzZDZhdWRrM2Rhcw==",
      email: "effectivestudy20@gmal.com",
      phone: "+380637804655",
    },
    uk: {
      name: "Євгенія Петрук",
      role: "Вчитель",
      subject: "АНГЛІЙСЬКА ТА СЛОВАЦЬКА МОВИ",
      alt: "Євгенія Петрук — вчитель англійської та словацької мови, підготовка до вступу у словацькі ВНЗ",
      experience: "англійська — 1,5 року, словацька — 1 рік",
      targetAudience: "діти від 7 років, підлітки та дорослі",
      description:
        "Допомагає покращити рівень мови, опанувати шкільну програму та підготуватися до вступу у словацькі ВНЗ.",
    },
    en: {
      name: "Yevheniia Petruk",
      role: "Teacher",
      subject: "ENGLISH & SLOVAK",
      alt: "Yevheniia Petruk — English and Slovak teacher, Slovak university admissions prep",
      experience: "English — 1.5 years, Slovak — 1 year",
      targetAudience: "children from age 7, teenagers and adults",
      description:
        "Helps improve language level, master the school curriculum, and prepare for admission to Slovak universities.",
    },
  },
  // Вы можете добавлять сюда новых преподавателей по аналогии
];

// UI-подписи картки, які теж залежать від мови
const CARD_UI = {
  uk: {
    phoneTitle: "Телефон",
    detailsBtn: "Досвід",
    detailsHeading: "Додаткова інформація",
    experienceLabel: "Досвід",
    audienceLabel: "З ким працює",
  },
  en: {
    phoneTitle: "Phone",
    detailsBtn: "Experience",
    detailsHeading: "More information",
    experienceLabel: "Experience",
    audienceLabel: "Works with",
  },
};

function currentLang() {
  return (window.siteI18n && window.siteI18n.lang) || "uk";
}

// SVG-иконка Instagram
const instagramSvg = `
  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
`;

// Функция генерации HTML для одной карточки
function createCardTemplate(teacher, lang) {
  const t = teacher[lang] || teacher.uk;
  const ui = CARD_UI[lang] || CARD_UI.uk;

  // Динамическое формирование соцсетей
  const socialLinks = `
    ${
      teacher.socials.instagram
        ? `
      <a href="${teacher.socials.instagram}" target="_blank" class="social-link" title="Instagram">
        ${instagramSvg}
      </a>`
        : ""
    }
    ${
      teacher.socials.email
        ? `
      <a href="mailto:${teacher.socials.email}" class="social-link" title="Email">
        <i data-lucide="mail"></i>
      </a>`
        : ""
    }
    ${
      teacher.socials.phone
        ? `
      <a href="tel:${teacher.socials.phone}" class="social-link" title="${ui.phoneTitle}">
        <i data-lucide="phone"></i>
      </a>`
        : ""
    }
  `;

  return `
    <div class="card-wrapper">
      <div class="team-card">
        <!-- Фото -->
        <img src="${teacher.photo}" alt="${t.alt || t.name + " — " + t.role}" class="card-photo" loading="lazy" />
        <div class="card-overlay"></div>

        <!-- Основная информация -->
        <div class="card-info">
          <h3 class="card-name">${t.name}</h3>
          <p class="card-role">${t.role}</p>
          <span class="card-subject">${t.subject}</span>
        </div>

        <!-- Соцсети (Слева внизу) -->
        <div class="card-socials">
          ${socialLinks}
        </div>

        <!-- Кнопка "Досвід" (Справа внизу) -->
        <button class="details-btn" onclick="toggleDetails(this, event)">
          <span>${ui.detailsBtn}</span>
          <i data-lucide="chevron-up" style="width: 14px; height: 14px"></i>
        </button>

        <!-- Выпадающая панель деталей -->
        <div class="details-panel">
          <button class="details-close" onclick="toggleDetails(this)">
            <i data-lucide="x"></i>
          </button>
          <h4>${ui.detailsHeading}</h4>
          <p class="details-item"><strong>${ui.experienceLabel}:</strong> ${t.experience}</p>
          <p class="details-item">
            <strong>${ui.audienceLabel}:</strong> ${t.targetAudience}
          </p>
          <p class="details-desc">
            ${t.description}
          </p>
        </div>
      </div>
    </div>
  `;
}

// Функция рендеринга всех карточек в DOM
function renderTeamCarousel() {
  const container = document.getElementById("team-carousel");
  if (!container) return;

  const lang = currentLang();

  // 1. Вставляем карточки
  container.innerHTML = teachersData
    .map((teacher) => createCardTemplate(teacher, lang))
    .join("");

  // 2. Инициализируем иконки Lucide
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  // 3. Запускаем 3D-Tilt и Стрелки
  if (typeof window.initTeamSection === "function") {
    window.initTeamSection();
  }
}

// Запуск при загрузке страницы
document.addEventListener("DOMContentLoaded", renderTeamCarousel);

// Перерисовка карточок при смене языка
window.addEventListener("langchange", renderTeamCarousel);

window.toggleDetails = function (button, event) {
  if (event) event.stopPropagation(); // Предотвращаем клик по самой карусели

  // Находим карточку, в которой нажали кнопку
  const card = button.closest(".team-card");
  if (!card) return;

  // Находим панель деталей внутри этой карточки
  const detailsPanel = card.querySelector(".details-panel");

  // Переключаем класс (например, 'active' или 'show'), который у вас отвечает за показ
  if (detailsPanel) {
    detailsPanel.classList.toggle("active");
  }
};
