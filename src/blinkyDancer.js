var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.count = 0;
  // this.test = function(){ console.log('hi')};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.step();
};

  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

  makeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    // console.log('in makeBlinkyDancer step:', this.$node);
    var timeBetweenSteps = 1000;
    // this.count++
    // console.log('inside BlinkyDancer:', this);
    //invokes the step method on makeDancer class with 'this' class as the context
    var mBD = this;
    makeDancer.prototype.step.call(mBD);
    //console.log('This is this.step after step.call', this.step);

    //sets an interval to ensure the step method is called every second

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // console.log('Does this.$node work before toggle?', this.$node);

    //toggles the position of the node 'dancer' whenever the interval time has ended
    this.$node.toggle();
  };
