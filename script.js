/* ============================================
   Intellectual Robotics — Site scripts & i18n
   ============================================ */
(function () {
  "use strict";

  /* ---- Multilingual Translation Dictionary (EN, UZ, RU) ---- */
  const translations = {
    en: {
      alert_status: "OPERATIONAL · ALL SYSTEMS NOMINAL",
      alert_fleet: "FLEET ACTIVE · <strong>IROBOTICS.UZ</strong> · TASHKENT, UZBEKISTAN",
      hero_badge: "Now fielding · TALON-9 Block II",
      hero_title: "Autonomous &amp; IoT systems for the <span class=\"accent\">modern force</span>",
      hero_lead: "Intellectual Robotics (iRobotics.uz) designs and fields autonomous ground, aerial, IoT telemetry, and logistics platforms purpose-built to keep operators out of harm's way and decisions ahead of the challenge.",
      btn_systems: "View Systems",
      btn_capabilities: "Capabilities Brief",
      stat_units: "Units fielded",
      stat_partners: "Partner deployments",
      stat_readiness: "Mission readiness",
      about_eyebrow: "About Intellectual Robotics",
      about_title: "Built for the operators who use it",
      about_intro: "Founded by engineers and roboticists in Uzbekistan, Intellectual Robotics (iRobotics) delivers unmanned and IoT systems built for real-world field conditions. We design every platform in-house — chassis, perception, real-time telemetry, autonomy, and sustainment.",
      mission_title: "Mission",
      mission_desc: "Keep people out of hazardous environments by giving them intelligent machines they can trust to go in first — for reconnaissance, IoT monitoring, logistics, security, and recovery.",
      principles_title: "Principles",
      principles_desc: "Human-on-the-loop. Built to standard. Sustainable in the field. Every system we ship is operator-tested and engineered for reliable deployment.",
      why_eyebrow: "Why Intellectual Robotics",
      why_title: "Field-ready out of the crate",
      why_intro: "Every platform ships sustainment-ready. No bespoke integrators, no months-long activation.",
      card1_title: "Rapid Deployment",
      card1_desc: "Crate to operational in under an hour. Two-person setup, no specialized tooling required in the field.",
      card2_title: "Modular Payloads",
      card2_desc: "Swap sensor heads, comms packages, and cargo modules for the mission at hand — minutes, not hours.",
      card3_title: "GPS-Denied Autonomy",
      card3_desc: "Visual-inertial navigation and onboard mapping keep platforms on mission when satellites can't help.",
      card4_title: "Resilient Mesh & IoT",
      card4_desc: "Low-latency telemetry and self-healing mesh links keep the fleet connected across contested environments.",
      card5_title: "Operator-Sustainable",
      card5_desc: "Field-replaceable units, common toolkit, and predictive diagnostics — repair at the squad level.",
      card6_title: "Human-on-the-Loop",
      card6_desc: "Operators retain authority over every consequential action. Autonomy assists; people decide.",
      cta_title: "Schedule a capability brief",
      cta_desc: "Our team will walk through Intellectual Robotics platforms, integration timeline, and sustainment model with your organization.",
      cta_btn: "Request a Brief"
    },
    uz: {
      alert_status: "ISHGA TUSHURILGAN · BARCHA TIZIMLAR NORMAL",
      alert_fleet: "FAOL FLOT · <strong>IROBOTICS.UZ</strong> · TOSHKENT, O'ZBEKISTON",
      hero_badge: "Joriy etilmoqda · TALON-9 Block II",
      hero_title: "Zamonaviy kuchlar uchun <span class=\"accent\">avtonom va IoT tizimlari</span>",
      hero_lead: "Intellectual Robotics (iRobotics.uz) operatorlarni xavfdan uzoqda saqlash va qarorlarni xavfdan oldinda bajarish uchun mo'ljallangan yerusti, havo, IoT telemetriya va logistika platformalarini ishlab chiqadi.",
      btn_systems: "Tizimlarni ko'rish",
      btn_capabilities: "Imkoniyatlar",
      stat_units: "Yetkazib berilgan birliklar",
      stat_partners: "Hamkor loyihalar",
      stat_readiness: "Vazifaga tayyorgarlik",
      about_eyebrow: "Intellectual Robotics haqida",
      about_title: "Undan foydalanuvchi operatorlar uchun qurilgan",
      about_intro: "O'zbekistonda muhandislar va roboticistlar tomonidan asos solingan Intellectual Robotics (iRobotics) real dala sharoitlariga moslashtirilgan uchuvchisiz va IoT tizimlarini taqdim etadi.",
      mission_title: "Missiya",
      mission_desc: "Razvedka, IoT monitoringi, logistika, xavfsizlik va qutqaruv ishlari uchun xavfli muhitlarga birinchi bo'lib kirishiga ishonish mumkin bo'lgan aqlli mashinalar bilan ta'minlash.",
      principles_title: "Tamoyillar",
      principles_desc: "Inson ishtirokidagi boshqaruv. Standartlarga muvofiq qurilgan. Har bir tizim dala sharoitida sinovdan o'tgan.",
      why_eyebrow: "Nima uchun Intellectual Robotics",
      why_title: "Ishga tayyor platforma",
      why_intro: "Har bir platforma xizmat ko'rsatishga tayyor holda yetkazib beriladi.",
      card1_title: "Tezkor Joylashtirish",
      card1_desc: "Bir soat ichida ishga tushirishga tayyor. Maxsus asbob-uskunalar talab qilinmaydi.",
      card2_title: "Modulli Yuklar",
      card2_desc: "Datchiklar va aloqa modullarini vazifaga qarab daqiqalar ichida almashtiring.",
      card3_title: "GPS-siz Avtonomiya",
      card3_desc: "Sun'iy yo'ldoshlar ishlamaganda ham vizual-inersial navigatsiya platformani yo'lda ushlab turadi.",
      card4_title: "Barqaror Mesh va IoT",
      card4_desc: "Past kechikishli telemetriya va o'zini o'zi tiklaydigan aloqa tarmoqlari.",
      card5_title: "Operator tomonidan parvarishlash",
      card5_desc: "Dala darajasida ta'mirlanadigan va almashtiriladigan qismlar.",
      card6_title: "Inson ishtirokidagi nazorat",
      card6_desc: "Operatorlar har bir muhim harakat ustidan nazoratni saqlab qoladilar.",
      cta_title: "Imkoniyatlar taqdimotini rejalashtiring",
      cta_desc: "Bizning jamoamiz Intellectual Robotics platformalari va integratsiya jadvalini tashkilotingiz bilan muhokama qiladi.",
      cta_btn: "Taqdimotni so'rash"
    },
    ru: {
      alert_status: "В СТРОЮ · ВСЕ СИСТЕМЫ В НОРМЕ",
      alert_fleet: "АКТИВНЫЙ ФЛОТ · <strong>IROBOTICS.UZ</strong> · ТАШКЕНТ, УЗБЕКИСТАН",
      hero_badge: "На вооружении · TALON-9 Block II",
      hero_title: "Автономные и IoT системы для <span class=\"accent\">современных сил</span>",
      hero_lead: "Intellectual Robotics (iRobotics.uz) разрабатывает наземные, воздушные, IoT-телеметрические и логистические платформы, созданные для защиты операторов и опережения угроз.",
      btn_systems: "Системы",
      btn_capabilities: "Обзор возможностей",
      stat_units: "Поставлено единиц",
      stat_partners: "Партнерских развертываний",
      stat_readiness: "Готовность к миссии",
      about_eyebrow: "Об Intellectual Robotics",
      about_title: "Создано для операторов",
      about_intro: "Основанная инженерами и робототехниками в Узбекистане, Intellectual Robotics (iRobotics) поставляет беспилотные и IoT-системы для реальных полевых условий.",
      mission_title: "Миссия",
      mission_desc: "Исключить людей из опасных зон, предоставляя надежные интеллектуальные машины для разведки, IoT-мониторинга, логистики, безопасности и спасения.",
      principles_title: "Принципы",
      principles_desc: "Человек в контуре управления. Соответствие стандартам. Полевая ремонтопригодность.",
      why_eyebrow: "Почему Intellectual Robotics",
      why_title: "Готовность к работе с коробки",
      why_intro: "Каждая платформа поставляется полностью готовой к эксплуатации.",
      card1_title: "Быстрое развертывание",
      card1_desc: "Переход из транспортного в рабочее положение менее чем за час силами двух операторов.",
      card2_title: "Модульная полезная нагрузка",
      card2_desc: "Быстрая замена сенсоров, связных пакетов и грузовых модулей под текущую задачу.",
      card3_title: "Автономия без GPS",
      card3_desc: "Визуально-инерциальная навигация сохраняет точность миссии при подавлении спутниковых сигналов.",
      card4_title: "Надежная сеть и IoT",
      card4_desc: "Низкозадержка телеметрии и самовосстанавливающиеся ячеистые радиолинии.",
      card5_title: "Обслуживание силами расчета",
      card5_desc: "Заменяемые в полевых условиях модули и предиктивная диагностика.",
      card6_title: "Контроль оператора",
      card6_desc: "Оператор сохраняет полномочия на принятие всех ключевых решений. Автономия помогает, человек решает.",
      cta_title: "Запланировать бриф по возможностям",
      cta_desc: "Наша команда ознакомит вашу организацию с платформами Intellectual Robotics и графиком интеграции.",
      cta_btn: "Запросить бриф"
    }
  };

  /* ---- Language switcher handler ---- */
  const langButtons = document.querySelectorAll(".lang-btn");
  const currentLang = localStorage.getItem("irobotics_lang") || "en";
  setLanguage(currentLang);

  langButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = btn.getAttribute("data-lang");
      localStorage.setItem("irobotics_lang", lang);
      setLanguage(lang);
    });
  });

  function setLanguage(lang) {
    langButtons.forEach(b => {
      if (b.getAttribute("data-lang") === lang) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.documentElement.lang = lang;
  }

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---- Animated counters ---- */
  var counters = document.querySelectorAll("[data-count]");
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var decimals = (target % 1 !== 0) ? 1 : 0;
    var start = 0;
    var dur = 1400;
    var t0 = performance.now();
    function step(now) {
      var p = Math.min((now - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = (start + (target - start) * eased).toFixed(decimals);
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && counters.length) {
    var co = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            co.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      q.parentElement.classList.toggle("open");
    });
  });

  /* ---- Contact form (front-end only) ---- */
  var form = document.querySelector(".form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-note");
      if (note) note.classList.add("show");
      form.reset();
      setTimeout(function () { if (note) note.classList.remove("show"); }, 7000);
    });
  }

  /* ---- Footer year ---- */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- Live timestamp in alert bar ---- */
  function pad(n) { return n < 10 ? "0" + n : n; }
  function updateClock() {
    var el = document.querySelector("[data-clock]");
    if (!el) return;
    var d = new Date();
    var z = d.getUTCFullYear() + "-" + pad(d.getUTCMonth()+1) + "-" + pad(d.getUTCDate())
            + " " + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "Z";
    el.textContent = z;
  }
  updateClock();
  setInterval(updateClock, 1000);
})();