// // // console.log("javascript running");
// // //
// // // document.addEventListener("DOMContentLoaded", function() {
// // //   console.log("DOM loaded");
// // // });
// //
// //

var stopWatch = 10
var countDown = 'off'
var timer

$('.reset').on('click', restartPress)

function updateTime () {
  stopWatch--
  updateTimeDisplay()
  explosion()
}

function updateTimeDisplay () {
  $('#timer').text('00:00:' + stopWatch)
}

function restartPress () {
  if (countDown === 'off') {
    stopWatch = 10
    $('#uncut-blue').css('background-image', "url('img/uncut-blue-wire.png')")
    $('#uncut-red').css('background-image', "url('img/uncut-red-wire.png')")
    $('#uncut-green').css('background-image', "url('img/uncut-green-wire.png')")
    $('#uncut-white').css('background-image', "url('img/uncut-white-wire.png')")
    $('#uncut-yellow').css('background-image', "url('img/uncut-yellow-wire.png')")
    $('.unexploded').css('background-image', "url('img/simcity.jpg')")
    updateTimeDisplay()
    timer = setInterval(updateTime, 1000)
    countDown = 'on'
    gameLogic()

    console.log('countDown on')
  }
}

function explosion () {
  if (stopWatch === 0) {
    clearInterval(timer)
    $('.unexploded').css('background-image', "url('img/explosion.jpg')",
      'background-repeat', 'no-repeat')
    countDown = 'off'
    console.log('gameover')
    $('#timer').text('you die')
  }
}

function gameLogic () {
  if (countDown === 'on') {
    var correctLine = Math.floor(Math.random() * 2)
    var blueLine
    var greenLine
    var redLine
    var whiteLine
    var yellowLine

    $('#uncut-blue').on('click', function () {
      blueLine = Math.floor(Math.random() * 2)
      $(this).css('background-image', "url('img/cut-blue-wire.png')")
      dieOrLive()
    })
    $('#uncut-green').on('click', function () {
      greenLine = Math.floor(Math.random() * 2)
      $(this).css('background-image', "url('img/cut-green-wire.png')")
      dieOrLive()
    })
    $('#uncut-red').on('click', function () {
      redLine = Math.floor(Math.random() * 2)
      $(this).css('background-image', "url('img/cut-red-wire.png')")
      dieOrLive()
    })
    $('#uncut-white').on('click', function () {
      whiteLine = Math.floor(Math.random() * 2)
      $(this).css('background-image', "url('img/cut-white-wire.png')")
      dieOrLive()
    })
    $('#uncut-yellow').on('click', function () {
      yellowLine = Math.floor(Math.random() * 2)
      $(this).css('background-image', "url('img/cut-yellow-wire.png')")
      dieOrLive()
    })

    function dieOrLive () {
      if (blueLine === correctLine) {
        $('#timer').text('you live')
        clearInterval(timer)
        countDown = 'off'
        $('.unexploded').css('background-image', "url('img/simcity.jpg')")
      } else if (greenLine === correctLine) {
        $('#timer').text('you live')
        clearInterval(timer)
        countDown = 'off'
        $('.unexploded').css('background-image', "url('img/simcity.jpg')")
      } else if (redLine === correctLine) {
        $('#timer').text('you live')
        clearInterval(timer)
        countDown = 'off'
        $('.unexploded').css('background-image', "url('img/simcity.jpg')")
      } else if (whiteLine === correctLine) {
        $('#timer').text('you live')
        clearInterval(timer)
        countDown = 'off'
        $('.unexploded').css('background-image', "url('img/simcity.jpg')")
      } else if (yellowLine === correctLine) {
        $('#timer').text('you live')
        clearInterval(timer)
        countDown = 'off'
        $('.unexploded').css('background-image', "url('img/simcity.jpg')")
      } else {
        $('.unexploded').css('background-image', "url('img/explosion.jpg')",
        'background-repeat', 'no-repeat')
        clearInterval(timer)
        $('#timer').text('you die')
        countDown = 'off'
      }
    }
  }
}
