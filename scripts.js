const messages = [
  { text: "...", emoji: "&#x25FD;&#x25FD;&#x25FD;", time: 1000 },
  { text: "Crazy?", emoji: "&#x1F635;", time: 2000 },
  { text: "I Was Crazy Once.", emoji: "&#x1F61C;", time: 500 },
  { text: "They Locked Me In A Room.", emoji: "&#x1F512;", time: 2000 },
  { text: "A Rubber Room.", emoji: "&#x1F3E5;", time: 500 },
  { text: "A Rubber Room With Rats.", emoji: "&#x1F400;", time: 2000 },
  { text: "And Rats Make Me Crazy.", emoji: "&#x1F921;", time: 1000 },
];

let messageIndex = 0;
let textElement = document.getElementById("text");
let emojiElement = document.getElementById("emoji");

function printWithTypewriterEffect() {
  if (messageIndex < messages.length) {
    const message = messages[messageIndex];
    let text = message.text;
    let emoji = message.emoji;
    let time = message.time;

    let index = 0;

    function type() {
      if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        emojiElement.innerHTML = emoji;
        index++;
        setTimeout(type, 90);
      } else {
        setTimeout(() => {
          textElement.innerHTML = "";
          emojiElement.innerHTML = "";
          messageIndex = (messageIndex + 1) % messages.length; // Loop back to the beginning
          printWithTypewriterEffect();
        }, time);
      }
    }

    type();
  }
}

printWithTypewriterEffect();
