// --- ПЕРЕВОДЫ (EN/RU/UA) ---
const translations = {
    en: {
        name: "VITALIY MAYMESKUL",
        title: "Python Backend Developer",
        location: "Odessa, Ukraine",
        download_pdf: "PDF",
        tech_stack: "TECH STACK",
        education: "EDUCATION",
        academy: "Odessa National Academy of Communications",
        faculty: "Systems of Radio Communications (2002-2006)",
        certifications: "CERTIFICATIONS",
        cisco: "Cisco: Cybersecurity (2023)",
        harvard: "Harvard CS50's Web Programming",
        languages: "LANGUAGES",
        lang_ukrainian: "Ukrainian",
        lang_russian: "Russian",
        lang_english: "English",
        lang_level_native: "(Native)",
        lang_level_pre_intermediate: "(Pre-Intermediate+)",
        profile: "PROFILE",
        profile_text: "Backend developer with 5+ years of experience specializing in high‑load API development using Python/FastAPI. Database design, AI model integration (Langchain, Ollama), Tron blockchain. Full‑cycle development from architecture to Linux deployment.",
        experience: "EXPERIENCE",
        zeus_title: "ZEUS · Python Developer",
        zeus_period: "March 2023 – January 2025",
        zeus_1: "Backend on FastAPI + WebSockets + asyncio",
        zeus_2: "AI integration with Ollama & Langchain",
        zeus_3: "Financial services on Tron blockchain",
        zeus_4: "Telegram bots & WebApps (aiogram)",
        spaitech_title: "SPAITECH · Software Developer",
        spaitech_period: "May 2022 – December 2022",
        spaitech_1: "ARM/Raspberry Pi software",
        spaitech_2: "SDR via GNU Radio API",
        spaitech_3: "Telegram Bot API for device management",
        teletec_title: "TELETEC · Software Engineer",
        teletec_period: "September 2019 – June 2021",
        teletec_1: "IoT solutions (WiFi/LoRaWAN)",
        teletec_2: "Backend with sockets + MQTT",
        teletec_3: "Custom data encoding/decoding",
        projects: "PROJECTS",
        project1_title: "AI Chatbot with Vector Search",
        project1_desc: "RAG pipeline with multiple retrieval methods. Vector similarity search using PostgreSQL/PGVector. Deployed on Linux server with CUDA.",
        project2_title: "Tron Blockchain WebApp",
        project2_desc: "Secure crypto wallet management, transaction creation/tracking, authentication with crypto security."
    },
    ru: {
        name: "ВИТАЛИЙ МАЙМЕСКУЛ",
        title: "Python Backend Разработчик",
        location: "Одесса, Украина",
        download_pdf: "PDF",
        tech_stack: "ТЕХНОЛОГИИ",
        education: "ОБРАЗОВАНИЕ",
        academy: "Одесская национальная академия связи",
        faculty: "Системы радиосвязи (2002-2006)",
        certifications: "СЕРТИФИКАТЫ",
        cisco: "Cisco: Кибербезопасность (2023)",
        harvard: "Harvard CS50's Web Programming",
        languages: "ЯЗЫКИ",
        lang_ukrainian: "Украинский",
        lang_russian: "Русский",
        lang_english: "Английский",
        lang_level_native: "(Родной)",
        lang_level_pre_intermediate: "(Pre-Intermediate+)",
        profile: "О СЕБЕ",
        profile_text: "Backend разработчик с 5+ годами опыта в разработке высоконагруженных API на Python/FastAPI. Проектирование БД, интеграция AI моделей (Langchain, Ollama), блокчейн Tron. Полный цикл разработки от архитектуры до деплоя на Linux.",
        experience: "ОПЫТ",
        zeus_title: "ZEUS · Python Разработчик",
        zeus_period: "Март 2023 – Январь 2025",
        zeus_1: "Бэкенд на FastAPI + WebSockets + asyncio",
        zeus_2: "Интеграция AI с Ollama и Langchain",
        zeus_3: "Финансовые сервисы на блокчейне Tron",
        zeus_4: "Telegram боты и WebApps (aiogram)",
        spaitech_title: "SPAITECH · Разработчик ПО",
        spaitech_period: "Май 2022 – Декабрь 2022",
        spaitech_1: "ПО для ARM/Raspberry Pi",
        spaitech_2: "SDR через GNU Radio API",
        spaitech_3: "Telegram Bot API для управления устройствами",
        teletec_title: "TELETEC · Инженер ПО",
        teletec_period: "Сентябрь 2019 – Июнь 2021",
        teletec_1: "IoT решения (WiFi/LoRaWAN)",
        teletec_2: "Бэкенд на сокетах + MQTT",
        teletec_3: "Пользовательское кодирование данных",
        projects: "ПРОЕКТЫ",
        project1_title: "AI Чат-бот с векторным поиском",
        project1_desc: "RAG пайплайн с несколькими методами поиска. Векторный поиск через PostgreSQL/PGVector. Деплой на Linux с CUDA.",
        project2_title: "Tron Blockchain WebApp",
        project2_desc: "Безопасное управление крипто-кошельками, создание/отслеживание транзакций, аутентификация."
    },
    uk: {
        name: "ВІТАЛІЙ МАЙМЕСКУЛ",
        title: "Python Backend Розробник",
        location: "Одеса, Україна",
        download_pdf: "PDF",
        tech_stack: "ТЕХНОЛОГІЇ",
        education: "ОСВІТА",
        academy: "Одеська національна академія зв'язку",
        faculty: "Системи радіозв'язку (2002-2006)",
        certifications: "СЕРТИФІКАТИ",
        cisco: "Cisco: Кібербезпека (2023)",
        harvard: "Harvard CS50's Web Programming",
        languages: "МОВИ",
        lang_ukrainian: "Українська",
        lang_russian: "Російська",
        lang_english: "Англійська",
        lang_level_native: "(Рідна)",
        lang_level_pre_intermediate: "(Pre-Intermediate+)",
        profile: "ПРО МЕНЕ",
        profile_text: "Backend розробник з 5+ роками досвіду у створенні високонавантажених API на Python/FastAPI. Проєктування БД, інтеграція AI моделей (Langchain, Ollama), блокчейн Tron. Повний цикл розробки від архітектури до деплою на Linux.",
        experience: "ДОСВІД",
        zeus_title: "ZEUS · Python Розробник",
        zeus_period: "Березень 2023 – Січень 2025",
        zeus_1: "Бекенд на FastAPI + WebSockets + asyncio",
        zeus_2: "Інтеграція AI з Ollama та Langchain",
        zeus_3: "Фінансові сервіси на блокчейні Tron",
        zeus_4: "Telegram боти та WebApps (aiogram)",
        spaitech_title: "SPAITECH · Розробник ПЗ",
        spaitech_period: "Травень 2022 – Грудень 2022",
        spaitech_1: "ПЗ для ARM/Raspberry Pi",
        spaitech_2: "SDR через GNU Radio API",
        spaitech_3: "Telegram Bot API для керування пристроями",
        teletec_title: "TELETEC · Інженер ПЗ",
        teletec_period: "Вересень 2019 – Червень 2021",
        teletec_1: "IoT рішення (WiFi/LoRaWAN)",
        teletec_2: "Бекенд на сокетах + MQTT",
        teletec_3: "Користувацьке кодування даних",
        projects: "ПРОЄКТИ",
        project1_title: "AI Чат-бот з векторним пошуком",
        project1_desc: "RAG пайплайн з кількома методами пошуку. Векторний пошук через PostgreSQL/PGVector. Деплой на Linux з CUDA.",
        project2_title: "Tron Blockchain WebApp",
        project2_desc: "Безпечне керування крипто-гаманцями, створення/відстеження транзакцій, аутентифікація."
    }
};

