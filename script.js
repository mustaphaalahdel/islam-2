new WOW().init();
let parent_html = document.getElementById("parent");
let langs = "";
function changePseudo(css) {
  let styleTag = document.getElementsByTagName("style")[0];
  if (styleTag == undefined) {
    styleTag = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(styleTag);
    styleTag = document.getElementsByTagName("style")[0];
  }
  if (styleTag.innerHTML.includes(css) == false) {
    styleTag.innerHTML += css;
  } else {
    styleTag.innerHTML = styleTag.innerHTML.replace(css, "");
    styleTag.innerHTML += css;
  }
}
for (i = 0; i < 100; i++) {
  langs += `<div id="lang${i}" class="lang lang${i}" onclick="langFun(${i});"> العربية </div>`;
}

function startUp() {
  parent_html.innerHTML = `
  <img src="ico.png" onclick="startUp();" alt="" class="logo" />
  <div class="btn-start">
    <div class="circle circle-4">
      <div class="circle circle-3">
        <div class="circle circle-2">
          <div class="circle-1" onclick="btnStart()"></div>
        </div>
      </div>
    </div>
  </div>
  `;
  loopShowCircles();
}
function loopShowCircles() {
  $(".circle-2")
    .delay(300)
    .animate(
      { borderColor: "rgba(255, 255, 255, 1)" },
      500,
      "linear",
      function () {
        $(".circle-3")
          .delay(0000)
          .animate(
            { borderColor: "rgba(255, 255, 255, 1)" },
            500,
            "linear",
            function () {
              $(".circle-4")
                .delay(0000)
                .animate(
                  { borderColor: "rgba(255, 255, 255, 1)" },
                  500,
                  "linear",
                  function () {
                    $(".circle-4")
                      .delay(500)
                      .animate(
                        { borderColor: "rgba(255, 255, 255, 0)" },
                        200,
                        "linear",
                        function () {
                          $(".circle-3")
                            .delay(000)
                            .animate(
                              { borderColor: "rgba(255, 255, 255, 0)" },
                              200,
                              "linear",
                              function () {
                                $(".circle-2")
                                  .delay(000)
                                  .animate(
                                    {
                                      borderColor: "rgba(255, 255, 255, 0)",
                                    },
                                    200,
                                    "linear",
                                    function () {
                                      loopShowCircles();
                                    }
                                  );
                              }
                            );
                        }
                      );
                  }
                );
            }
          );
      }
    );
}
function btnStart() {
  $("img.logo")
    .delay(000)
    .animate(
      {
        right: "0%",
        bottom: "0%",
      },
      {
        step: function (now, fx) {
          $(this).css(
            "transform",
            "translate(var(--lineWidthBorder), var(--lineWidthBorder)) scale(1)"
          );
          $(this).css("transition", "1s");
          $(this).css("transition-timing-function", "linear");
        },
      },
      "linear"
    );

  changePseudo(`
  .parent::before {
    opacity: 1;
  }
  .parent::after {
    opacity: 1;
  }
  `);

  $(".btn-start")
    .delay(000)
    .animate({ opacity: 0 }, 1000, "linear", function () {
      this.remove();
    });

  // languages ____________________________
  let frame_langs_html = document.createElement("div");
  frame_langs_html.id = "frame-langs";
  frame_langs_html.classList.add(
    "frame-langs",
    "wow",
    "fadeInDownBig",
    "animated"
  );
  parent_html.append(frame_langs_html);
  console.log(langs);
  document.getElementById("frame-langs").innerHTML = `${langs}`;
}
function langFun(i) {
  let element = document.getElementById("lang" + i);
  element.style.cssText = `transform: scale(3); opacity: 0; `;
  $(".lang").delay(00).animate({ opacity: 0 });
  setTimeout(() => {
    document.getElementById("frame-langs").remove();
    let welcome_html = document.createElement("div");
    welcome_html.classList.add("welcome");
    welcome_html.textContent = "مــرحــبــا";
    parent_html.append(welcome_html);
    setTimeout(() => {
      welcome_html.remove();
      let sections_html = document.createElement("div");
      sections_html.classList.add("sections");
      sections_html.setAttribute("dir", "rtl");
      sections_html.innerHTML = `
      <section class="child child-1" onclick="onClickSection(this)">
        <img class="img" src="images/1.jpg" alt="" />
        <div class="txt txt-1">الأطفال</div>
      </section>
      <section class="child child-2" onclick="onClickSection(this)">
        <img class="img" src="images/2.jpg" alt="" />
        <div class="txt txt-2">لوحات</div>
      </section>
      <section class="child child-3" onclick="onClickSection(this)">
        <img class="img" src="images/3.jpg" alt="" />
        <div class="txt txt-3">فديو</div>
      </section>
      <section class="child child-4" onclick="onClickSection(this)">
        <img class="img" src="images/4.jpg" alt="" />
        <div class="txt txt-4">مسابقة</div>
      </section>
      <section class="child child-5" onclick="onClickSection(this)">
        <img class="img" src="images/5.jpg" alt="" />
        <div class="txt txt-5">موضوعات</div>
      </section>
        `;
      parent_html.append(sections_html);
    }, 4000);
  }, 1500);
}
function onClickSection(item) {
  if (!item.className.includes("full-child")) {
    item.children[0].style.cssText = `
    transition: 2s;
    -webkit-mask-position: 0% 0%;
    mask-position: 0% 0%;
    `;
    item.children[1].style.cssText = `
    animation-name: moveUpTxt;
    `;
    item.classList.add("full-child");
    let siblings = item.parentElement.children;
    for (i = 0; i < siblings.length; i++) {
      if (siblings[i] != item) {
        siblings[i].classList.add("fade-children");
      }
    }
  } else {
    item.children[0].style.cssText = `
    transition: 1s;
    -webkit-mask-position: 0% 50%;
    mask-position: 0% 50%;
    `;
    item.children[1].style.cssText = `
    animation-name: moveDownTxt;
    `;
    item.classList.remove("full-child");
    let siblings = item.parentElement.children;
    for (i = 0; i < siblings.length; i++) {
      if (siblings[i] != item) {
        siblings[i].classList.remove("fade-children");
      }
    }
  }
}

$(document).ready(startUp());
