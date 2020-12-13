function calculation() {
    var inputA = parseInt(document.getElementById('inputA').value);
    var inputB = parseInt(document.getElementById('inputB').value);

    document.getElementById('output').innerHTML = inputA + inputB;
}



var start = new Date();
var startMilli = start.getTime();


function stopTime(){

  var stop = new Date();

  var stopMilli = stop.getTime();

  var diffMilli = stopMilli - startMilli;

  var diffSeconds = diffMilli/10000;

  alert("The number of minutes past is "+diffSeconds);
}
