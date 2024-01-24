$('.open').click(() => {
  $('aside').animate({ left: 0 }, 1000)

})

$('.closebtn').click(() => {
  const asideWidth = $('.aside-content').innerWidth()
  console.log(asideWidth)
  $('aside').animate({ left: `-${asideWidth}` }, 1000)
})



$('#sliderDown .toggle').click(()=>{
  $('.inner').not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});


