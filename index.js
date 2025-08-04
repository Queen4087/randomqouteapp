const quotes = [
  { content: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { content: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { content: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { content: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { content: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" }
];

const colors = ["#e91e63", "#673ab7", "#3f51b5", "#009688", "#ff5722", "#4caf50", "#00bcd4", "#9c27b0"];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteBox = document.getElementById("quote-box");
const quoteButton = document.getElementById("quote-button");
const body = document.body;

quoteButton.addEventListener("click", () => {
  quoteBox.classList.add("fade-quote");

  setTimeout(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Update quote and author
    quoteText.textContent = `"${randomQuote.content}"`;
    quoteAuthor.textContent = `— ${randomQuote.author}`;

    // Change background and button color
    body.style.backgroundColor = randomColor;
    quoteButton.style.backgroundColor = randomColor;
    quoteText.style.color = randomColor;
    quoteAuthor.style.color = randomColor;

    quoteBox.classList.remove("fade-quote");
  }, 600);
});
