$(function () {
  wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 100,
    mobile: true,
    live: false,
  });

  wow.init();

  /** Typewriter effect - start */
  const sentencesMap = {
    greetings: "Hi! I'm",
    name: "Bruce Luk",
    job: "A Software Engineer.",
  };
  const dataText = Object.entries(sentencesMap);

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(key, text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector(`#${key}`).innerHTML =
        text.substring(0, i + 1) + '<span class="insertion-point" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(key, text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(function () {
        if (key !== "job") {
          // Remove the insertion point
          document.querySelector(`#${key}`).innerHTML = text;
        }

        fnCallback();
      }, 1000);
    }
  }

  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    // debugger;
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        for (const [key, _] of dataText) {
          document.querySelector(`#${key}`).innerHTML = " ";
        }

        StartTextAnimation(0);
      }, 10000);
    }
    // check if dataText[i] exists
    if (dataText[i] && i < dataText[i][1].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i][0], dataText[i][1], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }

  // start the text animation
  setTimeout(function () {
    StartTextAnimation(0);
  }, 1000);
  /** Typewriter effect - end */

  /** Responsive navbar */
  const maxWidth = $("#intro > div.wrapper > div").width();
  $("#header").width(maxWidth);

  $(window).on("resize", function () {
    // Code to execute when the element is resized
    const newWidth = $("#intro > div.wrapper > div").width();
    $("#header").width(newWidth);
  });
  /** Responsive navbar */

  const topHeight = $("#headerContainer").height();
  $("#intro").css("margin-top", topHeight);

  const chNavbar = () => {
    if (document.body.scrollTop > 54 || document.documentElement.scrollTop > 54) {
      $("body").removeClass("bg-primary");
      $("body").addClass("bg-neutral");
      $("#headerContainer").removeClass("bg-primary");
      $("#headerContainer").addClass("bg-neutral");
      $("#header").removeClass("bg-primary text-primary-content pt-4");
      $("#header").addClass("bg-neutral text-neutral-content");
      $("#navbox").removeClass("bg-primary text-primary-content shadow-neutral-600 w-80");
      $("#navbox").addClass("bg-neutral text-neutral-content shadow-neutral-900 w-60");
      // $("#header > div > a").removeClass("text-3xl btn-lg");
      // $("#header > div > a").addClass("text-2xl");
      $("header label").removeClass("btn-lg");
      $("header path").attr("stroke-width", "2");
      $("header path").attr("d", "M4 6h16M4 12h16M4 18h16");
      $("#nav-link a").removeClass("text-xl");
      $("#nav-link a").addClass("text-lg");
    } else {
      $("body").addClass("bg-primary");
      $("body").removeClass("bg-neutral");
      $("#headerContainer").addClass("bg-primary");
      $("#headerContainer").removeClass("bg-neutral");
      $("#header").addClass("bg-primary text-primary-content pt-4");
      $("#header").removeClass("bg-neutral text-neutral-content");
      $("#navbox").addClass("bg-primary text-primary-content shadow-neutral-600 w-80");
      $("#navbox").removeClass("bg-neutral text-neutral-content shadow-neutral-900 w-60");
      // $("#header > div > a").addClass("text-3xl btn-lg");
      // $("#header > div > a").removeClass("text-2xl");
      $("header label").addClass("btn-lg");
      $("header path").attr("stroke-width", "4");
      $("header path").attr("d", "M4 6h16M4 12h8m-8 6h16");
      $("#nav-link a").addClass("text-xl");
      $("#nav-link a").removeClass("text-lg");
    }
  };

  window.onscroll = () => {
    chNavbar();
  };

  $("#send-btn").click((e) => {
    $(".form-control input").val("");
    $(".form-control textarea").val("");
  });

  /** Progressive infinite horizontal scrolling animation - start */
  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller-inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
  /** Progressive infinite horizontal scrolling animation - end */
});
