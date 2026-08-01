// 🌐 GLOBAL DİL BAZASI
var translations = {
    az: {
        title: "CEO Multi-Tool Enterprise v13.0",
        subtitle: "Premium Alətlər, Canlı Bot Rəqabəti və Qlobal Dil Seçimi",
        t1Title: "⚔️ Alət 1: Premium Nickname Generatoru",
        t1Desc: "Adınızı yazın və peşəkar oyunçu ləqəbləri yaradın:",
        t1Btn: "Havalı Adlar Yarat",
        t2Title: "🎮 Alət 2: CEO Cyber Clicker (Mini-Oyun)",
        t2Desc: "Xal yığın, mağazadan premium statuslar alın və canlı botları keçin!",
        t2Score: "Kiber Xallarınız:",
        up1: "🚀 Super Klik (+2)",
        up2: "🤖 Avto-Klik (1/sn)",
        cost: "Qiymət:",
        pshop: "🛍️ Premium Mağaza v2.0",
        p1Title: "🔴 Neon Qırmızı Ad",
        p2Title: "👑 Qızılı CEO Statusu",
        wheelTitle: "🎰 CEO Şans Çarxı",
        wheelDesc: "Bəxtini sına: Böyük Xal qazan və ya Risk et!",
        wheelReady: "🎰 Çarx Hazırdır!",
        leader: "🏆 Top 5 Kiber Oyunçu (Canlı)",
        t3Title: "🔒 Alət 3: Qırılmaz Güvənli Kod Generatoru",
        t3Desc: "Hesablarınız üçün 100% qorunan təhlükəsiz gizli kod yaradın:",
        t3Btn: "Güvənli Kod Yarat",
        noFunds: "Balans Çatmır",
        buy: "Əldə et",
        alertNo: "Xalınız çatmır!",
        alertGen: "Zəhmət olmasa bir ad daxil edin!",
        copied: "Kopyalandı: ",
        results: "Nəticələr burada görünəcək...",
        passResults: "Kod burada görünəcək..."
    },
    en: {
        title: "CEO Multi-Tool Enterprise v13.0",
        subtitle: "Premium Tools, Live Bot Competition & Global Language Selection",
        t1Title: "⚔️ Tool 1: Premium Nickname Generator",
        t1Desc: "Enter your name and generate professional gamer nicknames:",
        t1Btn: "Create Cool Names",
        t2Title: "🎮 Tool 2: CEO Cyber Clicker (Mini-Game)",
        t2Desc: "Collect points, buy premium statuses from the shop and beat live bots!",
        t2Score: "Your Cyber Points:",
        up1: "🚀 Super Click (+2)",
        up2: "🤖 Auto-Click (1/sec)",
        cost: "Price:",
        pshop: "🛍️ Premium Shop v2.0",
        p1Title: "🔴 Neon Red Name",
        p2Title: "👑 Golden CEO Status",
        wheelTitle: "🎰 CEO Lucky Wheel",
        wheelDesc: "Test your luck: Win Big Points or Risk it!",
        wheelReady: "🎰 Wheel is Ready!",
        leader: "🏆 Top 5 Cyber Players (Live)",
        t3Title: "🔒 Tool 3: Unbreakable Secure Password Generator",
        t3Desc: "Create 100% protected secure secret codes for your accounts:",
        t3Btn: "Generate Secure Code",
        noFunds: "Insufficient Points",
        buy: "Purchase",
        alertNo: "Not enough points!",
        alertGen: "Please enter a name!",
        copied: "Copied: ",
        results: "Results will appear here...",
        passResults: "Code will appear here..."
    },
    ru: {
        title: "CEO Multi-Tool Enterprise v13.0",
        subtitle: "Премиум Инструменты, Живая Конкуренция Ботов и Глобальный Выбор Языка",
        t1Title: "⚔️ Инструмент 1: Премиум Генератор Никнеймов",
        t1Desc: "Введите свое имя и создайте профессиональные игровые ники:",
        t1Btn: "Создать Крутые Имена",
        t2Title: "🎮 Инструмент 2: CEO Cyber Clicker (Мини-Игра)",
        t2Desc: "Копите очки, покупайте премиум-статусы в магазине и обгоняйте живых ботов!",
        t2Score: "Ваши Кибер Очки:",
        up1: "🚀 Премиум Клик (+2)",
        up2: "🤖 Авто-Клик (1/сек)",
        cost: "Цена:",
        pshop: "🛍️ Премиум Магазин v2.0",
        p1Title: "🔴 Неоновый Красный Ник",
        p2Title: "👑 Золотой Статус CEO",
        wheelTitle: "🎰 Колесо Удачи CEO",
        wheelDesc: "Испытай удачу: Выиграй много очков или рискуй!",
        wheelReady: "🎰 Колесо Готово!",
        leader: "🏆 Топ-5 Игроков (Живой)",
        t3Title: "🔒 Инструмент 3: Несокрушимый Генератор Паролей",
        t3Desc: "Создайте 100% защищенный секретный код для ваших аккаунтов:",
        t3Btn: "Создать Безопасный Код",
        noFunds: "Недостаточно Очков",
        buy: "Купить",
        alertNo: "Недостаточно очков!",
        alertGen: "Пожалуйста, введите имя!",
        copied: "Скопировано: ",
        results: "Результаты появятся здесь...",
        passResults: "Код появится здесь..."
    }
};

var currentLang = "az";

// 🎮 OYUN DƏYİŞƏNLƏRİ
var score = 0;
var clickPower = 1;
var autoClickers = 0;
var u1Cost = 30;
var u2Cost = 100;
var isSpinning = false;
var userColorStatus = "normal"; // normal, red, gold

