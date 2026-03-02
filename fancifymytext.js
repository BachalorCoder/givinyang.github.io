function makeBigger() {
  document.getElementById("userText").style.fontSize = "24pt";
}
function applyStyle() {
  const textArea = document.getElementById("userText");
  const fancy = document.getElementById("fancy").checked;
  if (fancy) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}
function moo() {
  const textArea = document.getElementById("userText");
  let text = textArea.value.toUpperCase();
  const parts = text.split(".");
  for (let i = 0; i < parts.length - 1; i++) {
    const sentence = parts[i].trim();
    if (sentence.length === 0) continue;
    const words = sentence.split(/\s+/);
    words[words.length - 1] = words[words.length - 1] + "-MOO";
    parts[i] = words.join(" ");
  }
  textArea.value = parts.join(".");
}