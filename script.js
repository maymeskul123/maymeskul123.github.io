// Текущий язык
let currentLang = 'en';

// Переводы
const translations = {
    en: {
        name: "VITALIY MAYMESKUL",
        title: "Python Backend Developer",
        location: "Odessa, Ukraine",
        download_pdf: "Download PDF",
        tech_stack: "TECH STACK",
        education: "EDUCATION",
        academy: "Odessa National Academy of Communications",
        faculty: "Systems of Radio Communications (2002-2006)",
        certifications: "CERTIFICATIONS",
        cisco: "Cisco: Cybersecurity (2023)",
        harvard: "Harvard CS50's Web Programming",
        languages: "LANGUAGES",
        lang_ukrainian: "Ukrainian (Native)",
        lang_russian: "Russian (Native)",
        lang_english: "English (Pre-Intermediate+)",
        profile: "PROFILE",
        profile_text: "Backend developer with 5+ years of experience specializing in high-load API development using Python/FastAPI. Expert in database design, AI model integration (Langchain, Ollama), and blockchain technologies (Tron). Full-cycle development experience from architecture to deployment on Linux servers.",
        experience: "EXPERIENCE",
        zeus_title: "ZEUS • Python Developer",
        zeus_period: "March 2023 – January 2025",
        zeus_1: "Developed backend services using FastAPI, WebSockets, and asyncio",
        zeus_2: "Implemented AI integration with local LLMs (Ollama) and Langchain",
        zeus_3: "Built financial services on Tron blockchain",
        zeus_4: "Created Telegram bots and WebApps using aiogram",
        spaitech_title: "SPAITECH • Software Developer",
        spaitech_period: "May 2022 – December 2022",
        spaitech_1: "Developed software for ARM devices (Raspberry Pi)",
        spaitech_2: "Worked with SDR equipment via GNU Radio API",
        spaitech_3: "Integrated Telegram Bot API for device management",
        teletec_title: "TELETEC • Software Engineer",
        teletec_period: "September 2019 – June 2021",
        teletec_1: "Developed IoT solutions with WiFi and LoRaWAN interfaces",
        teletec_2: "Created Python backend with socket programming and MQTT protocol",
        teletec_3: "Implemented custom data encoding/decoding",
        projects: "PROJECTS",
        project1_title: "AI Chatbot with Vector Search",
        project1_desc: "Built RAG pipeline with multiple retrieval methods. Implemented vector similarity search using PostgreSQL with PGVector extension. Deployed models on Linux server with CUDA support.",
        project2_title: "Tron Blockchain WebApp",
        project2_desc: "Developed secure crypto wallet management system. Implemented transaction creation, tracking, and state monitoring. Built authentication system with crypto security measures."
    },
    ru: {
        name: "ВИТАЛИЙ МАЙМЕСКУЛ",
        title: "Python Backend Разработчик",
        location: "Одесса, Украина",
        download_pdf: "Скачать PDF",
        tech_stack: "ТЕХНОЛОГИИ",
        education: "ОБРАЗОВАНИЕ",
        academy: "Одесская национальная академия связи",
        faculty: "Системы и комплексы радиосвязи (2002-2006)",
        certifications: "СЕРТИФИКАЦИИ",
        cisco: "Cisco: Кибербезопасность (2023)",
        harvard: "Harvard CS50: Веб-программирование",
        languages: "ЯЗЫКИ",
        lang_ukrainian: "Украинский (Родной)",
        lang_russian: "Русский (Родной)",
        lang_english: "Английский (Pre-Intermediate+)",
        profile: "ПРОФИЛЬ",
        profile_text: "Backend-разработчик с 5+ годами опыта, специализирующийся на создании высоконагруженных API на Python/FastAPI. Эксперт в проектировании баз данных, интеграции AI-моделей (Langchain, Ollama) и блокчейн-технологий (Tron). Опыт полного цикла разработки от архитектуры до деплоя на Linux-серверах.",
        experience: "ОПЫТ РАБОТЫ",
        zeus_title: "ZEUS • Python Разработчик",
        zeus_period: "Март 2023 – Январь 2025",
        zeus_1: "Разработка backend-сервисов на FastAPI, WebSockets и asyncio",
        zeus_2: "Интеграция AI с локальными LLM (Ollama) и Langchain",
        zeus_3: "Разработка финансовых сервисов на блокчейне Tron",
        zeus_4: "Создание Telegram-ботов и WebApp на aiogram",
        spaitech_title: "SPAITECH • Разработчик ПО",
        spaitech_period: "Май 2022 – Декабрь 2022",
        spaitech_1: "Разработка ПО для ARM устройств (Raspberry Pi)",
        spaitech_2: "Работа с SDR оборудованием через GNU Radio API",
        spaitech_3: "Интеграция Telegram Bot API для управления устройствами",
        teletec_title: "TELETEC • Инженер-программист",
        teletec_period: "Сентябрь 2019 – Июнь 2021",
        teletec_1: "Разработка IoT решений с интерфейсами WiFi и LoRaWAN",
        teletec_2: "Создание Python backend с socket программированием и MQTT",
        teletec_3: "Реализация кастомного кодирования/декодирования данных",
        projects: "ПРОЕКТЫ",
        project1_title: "AI Чат-бот с векторным поиском",
        project1_desc: "Построение RAG pipeline с несколькими методами поиска. Реализация векторного поиска с использованием PostgreSQL и расширения PGVector. Деплой моделей на Linux сервере с поддержкой CUDA.",
        project2_title: "Веб-приложение на блокчейне Tron",
        project2_desc: "Разработка системы управления крипто-кошельками. Реализация создания транзакций, отслеживания и мониторинга состояния. Построение системы аутентификации с криптографической безопасностью."
    },
    uk: {
        name: "ВІТАЛІЙ МАЙМЕСКУЛ",
        title: "Python Backend Розробник",
        location: "Одеса, Україна",
        download_pdf: "Завантажити PDF",
        tech_stack: "ТЕХНОЛОГІЇ",
        education: "ОСВІТА",
        academy: "Одеська національна академія зв'язку",
        faculty: "Системи та комплекси радіозв'язку (2002-2006)",
        certifications: "СЕРТИФІКАЦІЇ",
        cisco: "Cisco: Кібербезпека (2023)",
        harvard: "Harvard CS50: Веб-програмування",
        languages: "МОВИ",
        lang_ukrainian: "Українська (Рідна)",
        lang_russian: "Російська (Рідна)",
        lang_english: "Англійська (Pre-Intermediate+)",
        profile: "ПРОФІЛЬ",
        profile_text: "Backend-розробник з 5+ роками досвіду, що спеціалізується на створенні високонавантажених API на Python/FastAPI. Експерт у проектуванні баз даних, інтеграції AI-моделей (Langchain, Ollama) та блокчейн-технологій (Tron). Досвід повного циклу розробки від архітектури до деплою на Linux-серверах.",
        experience: "ДОСВІД РОБОТИ",
        zeus_title: "ZEUS • Python Розробник",
        zeus_period: "Березень 2023 – Січень 2025",
        zeus_1: "Розробка backend-сервісів на FastAPI, WebSockets та asyncio",
        zeus_2: "Інтеграція AI з локальними LLM (Ollama) та Langchain",
        zeus_3: "Розробка фінансових сервісів на блокчейні Tron",
        zeus_4: "Створення Telegram-ботів та WebApp на aiogram",
        spaitech_title: "SPAITECH • Розробник ПЗ",
        spaitech_period: "Травень 2022 – Грудень 2022",
        spaitech_1: "Розробка ПЗ для ARM пристроїв (Raspberry Pi)",
        spaitech_2: "Робота з SDR обладнанням через GNU Radio API",
        spaitech_3: "Інтеграція Telegram Bot API для керування пристроями",
        teletec_title: "TELETEC • Інженер-програміст",
        teletec_period: "Вересень 2019 – Червень 2021",
        teletec_1: "Розробка IoT рішень з інтерфейсами WiFi та LoRaWAN",
        teletec_2: "Створення Python backend з socket програмуванням та MQTT",
        teletec_3: "Реалізація кастомного кодування/декодування даних",
        projects: "ПРОЕКТИ",
        project1_title: "AI Чат-бот з векторним пошуком",
        project1_desc: "Побудова RAG pipeline з кількома методами пошуку. Реалізація векторного пошуку з використанням PostgreSQL та розширення PGVector. Деплой моделей на Linux сервері з підтримкою CUDA.",
        project2_title: "Веб-додаток на блокчейні Tron",
        project2_desc: "Розробка системи управління крипто-гаманцями. Реалізація створення транзакцій, відстеження та моніторингу стану. Побудова системи автентифікації з криптографічною безпекою."
    }
};

