$(function () {
  window.onscroll = () => {
    scrollFunction()
  }

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 54 ||
      document.documentElement.scrollTop > 54
    ) {
      $('#header').removeClass("bg-primary text-primary-content pt-4")
      $('#header').addClass("bg-neutral text-neutral-content")
      $('#navbox').removeClass("bg-primary shadow-neutral-600")
      $('#navbox').addClass("bg-neutral shadow-neutral-900")
      $('.navbar-start > a').removeClass("text-3xl btn-lg")
      $('.navbar-start > a').addClass("text-xl")
      $('header label').removeClass("btn-lg")
      $('header path').attr("stroke-width", "2")
      $('ul.menu a').removeClass("text-2xl")
      $('ul.menu a').addClass("btn-sm text-lg")
      $('#navbox button').removeClass('btn-primary')
    } else {
      $('#header').addClass("bg-primary text-primary-content pt-4")
      $('#header').removeClass("bg-neutral text-neutral-content")
      $('#navbox').addClass("bg-primary shadow-neutral-600")
      $('#navbox').removeClass("bg-neutral shadow-neutral-900")
      $('.navbar-start > a').addClass("text-3xl btn-lg")
      $('.navbar-start > a').removeClass("text-xl")
      $('header label').addClass("btn-lg")
      $('header path').attr("stroke-width", "4")
      $('ul.menu a').addClass("text-2xl")
      $('ul.menu a').removeClass("btn-sm text-lg")
      $('#navbox button').addClass('btn-primary')
    }
  }
})
