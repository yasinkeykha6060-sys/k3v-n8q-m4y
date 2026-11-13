const CONFIG = [
  { type: "envelope", text: "نیایش جانم، یه چیزی برات ساختم 💌", buttonLabel: "بازش کن" },
  { type: "text", text: "برای قشنگ‌ترین اتفاق زندگی‌ام؛ نیایش من ♥️", buttonLabel: "ادامه" },
  { type: "text", text: "سلام نیایش من! ♥️😊\nخوش اومدی نفسم...", buttonLabel: "ادامه" },
  { type: "text", text: "می‌دونی امممم... بذار بریم صفحه بعدی، اونجا بهت می‌گم!", buttonLabel: "بعدی" },
  { type: "text", text: "رسیدیم...", buttonLabel: "ادامه" },
  { type: "text", text: "بعضی آدم‌ها میان و به روزهای معمولی رنگ می‌دن. برای من، اون آدم تویی؛ نیایش من!", buttonLabel: "ادامه" },
  { type: "text", text: "از وقتی اومدی، یک دنیای تازه باز شد. تو قشنگ‌ترین هدیه‌ای بودی که سر راهم قرار گرفت.", buttonLabel: "ادامه" },
  { type: "text", text: "هنوز حتی یک درصد از دوست داشتنی قلبم را با کلمه نگفته‌ام، اما یک چیز را همیشه بدان:", buttonLabel: "ادامه" },
  { type: "big", text: "من خیلی خیلی دوستت دارم، نیایشم!", buttonLabel: "ادامه" },
  { type: "text", text: "نه فقط برای لبخند و مهربانی‌ات؛ برای تمام چیزی که هستی. برای فکرت، نگاهت، تلاش‌هات و همان جزئیات کوچکی که برای من عزیزند.", buttonLabel: "ادامه" },
  { type: "text", text: "به داشتنت افتخار می‌کنم. روزهایی هم که خسته‌ای یا دلت گرفته، به همان اندازه عزیزی؛ وقتی آسمان دلت ابری شد، کسی هست که هوات را دارد.", buttonLabel: "ادامه" },
  { type: "text", text: "می‌خواهم مراقبت باشم، نه اینکه محدودت کنم. پشتت باشم، بهت آرامش بدهم، و دست در دست هم از پله‌های زندگی بالا برویم.", buttonLabel: "ادامه" },
  { type: "text", text: "نیایش من، تو را برای یک اتفاق زودگذر نمی‌خواهم. دوست داشتن برای من یعنی انتخاب، ماندن، تلاش و ساختن یک آینده قشنگ با هم.", buttonLabel: "ادامه" },
  { type: "text", text: "برای این مسیر جدی‌ام. می‌خواهم تا ته این راه کنار هم باشیم، روزهای سخت را با هم بگذرانیم، و بعدها با یاد همین روزها لبخند بزنیم.", buttonLabel: "ادامه" },
  { type: "text", text: "و اما یک اعتراف کوچولو...", buttonLabel: "ادامه" },
  { type: "heart", text: "خانم من تویییی! ناناسی من! ❤️", buttonLabel: "ادامه" },
  { type: "text", text: "همان دختری که می‌خواهم لبخندش را ببینم، موفقیت‌هایش را جشن بگیرم، نازش را بکشم و گاهی فقط بگویم چقدر خوشحالم که دارمش.", buttonLabel: "ادامه" },
  { type: "text", text: "اگر هزار بار دیگر زندگی کنم، باز هم می‌خواهم تو را بشناسم و عاشق همین جزئیات قشنگت بشوم.", buttonLabel: "ادامه" },
  { type: "text", text: "نیایش عزیزم... شاید همه دنیا را نتوانم برایت بسازم، اما برای یک دنیای دونفره با عشق، احترام و صداقت قدم برمی‌دارم. تو یکی از عزیزترین دلیل‌های لبخند منی. ممنونم که هستی.", buttonLabel: "ادامه" },
  { type: "voice", text: "یه چیزی هست که می‌خوام با صدای خودم بهت بگم 🎧", buttonLabel: "بذار صدامو بشنوی 🎧" },
  { type: "queen", text: "تو ملکه قلب منی نیایشم", buttonLabel: "ادامه" },
  { type: "still", text: "دوستت دارم، خیلی بیشتر از چیزی که این کلمات می‌تونن بگن....", buttonLabel: "ادامه" },
  { type: "finale", text: "می‌خوام نیایش بمونی برام تا ابد تا ابد تو فقط نیایش خودمی آخه ♥️", buttonLabel: "ادامه" }
];

const MUSIC_URL = "assets/kalimba.mp3";
const VOICE_URL = "assets/voice.mp3";
const MUSIC_VOL = 0.35;
const DUCK_VOL = 0.07;

