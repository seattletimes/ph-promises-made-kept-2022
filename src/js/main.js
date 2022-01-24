// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");

const $ = require('jquery');
require('waypoints/lib/noframework.waypoints.min');
// const pfold = require("./lib/pfold");

// var LeaderLine = require('leader-line/leader-line.min');

var line;

// var makeLeaderLines = function () {
//   line = new LeaderLine(
//     document.getElementById('anchor'),
//     document.getElementById('anchorEnd'),
//     {
//       startPlug: 'behind',
//       color: '#000',
//       endPlugColor: '#000',
//       path: 'straight',
//       outline: false,
//       size: 4,
//       endPlugOutline: false,
//       endPlug: "behind",
//       endPlugSize: 1,
//       hide: true
//     }
//   );
// };

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
                    console.log("hello!");
                    $( element ).find('.kept').addClass('show');
                    $(`.navtext #${chosenID}`).append(`<a href="#promise${promiseNumber}"><div class='square'>${promiseNumber}</div></a>`);

                  }
                  else if (direction === "up") {
                    $( element ).find('.kept').removeClass('show');
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



function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
  // makeLeaderLines();

  setTimeout(() => {
    makeWaypoints();
  }, 2500);




  // document.getElementById('ex-130-show').addEventListener('click', function(event) {
  //   console.log("hi");
  //   document.querySelector(".barometer").style.backgroundSize = "50% 100%";
  //   // line['show']('draw');
  // }, false);
});



			// $(function() {
      //
			// 	var container = $( '#uc-container' ),
			// 		pfold = $( '#uc-container' ).pfold({
			// 			easing : 'ease-in-out',
			// 			folds : 1,
			// 			folddirection : ['right'],
      //       overlays : true,
      //       onEndFolding : function() { return false; },
			// 		});
      //
			// 	container.find( 'span.clickme' ).on( 'click', function() {
      //
			// 		pfold.unfold();
      //
			// 	} ).end().find( 'span.close' ).on( 'click', function() {
      //
			// 		pfold.fold();
      //
			// 	} );
      //
			// });
