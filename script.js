function generateSentence() {
    var animal = document.getElementById("animal").value;
    var adjective = document.getElementById("adjective").value;
    var action = document.getElementById("action").value;

    var sentence = "The " + adjective + " " + animal + " " + action + " around.";
    document.getElementById("output").innerText = sentence;
}