// Функция перевода
function translatePage(lang) {
    currentLang = lang;
    const langData = translations[lang];
    
    // Обновляем все элементы с data-key
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });
    
    // Обновляем активную кнопку языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Сохраняем выбор языка в localStorage
    localStorage.setItem('preferredLang', lang);
}

// Функция генерации PDF
function generatePDF() {
    const element = document.getElementById('resume-content');
    const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: `Vitaliy_Maymeskul_Resume_${currentLang.toUpperCase()}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        },
        jsPDF: { 
            unit: 'in', 
            format: 'a4', 
            orientation: 'portrait' 
        }
    };

    // Временно скрываем кнопки языка
    const langSwitcher = document.querySelector('.language-switcher');
    const originalDisplay = langSwitcher.style.display;
    langSwitcher.style.display = 'none';

    html2pdf().set(opt).from(element).save().then(() => {
        // Восстанавливаем кнопки
        langSwitcher.style.display = originalDisplay;
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Устанавливаем язык из localStorage или браузера
    const savedLang = localStorage.getItem('preferredLang');
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = savedLang || (['ru', 'uk'].includes(browserLang) ? browserLang : 'en');
    
    translatePage(defaultLang);
    
    // Обработчики кнопок языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            translatePage(lang);
        });
    });
    
    // Обработчик кнопки PDF
    document.getElementById('pdfBtn').addEventListener('click', generatePDF);
    
    // Анимация при загрузке
    document.querySelector('.resume').style.opacity = '0';
    document.querySelector('.resume').style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        document.querySelector('.resume').style.transition = 'all 0.5s ease';
        document.querySelector('.resume').style.opacity = '1';
        document.querySelector('.resume').style.transform = 'translateY(0)';
    }, 100);
});