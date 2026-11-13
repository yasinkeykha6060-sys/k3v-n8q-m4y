const CONFIG = [
  { type: "envelope", text: "نیایش جانم، یه چیزی برات ساختم 💌", buttonLabel: "بازش کن" },
  { type: "text", text: "برای قشنگ‌ترین اتفاق زندگی‌ام؛ نیایش من ♥️", buttonLabel: "ادامه" },
  { type: "text", text: "سلام نیایش من! ♥️😊\nخوش اومدی نفسم...", buttonLabel: "ادامه" },
  { type: "text", text: "می‌دونی امممممم... بذار بریم صفحه بعدی، اونجا بهت می‌گم!", buttonLabel: "بعدی" },
  { type: "text", text: "امممم... نه، بریم بعدی!", buttonLabel: "باشه بعدی 😄" },
  { type: "text", text: "خب خب، صبر کن... نه، به نظرم باز هم بریم بعدی! 😅", buttonLabel: "بریم دیگه!" },
  { type: "text", text: "رسیدیم...", buttonLabel: "ادامه" },
  { type: "text", text: "می‌دونی عزیز دلم، بعضی آدم‌ها وارد زندگی آدم نمی‌شن که فقط بخشی از روزهاش باشن؛ میان و معنای خیلی چیزها رو عوض می‌کنن. میان و به روزهای معمولی رنگ می‌دن، به لحظه‌های ساده قشنگی می‌بخشن و کاری می‌کنن آدم برای فرداهاش لبخند داشته باشه.", buttonLabel: "ادامه" },
  { type: "text", text: "برای من، اون آدم تویی؛ نیایش من!", buttonLabel: "ادامه" },
  { type: "text", text: "از وقتی وارد زندگی‌ام شدی، انگار یک دنیای تازه به روی من باز شد. خدا یکی از قشنگ‌ترین هدیه‌هایی رو که می‌تونستم آرزو کنم، سر راهم قرار داد و اون هدیه تو بودی.", buttonLabel: "ادامه" },
  { type: "text", text: "عزیز دلم، شاید هنوز نتونسته باشم حتی یک درصد از تمام دوست داشتنی که توی قلبم دارم رو با کلمات بهت نشون بدم؛ شاید هزاران جمله هم نتونن تمام احساسم رو توصیف کنن، اما می‌خوام یک چیز رو همیشه بدونی:", buttonLabel: "ادامه" },
  { type: "big", text: "من خیلی خیلی دوستت دارم، نیایشم!", buttonLabel: "ادامه" },
  { type: "text", text: "نه فقط به خاطر لبخند قشنگت، نه فقط به خاطر مهربونی و دوست‌داشتنی بودنت، بلکه به خاطر تمام چیزی که هستی؛ به خاطر فکرت، شخصیتت، نگاهت به زندگی، قدرتت، تلاش‌هات، رویاها و حتی اون جزئیات کوچیکی که شاید خودت هم متوجهشون نباشی، اما برای من عزیزن.", buttonLabel: "ادامه" },
  { type: "text", text: "من به داشتن تو افتخار می‌کنم. به اینکه می‌تونم بگم چنین دختر دوست‌داشتنی‌ای وارد زندگی من شده، به اینکه می‌تونم شاهد رشد کردنت باشم، از موفقیت‌هات خوشحال بشم و برای آرزوهات از ته قلبم دعا کنم.", buttonLabel: "ادامه" },
  { type: "text", text: "دلم می‌خواد همیشه بدونی که من فقط عاشق روزهای خوب و خنده‌هات نیستم؛ روزهایی هم که خسته‌ای، دلت گرفته، نگرانی یا حتی حوصله هیچ‌چیزی رو نداری، برام به همون اندازه عزیزی.", buttonLabel: "ادامه" },
  { type: "text", text: "نمی‌خوام فقط همراه روزهای آفتابی‌ات باشم؛ دلم می‌خواد وقتی آسمون دلت ابری شد هم بدونی کسی هست که با تمام وجودش هواتو داره.", buttonLabel: "ادامه" },
  { type: "text", text: "می‌خوام مراقبت باشم، نه اینکه محدودت کنم؛ پشتت باشم، نه اینکه جلوی راهت رو بگیرم؛ بهت آرامش بدم، نه اینکه باری به دوشت اضافه کنم.", buttonLabel: "ادامه" },
  { type: "text", text: "می‌خوام در کنار هم رشد کنیم، از هم یاد بگیریم، برای هم انگیزه باشیم و دست در دست هم از پله‌های زندگی بالا بریم.", buttonLabel: "ادامه" },
  { type: "text", text: "نیایش من، من تو رو برای یک اتفاق زودگذر نمی‌خوام.", buttonLabel: "ادامه" },
  { type: "text", text: "وقتی از دوست داشتن حرف می‌زنم، منظورم فقط گفتن چند جمله قشنگ و فرستادن قلب و بوسه نیست؛ منظورم انتخاب کردنه، موندنه، تلاش کردنه، مراقبت کردنه و ساختن یک آینده قشنگ در کنار همدیگه‌ست.", buttonLabel: "ادامه" },
  { type: "text", text: "من برای این مسیر جدی‌ام. دلم می‌خواد تا ته این راه، با رضایت و خواست قلبی هر دومون، کنار هم باشیم؛ روزهای سخت رو با هم پشت سر بذاریم و روزهای قشنگ رو با هم جشن بگیریم.", buttonLabel: "ادامه" },
  { type: "text", text: "می‌خوام همیشه بهت افتخار کنم و کاری کنم تو هم به بودنت در کنار من افتخار کنی.", buttonLabel: "ادامه" },
  { type: "text", text: "می‌خوام وقتی به عقب نگاه می‌کنیم، کلی خاطره داشته باشیم که با یادآوریشون لبخند روی لب‌هامون بشینه؛ از همین شیطنت‌های کوچیک و صفحه‌صفحه جلو رفتن گرفته تا تمام رویاهایی که قراره با هم بهشون برسیم.", buttonLabel: "ادامه" },
  { type: "text", text: "و اما یک اعتراف کوچولو...", buttonLabel: "ادامه" },
  { type: "pineapple", text: "خانم من تویییی! ناناسی من! 🥹❤️", buttonLabel: "ادامه" },
  { type: "text", text: "همون دختری که دلم می‌خواد همیشه لبخندش رو ببینم، موفقیت‌هاش رو جشن بگیرم، نازش رو بکشم، براش هدیه‌های کوچولو بگیرم، غافلگیرش کنم و گاهی فقط بهش بگم چقدر خوشحالم که دارمش.", buttonLabel: "ادامه" },
  { type: "text", text: "اگر قرار باشه هزار بار دیگه زندگی کنم، باز هم دلم می‌خواد فرصت شناختن تو رو داشته باشم؛ باز هم دلم می‌خواد باهات حرف بزنم، بخندم، خاطره بسازم و عاشق همین جزئیات قشنگ وجودت بشم.", buttonLabel: "ادامه" },
  { type: "text", text: "نیایش عزیزم...", buttonLabel: "ادامه" },
  { type: "text", text: "شاید نتونم تمام دنیا رو برات به زیباترین شکل ممکن بسازم، اما می‌تونم قول بدم برای ساختن یک دنیای قشنگ دونفره، با عشق، احترام، صداقت و تلاش قدم بردارم.", buttonLabel: "ادامه" },
  { type: "text", text: "تو برای من فقط یک آدم دوست‌داشتنی نیستی؛ تو یکی از عزیزترین دلیل‌های لبخند منی.", buttonLabel: "ادامه" },
  { type: "text", text: "ممنونم که اومدی، ممنونم که هستی و ممنونم که اجازه دادی بخشی از دنیای قشنگت باشم.", buttonLabel: "ادامه" },
  { type: "voice", text: "یه چیزی هست که می‌خوام با صدای خودم بهت بگم 🎧", buttonLabel: "بذار صدامو بشنوی 🎧" },
  { type: "text", text: "دوستت دارم، خیلی بیشتر از چیزی که این کلمات می‌تونن بگن....", buttonLabel: "ادامه" },
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
  if (!lines.length || reduced) {
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
      '<section class="scene voice-scene"><div class="card">' +
      '<h1 class="title">' + highlight(page.text) + "</h1>" +
      '<div class="controls"><button class="go play" type="button" id="voiceBtn"><span id="voiceLabel">' +
      escapeHtml(page.buttonLabel) +
      '</span> <span id="vmark"></span></button></div>' +
      '<div class="eq" id="eq" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>' +
      '<div class="beat" id="beat">💗</div>' +
      '<div class="track"><span id="voiceFill"></span></div>' +
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
    const extra = page.type === "pineapple" ? '<div class="pineapple" aria-hidden="true">🍍</div>' : "";
    const restart = page.type === "finale"
      ? '<button class="restart" type="button" id="restart">↻ از اول</button>'
      : '<button class="go" type="button" id="next">' + escapeHtml(page.buttonLabel) + "</button>";
    stage.innerHTML =
      '<section class="scene ' + page.type + '"><div class="card">' + extra + lines + restart + "</div></section>";
    armReveal();
  }
  const next = document.getElementById("next");
  if (next) next.addEventListener("click", (event) => {
    event.stopPropagation();
    advance();
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
  if (label) label.textContent = CONFIG[31].buttonLabel;
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
