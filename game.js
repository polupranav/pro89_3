function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br> Answer: <input type = 'text' id = 'check_box'>";
    check_button = "<br> <br><button onclick = 'check()' class = 'btn btn - info' > Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("outout").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}