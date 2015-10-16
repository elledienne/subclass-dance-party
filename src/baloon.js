var Baloon = function(top, left, speed){
  Dancer.call(this, top, left);
  this.speed = speed;
  this.$node.toggleClass('baloon');
  this.exploded = false;
  this.expand();
  this.checkPop();
  var that = this;
  this.$node.on('click', function () {
    console.log('derp')
    that.explode(10);
  });
};

Baloon.prototype = Object.create(Dancer.prototype);
Baloon.prototype.constructor = Baloon;

Baloon.prototype.expand = function(){
  var size = this.$node.width() + 50;
  var left = this.cssToNum('left') - 25;
  var top = this.cssToNum('top') - 25;
  // this.$node.animate({width: size, height: size, left: left, top: top}, this.speed, 'swing', this.expand.bind(this, this.action)); 
  this.$node.animate({width: size, height: size, left: left, top: top}, this.speed, 'linear', this.expand.bind(this));
}

Baloon.prototype.checkPop = function () {
  if(!this.exploded) {
    if(this.pair !== undefined) {
      var sp = this.pair;
      var spPos = sp.checkPosition();
      var spRadius = sp.cssToNum('width')/2;
      var bPos = this.checkPosition();
      var bRadius = this.cssToNum('width')/2;

      var collisionDistance = spRadius + bRadius;

      var xDistance = spPos.x - bPos.x;
      var yDistance = spPos.y - bPos.y;

      var distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

      if(distance <= collisionDistance) {
        this.explode(10);
      }
    }
    setTimeout(this.checkPop.bind(this), 10);
  }
};

Baloon.prototype.explode = function (count) {
  this.exploded = true;
  if(count <= 0) {
    this.$node.remove();
    window.southPaws.push(this.pair);
    this.pair.pair = null;
    this.pair = null;
  }
  else{
    this.$node.toggle();
    setTimeout(this.explode.bind(this, count-1), count*10);
  }
}