// 🤖 CANLI BOT DATA BAZASI
var leaders = [
    { name: "⚡ Kiber_Aslan", score: 250, isBot: true },
    { name: "🥷 Gizli_Pro", score: 180, isBot: true },
    { name: "🤖 Bot_Kliker", score: 45, isBot: true },
    { name: "💥 Hacker_007", score: 20, isBot: true },
    { name: "👑 Sənin_Adın (CEO)", score: 0, isBot: false }
];

// 🌐 TƏHLÜKƏSİZ DİL FUNKSİYASI
window.changeLanguage = function(lang) {
    currentLang = lang;
    var btns = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
    var activeLangBtn = document.getElementById("lang-" + lang);
    if (activeLangBtn) activeLangBtn.classList.add("active");

    var t = translations[lang];
    if (!t) return;

    if (document.getElementById("main-title")) document.getElementById("main-title").innerText = t.title;
    if (document.getElementById("main-subtitle")) document.getElementById("main-subtitle").innerText = t.subtitle;
    if (document.getElementById("t1-title")) document.getElementById("t1-title").innerText = t.t1Title;
    if (document.getElementById("t1-desc")) document.getElementById("t1-desc").innerText = t.t1Desc;
    if (document.getElementById("t1-btn")) document.getElementById("t1-btn").innerText = t.t1Btn;
    if (document.getElementById("t2-title")) document.getElementById("t2-title").innerText = t.t2Title;
    if (document.getElementById("t2-desc")) document.getElementById("t2-desc").innerText = t.t2Desc;
    if (document.getElementById("t2-score-label")) document.getElementById("t2-score-label").innerText = t.t2Score;
    if (document.getElementById("up1-title")) document.getElementById("up1-title").innerText = t.up1;
    if (document.getElementById("up2-title")) document.getElementById("up2-title").innerText = t.up2;
    if (document.getElementById("up1-cost-label")) document.getElementById("up1-cost-label").innerText = t.cost;
    if (document.getElementById("up2-cost-label")) document.getElementById("up2-cost-label").innerText = t.cost;
    if (document.getElementById("p1-cost-label")) document.getElementById("p1-cost-label").innerText = t.cost;
    if (document.getElementById("p2-cost-label")) document.getElementById("p2-cost-label").innerText = t.cost;
    if (document.getElementById("p-shop-title")) document.getElementById("p-shop-title").innerText = t.pshop;
    if (document.getElementById("wheel-title")) document.getElementById("wheel-title").innerText = t.wheelTitle;
    if (document.getElementById("wheel-desc")) document.getElementById("wheel-desc").innerText = t.wheelDesc;
    if (document.getElementById("leader-title")) document.getElementById("leader-title").innerText = t.leader;
    if (document.getElementById("t3-title")) document.getElementById("t3-title").innerText = t.t3Title;
    if (document.getElementById("t3-desc")) document.getElementById("t3-desc").innerText = t.t3Desc;
    if (document.getElementById("t3-btn")) document.getElementById("t3-btn").innerText = t.t3Btn;

    colorCheck();
    updateLeaderboard();
};

// 🎛️ 100% TAM GÜVƏNLİ ALƏT TAB FUNKSİYASI (TIXAC ARADAN QALDIRILDI)
window.switchTab = function(tabNum) {
    var tabs = document.querySelectorAll(".tab-btn");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    
    var contents = document.querySelectorAll(".tab-content");
    for (var j = 0; j < contents.length; j++) {
        contents[j].classList.remove("active");
    }

    var activeTab = document.getElementById("tab" + tabNum + "-btn");
    var activeContent = document.getElementById("tab" + tabNum + "-content");
    
    if (activeTab) activeTab.classList.add("active");
    if (activeContent) activeContent.classList.add("active");
};

function updateLeaderboard() {
    for (var i = 0; i < leaders.length; i++) {
        if (!leaders[i].isBot) {
            leaders[i].score = score;
            if (userColorStatus === "red") {
                leaders[i].name = "<span class='name-red'>👑 Sənin_Adın (CEO)</span>";
            } else if (userColorStatus === "gold") {
                leaders[i].name = "<span class='name-gold'>👑 Sənin_Adın (CEO)</span>";
            } else {
                leaders[i].name = "👑 Sənin_Adın (CEO)";
            }
        }
    }

    var myCopy = [].concat(leaders);
    myCopy.sort((a, b) => b.score - a.score);

    var html = "";
    for (var i = 0; i < myCopy.length; i++) {
        var isUser = !myCopy[i].isBot;
        var styleStr = isUser ? "font-weight:bold;" : "";
        var nameToShow = myCopy[i].name;
        
        if (isUser && userColorStatus === "normal") {
            styleStr += "color:#ffdd00;";
        }

        html += "<div class='leader-row' style='" + styleStr + "'><span>" + (i + 1) + ". " + nameToShow + "</span><b>" + myCopy[i].score + " Xal</b></div>";
    }
    var target = document.getElementById("leaderboardList");
    if (target) { target.innerHTML = html; }
}

// 🤖 BOTLARIN CANLI SÜRƏTLİ ARTMA MEXANİZMİ
setInterval(function() {
    for (var i = 0; i < leaders.length; i++) {
        if (leaders[i].isBot) {
            leaders[i].score += Math.floor(Math.random() * 3) + 1;
        }
    }
    updateLeaderboard();
}, 2500);

window.clickButton = function() {
    score += clickPower;
    var disp = document.getElementById("scoreDisplay");
    if (disp) disp.innerText = score;
    colorCheck();
    updateLeaderboard();
};

window.colorCheck = function() {
    var t = translations[currentLang];
    if (!t) return;
    