const stage = document.getElementById("stage");
const progressBar = document.getElementById("progressBar");
const muteBtn = document.getElementById("mute");
const loader = document.getElementById("loader");
const toast = document.getElementById("toast");
const art = document.getElementById("art");
const confetti = document.getElementById("confetti");

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let index = 0;
let textReady = true;
let leaving = false;
let opening = false;
let revealTimer = 0;
let voiceTimer = 0;
let muted = false;
let musicOn = false;
let targetVol = MUSIC_VOL;
let audioCtx = null;
let musicGain = null;
let musicBuffer = null;
let musicArray = null;
let musicHtml = null;
let webMusic = false;
let voiceEl = null;
let voiceFailed = false;
let arts = [];

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlight(value) {
  return escapeHtml(value).replace(/(نیایشم|نیایش|نفسم)/g, '<span class="love">$1</span>');
}

function sentences(text) {
  const parts = [];
  text.split("\n").forEach((paragraph) => {
    const bits = paragraph.split(/(?<=[!؟.])\s+/).map((item) => item.trim()).filter(Boolean);
    if (bits.length) parts.push(...bits);
    else if (paragraph.trim()) parts.push(paragraph.trim());
  });
  return parts.length ? parts : [text];
}

function showToast(message) {
  toast.hidden = false;
  toast.textContent = message;
}

function hideToast() {
  toast.hidden = true;
}

function setProgress() {
  const width = (index / (CONFIG.length - 1)) * 100;
  progressBar.style.width = width + "%";
}

function paintArt() {
  if (!arts.length) {
    art.hidden = true;
    return;
  }
  art.hidden = false;
  art.style.backgroundImage = "url('" + arts[index % arts.length] + "')";
}

function burst(x, y) {
  if (reduced) return;
  const marks = ["💗", "♡", "✨", "⭐"];
  for (let i = 0; i < 7; i += 1) {
    const node = document.createElement("span");
    node.className = "burst";
    node.textContent = marks[i % marks.length];
    node.style.left = (x + (Math.random() * 36 - 18)) + "px";
    node.style.top = (y + (Math.random() * 20 - 10)) + "px";
    document.body.appendChild(node);
    setTimeout(() => node.remove(), 800);
  }
}

function rain() {
  confetti.replaceChildren();
  if (reduced) return;
  const marks = ["💗", "♡", "✨", "⭐", "♥️"];
  for (let i = 0; i < 28; i += 1) {
    const node = document.createElement("i");
    node.textContent = marks[i % marks.length];
    node.style.left = Math.random() * 100 + "%";
    node.style.animationDelay = (Math.random() * 0.8) + "s";
    node.style.fontSize = (14 + Math.random() * 16) + "px";
    confetti.appendChild(node);
  }
  setTimeout(() => confetti.replaceChildren(), 3200);
}

function revealAll() {
  stage.querySelectorAll(".line").forEach((line) => line.classList.add("show"));
  textReady = true;
}

function armReveal() {
  window.clearTimeout(revealTimer);
  const lines = [...stage.querySelectorAll(".line")];
  const kind = CONFIG[index].type;
  if (!lines.length || reduced || kind === "big" || kind === "still" || kind === "finale" || kind === "heart" || kind === "queen") {
    revealAll();
    return;
  }
  textReady = false;
  lines.forEach((line, i) => {
    line.style.animationDelay = (i * 0.18) + "s";
    requestAnimationFrame(() => line.classList.add("show"));
  });
  revealTimer = window.setTimeout(() => {
    textReady = true;
  }, lines.length * 180 + 700);
}

function backButton() {
  if (index <= 0) return "";
  return '<button class="back" type="button" id="back">برگشت</button>';
}

