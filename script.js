// 💖 FLOATING HEARTS
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerText = "💖";
  h.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 300);

// 🐝 BEES
document.querySelectorAll(".bee").forEach(b => {
  b.style.left = Math.random() * window.innerWidth + "px";
  b.style.top = Math.random() * window.innerHeight + "px";
});

// 😈 NO BUTTON — GUARANTEED RUNNING
const noBtn = document.getElementById("no");
noBtn.style.position = "fixed";

function moveNo() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Desktop
document.addEventListener("mousemove", moveNo);
// Mobile
document.addEventListener("touchstart", moveNo);
document.addEventListener("touchmove", moveNo);

// 💕 YES BUTTON
document.getElementById("yes").onclick = () => {
  explodeHearts();
  document.getElementById("yesMessage").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("quizIntro").classList.remove("hidden");
  }, 2000);
};

// 💥 HEART EXPLOSION
function explodeHearts() {
  for (let i = 0; i < 25; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = "💘";
    h.style.left = "50%";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }
}

// 📳 VIBRATION
function vibrate(p) {
  if (navigator.vibrate) navigator.vibrate(p);
}

// 💖 QUIZ
const questions = [
  {
    q: "Who’s hotter? 😏",
    a: [
      ["Me", "Nice try 😌", false],
      ["You", "", true],
      ["Us together", "Still you 😘", false],
      ["The tension", "Too hot 😏", false]
    ]
  },
  {
    q: "Who fell in love first? 💘",
    a: [
      ["You", "You sparked it 🔥", false],
      ["Me", "I tried to hide it 😌", false],
      ["Both ✨", "", true],
      ["The vibes", "They were loud 😏", false]
    ]
  }
];

let qi = 0;
const qEl = document.getElementById("question");
const aEl = document.getElementById("answers");

document.getElementById("quizIntro").onclick = () => {
  document.getElementById("quiz").classList.remove("hidden");
  showQ();
};

function showQ() {
  qEl.innerText = questions[qi].q;
  aEl.innerHTML = "";

  questions[qi].a.forEach(ans => {
    const b = document.createElement("button");
    b.innerText = ans[0];

    b.onclick = () => {
      if (ans[2]) {
        b.classList.add("correct");
        vibrate([100, 50, 100]);
        explodeHearts();
        setTimeout(() => {
          qi++;
          qi < questions.length ? showQ() : revealNext();
        }, 800);
      } else {
        b.classList.add("wrong");
        vibrate([200, 60, 200]);
        setTimeout(() => b.innerText = ans[1], 400);
      }
    };

    aEl.appendChild(b);
  });
}

// 💝 REVEAL + LOVE CARDS
function revealNext() {
  ["dates","love","memories","music","goodbye"].forEach((id, i) => {
    setTimeout(() => {
      document.getElementById(id).classList.remove("hidden");
    }, i * 1200);
  });

  const love = [
    "Your brain 🧠💛",
    "Your eyes 👀💘",
    "Your laugh 😄",
    "Your chaos 😏",
    "Your warmth 💖",
    "Everything about you 🐝"
  ];

  const list = document.getElementById("loveList");
  list.innerHTML = "";

  love.forEach((text, i) => {
    setTimeout(() => {
      const card = document.createElement("div");
      card.className = "card love-card";
      card.innerText = text;
      list.appendChild(card);
    }, i * 600);
  });
}

// 📸 MEMORY FLIP
function flip(el) {
  el.classList.toggle("flipped");
}

// 🏖️ DATE PICK
document.querySelectorAll(".selectable .card").forEach(c => {
  c.onclick = () => {
    document.querySelectorAll(".selectable .card")
      .forEach(x => x.classList.remove("selected"));
    c.classList.add("selected");
    document.getElementById("dateResult").innerText =
      `You picked: "${c.innerText}" 😘🔥`;
  };
});
