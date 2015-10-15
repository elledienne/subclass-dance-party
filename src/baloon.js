var Baloon = function(top, left, speed){
  Dancer.call(this, top, left);
  this.speed = speed;

  Baloon.prototype.expand.call(this);
};

Baloon.prototype = Object.create(Dancer.prototype);
Baloon.prototype.constructor = Baloon;

Baloon.prototype.expand = function(){
  var size = this.$node.width() + 50;
  var left = this.$node.css('left');
  var top = this.$node.css('top');
  left = +left.substring(0, left.length - 2) - 25;
  top = +top.substring(0, top.length - 2) - 25;
  this.$node.animate({width: size, height: size, left: left, top: top}, this.speed, 'swing', this.expand.bind(this));
}