let currentLang = 'en';

// Google Apps Script visit logger
// 1) Разверните Apps Script Web App
// 2) Замените YOUR_SCRIPT_ID на ваш Web App URL
const GAS_VISIT_LOGGER_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
const VISIT_LOGGER_API_IP = 'https://api.ipify.org?format=json';

async function getPublicIp() {
    try {
        const response = await fetch(VISIT_LOGGER_API_IP, { cache: 'no-cache' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        return data.ip || 'unknown';
    } catch (error) {
        console.warn('Visit logger IP lookup failed:', error);
        return 'unknown';
    }
}

function sendVisitLog(payload) {
    if (!GAS_VISIT_LOGGER_URL || GAS_VISIT_LOGGER_URL.includes('YOUR_SCRIPT_ID')) {
        return Promise.resolve();
    }

    const body = JSON.stringify(payload);

    if (navigator.sendBeacon) {
        try {
            const blob = new Blob([body], { type: 'application/json' });
            const sent = navigator.sendBeacon(GAS_VISIT_LOGGER_URL, blob);
            if (sent) return Promise.resolve();
        } catch (error) {
            console.warn('SendBeacon failed, falling back to fetch:', error);
        }
    }

    return fetch(GAS_VISIT_LOGGER_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body
    }).catch(error => console.warn('Visit logger POST failed:', error));
}

async function logVisit() {
    if (!GAS_VISIT_LOGGER_URL || GAS_VISIT_LOGGER_URL.includes('YOUR_SCRIPT_ID')) {
        console.info('Google Apps Script visit logger is disabled or not configured.');
        return;
    }

    const ip = await getPublicIp();
    const payload = {
        action: 'visit',
        ip,
        date: new Date().toISOString()
    };

    return sendVisitLog(payload);
}

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// --- ИГРОВАЯ МЕХАНИКА ---
let score = 0;
let ammo = 5;
let isReloading = false;
let canShoot = true;
let targetsDefeated = 0;

const scoreEl = document.getElementById('scoreValue');
const ammoEl = document.getElementById('ammoValue');
const targetsEl = document.getElementById('targetsValue');
const reloadBar = document.getElementById('reloadBar');
const reloadProgress = document.getElementById('reloadProgress');
const hitMsg = document.getElementById('hitMessage');
const cursorDiv = document.getElementById('customCursor');

function updateUI() {
    scoreEl.textContent = score;
    ammoEl.textContent = ammo;
    targetsEl.textContent = targetsDefeated;
    if (ammo <= 0 && !isReloading) {
        ammoEl.classList.add('warning');
    } else {
        ammoEl.classList.remove('warning');
    }
}

function showMessage(text, isBonus = false) {
    hitMsg.textContent = isBonus ? '✨ +1 AMMO! ✨' : text;
    hitMsg.style.opacity = '1';
    setTimeout(() => hitMsg.style.opacity = '0', 500);
}

function addScore(points = 1) {
    score += points;
    updateUI();
}

function addAmmo(amount = 1) {
    ammo += amount;
    updateUI();
    showMessage('', true);
}

function addTargetDefeated() {
    targetsDefeated++;
    updateUI();
}

function startReload() {
    if (isReloading) return;
    isReloading = true;
    canShoot = false;
    cursorDiv.classList.remove('ready');
    reloadBar.style.display = 'block';
    let progress = 0;
    const reloadDuration = 2000;
    const startTime = Date.now();
    
    const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        progress = Math.min(100, (elapsed / reloadDuration) * 100);
        reloadProgress.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            ammo = 5;
            isReloading = false;
            canShoot = true;
            cursorDiv.classList.add('ready');
            reloadBar.style.display = 'none';
            updateUI();
            showMessage('🔫 RELOADED!', false);
        }
    }, 50);
}

