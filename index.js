"use strict";

const menu = document.getElementById("nav-links");
const menuLinks = document.getElementsByClassName("nav-link");
const mainBlock = document.getElementsByTagName("main")[0];
const footerBlock = document.getElementsByTagName("footer")[0];
const hamburgerButton = document.getElementsByClassName("hamburger")[0];
$(menuLinks).css("opacity", 0);

function openMenu() {
  function fadeQueryMenuAnimation() {
    for (var i = 0; i < menuLinks.length; i++) {
      $(menuLinks[i])
        .delay(i * 150)
        .animate(
          { opacity: 1 },
          {
            duration: 400,
            complete: function () {
              $(this).stop();
            },
          }
        );
    }
  }

  function fadeOutMenuAnimation() {
    $(menu).fadeOut("slow");
  }

  function contentRemoving() {
    mainBlock.style.display = "none";
    footerBlock.style.display = "none";
    mainBlock.replaceWith(menu);
    fadeQueryMenuAnimation();

    menu.style.display = "block";
  }

  function contentAdding() {
    fadeOutMenuAnimation();
    menu.replaceWith(mainBlock);
    mainBlock.style.display = "block";
    footerBlock.style.display = "block";
    menu.style.display = "none";
  }

  if (menu.style.display === "block") {
    mainBlock.classList.remove("disappearance-animation");
    mainBlock.classList.add("appearacnce-animation");
    setTimeout(contentAdding, 200);
  } else {
    setTimeout(contentRemoving, 200);
    mainBlock.classList.remove("appearacnce-animation");
    mainBlock.classList.add("disappearance-animation");
  }
}
