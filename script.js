$('.menu-toggle').on('click', () => $('.navbar__links').toggleClass('active'))
$('#button-scroll').on('click', () => $('#waiting-list')[0].scrollIntoView({ behavior: 'smooth' }))
$('.close-button, #modal-ok').on('click', () => $('#modal').addClass('hidden'))

$('.features-menu li').on('click', function () {
  var target = $(this).data('feature')

  $('.features-menu li').removeClass('active')
  $(this).addClass('active')

  $('.feature-img img, .feature-text div').hide()
  $('.feature-img img[data-feature="' + target + '"], .feature-text div[data-feature="' + target + '"]').fadeIn(200)
})

$('#waiting-list__form').on('submit', async e => {
  e.preventDefault()
  $('#modal').removeClass('hidden')

  try {
    await fetch('https://script.google.com/macros/s/AKfycbx4GSDpJtgvK8eeZqPzFzjqh9s6m5ZuSZot0uYypuX8xV_p3WTTiz9vB4PXbKxrQ2ck/exec', {
      method: 'POST',
      body: new URLSearchParams({ email: $('#email').val().trim() })
    })
    $('#waiting-list__form')[0].reset()
  } catch (e) {
    $('#form-status').text('Something went wrong, please try again later!')
    console.error(e)
  }
})

$(function() {
  $(() => $('#year').text(new Date().getFullYear()))

  $('.faq-question').click(function() {
    var $answer = $(this).next('.faq-answer')
    $('.faq-answer').not($answer).slideUp()
    $answer.stop(true, true).slideToggle()
  })
})
