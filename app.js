const demoText =`My name is Adil Rahman, and I am a young individual from Bangladesh who is currently pursuing a diploma in Computer Science and Technology. I was born on the 21st of February, 2005, in a loving and supportive family. From an early age, I developed a keen interest in technology and computers. I have always been fascinated by programming, web development, and software creation. Among my favorite subjects are Java programming, web design, and learning about new software tools and technologies.

In terms of education, I am focused, diligent, and motivated. I firmly believe that education is the most valuable asset in life, and by learning something new every day, one can constantly improve oneself. Alongside my diploma coursework, I practice coding independently, work on projects, and explore new technologies to enhance my skills. I also participate in online tutorials, coding challenges, and competitions to further develop my abilities.

I consider myself a creative and analytical person. Since childhood, I have enjoyed solving problems and facing challenges. Whenever I encounter a problem, I patiently analyze it and approach it step by step until I find a solution. This problem-solving mindset applies not only to programming or computer projects but also to everyday life. I always strive to think logically and calmly in any situation, which helps me make better decisions.

Outside of academics, I have several hobbies and interests. I enjoy watching movies, listening to music, and reading articles about technology. I particularly enjoy listening to Bangla songs. I also like spending time with friends, meeting new people, and building meaningful relationships. I strongly value my friends and family, and I believe maintaining these relationships is essential for a balanced life.

I am also health-conscious and maintain a regular fitness routine. I exercise regularly and try to follow a healthy diet because I believe that a healthy body supports a healthy mind. Along with physical fitness, I focus on strengthening my confidence and mental resilience by setting personal goals and working steadily towards achieving them.

Looking ahead, my aspiration is to become a skilled and creative software engineer. I want to develop software and websites that bring ease and convenience to people’s lives. To achieve this, I am continuously working to improve my academic and professional skills. I believe that hard work, patience, and creative thinking can make a significant difference in life and in society.

In summary, I am a motivated, creative, technology-loving, and hardworking individual. I constantly seek to learn new things and improve myself. My ultimate goal is to contribute positively to society, advance my own skills, and use technology to make a meaningful impact on the lives of others.`;

const searchInput = document.getElementById("input-search");
const checkBtn = document.getElementById("check-btn");
const matchCount = document.getElementById("match-count");
const wordCount = document.getElementById("word-count");
const messageBox = document.getElementById("message-box");
const demoGenBtn = document.getElementById("demo-genarate-btn");
const clearTextBtn = document.getElementById("clear-btn");
const errorMessage = document.getElementById("error-mssg");
const caseSensitiveBtn = document.getElementById("caseSensitiveBtn");
const highlithColorBtn = document.getElementById("highlithColorBtn");

// Validation
const validationForInput = (e) => {
  if (!e.value) {
    e.classList.add("error");
    return;
  } else {
    e.classList.remove("error");
  }
};

// validation added
searchInput.addEventListener("input", () => {
  validationForInput(searchInput);
});

// Word count
const countWord = (text) => {
  wordCount.textContent = `Total Characters: ${text.length}`;
};

// Demo generate
demoGenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  messageBox.innerHTML = demoText;
  countWord(messageBox.innerText);
});

// Clear
clearTextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  errorMessage.style.display = "none";
  searchInput.value = "";
  messageBox.innerHTML = "";
  searchInput.classList.remove("error");
  matchCount.textContent = "Match Found: 0";
  countWord(messageBox.innerText);
});

// Check button
checkBtn.addEventListener("click", () => {
  validationForInput(searchInput);
  highlightMatchText();
});

// input event handle
messageBox.addEventListener("input", () => {
  if (messageBox.innerText.trim() === "") {
    wordCount.textContent = "Total Characters: 0";
    matchCount.textContent = "Match Found: 0";
    errorMessage.style.display = "none";
  } else {
    countWord(messageBox.innerText);
  }
});



// Highlight function
function highlightMatchText() {
  let inputVal = searchInput.value.trim();
  if (!inputVal) return;

  let flags = caseSensitiveBtn.checked ? "g" : "gi";
  let regex = new RegExp(inputVal, flags);

  let color = highlithColorBtn.value;

  let text = messageBox.innerText;
  let matches = text.match(regex);

  if (matches) {
    let highlighted = text.replace(regex, (match) => {
      return `<span style="background-color:${color};color:#fff">${match}</span>`;
    });

    messageBox.innerHTML = highlighted;
    errorMessage.style.display = "none";
    matchCount.textContent = `Match Found: ${matches.length}`;
  } else {
    messageBox.innerHTML = text;
    errorMessage.style.display = "flex";
    matchCount.textContent = "Match Found: 0";
  }
}

// key events
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    highlightMatchText();
  }
});