function shoot() {
    if (!canShoot || isReloading) return false;
    if (ammo <= 0) {
        startReload();
        return false;
    }
    return true;
}

function consumeAmmo() {
    ammo--;
    updateUI();
    if (ammo <= 0) {
        canShoot = false;
        cursorDiv.classList.remove('ready');
        startReload();
    }
    return true;
}

function showHitEffect(x, y) {
    const effect = document.createElement('div');
    effect.style.position = 'fixed';
    effect.style.left = x + 'px';
    effect.style.top = y + 'px';
    effect.style.width = '30px';
    effect.style.height = '30px';
    effect.style.border = '3px solid #ff3366';
    effect.style.borderRadius = '50%';
    effect.style.transform = 'translate(-50%, -50%)';
    effect.style.pointerEvents = 'none';
    effect.style.zIndex = '9998';
    effect.style.animation = 'hitPulse 0.3s ease-out forwards';
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 300);
}

// --- Three.js ---
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.background = null;
scene.fog = new THREE.FogExp2(0x03080f, 0.006);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 12);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
container.appendChild(renderer.domElement);

const orbitGroup = new THREE.Group();
scene.add(orbitGroup);

const geometry = new THREE.TorusKnotGeometry(1.2, 0.28, 200, 36, 3, 4);
const material = new THREE.MeshStandardMaterial({
    color: 0x33ddbb,
    emissive: 0x22aa88,
    emissiveIntensity: 1.2,
    metalness: 0.8,
    roughness: 0.3
});
const targetFigure = new THREE.Mesh(geometry, material);
orbitGroup.add(targetFigure);

