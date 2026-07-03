var score = 0;
var clickPower = 1;
var autoClickers = 0;
var u1Cost = 30;
var u2Cost = 100;
var isSpinning = false;

var leaders = [
  { name: "⚡ Kiber_Aslan", score: 250 },
  { name: "🥷 Gizli_Pro", score: 180 },
  { name: "🤖 Bot_Kliker", score: 45 },
  { name: "💥 Hacker_007", score: 20 },
  { name: "👑 Sənin_Adın (CEO)", score: 0 }
];

function updateLeaderboard() {
  for (var i = 0; i < leaders.length; i++) {
    if (leaders[i].name.includes("CEO")) {
      leaders[i].score = score;
    }
  }
  var myCopy = [].concat(leaders);
  myCopy.sort(function (a, b) { return b.score - a.score; });

  var html = "";
  for (var i = 0; i < myCopy.length; i++) {
    var color = (myCopy[i].name.includes("CEO")) ? "#ffdd00" : "#fff";
    html += "<div class='leader-row' style='color:" + color + ";'><span>" + (i + 1) + ". " + myCopy[i].name + "</span><b>" + myCopy[i].score + " Xal</b></div>";
  }
  var target = document.getElementById("leaderboardList");
  if (target) { target.innerHTML = html; }
}

setTimeout(updateLeaderboard, 100);

function clickButton() {
  score += clickPower;
  var disp = document.getElementById("scoreDisplay");
  if (disp) { disp.innerText = score; }
  colorCheck();
  updateLeaderboard();
}

function colorCheck() {
  var b1 = document.getElementById("up1Btn");
  if (b1) {
    if (score >= u1Cost) { b1.className = "shop-btn btn-green"; b1.innerText = "Əldə et"; }
    else { b1.className = "shop-btn btn-red"; b1.innerText = "Balans Çatmır"; }
  }

  var b2 = document.getElementById("up2Btn");
  if (b2) {
    if (score >= u2Cost) { b2.className = "shop-btn btn-green"; b2.innerText = "Əldə et"; }
    else { b2.className = "shop-btn btn-red"; b2.innerText = "Balans Çatmır"; }
  }
}

function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;
  var sBtn = document.getElementById("spinBtn");
  if (sBtn) sBtn.disabled = true;

  var fakes = ["🔄 FIRLANIR...", "💎 CEKPOT?!", "❌ RİSK...", "🎰 ŞANSINIZ..."];
  var count = 0;

  var anim = setInterval(function () {
    var wStatus = document.getElementById("wheelStatus");
    if (wStatus) wStatus.innerText = fakes[count % fakes.length];
    count++;
  }, 250);

  setTimeout(function () {
    clearInterval(anim);
    var rand = Math.random();
    var statusText = "";

    if (rand < 0.3) { score += 30; statusText = "🟢 UDUŞ: +30 Xal!"; }
    else if (rand < 0.5) { score += 100; statusText = "🟡 CEKPOT: +100 Xal! 🔥"; }
    else if (rand < 0.75) { score = Math.max(0, score - 20); statusText = "🔴 RİSK: -20 Xal getdi!"; }
    else { statusText = "💀 ŞANS: Boş çıxdı!"; }

    var wStatus = document.getElementById("wheelStatus");
    if (wStatus) wStatus.innerText = statusText;
    var disp = document.getElementById("scoreDisplay");
    if (disp) disp.innerText = score;
    colorCheck();
    updateLeaderboard();

    isSpinning = false;
    if (sBtn) sBtn.disabled = false;
  }, 2000);
}

function buyUpgrade1() {
  if (score >= u1Cost) {
    score -= u1Cost; clickPower += 1; u1Cost = Math.floor(u1Cost * 1.5);
    var up1 = document.getElementById("upgrade1Cost");
    if (up1) up1.innerText = u1Cost;
    var disp = document.getElementById("scoreDisplay");
    if (disp) disp.innerText = score;
    colorCheck(); updateLeaderboard();
  } else { alert("Xalınız çatmır!"); }
}

function buyUpgrade2() {
  if (score >= u2Cost) {
    score -= u2Cost; autoClickers += 1; u2Cost = Math.floor(u2Cost * 1.6);
    var up2 = document.getElementById("upgrade2Cost");
    if (up2) up2.innerText = u2Cost;
    var disp = document.getElementById("scoreDisplay");
    if (disp) disp.innerText = score;
    colorCheck(); updateLeaderboard();
  } else { alert("Xalınız çatmır!"); }
}

setInterval(function () {
  if (autoClickers > 0) {
    score += autoClickers;
    var disp = document.getElementById("scoreDisplay");
    if (disp) disp.innerText = score;
    colorCheck(); updateLeaderboard();
  }
}, 1000);

var leftDecors = ["꧂◤", "︻╦̵̵͇̿̿̿̿╤──", "⚔️", "꧁༺", "👑", "◥⚔️", "☣️", "⚙️ ["];
var rightDecors = ["◥꧁", "──╤̿̿̿̿̿̿̿══╤─", "⚔️", "༻꧂", "👑", "⚔️◤", "☣️", "] ⚙️"];

function generateRandomNicknames() {
  var name = document.getElementById("nickInput").value;
  if (name === "") { alert("Zəhmət olmasa bir ad daxil edin!"); return; }
  var outputHTML = "<b>Premium Seçimlər:</b><br><br>";
  for (var i = 0; i < 4; i++) {
    var randomIndex = Math.floor(Math.random() * leftDecors.length);
    var fullNick = leftDecors[randomIndex] + " " + name + " " + rightDecors[randomIndex];
    outputHTML += "<div class='nick-row'><span>" + fullNick + "</span><button class='copy-btn' onclick='copyToClipboard(\"" + fullNick + "\")'>Kopyala</button></div>";
  }
  var nOut = document.getElementById("nickOutput");
  if (nOut) nOut.innerHTML = outputHTML;
}

function generateCryptoPassword() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  var password = "";
  for (var i = 0; i < 12; i++) { password += chars.charAt(Math.floor(Math.random() * chars.length)); }
  var pOut = document.getElementById("passOutput");
  if (pOut) pOut.innerHTML = "<div class='nick-row' style='justify-content: center; gap: 20px;'><span style='color:#fff; font-size:22px; letter-spacing: 2px;'>" + password + "</span><button class='copy-btn' onclick='copyToClipboard(\"" + password + "\")'>Kopyala</button></div>";
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert("Kopyalandı: " + text);
}
