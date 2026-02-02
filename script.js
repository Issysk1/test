// 💖 HEARTS
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "💖";
  h.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 300);

// 🐝 BEES
document.querySelectorAll(".bee").forEach(b => {
  b.style.left = Math.random() * window.innerWidth + "px";
  b.style.top = Math.random() * window.innerHeight + "px";
});

// 😈 NO BUTTON — ESCAPE MODE (DESKTOP + MOBILE)
const noBtn = document.getElementById("no");

noBtn.style.position = "fixed";
noBtn.style.pointerEvents = "none"; // cannot be clicked

function runAway() {
  const padding = 20;
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Desktop
document.addEventListener("mousemove", e => {
  const rect = noBtn.getBoundingClientRect();
  if (
    e.clientX > rect.left - 40 &&
    e.clientX < rect.right + 40 &&
    e.clientY > rect.top - 40 &&
    e.clientY < rect.bottom + 40
  ) {
    runAway();
  }
});

// Mobile
document.addEventListener("touchmove", runAway);
document.addEventListener("touchstart", runAway);

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
  for (let i = 0; i < 30; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "💘";
    h.style.left = "50%";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }
}

// 💖 QUIZ
const questions = [
  {
    q: "Who’s hotter? 😏",
    a: [
      ["Me (obviously)", "I am hot, but you are hotter 😘", false],
      ["You (no debate)", "", true],
      ["Us together 🥵", "Together we’re 🔥, but still… you win 😉", false],
      ["The tension rn", "The tension is real 💛", false]
    ]
  },
  {
    q: "Who fell in love first? 💘",
    a: [
      ["You", "You were the spark 🔥", false],
      ["Me", "You tried to play it cool 😌", false],
      ["Both ✨", "", true],
      ["The vibes", "The vibes were LOUD 😏", false]
    ]
  }
];

let qi = 0;
const q = document.getElementById("question");
const a = document.getElementById("answers");

document.getElementById("quizIntro").onclick = () => {
  document.getElementById("quiz").classList.remove("hidden");
  showQ();
};

function showQ() {
  q.innerText = questions[qi].q;
  a.innerHTML = "";

  questions[qi].a.forEach(ans => {
    const b = document.createElement("button");
    b.innerText = ans[0];

    b.onclick = () => {
      if (ans[2]) {
        b.classList.add("correct");
        explodeHearts();
        setTimeout(() => {
          qi++;
          qi < questions.length ? showQ() : revealNext();
        }, 700);
      } else {
        b.classList.add("wrong");
        setTimeout(() => {
          b.innerText = ans[1];
        }, 400);
      }
    };

    a.appendChild(b);
  });
}

// 💝 REVEAL NEXT SECTIONS + LOVE CARDS
function revealNext() {
  ["dates","love","memories","music","goodbye"].forEach((id, idx) => {
    setTimeout(() => {
      document.getElementById(id).classList.remove("hidden");
    }, idx * 1200);
  });

  const loveItems = [
    "Your brain — dangerously smart 🧠💛",
    "Your eyes — unfair honestly 👀💘",
    "When you correct my English 😏",
    "Your cute + hot combo 🔥",
    "How unique you are 💎",
    "Your laugh 😄💗"
  ];

  const list = document.getElementById("loveList");
  list.innerHTML = "";

  loveItems.forEach((text, i) => {
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
  c.addEventListener("click", () => {
    document.querySelectorAll(".selectable .card")
      .forEach(card => card.classList.remove("selected"));
    c.classList.add("selected");
    document.getElementById("dateResult").innerText =
      `You picked: "${c.innerText}" 😘🔥`;
  });
});
