$('#slider').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    800: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
})