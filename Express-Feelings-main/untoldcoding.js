const text =
  "My Dearest Mahal, I hope this letter finds you in good spirits. As I sit down to write to you, my heart is filled with emotions that I want to express—emotions of love, remorse, and a longing for the beautiful future that awaits us.I want to start by saying how truly sorry I am for any hurt or disappointment I may have caused you. It was never my intention to make you feel anything less than cherished. You mean the world to me, and the thought of causing you pain weighs heavily on my heart. Please know that I am committed to doing better, to being the partner you deserve.....";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