const innerGeo = new THREE.TorusKnotGeometry(0.85, 0.16, 160, 32, 3, 4);
const innerMat = new THREE.MeshStandardMaterial({
    color: 0x88ffdd,
    emissive: 0x44ffaa,
    emissiveIntensity: 0.8,
    wireframe: true
});
const innerKnot = new THREE.Mesh(innerGeo, innerMat);
orbitGroup.add(innerKnot);

let orbitAngle = 0;
const orbitRadiusX = 5.5;
const orbitRadiusZ = 4.2;
let orbitSpeed = 0.012;

const particleCount = 2500;
const particlesGeo = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
    positions[i*3] = (Math.random() - 0.5) * 50;
    positions[i*3+1] = (Math.random() - 0.5) * 35;
    positions[i*3+2] = (Math.random() - 0.5) * 45 - 15;
}
particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particleMat = new THREE.PointsMaterial({ color: 0x88ffdd, size: 0.05, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending });
const particles = new THREE.Points(particlesGeo, particleMat);
scene.add(particles);

const gridHelper = new THREE.GridHelper(35, 30, 0x44ddbb, 0x226666);
gridHelper.position.y = -3.2;
gridHelper.material.transparent = true;
gridHelper.material.opacity = 0.25;
scene.add(gridHelper);

const ambient = new THREE.AmbientLight(0x113344);
scene.add(ambient);
const light1 = new THREE.PointLight(0x77ffcc, 0.9);
light1.position.set(3, 2, 5);
scene.add(light1);
const light2 = new THREE.PointLight(0xff88aa, 0.6);
light2.position.set(-2, 1, -4);
scene.add(light2);

let hitCooldown = false;

function checkHitOnTarget(mouseX, mouseY) {
    if (!canShoot || isReloading || ammo <= 0) return false;
    
    const worldPos = orbitGroup.position.clone();
    worldPos.project(camera);
    const screenX = (worldPos.x * 0.5 + 0.5) * window.innerWidth;
    const screenY = (-worldPos.y * 0.5 + 0.5) * window.innerHeight;
    
    const dist = Math.hypot(mouseX - screenX, mouseY - screenY);
    
    if (dist < 65) {
        if (!hitCooldown) {
            hitCooldown = true;
            consumeAmmo();
            addScore();
            addTargetDefeated();
            showHitEffect(mouseX, mouseY);
            showMessage('💥 HIT! +1 💥');
            
            material.emissiveIntensity = 2.2;
            innerMat.emissiveIntensity = 1.5;
            setTimeout(() => {
                material.emissiveIntensity = 1.2;
                innerMat.emissiveIntensity = 0.8;
            }, 150);
            
            setTimeout(() => { hitCooldown = false; }, 200);
            return true;
        }
    }
    return false;
}

// --- Существа-воры слов ---
const creatures = [];
let creatureId = 0;

function createCreature(isBonus = false) {
    const words = ['PYTHON', 'FASTAPI', 'CODE', 'DATA', 'AI', 'CLOUD', 'API', 'LOGIC'];
    const word = words[Math.floor(Math.random() * words.length)];
    
    const creature = document.createElement('div');
    creature.className = 'creature';
    creature.textContent = word;
    creature.style.position = 'fixed';
    creature.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    creature.style.top = Math.random() * (window.innerHeight - 150) + 'px';
    creature.style.zIndex = '9997';
    creature.style.background = isBonus ? 'rgba(255, 200, 50, 0.9)' : 'rgba(0, 200, 180, 0.85)';
    creature.style.color = '#03080f';
    creature.style.padding = '6px 12px';
    creature.style.borderRadius = '30px';
    creature.style.fontWeight = 'bold';
    creature.style.fontSize = '14px';
    creature.style.fontFamily = 'JetBrains Mono, monospace';
    creature.style.cursor = 'pointer';
    creature.style.border = isBonus ? '2px solid #ffcc44' : '1px solid #0ff';
    creature.style.boxShadow = '0 0 15px rgba(0,255,200,0.5)';
    creature.style.backdropFilter = 'blur(4px)';
    creature.style.transition = 'all 0.2s';
    
    creature.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!canShoot || isReloading || ammo <= 0) return;
        consumeAmmo();
        addScore(isBonus ? 2 : 1);
        if (isBonus) addAmmo(1);
        addTargetDefeated();
        showHitEffect(e.clientX, e.clientY);
        showMessage(isBonus ? '✨ BONUS! +2 SCORE, +1 AMMO ✨' : '💥 WORD STOLEN! +1 💥');
        creature.remove();
        const index = creatures.findIndex(c => c.element === creature);
        if (index !== -1) creatures.splice(index, 1);
    });
    
    document.body.appendChild(creature);
    creatures.push({ 
        id: creatureId++, 
        element: creature, 
        isBonus, 
        x: parseFloat(creature.style.left), 
        y: parseFloat(creature.style.top), 
        vx: (Math.random() - 0.5) * 1.5, 
        vy: (Math.random() - 0.5) * 1.5 
    });
    
    setTimeout(() => {
        if (creature.parentNode) creature.remove();
        const idx = creatures.findIndex(c => c.element === creature);
        if (idx !== -1) creatures.splice(idx, 1);
    }, 8000);
}

