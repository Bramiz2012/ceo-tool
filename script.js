// 🎮 GLOBAL OYUN DƏYİŞƏNLƏRİ (0% DÖVRƏSİZ STRUKTUR)
window.score = 0;
window.clickPower = 1;
window.autoClickers = 0;
window.u1Cost = 30;
window.u2Cost = 100;
window.isSpinning = false;
window.countdownInterval = null;

// 🟢 KLİKLƏMƏ FUNKSİYASI
window.clickButton = function() {
    window.score += window.clickPower;
    if(document.getElementById("scoreDisplay")) { document.getElementById("scoreDisplay").innerText = window.score; }
    if(document.getElementById("boardScoreDisplay")) { document.getElementById("boardScoreDisplay").innerText = window.score; }
    window.colorCheck();
};

// 🛍️ MAĞAZA BALANS KONTROLU
window.colorCheck = function() {
    var b1 = document.getElementById("up1Btn");
    if(b1) {
        if (window.score >= window.u1Cost) { b1.className = "shop-btn btn-green"; b1.innerText = "Əldə et"; }
        else { b1.className = "shop-btn btn-red"; b1.innerText = "Balans Çatmır"; }
    }
    var b2 = document.getElementById("up2Btn");
    if(b2) {
        if (window.score >= window.u2Cost) { b2.className = "shop-btn btn-green"; b2.innerText = "Əldə et"; }
        else { b2.className = "shop-btn btn-red"; b2.innerText = "Balans Çatmır"; }
    }
};

// 🚀 SUPER KLİK MAĞAZA FUNKSİYASI
window.buyUpgrade1 = function() {
    if (window.score >= window.u1Cost) {
        window.score -= window.u1Cost; window.clickPower += 1; window.u1Cost = Math.floor(window.u1Cost * 1.5);
        if(document.getElementById("upgrade1Cost")) document.getElementById("upgrade1Cost").innerText = window.u1Cost;
        if(document.getElementById("scoreDisplay")) document.getElementById("scoreDisplay").innerText = window.score;
        if(document.getElementById("boardScoreDisplay")) document.getElementById("boardScoreDisplay").innerText = window.score;
        window.colorCheck();
    } else { alert("Xalınız çatmır!"); }
};

// 🤖 AVTO-KLİK MAĞAZA FUNKSİYASI
window.buyUpgrade2 = function() {
    if (window.score >= window.u2Cost) {
        window.score -= window.u2Cost; window.autoClickers += 1; window.u2Cost = Math.floor(window.u2Cost * 1.6);
        if(document.getElementById("upgrade2Cost")) document.getElementById("upgrade2Cost").innerText = window.u2Cost;
        if(document.getElementById("scoreDisplay")) document.getElementById("scoreDisplay").innerText = window.score;
        if(document.getElementById("boardScoreDisplay")) document.getElementById("boardScoreDisplay").innerText = window.score;
        window.colorCheck();
    } else { alert("Xalınız çatmır!"); }
};

// 🎰 CEO ŞANS ÇARXI FUNKSİYASI
window.spinWheel = function() {
    if(window.isSpinning) return; window.isSpinning = true;
    var sBtn = document.getElementById("spinBtn"); if(sBtn) sBtn.disabled = true;
    var fakes = ["🔄 FIRLANIR...", "💎 CEKPOT?!", "❌ RİSK...", "🎰 ŞANSINIZ..."]; var count = 0;
    var anim = setInterval(function() { var wStat = document.getElementById("wheelStatus"); if(wStat) wStat.innerText = fakes[count % fakes.length]; count++; }, 250);
    setTimeout(function() {
        clearInterval(anim); var rand = Math.random(); var statusText = "";
        if (rand < 0.3) { window.score += 30; statusText = "🟢 UDUŞ: +30 Xal!"; }
        else if (rand < 0.5) { window.score += 100; statusText = "🟡 CEKPOT: +100 Xal! 🔥"; }
        else if (rand < 0.75) { window.score = Math.max(0, window.score - 20); statusText = "🔴 RİSK: -20 Xal getdi!"; }
        else { statusText = "💀 ŞANS: Boş çıxdı!"; }
        if(document.getElementById("wheelStatus")) document.getElementById("wheelStatus").innerText = statusText;
        if(document.getElementById("scoreDisplay")) document.getElementById("scoreDisplay").innerText = window.score;
        if(document.getElementById("boardScoreDisplay")) document.getElementById("boardScoreDisplay").innerText = window.score;
        window.colorCheck(); window.isSpinning = false; if(sBtn) sBtn.disabled = false;
    }, 2000);
};

