fetch("cards.html")
  .then(res => res.text())
  .then(data => {
    const container = document.getElementById("slide-container");
    container.innerHTML = data;


    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,   
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
    const goToStatic = document.getElementById("GoToStatic")
    const goToUIUX = document.getElementById("GoToUI"); 
    const goToCase = document.getElementById("GoToCase")
    const goToCoding = document.getElementById("GoToCoding")
    
    goToStatic.addEventListener('click', function(){
      swiper.slideTo(1,800)
    }); 

    goToUIUX.addEventListener('click', function(){
    swiper.slideTo(2,800); 
    }); 
    
    goToCase.addEventListener('click', function(){
      swiper.slideTo(3,800)
    }); 

    goToCoding.addEventListener('click', function(){
      swiper.slideTo(5,800)
    }); 

  });
