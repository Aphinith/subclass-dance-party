// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
};

  Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var mBD = this

    console.log('mD:', this);

    //Set the timeout  of the subclass binding 'this' to the subclass with each call  
    setTimeout(function(){mBD.step()}, this.timeBetweenSteps)
  };

  // makeDancer.prototype.step();

  Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    
    //sets the css styling for position within a styleSettings variable
    var styleSettings = {
      top: top,
      left: left
    };
  // console.log('inside setPosition:', this.$node);
  //applies the css styling to the current node (dancer)
    this.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // makeDancer.setPosition(this.top, this.left);


  //instantiating makeDancer
  // var dancer = new makeDancer();
