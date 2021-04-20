// Scroll Yakor

function scrollDownUp(id){
    var offset = 0;
    $('html, body').animate({
      scrollTop: $(id).offset ().top - offset
    }, 500);
    return false;
  };
  


// Back to top button ::



var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// Block Card Next


const arrowNext = document.querySelector('#arrowNext');
const blockCard = document.querySelectorAll('.block_card__');
const blockCardNext = document.querySelectorAll('.block_card_next');


arrowNext.addEventListener('click', () => {


  for (card of blockCard) {

    card.style.display = (card.style.display == 'none') ? 'inline-block' : 'none';
    
    for (cardNext of blockCardNext) {

      cardNext.style.display = (card.style.display == 'none') ? 'inline-block' : 'none';

     }

  }

  


})