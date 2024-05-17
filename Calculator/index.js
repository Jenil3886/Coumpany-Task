// Function that display value
function dis(val) {
  document.getElementById("result").value += val;
}

function myFunction(event) {
  const display = document.getElementById("result");
  if (
    display?.value !== "0" &&
    (event.key == "0" ||
      event.key == "1" ||
      event.key == "2" ||
      event.key == "3" ||
      event.key == "4" ||
      event.key == "5" ||
      event.key == "6" ||
      event.key == "7" ||
      event.key == "8" ||
      event.key == "9" ||
      event.key == "+" ||
      event.key == "-" ||
      event.key == "*" ||
      event.key == "/")
  )
    document.getElementById("result").value += event.key;
}

var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
  if (event.keyCode === 13) {
    console.log("Enter");
    let x = document.getElementById("result").value;
    console.log(x);
    solve();
  }
};

// Function that evaluates the digit and return result
function solve() {
  let x = document.getElementById("result").value;

  let y = eval(x);
  document.getElementById("result").value = y;
}

// Function that clear the display
function clr() {
  document.getElementById("result").value = "0";
}

function del() {
  var value = document.getElementById("result").value;
  document.getElementById("result").value =
    value.length === 1 ? 0 : value.substring(0, value.length - 1);
}
