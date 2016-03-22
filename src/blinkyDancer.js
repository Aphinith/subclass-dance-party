var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  //inherit properties from Dancer Super Class
  Dancer.call(this, top, left, timeBetweenSteps);
  //invoke makeBlinkyDancer.step below
  this.step();
};

  makeBlinkyDancer.prototype = Object.create(Dancer.prototype);

  makeBlinkyDancer.prototype.step = function(){
    
    //invokes the step method on makeDancer class with 'this' class as the context
    Dancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // console.log('Does this.$node work before toggle?', this.$node);

    //toggles the position of the node 'dancer' whenever the interval time has ended
    this.$node.toggle();
  };
