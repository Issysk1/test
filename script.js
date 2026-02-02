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

// 😈 NO BUTTON
const noBtn = document.getElementById("no");
noBtn.onmouseover = () => {
  noBtn.style.left = Math.random() * (window.innerWidth - 150) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 80) + "px";
};

// 💕 YES
document.getElementById("yes").onclick = () => {
  valentine.classList.add("hidden");
  yesMessage.classList.remove("hidden");
  explodeHearts();
  setTimeout(() => quizIntro.classList.remove("hidden"), 2000);
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

// 💖 QUIZ (FULL ORIGINAL CONTENT + COLORS + VIBRATION)
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
      ["You (I saw it coming)", "You were the first spark, but I caught fire 🔥", false],
      ["Me (I tried to play it cool)", "You tried, but I know 💗", false],
      ["Both at the same time (soulmate timing ✨)", "", true],
      ["Our vibes before we did", "The vibes were strong, but timing wins 🐝", false]
    ]
  },
  {
    q: "Who is funnier? 😏",
    a: [
      ["Me (obviously 🙄)", "You’re funny too, but we’re both 😂", false],
      ["You (don’t let it go to your head)", "Okay yes, but we’re a comedy duo 😌", false],
      ["Both of us (comedy duo energy 😌)", "", true],
      ["The arguments we turn into jokes", "True, but still not as funny 😏", false]
    ]
  },
  {
    q: "Who loves more? 🥰",
    a: [
      ["You (dramatically)", "Dramatic yes, but I love harder 💗", false],
      ["Me (unhealthily 😌)", "Maybe… but my love is endless 💛", false],
      ["Both—just differently but deeply 💗", "", true],
      ["Yes.", "Yes… but more than yes 😘", false]
    ]
  },
  {
    q: "What’s my favorite thing about you? 😍",
    a: [
      ["Your looks (hello??)", "You look amazing, but my favorite is your heart 💛", false],
      ["Your personality (huge bonus)", "Personality top-tier, but still… 💖", false],
      ["The way you make me feel loved & calm 🤍", "", true],
      ["The fact that you’re mine 😌", "True, but I love that feeling too 😘", false]
    ]
  }
];

let qi = 0;
quizIntro.onclick = () => {
  quiz.classList.remove("hidden");
  showQ();
};

function showQ() {
  question.innerText = questions[qi].q;
  answers.innerHTML = "";
  questions[qi].a.forEach(ans => {
    const b = document.createElement("button");
    b.innerText = ans[0];
    b.onclick = () => {
      if (ans[2]) {
        explodeHearts();
        qi++;
        qi < questions.length ? showQ() : revealNext();
      } else {
        b.classList.add("wrong");
        b.innerText = "❌ " + ans[1];
      }
    };
    answers.appendChild(b);
  });
}

// 💌 REVEAL
function revealNext() {
  ["dates","love","memories","music","goodbye"].forEach((id,i)=>{
    setTimeout(()=>document.getElementById(id).classList.remove("hidden"), i*1200);
  });

  const loveItems = [
    "Your mind 🧠💛",
    "Your eyes 👀💖",
    "Your laugh 😄",
    "Your heart 🤍",
    "Your chaos 😌"
  ];

  loveItems.forEach((t,i)=>{
    setTimeout(()=>{
      const c=document.createElement("div");
      c.className="card";
      c.innerText=t;
      loveList.appendChild(c);
    },i*700);
  });
}

// 📅 DATE PICKER
document.querySelectorAll("#dates .card").forEach(card=>{
  card.onclick=()=>{
    document.querySelectorAll("#dates .card").forEach(c=>c.classList.remove("selected"));
    card.classList.add("selected");
    dateResult.innerText="Perfect choice 😌💖";
  };
});

// 📸 FLIP
function flip(el){ el.classList.toggle("flipped"); }
