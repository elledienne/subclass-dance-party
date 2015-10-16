// Creates and returns a new dancer object that can step
var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.$node.attr('object-ref', dancerCount);
  var size = 10 + Math.random()*20;
  this.$node.css({'width': size, 'height': size});
  dancerCount++;
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();  
  this.setPosition(top, left);
  this.setColor();
};
Dancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
    //console.log('inside dancer',this.$node.position());
};
Dancer.prototype.setColor = function () {
  var getGradObj = function () {
    var r1 = Math.floor(Math.random()*255);
    var g1 = Math.floor(Math.random()*255);
    var b1 = Math.floor(Math.random()*255);
    var a1 = 0.8 + 0.1*Math.random();
    var r2 = Math.floor(Math.random()*255);
    var g2 = Math.floor(Math.random()*255);
    var b2 = Math.floor(Math.random()*255);
    var a2 = 0.8 + 0.1*Math.random();

    var radGrad = 'radial-gradient(circle, ' + 'rgba('+r1+','+g1+','+b1+','+a1+'),' + 'rgba('+r2+','+g2+','+b2+','+a2+'))';

    return {'background': radGrad};
  }

  var r = Math.floor(Math.random()*255);
  var g = Math.floor(Math.random()*255);
  var b = Math.floor(Math.random()*255);
  this.$node.css(getGradObj());
}

Dancer.prototype.cssToNum = function (property) {
  var css = this.$node.css(property);
  return +css.substring(0, css.length - 2);
};

Dancer.prototype.checkPosition = function () {
  console.log(this)
    var vCenter = this.cssToNum('top') + this.cssToNum('height')/2;
    var hCenter = this.cssToNum('left') + this.cssToNum('width')/2;
    return {x: hCenter, y: vCenter};
}

Dancer.prototype.drain = function (duration) {
  var centerPosition = {
    x: $('.dancefloor').width() / 2,
    y: $('.dancefloor').height() / 2
  }

  //this.action = false;
  this.$node.stop(true);
  var properties = {
    'left': centerPosition.x - 10,//this.cssToNum('width')/2,
    'top': centerPosition.y - 10,//this.cssToNum('height')/2,
    'width': '20px',
    'height': '20px'
  }
  // if(this.$node.hasClass('baloon')) {
  //   //this.shrink();
  //   properties['width'] = 'px';
  //   properties['height'] = '20px';
  // }
  this.$node.animate(properties, duration, 'linear', $().fadeOut.bind(this.$node, 400, $().remove.bind(this.$node)));
}

Dancer.prototype.particleSource = function (count, size, direction) {
  var center = this.checkPosition();
  console.log(center);
  for(var i = 0; i < count; i++){
    dancers.push(new MiniBlinky(center.y, center.x, size, direction))
  }
}




