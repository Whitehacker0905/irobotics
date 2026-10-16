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
      nav_home: "Home",
      nav_systems: "Systems",
      nav_capabilities: "Capabilities",
      nav_contact: "Contact",
      nav_cta: "Request Brief",
      hero_badge: "Intellectual Robotics · TALON-9 Block II",
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
      cell1_title: "Autonomous",
      cell1_sub: "GPS-denied",
      cell2_title: "Resilient Comms",
      cell2_sub: "Mesh + IoT MQTT",
      cell3_title: "Hardened",
      cell3_sub: "MIL-STD-810",
      cell4_title: "Tashkent R&amp;D",
      cell4_sub: "In-House Built",
      why_eyebrow: "Why Intellectual Robotics",
      why_title: "Field-ready out of the crate",
      why_intro: "Every platform ships sustainment-ready. No bespoke integrators, no months-long activation.",
      card1_title: "Rapid Deployment",
      card1_desc: "Crate to operational in under an hour. Two-person setup, no specialized tooling required in the field.",
      card2_title: "Modular Payloads",
      card2_desc: "Swap sensor heads, comms packages, and cargo modules for the mission at hand — minutes, not hours.",
      card3_title: "GPS-Denied Autonomy",
      card3_desc: "Visual-inertial navigation and onboard mapping keep platforms on mission when satellites can't help.",
      card4_title: "Resilient Mesh &amp; IoT",
      card4_desc: "Low-latency telemetry and self-healing mesh links keep the fleet connected across contested environments.",
      card5_title: "Operator-Sustainable",
      card5_desc: "Field-replaceable units, common toolkit, and predictive diagnostics — repair at the squad level.",
      card6_title: "Human-on-the-Loop",
      card6_desc: "Operators retain authority over every consequential action. Autonomy assists; people decide.",
      cta_title: "Schedule a capability brief",
      cta_desc: "Our team will walk through Intellectual Robotics platforms, integration timeline, and sustainment model with your organization.",
      cta_btn: "Request a Brief",
      
      /* Contact Page Keys */
      contact_alert: "CONTACT · UNCLASSIFIED CHANNEL",
      contact_response: "RESPONSE WINDOW",
      contact_eyebrow: "Get in Touch",
      contact_title: "Open a channel",
      contact_intro: "Tell us about your program. We'll align platform mix, integration timeline, and sustainment model — and respond within two business days.",
      team_title: "Talk to the team",
      team_intro: "Program offices, allied procurement, sustainment — reach the right desk directly.",
      desk_programs: "Programs",
      desk_procurement: "Allied Procurement",
      desk_hotline: "Sustainment Hotline",
      desk_hq: "Headquarters",
      hq_address: "Tashkent, Uzbekistan",
      desk_ops: "Field Operations",
      form_name: "Full name",
      form_org: "Organization",
      form_email: "Work email",
      form_phone: "Phone",
      form_country: "Country / Service",
      form_interest: "Inquiry",
      form_msg: "Program detail (unclassified only)",
      form_submit: "Submit Inquiry",
      form_success: "✓ INQUIRY LOGGED · AN INTELLECTUAL ROBOTICS LEAD WILL RESPOND WITHIN 48 HOURS",

      /* Systems Page Keys */
      sys_alert: "CATALOG · UNCLASSIFIED",
      sys_active_platforms: "ACTIVE PLATFORMS",
      sys_eyebrow: "The Lineup",
      sys_title: "Four platforms. One autonomy core.",
      sys_intro: "Ground, air, logistics, and EOD — every Intellectual Robotics platform runs the same operator interface and the same proven autonomy stack.",
      talon_tag: "Ground · Reconnaissance &amp; Security",
      talon_desc: "All-terrain unmanned ground vehicle for forward reconnaissance, perimeter patrol, and route assessment. Fully autonomous mapping with operator-on-the-loop control.",
      raven_tag: "Aerial · ISR &amp; Survey",
      raven_desc: "Short-range tactical ISR drone. Hand-launched, fully autonomous mission planning with real-time multispectral imagery and full-motion video to the squad.",
      mule_tag: "Ground · Logistics &amp; Casualty Evac",
      mule_desc: "Squad-level logistics platform. Carries supplies, water, and casualties across austere terrain in autonomous follow or waypoint mode — keeping load off the dismounted force.",
      sapper_tag: "Ground · EOD &amp; HAZMAT",
      sapper_desc: "Compact EOD and HAZMAT response robot with a six-axis manipulator. Keeps the operator at standoff for render-safe procedures, sample collection, and confined-space recon.",
      spec_payload: "Payload",
      spec_endurance: "Endurance",
      spec_speed: "Speed",
      spec_comms: "Comms",
      spec_env: "Environmental",
      spec_range: "Range",
      spec_sensors: "Sensors",
      spec_wind: "Wind tolerance",
      spec_weight: "Stowed weight",
      spec_tow: "Tow rating",
      spec_clearance: "Ground clearance",
      spec_reach: "Reach",
      spec_lift: "Lift",
      spec_stair: "Stair climb",
      inc_eyebrow: "Every system includes",
      inc_title: "Hardware is the start, not the deliverable",
      inc_intro: "Whichever platform you field, the full Intellectual Robotics stack ships with it.",
      inc1_title: "Intellectual Robotics OS",
      inc1_desc: "The shared autonomy stack — perception, planning, and operator control — updated over the air across allied fleets.",
      inc2_title: "Mission Console",
      inc2_desc: "One ruggedized tablet plans missions, monitors the fleet, and reviews collected data — works disconnected.",
      inc3_title: "Five-year Sustainment",
      inc3_desc: "Spares, training, and 24/7 engineering support included. Mean repair time of under two hours, field-level.",
      fleet_title: "Need to spec a fleet?",
      fleet_desc: "Share your mission set and our solutions team will return a recommended platform mix and integration timeline.",
      fleet_btn: "Talk to Solutions",

      footer_tag: "Unmanned ground, air, IoT, and logistics systems — engineered by Intellectual Robotics (iRobotics.uz).",
      footer_explore: "Explore",
      footer_company: "Company",
      footer_careers: "Careers",
      footer_press: "Press",
      footer_sustainment: "Sustainment",
      footer_standards: "Standards",
      std_autonomy: "Autonomy Stack",
      std_iot: "IoT Telemetry",
      std_mil: "MIL-STD-810H",
      std_support: "Support",
      footer_location: "TASHKENT, UZBEKISTAN"
    },
    uz: {
      alert_status: "ISHGA TUSHURILGAN · BARCHA TIZIMLAR NORMAL",
      alert_fleet: "FAOL FLOT · <strong>IROBOTICS.UZ</strong> · TOSHKENT, O'ZBEKISTON",
      nav_home: "Bosh sahifa",
      nav_systems: "Tizimlar",
      nav_capabilities: "Imkoniyatlar",
      nav_contact: "Bog'lanish",
      nav_cta: "Taqdimot so'rash",
      hero_badge: "Intellectual Robotics · TALON-9 Block II",
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
      cell1_title: "Avtonom",
      cell1_sub: "GPS-siz",
      cell2_title: "Barqaror Aloqa",
      cell2_sub: "Mesh + IoT MQTT",
      cell3_title: "Mustahkamlangan",
      cell3_sub: "MIL-STD-810",
      cell4_title: "Toshkent R&amp;D",
      cell4_sub: "O'zimizda ishlab chiqarilgan",
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
      cta_btn: "Taqdimotni so'rash",

      /* Contact Page Keys */
      contact_alert: "BOG'LANISH · OCHIQ KANAL",
      contact_response: "JAVOB VAQTI",
      contact_eyebrow: "Bog'lanish",
      contact_title: "Kanal oching",
      contact_intro: "Dasturingiz haqida bizga xabar bering. Biz platforma tarkibi va integratsiya jadvalini muhokama qilamiz — ikki ish kuni ichida javob beramiz.",
      team_title: "Jamoa bilan bog'lanish",
      team_intro: "Dastur uylari, xaridlar va xizmat ko'rsatish bo'limlari — to'g'ridan-to'g'ri murojaat qiling.",
      desk_programs: "Dasturlar",
      desk_procurement: "Hamkorlikdagi xaridlar",
      desk_hotline: "Xizmat ko'rsatish liniyasi",
      desk_hq: "Bosh qarorgoh",
      hq_address: "Toshkent, O'zbekiston",
      desk_ops: "Dala amaliyotlari",
      form_name: "To'liq ism",
      form_org: "Tashkilot",
      form_email: "Ishchi elektron pochta",
      form_phone: "Telefon",
      form_country: "Mamlakat / Xizmat",
      form_interest: "Murojaat turi",
      form_msg: "Dastur tafsilotlari",
      form_submit: "So'rovni yuborish",
      form_success: "✓ SO'ROV QABUL QILINDI · INTELLECTUAL ROBOTICS 48 SOAT ICHIDA JAVob BERADI",

      /* Systems Page Keys */
      sys_alert: "KATALOG · OCHIQ",
      sys_active_platforms: "FAOL PLATFORMALAR",
      sys_eyebrow: "Model qatori",
      sys_title: "To'rtita platforma. Bitta avtonomiya yadrosi.",
      sys_intro: "Yer, havo, logistika va EOD — har bir Intellectual Robotics platformasi bir xil boshqaruv interfeysidan foydalanadi.",
      talon_tag: "Yerusti · Razvedka va Xavfsizlik",
      talon_desc: "Oldinga razvedka va perimetrni nazorat qilish uchun barcha yo'ldagi uchuvchisiz yerusti vositasi.",
      raven_tag: "Havo · ISR va S'yomka",
      raven_desc: "Qisqa masofali taktik ISR droni. Real vaqt rejimida ko'p spektrli tasvirlar bilan ta'minlaydi.",
      mule_tag: "Yerusti · Logistika",
      mule_desc: "Jamoa darajasidagi logistika platformasi. Og'ir yuklarni va ta'minotni murakkab erlarda tashiydi.",
      sapper_tag: "Yerusti · EOD va HAZMAT",
      sapper_desc: "Olti o'qli manipulyatorga ega ixcham EOD va HAZMAT javob berish roboti.",
      spec_payload: "Foydali yuk",
      spec_endurance: "Chidamlilik",
      spec_speed: "Tezlik",
      spec_comms: "Aloqa",
      spec_env: "Atrof-muhit",
      spec_range: "Masofa",
      spec_sensors: "Datchiklar",
      spec_wind: "Shamolgacha chidamlilik",
      spec_weight: "Og'irligi",
      spec_tow: "Tortish quvvati",
      spec_clearance: "Yer sirtigacha masofa",
      spec_reach: "Qamrov",
      spec_lift: "Ko'tarish",
      spec_stair: "Zinalarga chiqish",
      inc_eyebrow: "Har bir tizimga quyidagilar kiradi",
      inc_title: "Akkumulyator va boshqaruv",
      inc_intro: "Qaysi platformani tanlamang, to'liq Intellectual Robotics steki birga keladi.",
      inc1_title: "Intellectual Robotics OS",
      inc1_desc: "Umumiy avtonomiya steki — idrok etish, rejalashtirish va operator boshqaruvi.",
      inc2_title: "Vazifa konsoli",
      inc2_desc: "Bitta mustahkamlangan planshet vazifalarni rejalashtiradi va flodni kuzatib boradi.",
      inc3_title: "Besh yillik xizmat",
      inc3_desc: "Ehtiyot qismlar, o'qitish va 24/7 muhandislik yordami kiritilgan.",
      fleet_title: "Flotni tanlash kerakmi?",
      fleet_desc: "Vazifangizni ulashing va bizning jamoamiz tavsiya etilgan platforma aralashmasini qaytaradi.",
      fleet_btn: "Yechimlar bilan gaplashish",

      footer_tag: "Yerusti, havo, IoT va logistika tizimlari — Intellectual Robotics (iRobotics.uz) tomonidan ishlab chiqilgan.",
      footer_explore: "Sahifalar",
      footer_company: "Kompaniya",
      footer_careers: "Karyera",
      footer_press: "Matbuot",
      footer_sustainment: "Xizmat ko'rsatish",
      footer_standards: "Standartlar",
      std_autonomy: "Avtonomiya steki",
      std_iot: "IoT Telemetriya",
      std_mil: "MIL-STD-810H",
      std_support: "Yordam",
      footer_location: "TOSHKENT, O'ZBEKISTON"
    },
    ru: {
      alert_status: "В СТРОЮ · ВСЕ СИСТЕМЫ В НОРМЕ",
      alert_fleet: "АКТИВНЫЙ ФЛОТ · <strong>IROBOTICS.UZ</strong> · ТАШКЕНТ, УЗБЕКИСТАН",
      nav_home: "Главная",
      nav_systems: "Системы",
      nav_capabilities: "Возможности",
      nav_contact: "Контакты",
      nav_cta: "Запросить бриф",
      hero_badge: "Intellectual Robotics · TALON-9 Block II",
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
      cell1_title: "Автономный",
      cell1_sub: "Без GPS",
      cell2_title: "Связь",
      cell2_sub: "Mesh + IoT MQTT",
      cell3_title: "Защищенный",
      cell3_sub: "MIL-STD-810",
      cell4_title: "Ташкент R&amp;D",
      cell4_sub: "Собственная разработка",
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
      cta_btn: "Запросить бриф",

      /* Contact Page Keys */
      contact_alert: "КОНТАКТ · ОТКРЫТЫЙ КАНАЛ",
      contact_response: "ВРЕМЯ ОТВЕТА",
      contact_eyebrow: "Контакты",
      contact_title: "Откройте канал",
      contact_intro: "Расскажите нам о вашей программе. Мы подберем состав платформ, график интеграции и ответим в течение двух рабочих дней.",
      team_title: "Связаться с командой",
      team_intro: "Программные офисы, закупки и поддержка — обращайтесь напрямую.",
      desk_programs: "Программы",
      desk_procurement: "Партнерские закупки",
      desk_hotline: "Горячая линия поддержки",
      desk_hq: "Штаб-квартира",
      hq_address: "Ташкент, Узбекистан",
      desk_ops: "Полевые операции",
      form_name: "ФИО",
      form_org: "Организация",
      form_email: "Рабочий email",
      form_phone: "Телефон",
      form_country: "Страна / Служба",
      form_interest: "Тема запроса",
      form_msg: "Детали программы",
      form_submit: "Отправить запрос",
      form_success: "✓ ЗАПРОС ЗАРЕГИСТРИРОВАН · ПРЕДСТАВИТЕЛЬ INTELLECTUAL ROBOTICS ОТВЕТИТ В ТЕЧЕНИЕ 48 ЧАСОВ",

      /* Systems Page Keys */
      sys_alert: "КАТАЛОГ · НЕ СЕКРЕТНО",
      sys_active_platforms: "АКТИВНЫХ ПЛАТФОРМ",
      sys_eyebrow: "Модельный ряд",
      sys_title: "Четыре платформы. Единое ядро автономии.",
      sys_intro: "Наземные, воздушные, логистические и саперные системы — единый интерфейс оператора и проверенный стек автономии.",
      talon_tag: "Наземные · Разведка и Безопасность",
      talon_desc: "Вседорожный беспилотный наземный аппарат для разведки, патрулирования периметра и оценки маршрутов.",
      raven_tag: "Воздушные · ISR и Съемка",
      raven_desc: "БПЛА тактического класса с ручным запуском и автономным планированием миссий.",
      mule_tag: "Наземные · Логистика",
      mule_desc: "Логистическая платформа для доставки грузов, воды и эвакуации раненых в сложных условиях.",
      sapper_tag: "Наземные · Разминирование и HAZMAT",
      sapper_desc: "Компактный робот для саперных работ и работы с опасными материалами с 6-осевым манипулятором.",
      spec_payload: "Полезная нагрузка",
      spec_endurance: "Автономность",
      spec_speed: "Скорость",
      spec_comms: "Связь",
      spec_env: "Исполнение",
      spec_range: "Дальность",
      spec_sensors: "Сенсоры",
      spec_wind: "Ветроустойчивость",
      spec_weight: "Вес в укладке",
      spec_tow: "Буксируемый вес",
      spec_clearance: "Клиренс",
      spec_reach: "Вылет манипулятора",
      spec_lift: "Подъем",
      spec_stair: "Преодоление лестниц",
      inc_eyebrow: "В каждый комплект входит",
      inc_title: "Аппаратное обеспечение — это только начало",
      inc_intro: "Независимо от выбранной платформы, в комплект входит весь стек Intellectual Robotics.",
      inc1_title: "Intellectual Robotics OS",
      inc1_desc: "Общий стек автономии — восприятие, планирование и управление с воздушным обновлением.",
      inc2_title: "Консоль миссии",
      inc2_desc: "Защищенный планшет для планирования миссий и мониторинга флота без подключения к сети.",
      inc3_title: "Пятилетняя поддержка",
      inc3_desc: "Запасные части, обучение и круглосуточная инженерная поддержка. Ремонт менее чем за 2 часа.",
      fleet_title: "Нужно рассчитать парк?",
      fleet_desc: "Поделитесь своей задачей, и наша команда вернет рекомендуемый состав платформ и график развертывания.",
      fleet_btn: "Связаться с отделом решений",

      footer_tag: "Наземные, воздушные, IoT и логистические системы — разработка Intellectual Robotics (iRobotics.uz).",
      footer_explore: "Навигация",
      footer_company: "Компания",
      footer_careers: "Карьера",
      footer_press: "Пресса",
      footer_sustainment: "Поддержка",
      footer_standards: "Стандарты",
      std_autonomy: "Стек автономии",
      std_iot: "IoT Телеметрия",
      std_mil: "MIL-STD-810H",
      std_support: "Поддержка",
      footer_location: "ТАШКЕНТ, УЗБЕКИСТАН",

      /* Inside translations.uz */
      cap_alert: "IMKONIYATLAR BRIFI · OCHIQ",
      cap_statline: "IDROK · AVTONOMIYA · ALOQA · XAVFSIZLIK",
      stack_eyebrow: "Stek",
      stack_title: "Murakkab muhitlar uchun mo'ljallangan avtonomiya steki",
      stack_intro: "Idrok, intellekt va harakat birlashtirilgan — dala operatorlari duch keladigan sharoitlarda sinovdan o'tgan.",
      metric1_cap: "Qaror kechikishi",
      metric2_cap: "Datchik qamrovi",
      metric3_cap: "Vazifa aniqligi",
      metric4_cap: "Navigatsiya qobiliyati",
      percep_eyebrow: "Idrok",
      percep_title: "Kun yoxud tun to'liq vaziyatni tushunish",
      percep_desc: "Birlashtirilgan datchiklar to'plami yomg'ir, chang va kam yorug'likda soniyasiga o'ttiz marta jonli 3D model yaratadi.",
      percep_li1: "200 m samarali masofaga ega qattiq holatdagi LiDAR",
      percep_li2: "Ko'p spektrli EO/IR — ko'rinadigan, yaqin-IQ va termal",
      percep_li3: "Chang va yomg'irga chidamli datchiklar sintezi",
      percep_li4: "Operator tomonidan to'plangan ma'lumotlar asosida o'qitilgan ob'ektlarni tasniflash",
      autonomy_eyebrow: "Avtonomiya",
      autonomy_title: "Tashqi signallarsiz harakatlanish va rejalashtirish",
      autonomy_desc: "Vizual-inersial odometriya va relefga asoslangan navigatsiya GNSS ishlamaganda ham platformani faol saqlaydi.",
      autonomy_li1: "10 km dan ortiq masofada sub-metr og'ish bilan GPS-siz navigatsiya",
      autonomy_li2: "Bortda 275 TOPS neyron hisoblash — to'liq uzilgan holda ishlash",
      autonomy_li3: "Nishabliklar va xandaqlar uchun relef tahlili",
      autonomy_li4: "Oxirgi foydalanuvchilar bilan ishlab chiqilgan xatti-harakatlar daraxtlari",
      comms_eyebrow: "Aloqa",
      comms_title: "Murakkab spektrda barqaror aloqa",
      comms_desc: "Chastotani o'zgartiruvchi mesh tarmoqlari dushman ta'sirida ham flotni bog'lab turadi.",
      comms_li1: "Moslashuvchan o'tkazish qobiliyatiga ega chastotani o'zgartiruvchi tarmoq",
      comms_li2: "Ko'rish chizig'idan tashqari ishlash uchun qo'shimcha SATCOM",
      comms_li3: "Oxirigacha shifrlangan buyruq va telemetriya",
      comms_li4: "Aloqa uzilganda bazaga qaytish xususiyati",
      safety_eyebrow: "Xavfsizlik va Nazorat",
      safety_title: "Har bir muhim harakatda inson nazorati",
      safety_desc: "Intellectual Robotics platformalari operatorga yordam beradi — uning o'rnini bosmaydi.",
      safety_li1: "Har bir kinetik harakat uchun operator ruxsati talab qilinadi",
      safety_li2: "Akkumulyativ favqulodda to'xtashlar, apparat va dasturiy ta'minot",
      safety_li3: "Geofensiyalar va tezlik cheklovlari",
      safety_li4: "Keyingi tahlil uchun saqlanadigan to'liq vazifa jurnali",
      os_eyebrow: "Intellectual Robotics OS",
      os_title: "Barcha flot uchun yagona dasturiy ta'minot",
      os_intro: "Har bir Intellectual Robotics platformasida umumiy interfeys va umumiy o'qitish.",
      os_c1_title: "Jonli xarita",
      os_c1_desc: "Platformalar ko'rganlarini bo'lishadi — umumiy operatsion rasmni yangilaydi.",
      os_c2_title: "OTA yangilanishlar",
        os_c3_title: "Himoyalangan",
        os_c4_title: "Ochiq API",
        os_c5_title: "Vazifa tahlili",
        os_c6_title: "Flot muvofiqlashtiruvi",
        comp_eyebrow: "Muvofiqlik",
        comp_title: "Materiallardan tortib standartlargacha qurilgan",
        comp_intro: "Intellectual Robotics platformalari xalqaro xarid dasturlari uchun mo'ljallangan.",
        comp_b1_title: "Xavfsiz ta'minot",
        comp_b2_title: "CMMC 2.0",
        comp_b3_title: "Eksport nazorati",
        comp_b4_title: "MIL-STD-810H",
        tech_cta_title: "Texnik jamoa bilan brifing",
        tech_cta_desc: "Muhandislik va dastur rahbarlari bilan yopiq texnik seansni talab qiling.",
        tech_cta_btn: "Texnik brifingni so'rash"
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