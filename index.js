document.getElementById("calculateBtn").addEventListener("click", function() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sum = num1 + num2;

  document.getElementById("resultText").innerText = "The sum is: " + sum;
  
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});
