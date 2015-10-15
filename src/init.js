$(document).ready(function() {
  window.dancers = [];
  window.baloons = [];
  window.southPaws = [];
  window.lowestZ = 0;
  
  window.pair = function(sp, b) {
    if(b.z === undefined) {
      b.$node.css({'z-index': sp.z});
    } else {
      sp.$node.css({'z-index': b.z});
    }

    sp.pair = b;
    b.pair = sp;
  };

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");


    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    if(dancerMakerFunctionName === 'SouthPaw') {    
      if(baloons.length > 0) {
        pair(dancer, baloons.pop());
      } else {
        lowestZ--;
        dancer.z = lowestZ
        dancer.$node.css({'z-index': lowestZ});
        southPaws.push(dancer); 
      }
    } else if(dancerMakerFunctionName === 'Baloon') {
      if(southPaws.length > 0) {
        pair(southPaws.pop(), dancer);
      } else {
        lowestZ--;
        dancer.z = lowestZ
        dancer.$node.css({'z-index': lowestZ});
        baloons.push(dancer);
      }
    }



    $('body').append(dancer.$node);
  });
});

