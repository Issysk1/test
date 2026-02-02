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

// 😈 NO BUTTON — DESKTOP + MOBILE
const noBtn = document.getElementById("no");

function moveNoButton() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * (window.innerWidth - 150) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 100) + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", e => {
  e.preventDefault();
  moveNoButton();
});

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
      ["The tension rn", "The tension is real, but you take the crown 💛", false]
    ]
  },
  {
    q: "Who fell in love first? 💘",
    a: [
      ["You", "You were the spark, I caught fire 🔥", false],
      ["Me", "You tried to play it cool 😌", false],
      ["Both at the same time ✨", "", true],
      ["The vibes", "The vibes were loud 😏", false]
    ]
  }
];

let i = 0;
const q = document.getElementById("question");
const a = document.getElementById("answers");

document.getElementById("quizIntro").onclick = () => {
  document.getElementById("quiz").classList.remove("hidden");
  showQ();
};

function showQ() {
  q.innerText = questions[i].q;
  a.innerHTML = "";

  questions[i].a.forEach(ans => {
    const b = document.createElement("button");
    b.innerText = ans[0];

    b.onclick = () => {
      if (ans[2]) {
        b.classList.add("correct");
        explodeHearts();
        setTimeout(() => {
          i++;
          if (i < questions.length) showQ();
          else revealNext();
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

// 💝 REVEAL NEXT
function revealNext() {
  ["dates","love","memories","music","goodbye"].forEach((id, idx) => {
    setTimeout(() => {
      document.getElementById(id).classList.remove("hidden");
    }, idx * 1200);
  });

  const loveItems = [
    "Your brains—so smart it’s unfair 🧠💛",
    "Those eyes… I get lost every time 👀💘",
    "When you correct my English 😏",
    "Your cute + hot combo 🔥",
    "How unique you are 💎",
    "Your laugh 😄💗"
  ];

  const list = document.getElementById("loveList");
  loveItems.forEach((t, i) => {
    setTimeout(() => {
      const card = document.createElement("div");
      card.className = "card love-card";
      card.innerText = t;
      list.appendChild(card);
    }, i * 700);
  });
}

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
