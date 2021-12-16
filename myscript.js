var wave1 = $('#feel-the-wave').wavify({
  height: 80,
  bones: 4,
  amplitude: 60,
  color: '#B289EF',
  speed: .15
});

var wave2 = $('#feel-the-wave-two').wavify({
  height: 60,
  bones: 3,
  amplitude: 40,
  color: 'rgba(150, 97, 255, .8)',
  speed: .25
});

var colors = ['rgba(255, 281, 75, .8)', '#dc75ff', '#9d9ade', '#6cd7ee', '#aceeae']

$("[data-pause]").on('click', function(){
  wave1.pause();
  wave2.pause();
  return false;
});

$("[data-play]").on('click', function(){
  wave1.play();
  wave2.play();
  return false;
});

$("[data-color]").on('click', function(){
  wave1.updateColor({
    color: colors[Math.floor(Math.random()*colors.length)],
    timing: 5
  });
  wave2.updateColor({
    color: colors[Math.floor(Math.random()*colors.length)],
    timing: 3
  });
  return false;
});

