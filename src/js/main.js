// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");

const $ = require('jquery');
require('waypoints/lib/noframework.waypoints.min');


  function makeWaypoints() {
    $('.promise').each((index, element) => {
      $(element).ready(function() {

            var player = this;

            new Waypoint({
                element: element,
                enabled: true,
                handler: function(direction) {
                  let chosenID = $(element).data('promise');
                  let promiseNumber = $(element).data('number');
                  if(direction === "down") {
                    console.log(index);
                    $( element ).find('.outcome').addClass('show');
                    $(`.navtext #${chosenID}`).append(`<a href="#promise${index + 1}"><div class='square'>${index + 1}</div></a>`);

                  }
                  else if (direction === "up") {
                    $( element ).find('.outcome').removeClass('show');
                    $(`.navtext #${chosenID}`).find(".square").last().remove();

                  }
                },
                offset: '50%'
            });

            // new Waypoint({
            //     element: element,
            //     enabled: true,
            //     handler: function(direction) {
            //       if(direction === "down") {
            //         $('.stickyNav').addClass('show');
            //
            //       }
            //       else if (direction === "up") {
            //
            //       }
            //     },
            //     offset: '50%'
            // });

    });
  });
}


// A $( document ).ready() block.
$( document ).ready(function() {

  $( ".promise" ).each(function(i) {
  $( this ).find(".promise-number").append( i + 1 );
  });


  setTimeout(() => {
    makeWaypoints();
  }, 2500);
});