// ⏳ ALƏT 4: KİBER ZAMAN MAŞINI SİSTEMİ
window.startCountdown = function() {
    if(window.countdownInterval) { clearInterval(window.countdownInterval); }
    var yr = parseInt(document.getElementById("cYear").value) || 2026;
    var mo = (parseInt(document.getElementById("cMonth").value) || 1) - 1;
    var dy = parseInt(document.getElementById("cDay").value) || 1;
    var hr = parseInt(document.getElementById("cHour").value) || 0;
    var mn = parseInt(document.getElementById("cMin").value) || 0;
    var sc = parseInt(document.getElementById("cSec").value) || 0;
    var targetDate = new Date(yr, mo, dy, hr, mn, sc);

    window.countdownInterval = setInterval(function() {
        var now = new Date(); var difference = targetDate.getTime() - now.getTime();
        if (difference <= 0) { clearInterval(window.countdownInterval); document.getElementById("countdownOutput").innerText = "🚀 ZAMAN TAMAMLANDI!"; return; }
        var secs = Math.floor(difference / 1000); var mins = Math.floor(secs / 60); var hours = Math.floor(mins / 60); var days = Math.floor(hours / 24);
        var remHours = hours % 24; var remMins = mins % 60; var remSecs = secs % 60;
        document.getElementById("countdownOutput").innerHTML = "⏳ Qalan Zaman: " + days + " Gün, " + remHours + " Saat, " + remMins + " Dəq, " + remSecs + " San";
    }, 1000);
};

// 🤖 AVTO-KLİKER SAYĞACI
setInterval(function() { if (window.autoClickers > 0) { window.score += window.autoClickers; if(document.getElementById("scoreDisplay")) document.getElementById("scoreDisplay").innerText = window.score; if(document.getElementById("boardScoreDisplay")) document.getElementById("boardScoreDisplay").innerText = window.score; window.colorCheck(); } }, 1000);

// ⚔️ LƏQƏB VƏ ŞİFRƏ GENERATORU
var leftDecors = ["꧂◤", "︻╦̵̵͇̿̿̿̿╤──", "⚔️", "꧁༺", "👑", "◥⚔️", "☣️", "⚙️ ["]; var rightDecors = ["◥꧁", "──╤̿̿̿̿̿̿̿══╤─", "⚔️", "༻꧂", "👑", "⚔️◤", "☣️", "] ⚙️"];
window.generateRandomNicknames = function() { var name = document.getElementById("nickInput").value; if(name === "") { alert("Zəhmət olmasa bir ad daxil edin!"); return; } var outputHTML = "<b>Premium Seçimlər:</b><br><br>"; for (var i = 0; i < 4; i++) { var randomIndex = Math.floor(Math.random() * leftDecors.length); var fullNick = leftDecors[randomIndex] + " " + name + " " + rightDecors[randomIndex]; outputHTML += "<div class='nick-row'><span>" + fullNick + "</span><button class='copy-btn' onclick='copyToClipboard(\"" + fullNick + "\")'>Kopyala</button></div>"; } if(document.getElementById("nickOutput")) document.getElementById("nickOutput").innerHTML = outputHTML; };
window.generateCryptoPassword = function() { var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"; var password = ""; for (var i = 0; i < 12; i++) { password += chars.charAt(Math.floor(Math.random() * chars.length)); } if(document.getElementById("passOutput")) document.getElementById("passOutput").innerHTML = "<div class='nick-row' style='justify-content: center; gap: 20px;'><span style='color:#fff; font-size:22px; letter-spacing: 2px;'> " + password + "</span><button class='copy-btn' onclick='copyToClipboard(\"" + password + "\")'>Kopyala</button></div>"; };
window.copyToClipboard = function(text) { navigator.clipboard.writeText(text); alert("Kopyalandı: " + text); };