function render() {
  const page = CONFIG[index];
  setProgress();
  paintArt();
  hideToast();
  if (page.type === "finale") rain();
  if (page.type === "envelope") {
    stage.innerHTML =
      '<section class="scene">' +
      '<div class="envelope-wrap"><div class="envelope"><div class="seal">💌</div><p>' +
      highlight(page.text) +
      '</p></div></div><button class="go" type="button" id="next">' +
      escapeHtml(page.buttonLabel) +
      "</button></section>";
    textReady = true;
  } else if (page.type === "voice") {
    stage.innerHTML =
      '<section class="scene voice-scene calm"><div class="card">' +
      '<h1 class="title">' + highlight(page.text) + "</h1>" +
      '<div class="controls"><button class="go play" type="button" id="voiceBtn"><span id="voiceLabel">' +
      escapeHtml(page.buttonLabel) +
      '</span> <span id="vmark"></span></button></div>' +
      '<div class="track"><span id="voiceFill"></span></div>' +
      '<div class="nav">' + backButton() + "</div>" +
      (voiceFailed ? '<p class="line show">صدا الان باز نشد عزیزدلم، نامه همین‌جاست 💗</p><button class="go" type="button" id="next">ادامه</button>' : "") +
      "</div></section>";
    textReady = true;
    const voiceBtn = document.getElementById("voiceBtn");
    if (voiceBtn) voiceBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleVoice();
    });
  } else {
    const lines = sentences(page.text).map((line) => '<p class="line">' + highlight(line) + "</p>").join("");
    let extra = "";
    if (page.type === "heart") extra = '<div class="mark-heart" aria-hidden="true">💗</div>';
    if (page.type === "queen") extra = '<img class="queen-photo" src="assets/queen.jpg" alt="" onerror="this.hidden=true">';
    const calm = page.type === "big" || page.type === "still" || page.type === "finale" || page.type === "heart" || page.type === "queen" ? " calm" : "";
    const nextBtn = page.type === "finale"
      ? '<button class="restart" type="button" id="restart">↻ از اول</button>'
      : '<button class="go" type="button" id="next">' + escapeHtml(page.buttonLabel) + "</button>";
    stage.innerHTML =
      '<section class="scene ' + page.type + calm + '"><div class="card">' + extra + lines +
      '<div class="nav">' + backButton() + nextBtn + "</div></div></section>";
    armReveal();
  }
  const next = document.getElementById("next");
  if (next) next.addEventListener("click", (event) => {
    event.stopPropagation();
    advance();
  });
  const back = document.getElementById("back");
  if (back) back.addEventListener("click", (event) => {
    event.stopPropagation();
    if (voiceEl && !voiceEl.paused) voiceEl.pause();
    go(index - 1);
  });
  const restart = document.getElementById("restart");
  if (restart) restart.addEventListener("click", (event) => {
    event.stopPropagation();
    restartLetter();
  });
}

function go(nextIndex) {
  if (leaving || nextIndex < 0 || nextIndex >= CONFIG.length || nextIndex === index) return;
  window.clearTimeout(voiceTimer);
  const scene = stage.querySelector(".scene");
  index = nextIndex;
  if (!scene || reduced) {
    render();
    return;
  }
  leaving = true;
  scene.classList.add("leave");
  window.setTimeout(() => {
    render();
    leaving = false;
  }, 280);
}

function advance() {
  const page = CONFIG[index];
  if (page.type === "voice" || page.type === "finale") return;
  if (!textReady) {
    revealAll();
    return;
  }
  if (page.type === "envelope") {
    startExperience();
    return;
  }
  go(index + 1);
}

function restartLetter() {
  window.clearTimeout(voiceTimer);
  if (voiceEl && !voiceEl.paused) voiceEl.pause();
  ramp(MUSIC_VOL, 2);
  index = 0;
  render();
}

function loadArts() {
  ["assets/art1.jpg", "assets/art2.jpg", "assets/art3.jpg"].forEach((src) => {
    const image = new Image();
    image.onload = () => {
      arts.push(src);
      if (index > 0) paintArt();
    };
    image.onerror = () => {};
    try { image.src = src; } catch (error) { /* gradient stays */ }
  });
}

loader.hidden = false;
const preloadPromise = (async () => {
  try {
    const response = await fetch(MUSIC_URL);
    if (!response.ok) throw new Error("music");
    musicArray = await response.arrayBuffer();
  } catch (error) {
    showToast("موزیک الان باز نشد عزیزدلم، نامه همین‌جاست 💗");
  } finally {
    loader.hidden = true;
  }
})();

function prepareVoice() {
  if (voiceEl) return voiceEl;
  voiceEl = new Audio(VOICE_URL);
  voiceEl.preload = "auto";
  voiceEl.volume = 1;
  voiceEl.setAttribute("playsinline", "");
  voiceEl.setAttribute("webkit-playsinline", "");
  voiceEl.addEventListener("error", () => {
    voiceFailed = true;
    showToast("صدام الان باز نشد عزیزدلم، نامه همین‌جاست 💗");
    if (CONFIG[index].type === "voice") render();
  });
  voiceEl.addEventListener("timeupdate", () => {
    const fill = document.getElementById("voiceFill");
    if (!fill || !voiceEl.duration) return;
    fill.style.width = ((voiceEl.currentTime / voiceEl.duration) * 100) + "%";
  });
  voiceEl.addEventListener("play", () => {
    ramp(DUCK_VOL, 2);
    setVoiceUi(true);
  });
  voiceEl.addEventListener("pause", () => {
    if (voiceEl.ended) return;
    ramp(MUSIC_VOL, 2);
    setVoiceUi(false);
  });
  voiceEl.addEventListener("ended", () => {
    setVoiceUi(false);
    ramp(MUSIC_VOL, 3);
    voiceTimer = window.setTimeout(() => go(index + 1), 3000);
  });
  return voiceEl;
}

