const CarMixin = {
  ride() {
    console.log('Riding...');
  }
};

const SailingMixin = {
  sail() {
    console.log('Sailing...')
  }
};

function mixin(...mixins) {
  var base = function() {};
  Object.assign(base.prototype, ...mixins);
  return base;
}

class Amphibian extends mixin(CarMixin, SailingMixin) {}

var amphibian = new Amphibian();
amphibian.ride(); /*Riding...*/
amphibian.sail(); /*Sailing...*/