setInterval(() => {
    if (Math.random() < 0.4) {
        createCreature(Math.random() < 0.2);
    }
}, 3000);

function updateCreatures() {
    for (let i = 0; i < creatures.length; i++) {
        const c = creatures[i];
        c.x += c.vx;
        c.y += c.vy;
        if (c.x < 0) { c.x = 0; c.vx = -c.vx; }
        if (c.x > window.innerWidth - 100) { c.x = window.innerWidth - 100; c.vx = -c.vx; }
        if (c.y < 50) { c.y = 50; c.vy = -c.vy; }
        if (c.y > window.innerHeight - 80) { c.y = window.innerHeight - 80; c.vy = -c.vy; }
        c.element.style.left = c.x + 'px';
        c.element.style.top = c.y + 'px';
    }
}

// --- Анимация ---
let time = 0;

function animate() {
    requestAnimationFrame(animate);
    time += 0.016;
    
    orbitAngle += orbitSpeed;
    const x = Math.cos(orbitAngle) * orbitRadiusX;
    const z = Math.sin(orbitAngle) * orbitRadiusZ;
    const y = Math.sin(orbitAngle * 1.5) * 1.2;
    
    orbitGroup.position.set(x, y, z);
    
    targetFigure.rotation.x = Math.sin(time * 0.8) * 0.4;
    targetFigure.rotation.y = time * 0.6;
    targetFigure.rotation.z = Math.cos(time * 0.7) * 0.3;
    innerKnot.rotation.x = Math.sin(time * 1.0) * 0.3;
    innerKnot.rotation.y = time * 0.5;
    
    const scale = 0.8 + (z + 5) / 12;
    orbitGroup.scale.setScalar(Math.max(0.6, Math.min(1.3, scale)));
    
    particles.rotation.y = time * 0.02;
    
    camera.position.x += (0 - camera.position.x) * 0.02;
    camera.position.y += (0 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
    
    renderer.render(scene, camera);
    updateCreatures();
}

animate();

// --- События ---
window.addEventListener('click', (e) => {
    // Проверяем, что клик не по кнопке UI
    if (e.target.closest('.lang-btn') || e.target.closest('#pdfBtn')) {
        return;
    }
    if (shoot()) {
        const hit = checkHitOnTarget(e.clientX, e.clientY);
        if (!hit) {
            consumeAmmo();
            showMessage('❌ MISS! -1 ammo', false);
        }
    }
});

const cursor = document.getElementById('customCursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.body.style.cursor = 'none';

if (window.innerWidth < 800) {
    document.body.style.cursor = 'auto';
    if (cursor) cursor.style.display = 'none';
}

setInterval(() => {
    if (ammo > 0 && !isReloading) {
        canShoot = true;
        cursorDiv.classList.add('ready');
    }
}, 100);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

updateUI();
cursorDiv.classList.add('ready');
canShoot = true;

// --- PDF кнопка ---
document.getElementById('pdfBtn').addEventListener('click', () => {
    const element = document.getElementById('resume-content');
    html2pdf().set({ 
        margin: 0.5, 
        filename: `Vitaliy_Maymeskul_${currentLang}.pdf`, 
        image: { type: 'jpeg', quality: 0.98 }, 
        html2canvas: { scale: 2 }, 
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } 
    }).from(element).save();
});

// --- Переключение языков ---
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Устанавливаем английский по умолчанию
setLanguage('en');

// Отправка посещения на Google Apps Script при загрузке страницы
window.addEventListener('load', () => {
    logVisit();
});