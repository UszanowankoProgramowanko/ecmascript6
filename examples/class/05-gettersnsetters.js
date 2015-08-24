class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this._scale = 1;
  }

  get area() {
    return this.width * this.height;
  }

  set scale(newScale) {
    var prevScale = this._scale;
    this._scale = newScale;
    this.width *=  newScale / prevScale;
    this.height *= newScale / prevScale;
  }

  get scale() {
    return this._scale;
  }
}

var rect = new Rectangle(10, 10);
console.log(rect.area); /*100*/

rect.scale = 0.5;
console.log(rect.area); /*25*/

rect.scale = 1;
console.log(rect.area); //100