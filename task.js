"use strict";
//
let getLeftLink = document.getElementsByClassName("left-link");
// let getRightLink = doucment.getElementsByClassName("right-link");
let getRightBox = document.getElementById("right-box");
let getLeftBox = document.getElementById("left-box");
let getClassText = document.getElementsByClassName("text");
let getClickButton = document.getElementById("click-button");
let hoge = document.querySelectorAll(".left-link");

for (let i = 0; i < getLeftLink.length; i++) {
  //
  getLeftLink[i].addEventListener(
    "click",
    function () {
      //
      let deleteTarget = this.parentNode;
      deleteTarget.remove();
      console.log(this.innerHTML);
      let Pcreate = document.createElement("p");
      let ankerCreate = document.createElement("a");
      getRightBox.appendChild(Pcreate);
      Pcreate.appendChild(ankerCreate);
      ankerCreate.href = "#";
      ankerCreate.innerHTML = this.innerHTML;
      ankerCreate.addEventListener(
        "click",
        function () {
          //
          console.log(this.innerHTML);
          this.parentNode.remove();
          let Pcreate = document.createElement("p");
          let ankerCreate = document.createElement("a");
          getLeftBox.appendChild(Pcreate);
          Pcreate.appendChild(ankerCreate);
          ankerCreate.href = "#";
          ankerCreate.innerHTML = this.innerHTML;
          ankerCreate.addEventListener(
            "click",
            function () {
              this.parentNode.remove();
              let Pcreate = document.createElement("p");
              let ankerCreate = document.createElement("a");
              getRightBox.appendChild(Pcreate);
              Pcreate.appendChild(ankerCreate);
              ankerCreate.href = "#";
              ankerCreate.innerHTML = this.innerHTML;
            },
            false
          );
        },
        false
      );
    },
    false
  );
}
