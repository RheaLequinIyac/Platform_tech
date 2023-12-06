var checkButton = document.getElementById("checkPalindrome");
var resetButton = document.getElementById("resetButton");

function isPalindrome(str) {
  'use strict';
  
  str = str.replace(/[^a-z0-9]+/gi, "").toLowerCase();
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

checkButton.addEventListener("click", function() {
  'use strict';
  
  var value = document.getElementById("inputPalindrome").value;
  var notification = document.getElementById("notification");
  
  if (!value) {
    alert("Please enter a word or phrase.");
    return;
  }

  if(isPalindrome(value)) {
    notification.innerHTML = "Yey! That's a Palindrome";
    notification.className = "alert alert-success";
  } else {
    notification.innerHTML = "Ain't no palindrome";
    notification.className = "alert alert-danger";
  }
});
resetButton.addEventListener("click", function() {
  document.getElementById("inputPalindrome").value = "";
  document.getElementById("notification").innerHTML = "";
  document.getElementById("notification").className = "";
});