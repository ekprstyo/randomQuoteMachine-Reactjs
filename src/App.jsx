import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  let quotes;

  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  )
    .then((response) => response.json())
    .then((iresponse) => {
      quotes = iresponse;
      getQuote();
    });

  function getRandomQuote() {
    return quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
  }

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function getQuote() {
    const randomQuote = getRandomQuote();
    const randomColor = getRandomColor();

    const text = document.querySelector("#text");
    text.innerHTML = `${randomQuote.quote}`;

    const author = document.getElementById("author");
    author.innerHTML = `${randomQuote.author}`;

    const body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = `${randomColor}`;

    const color = document.querySelectorAll(".randomColor");
    for (let i = 0; i < color.length; i++) {
      color[i].style.backgroundColor = `${randomColor}`;
    }

    let colorFont = document.querySelectorAll(".randomColorFont");
    for (let i = 0; i < colorFont.length; i++) {
      colorFont[i].style.color = `${randomColor}`;
    }
  }

  return (
    <>
      <main id="quote-box">
        <FontAwesomeIcon icon={faQuoteLeft} className="randomColorFont" />
        <p id="text" className="randomColorFont"></p>
        <p id="author" className="randomColorFont"></p>
        <div className="btnContainer">
          <div className="socmedBtn">
            <a href="" className="randomColor">
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
            </a>
            <a href="" className="randomColor">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#ffffff" }}
              />
            </a>
          </div>
          <div className="newQuoteBtn">
            <button
              id="newQuote"
              className="randomColor"
              type=""
              onClick={getQuote}
            >
              New Quote
            </button>
          </div>
        </div>
      </main>
      <footer>
        <a href="">by Seablue</a>
      </footer>
    </>
  );
}

export default App;