function setVoiceUi(playing) {
  const eq = document.getElementById("eq");
  const beat = document.getElementById("beat");
  const label = document.getElementById("voiceLabel");
  const mark = document.getElementById("vmark");
  if (eq) eq.classList.toggle("on", playing);
  if (beat) beat.classList.toggle("on", playing);
  if (label) label.textContent = CONFIG.find((item) => item.type === "voice").buttonLabel;
  if (mark) mark.textContent = playing ? "⏸" : (voiceEl && voiceEl.currentTime > 0 && !voiceEl.ended ? "▶" : "");
}

function ramp(value, seconds) {
  targetVol = value;
  const audible = muted ? 0 : value;
  if (webMusic && musicGain && audioCtx) {
    const now = audioCtx.currentTime;
    const gain = musicGain.gain;
    gain.cancelScheduledValues(now);
    gain.setValueAtTime(gain.value, now);
    gain.linearRampToValueAtTime(audible, now + seconds);
    return;
  }
  if (!musicHtml) return;
  const start = musicHtml.volume;
  const target = audible;
  const began = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - began) / (seconds * 1000));
    musicHtml.volume = start + (target - start) * t;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

async function startMusic() {
  if (musicOn) return;
  musicOn = true;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  try {
    if (!AudioCtx) throw new Error("no-web-audio");
    if (!audioCtx) audioCtx = new AudioCtx();
    const resumed = audioCtx.resume();
    await preloadPromise;
    await resumed;
    if (!musicArray) throw new Error("no-buffer");
    musicBuffer = await audioCtx.decodeAudioData(musicArray.slice(0));
    musicGain = audioCtx.createGain();
    musicGain.gain.value = 0;
    musicGain.connect(audioCtx.destination);
    const source = audioCtx.createBufferSource();
    source.buffer = musicBuffer;
    source.loop = true;
    source.connect(musicGain);
    source.start();
    webMusic = true;
    ramp(MUSIC_VOL, 3);
  } catch (error) {
    try {
      musicHtml = new Audio(MUSIC_URL);
      musicHtml.loop = true;
      musicHtml.volume = 0;
      await musicHtml.play();
      ramp(MUSIC_VOL, 3);
    } catch (fallbackError) {
      musicOn = false;
      showToast("موزیک الان باز نشد عزیزدلم، نامه همین‌جاست 💗");
    }
  }
}

function startExperience() {
  if (index !== 0 || leaving) return;
  startMusic();
  go(1);
}

async function toggleVoice() {
  if (voiceFailed) {
    go(index + 1);
    return;
  }
  const audio = prepareVoice();
  try {
    if (audio.paused) await audio.play();
    else audio.pause();
  } catch (error) {
    voiceFailed = true;
    showToast("صدام الان باز نشد عزیزدلم، نامه همین‌جاست 💗");
    render();
  }
}

muteBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  muted = !muted;
  muteBtn.textContent = muted ? "🔇" : "🎵";
  if (webMusic && musicGain && audioCtx) {
    const now = audioCtx.currentTime;
    musicGain.gain.cancelScheduledValues(now);
    musicGain.gain.setValueAtTime(muted ? 0 : targetVol, now);
  } else if (musicHtml) {
    musicHtml.volume = muted ? 0 : targetVol;
  }
});

stage.addEventListener("click", (event) => {
  if (event.target.closest("button")) return;
  advance();
});

document.addEventListener("pointerdown", (event) => {
  if (event.target.closest(".mute")) return;
  burst(event.clientX, event.clientY);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== " " && event.key !== "Enter" && event.key !== "ArrowLeft" && event.key !== "ArrowRight" && event.key !== "ArrowDown") return;
  if (event.target && event.target.tagName === "BUTTON") return;
  event.preventDefault();
  const page = CONFIG[index];
  if (page.type === "voice") {
    toggleVoice();
    return;
  }
  advance();
});

let touchX = 0;
let touchY = 0;
stage.addEventListener("touchstart", (event) => {
  const touch = event.changedTouches[0];
  touchX = touch.clientX;
  touchY = touch.clientY;
}, { passive: true });

stage.addEventListener("touchend", (event) => {
  const touch = event.changedTouches[0];
  const dx = touch.clientX - touchX;
  const dy = touch.clientY - touchY;
  if (Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) * 1.4) advance();
}, { passive: true });

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
});

window.addEventListener("pageshow", () => {
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
});

render();
loadArts();
prepareVoice();
