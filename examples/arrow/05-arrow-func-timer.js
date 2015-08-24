var Timer = function() {
  this.secs = 0;
};
Timer.prototype.start = function() {
  setInterval(() => {this.secs++;}, 1000);
};


var timer = new Timer();
timer.start();