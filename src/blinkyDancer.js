var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  //inherit properties from Dancer Super Class
  makeDancer.call(this, top, left, timeBetweenSteps);
  //invoke makeBlinkyDancer.step below

  this.step();
};

  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

  makeBlinkyDancer.prototype.step = function(){
    
    //invokes the step method on makeDancer class with 'this' class as the context
    makeDancer.prototype.step.call(this);
    makeDancer.prototype.setPosition.call(this, this.top, this.left);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // console.log('Does this.$node work before toggle?', this.$node);

    //toggles the position of the node 'dancer' whenever the interval time has ended
    this.$node.toggle();
  };

 var Deadpool = function(top, left, timeBetweenSteps){
  //inherit properties from Dancer Super Class
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  //invoke makeBlinkyDancer.step below
  this.$node = $('<span class="deadpool character"></span>');
  this.step();
}; 

  Deadpool.prototype = Object.create(makeBlinkyDancer.prototype);


var SpongeBob = function(top, left, timeBetweenSteps){
  //inherit properties from Dancer Super Class
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  //invoke makeBlinkyDancer.step below
  this.$node = $('<span class="spongebob character"></span>');
  this.step();
}; 

  SpongeBob.prototype = Object.create(makeBlinkyDancer.prototype);


var Bananas = function(top, left, timeBetweenSteps){
  //inherit properties from Dancer Super Class
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  //invoke makeBlinkyDancer.step below
  this.$node = $('<span class="bananas character"></span>');
  this.step();
}; 

  Bananas.prototype = Object.create(makeBlinkyDancer.prototype);

var Rockface = function(top, left, timeBetweenSteps){
  //inherit properties from Dancer Super Class
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  //invoke makeBlinkyDancer.step below
  this.$node = $('<span class="rockface character"></span>');
  this.step();
}; 

  Rockface.prototype = Object.create(makeBlinkyDancer.prototype);




