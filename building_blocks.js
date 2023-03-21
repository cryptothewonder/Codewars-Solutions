// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`

//solutions
class Block{

    constructor(data){
      // ...
      this.width = data[0];
      this.length = data[1];
      this.height = data[2];
      
    }
      
    getWidth() {
    return this.width;
  };
     getLength() {
    return this.length;
  };
     getHeight() {
    return this.height;
  };
    getVolume() {
    return this.width*this.length*this.height;
  };
    getSurfaceArea(){
      return 2*(this.length*this.width + this.length*this.height + this.width*this.height)
    };
}

    class Block {
        constructor(data){
          [this.w, this.l, this.h] = data;
        }
        getWidth(){ return this.w }
        getLength(){ return this.l }
        getHeight(){ return this.h }
        getVolume(){
          let {l, w, h} = this;
          return w*l*h;
        }
        getSurfaceArea(){
          let {l, w, h} = this;
          return 2 * (l*w + l*h + w*h);
        }
      }