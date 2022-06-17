$(function () {
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
      $('header path').attr("d", "M4 6h16M4 12h16M4 18h16")
      $('div.menu a').removeClass("text-2xl")
      $('div.menu a').addClass("btn-sm text-lg")
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
      $('header path').attr("d", "M4 6h16M4 12h8m-8 6h16")
      $('div.menu a').addClass("text-2xl")
      $('div.menu a').removeClass("btn-sm text-lg")
      $('#navbox button').addClass('btn-primary')
    }
  }

  window.onscroll = () => {
    scrollFunction()
  }
})
