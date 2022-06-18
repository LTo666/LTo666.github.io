$(function () {
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 54 ||
      document.documentElement.scrollTop > 54
    ) {
      $("#header").removeClass("bg-primary text-primary-content pt-4")
      $("#header").addClass("bg-neutral text-neutral-content")
      $("#navbox").removeClass("bg-primary text-primary-content shadow-neutral-600 w-80")
      $("#navbox").addClass("bg-neutral text-neutral-content shadow-neutral-900 w-60")
      $(".navbar-start > a").removeClass("text-3xl btn-lg")
      $(".navbar-start > a").addClass("text-xl")
      $("header label").removeClass("btn-lg")
      $("header path").attr("stroke-width", "2")
      $("header path").attr("d", "M4 6h16M4 12h16M4 18h16")
      // $("#navbox button").removeClass("btn-primary")
      // $("#navbox button").addClass("btn-netural")
    } else {
      $("#header").addClass("bg-primary text-primary-content pt-4")
      $("#header").removeClass("bg-neutral text-neutral-content")
      $("#navbox").addClass("bg-primary text-primary-content shadow-neutral-600 w-80")
      $("#navbox").removeClass("bg-neutral text-neutral-content shadow-neutral-900 w-60")
      $(".navbar-start > a").addClass("text-3xl btn-lg")
      $(".navbar-start > a").removeClass("text-xl")
      $("header label").addClass("btn-lg")
      $("header path").attr("stroke-width", "4")
      $("header path").attr("d", "M4 6h16M4 12h8m-8 6h16")
      // $("#navbox button").addClass("btn-primary")
      // $("#navbox button").removeClass("btn-neutral")
    }
  }

  window.onscroll = () => {
    scrollFunction()
  }
})
