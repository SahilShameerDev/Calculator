// Function To update the number in screem
function btnclick(number) {
  document.getElementById("result").innerHTML += number;
}
function clearScreen() {
  document.getElementById("result").innerHTML = "";
}
function equal() {
  number = document.getElementById("result").textContent;
  result = eval(number)
  document.getElementById("result").innerHTML = result;
}
function del() {
    number = document.getElementById("result").textContent;
    newnum = number.substring(0, number.length - 1);
    document.getElementById("result").innerHTML = newnum;

}
