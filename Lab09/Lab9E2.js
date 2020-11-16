var age = prompt("What is your age?");

  var currentyear = new Date().getFullYear();

  var birthyear = currentyear - age;

document.getElementById('output').innerHTML=birthyear;
