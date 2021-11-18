'use strict';
var model_html = "\n<div id=\"mymyCustomModal\" class=\"myCustomModal\">\n  <div class=\"myCustomModal-content\">\n    <span class=\"close\">&times;</span>\n    <p align=center>Some text in the myCustomModal..</p>\n  </div>\n</div>\n";
(function () {
    var newHTML = document.createElement('div');
    newHTML.innerHTML = model_html;
    document.body.prepend(newHTML);
    // anwser haven't been loads yet
    var anwsers = document.getElementsByClassName("answer");
    var myCustomModal = document.getElementById("mymyCustomModal");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        myCustomModal.style.display = "none";
    };
    var _loop_1 = function (i) {
        anwser = anwsers[i];
        button = document.createElement("input");
        button.classList.add("my-custom-btn");
        button.type = "button";
        button.value = "Try Click This!";
        button.onclick = function () {
            fetch('https://www.baidu.com')["catch"](function (err) { console.log(err); }).then(function (r) { return console.log(r); });
            // anwser haven been loaded when you click the button
            var new_answer = document.getElementsByClassName("answer")[i];
            myCustomModal.getElementsByTagName("p")[0].innerText = new_answer.innerText;
            console.log(new_answer.innerText);
            myCustomModal.style.display = "block";
        };
        anwser.prepend(button);
    };
    var anwser, button;
    // alert('Hello Wor22sqwerwqeld2!sdf12sd12ssds322');
    for (var i = 0; i < anwsers.length; i++) {
        _loop_1(i);
    }
})();
var css = "\n.my-custom-btn {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  appearance: none;\n  background-color: #2ea44f;\n  border: 1px solid rgba(27, 31, 35, .15);\n  border-radius: 6px;\n  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: -apple-system,system-ui,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  padding: 6px 16px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n\n.my-custom-btn:focus:not(:focus-visible):not(.focus-visible) {\n  box-shadow: none;\n  outline: none;\n}\n\n.my-custom-btn:hover {\n  background-color: #2c974b;\n}\n\n.my-custom-btn:focus {\n  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;\n  outline: none;\n}\n\n.my-custom-btn:disabled {\n  background-color: #94d3a2;\n  border-color: rgba(27, 31, 35, .1);\n  color: rgba(255, 255, 255, .8);\n  cursor: default;\n}\n\n.my-custom-btn:active {\n  background-color: #298e46;\n  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;\n}\n\n\n.myCustomModal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 9999; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n  /* myCustomModal Content/Box */\n  .myCustomModal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n  }\n  \n  /* The Close Button */\n  .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  }\n";
// tempermonkey inner function to add css to page
var GM_addStyle;
GM_addStyle(css);
