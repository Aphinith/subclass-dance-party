// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
};

  //makeDancer.psetPosition(this.top, this.left);


  makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var mBD = this

    //Set the timeout  of the subclass binding 'this' to the subclass with each call  
    setTimeout(function(){mBD.step()}, this.timeBetweenSteps)
  };

  // makeDancer.prototype.step();

  makeDancer.prototype.setPosition = function(top, left){
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


  //instantiating makeDancer
  // var dancer = new makeDancer();
