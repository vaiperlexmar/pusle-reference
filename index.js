"use strict";

const menu = document.getElementById("nav-links");
const menuLinks = document.getElementsByClassName("nav-link");
const mainBlock = document.getElementsByTagName("main")[0];
const footerBlock = document.getElementsByTagName("footer")[0];
$(menuLinks).css("opacity", 0);

function openMenu() {
  function contentRemoving() {
    mainBlock.style.display = "none";
    footerBlock.style.display = "none";
    mainBlock.replaceWith(menu);
    menu.classList.remove("disappearance-animation");

    for (var i = 0; i < menuLinks.length; i++) {
      $(menuLinks[i])
        .delay(i * 150)
        .animate({ opacity: 1 }, 400);
    }
    menu.style.display = "block";
  }

  function contentAdding() {
    menu.replaceWith(mainBlock);
    mainBlock.style.display = "block";
    footerBlock.style.display = "block";
    menu.style.display = "none";
    menu.classList.add("disappearance-animation");
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
