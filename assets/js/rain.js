function show() {
  $('.main').empty();
  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    var x = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    var y = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    increment += y;

    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (y + y - 1 + 100) + '%; animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"><div class="stem" style="animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div><div class="splat" style="animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div></div>';
  }

  $('.main').append(backDrops);
}

$('body').toggleClass('splat-toggle');
show();
