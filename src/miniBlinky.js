var MiniBlinky = function (top, left, size, direction, speed) {
  makeBlinkyDancer.call(this, top -  size/2, left - size/2, 100);
  this.$node.addClass('partical');
  $('.dancefloor').append(this.$node);
  this.size = size;
  this.direction = direction;
  this.speed = speed;



  this.$node.css({
    'width': size.toString(),
    'height': size.toString(),
    '-webkit-animation-origin': '30px 0px',
    '-webkit-animation-duration': '5s'


  })


  this.$node.addClass(direction);
};

MiniBlinky.prototype = Object.create(makeBlinkyDancer.prototype);
MiniBlinky.prototype.constructor = MiniBlinky;
