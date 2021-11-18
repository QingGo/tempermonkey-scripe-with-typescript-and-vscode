'use strict';

const model_html: string = `
<div id="mymyCustomModal" class="myCustomModal">
  <div class="myCustomModal-content">
    <span class="close">&times;</span>
    <p align=center>Some text in the myCustomModal..</p>
  </div>
</div>
`;

(function () {
  var newHTML = document.createElement('div');
  newHTML.innerHTML = model_html;
  document.body.prepend(newHTML);

  // anwser haven't been loads yet
  let anwsers = document.getElementsByClassName("answer");
  var myCustomModal = document.getElementById("mymyCustomModal") as HTMLDivElement;
  var span = document.getElementsByClassName("close")[0] as HTMLSpanElement;
  span.onclick = () => {
    myCustomModal.style.display = "none";
  }
  // alert('Hello Wor22sqwerwqeld2!sdf12sd12ssds322');
  for (let i = 0; i < anwsers.length; i++) {
    var anwser = anwsers[i] as HTMLDivElement;
    var button = document.createElement("input");
    button.classList.add("my-custom-btn");
    button.type = "button";
    button.value = "Try Click This!";
    button.onclick = () => {
      fetch('https://www.baidu.com').catch(
        (err) => { console.log(err); }).then(r => console.log(r));
      // anwser haven been loaded when you click the button
      var new_answer = document.getElementsByClassName("answer")[i] as HTMLDivElement;
      myCustomModal.getElementsByTagName("p")[0].innerText = new_answer.innerText;
      console.log(new_answer.innerText);
      myCustomModal.style.display = "block";
    };
    anwser.prepend(button);
  }
})();

const css: string = `
.my-custom-btn {
    position: absolute;
    top: 50%;
    left: 50%;
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.my-custom-btn:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.my-custom-btn:hover {
  background-color: #2c974b;
}

.my-custom-btn:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.my-custom-btn:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.my-custom-btn:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}


.myCustomModal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 9999; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* myCustomModal Content/Box */
  .myCustomModal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }
  
  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
// tempermonkey inner function to add css to page
var GM_addStyle: any;
GM_addStyle(css);