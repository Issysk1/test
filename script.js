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
const bees = document.querySelectorAll(".bee");
bees.forEach(b => {
  b.style.left = Math.random() * window.innerWidth + "px";
  b.style.top = Math.random() * window.innerHeight + "px";
});

// 😈 NO BUTTON RUNS
const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * (window.innerWidth - 150) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 80) + "px";
});

// 💕 YES BUTTON
document.getElementById("yes").onclick = () => {
  bees[0].style.left = "50%";
  bees[1].style.left = "52%";
  explodeHearts();
  document.getElementById("yesMessage").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("quizIntro").classList.remove("hidden");
  }, 2000);
};

// 💥 HEART EXPLOSION
function explodeHearts() {
  for (let i = 0; i < 20; i++) {
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
  { q: "Who’s hotter? 😏", a: [
      ["Me (obviously)", "I am hot, but you are hotter 😘", false],
      ["You (no debate)", "", true],
      ["Us together 🥵", "Together we’re 🔥, but still… you win 😉", false],
      ["The tension rn", "The tension is real, but you take the crown 💛", false]
    ]
  },
  { q: "Who fell in love first? 💘", a: [
      ["You (I saw it coming)", "You were the first spark, but I caught fire 🔥", false],
      ["Me (I tried to play it cool)", "You tried, but I know 💗", false],
      ["Both at the same time (soulmate timing ✨)", "", true],
      ["Our vibes before we did", "The vibes were strong, but timing wins 🐝", false]
    ]
  },
  { q: "Who is funnier? 😏", a: [
      ["Me (obviously 🙄)", "You’re funny too, but we’re both 😂", false],
      ["You (don’t let it go to your head)", "Okay yes, but we’re a comedy duo 😌", false],
      ["Both of us (comedy duo energy 😌)", "", true],
      ["The arguments we turn into jokes", "True, but still not as funny 😏", false]
    ]
  },
  { q: "Who loves more? 🥰", a: [
      ["You (dramatically)", "Dramatic yes, but I love harder 💗", false],
      ["Me (unhealthily 😌)", "Maybe… but my love is endless 💛", false],
      ["Both—just differently but deeply 💗", "", true],
      ["Yes.", "Yes… but more than yes 😘", false]
    ]
  },
  { q: "What’s my favorite thing about you? 😍", a: [
      ["Your looks (hello??)", "You look amazing, but my favorite is your heart 💛", false],
      ["Your personality (huge bonus)", "Personality top-tier, but still… 💖", false],
      ["The way you make me feel loved & calm 🤍", "", true],
      ["The fact that you’re mine 😌", "True, but I love that feeling too 😘", false]
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
        explodeHearts();
        i++;
        if (i < questions.length) showQ();
        else revealNext();
      } else {
        b.innerText = ans[1];
      }
    };
    a.appendChild(b);
  });
}

// 💝 Reveal next sections
function revealNext() {
  ["dates","love","memories","music","goodbye"].forEach((id, idx) => {
    setTimeout(() => {
      document.getElementById(id).classList.remove("hidden");
    }, idx * 1200);
  });

  const loveItems = [
    "Your brains—so smart, I pretend to understand… but mostly just stare and look cute. 🧠😉",
    "Those deep eyes—I swear they hypnotize me… or maybe I’m just weak for you. 👀💘",
    "When you “correct” my English… I lie, I hate it… but secretly, it’s my favorite torture. 😏",
    "Your mix of cute, hot, and beautiful—illegal, honestly. 🔥🥰",
    "How unique you are—like, did the universe make you just to annoy me and steal my heart? 💎💖",
    "Your laugh—it makes me want to do everything right… or at least make you laugh more. 😄💗"
  ];

  const list = document.getElementById("loveList");
  loveItems.forEach((t, i) => {
    setTimeout(() => {
      const s = document.createElement("p");
      s.innerText = t;
      list.appendChild(s);
    }, i * 800);
  });
}

// 📸 MEMORY FLIP
function flip(el) { el.classList.toggle("flipped"); }

// 🏖️ DATE PICK
const dateCards = document.querySelectorAll(".selectable .card");
dateCards.forEach(c => {
  c.addEventListener("click", () => {
    dateCards.forEach(card => card.classList.remove("selected"));
    c.classList.add("selected");
    document.getElementById("dateResult").innerText = `You picked: "${c.innerText}" 😘🔥`;
  });
});
