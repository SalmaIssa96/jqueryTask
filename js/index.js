$('.open').click(() => {
  $('aside').animate({ left: 0 }, 1000);
});

$('.closebtn').click(() => {
  const asideWidth = $('.aside-content').innerWidth();
  console.log(asideWidth);
  $('aside').animate({ left: `-${asideWidth}` }, 1000);
});

$('#sliderDown .toggle').click(function () {
  $('.inner').not($(this).next()).slideUp(500);
  console.log($('.inner').not($(this).next()));
  $(this).next().slideToggle(500);
});

window.onload = () => {
  countDownToTime('13 august 2024 8:54:00');
};

const countDownToTime = (countTo) => {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $('.days').html(`${days} D`);
  $('.hours').html(`${hours} h`);
  $('.minutes').html(`${mins} m`);
  $('.seconds').html(`${secs} s`);

  setInterval(() => {
    countDownToTime(countTo);
  }, 1000);
};

let maxLength = 100;
$('textarea').keyup(function () {
  const length = $(this).val().length;
  const AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $('#chars').text('your available character finished');
  } else {
    $('#chars').text(AmountLeft);
  }
});
