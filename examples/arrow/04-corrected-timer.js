var Timer = function() {
  this.secs = 0;
};
Timer.prototype.start = function() {
  var that = this;
  setInterval(function() {
    that.secs++;
  }, 1000);
};


var timer = new Timer();
timer.start();