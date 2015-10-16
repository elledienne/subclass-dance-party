var SouthPaw = function (top, left, speed) {
  Dancer.call(this, top, left);
  this.speed = speed;
  this.$node.addClass('southPaw');

  this.moveLeft();
};
SouthPaw.prototype = Object.create(Dancer.prototype);
SouthPaw.prototype.constructor = SouthPaw;

SouthPaw.prototype.moveLeft = function () {
  //console.log(typeof this.$node.css('left'));
  var currentLeft = this.cssToNum('left');
  if(currentLeft <= -50) {
    currentLeft = $(window).width();
    this.$node.css({'left': currentLeft});
  }
  var newLeftPosition = currentLeft - 50;
  this.$node.animate({'left': newLeftPosition}, this.speed, 'linear', this.moveLeft.bind(this));
};
