var SouthPaw = function (top, left, speed) {
  Dancer.call(this, top, left);
  this.speed = speed;

  SouthPaw.prototype.moveLeft.call(this);
};
SouthPaw.prototype = Object.create(Dancer.prototype);
SouthPaw.prototype.constructor = SouthPaw;

SouthPaw.prototype.moveLeft = function () {
  console.log(typeof this.$node.css('left'));
  var currentLeft = this.$node.css('left')
  currentLeft = +currentLeft.substring(0, currentLeft.length - 2);
  var newLeftPosition = currentLeft - 50;
  if(currentLeft <= -50) {
    currentLeft = $(window).width();
    this.$node.css({'left': currentLeft});
  }
  var newLeftPosition = currentLeft - 50;
  this.$node.animate({'left': newLeftPosition}, this.speed, 'swing', this.moveLeft.bind(this));
};
