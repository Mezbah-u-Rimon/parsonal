
//--------------mobile menu start----------------//

$('.hide').hide();
$('.responsive-menu').hide();



$('.show').click( function (){
  $('.responsive-menu').slideDown(1000);
  $('.show').hide();
  $('.hide').show();
});



$('.hide').click( function (){
  $('.responsive-menu').slideUp(1000);
  $('.hide').hide();
  $('.show').show();
});


//--------------mobile menu close----------------//













//------------portfolio section start------------------//

$('.all-b').hide();
$('.hide-a').hide();


$('.st').click( function (){
  $('.hide-a').slideToggle(2000);
 
});



$('.all').click( function (){
  $('.all-a').slideDown(1000);
  $('.st').show();
  $('.all-b').hide();

});



$('.house').click( function (){
  $('.house-a').slideDown(1000);
  $('.resturent-a').hide();
  $('.travels-a').hide();
  $('.doctor-a').hide();
  $('.act-a').hide();
  $('.st').hide();

});


$('.resturent').click( function (){
  $('.resturent-a').slideDown(1000);
  $('.house-a').hide();
  $('.travels-a').hide();
  $('.doctor-a').hide();
  $('.act-a').hide();
  $('.st').hide();

});


$('.travels').click( function (){
  $('.travels-a').slideDown(1000);
  $('.house-a').hide();
  $('.resturent-a').hide();
  $('.doctor-a').hide();
  $('.act-a').hide();
  $('.st').hide();

});


$('.doctor').click( function (){
  $('.doctor-a').slideDown(1000);
  $('.house-a').hide();
  $('.resturent-a').hide();
  $('.travels-a').hide();
  $('.act-a').hide();
  $('.st').hide();

});




$('.act').click( function (){
  $('.act-a').slideDown(1000);
  $('.house-a').hide();
  $('.resturent-a').hide();
  $('.travels-a').hide();
  $('.doctor-a').hide();
  $('.st').hide();

});




//------------portfolio section close------------------//





//-----------------AOS section start-----------------//

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//-----------------AOS section close-----------------//














//-------------------------portfolio section start------------------------//

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

//-------------------------portfolio section close------------------------//
