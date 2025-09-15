fetch("cards.html")
  .then(res => res.text())
  .then(data => {
    const container = document.getElementById("slide-container");
    container.innerHTML = data;


    new Swiper(".mySwiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
