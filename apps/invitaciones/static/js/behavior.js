window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('.header-content-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.header-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.header-btn', {
    duration: 2000,
    delay: 1000, 
    origin: 'bottom'
});

sr.reveal('#testimonial div', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});
/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
    });
});
*/
$(function(){
    $('#countdown').countdown({
      timezone: -3,
      year: 2023, // YYYY Format
      month: 11, // 1-12
      day: 11, // 1-31
      hour: 17, // 24 hour format 0-23
      minute: 0, // 0-59
      second: 0, // 0-59
    });
  });

  $(function(){
    $('#countdown').countdown({
      onFinish: function () { 
        // Do something
      } 
    });
  });

  $(window).scroll(function(){         
    $('.container div, .container p').each(function(){
        var scrollTop     = $(window).scrollTop(),
        elementOffset = $(this).offset().top,
        distance      = (elementOffset - scrollTop),
        windowHeight  = $(window).height(),
        breakPoint    = windowHeight*0.9;
          
  
        if(distance > breakPoint) {
          $(this).addClass("more-padding"); 
        }  if(distance < breakPoint) {
          $(this).removeClass("more-padding");  
        }

        breackCard    = windowHeight*1.2;
        if (scrollTop > breackCard) {
          $(".card").addClass("slide-up");
        }else if (scrollTop < breackCard) {
          $(".card").removeClass("slide-up");
        }
    });
  });

  $(document).ready(function(){
    $("#tittlewedding").hide().slideDown(1200);
    $("#subTittlewedding").hide().slideDown(1200);
    $("#countdown").hide().slideDown(1200);
    $(".sticky-top img").css("width", "0px");
    $(".sticky-top img").animate({width: '60%'}, 2000);
  });
  
  function getPlace(){
    let item = 'Las+Cortaderas/@-34.3778849,-58.6672117,17z/data=!3m1!4b1!4m6!3m5!1s0x95bca1620ee747f7:0xbd50d5eee0999156!8m2!3d-34.3778849!4d-58.6672117!16s%2Fg%2F11h7c4snj7?entry=ttu'
    if(item){
      //window.open('https://google.cl/maps/place/'+item);
      window.open('https://google.cl/maps/search/?api=1&query=Las+Cortaderas+-+Espacio+para+Eventos+Sociales+y+Corporativos+-+Fiestas,+Casamientos+y+Cumpleaños');
    }  
    return false; //No ejecutar el evento.
  }
  //a revisar
  let tittlewedding = ['Kevin + Belen ', 'Te Invitamos a Compartir '];
  let subTittlewedding = ['11 De Noviembre 2023', 'Este Gran Momento Con Nosotros'];
  let n = 0; //un contador utilizado como index del array texto1 y texto2
  setInterval (function () {
    $("#tittlewedding").fadeOut(function() {
        $(this).html(tittlewedding [n%tittlewedding.length]).fadeIn();
    });
    $("#subTittlewedding").fadeOut(function() {
        $(this).html(subTittlewedding [n%subTittlewedding.length]).fadeIn();
    });
    n++;
}, 10000);
  