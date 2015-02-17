'use strict';


/* particlesJS('dom-id', params);
/* @dom-id : set the html tag id [string, optional, default value : particles-js]
/* @params: set the params [object, optional, default values : check particles.js] */

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    color: '#fff',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 1,
    size: 1,
    size_random: true,
    nb: 500,
    line_linked: {
      enable_auto: false,
      distance: 100,
      color: '#fff',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: false,
    mouse: {
      distance: 250
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove" (particles)
        nb: 4
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});

//   $(function() {
//     // Get the form.
//     var form = $('#ajax-contact');

//     // Get the messages div.
//     var formMessages = $('#form-messages');

//     // TODO: The rest of the code will go here...
//     // Set up an event listener for the contact form.
//     $(form).submit(function(event) {
//         // Stop the browser from submitting the form.
//         event.preventDefault();

//         // TODO
//         // Serialize the form data.
//         var formData = $(form).serialize();

//         // Submit the form using AJAX.
//         $.ajax({
//             type: 'POST',
//             url: 'http://formspree.io/aristides@aristidesstaffieri.com',
//             data: {message: 'Hello!'},
//             dataType: 'json'
//         }).done(function(response) {
//             // Make sure that the formMessages div has the 'success' class.
//             $(formMessages).removeClass('error');
//             $(formMessages).addClass('success');

//             // Set the message text.
//             $(formMessages).text(response);

//             // Clear the form.
//             $('#name').val('');
//             $('#message').val('');
//         }).fail(function(data) {
//           // Make sure that the formMessages div has the 'error' class.
//           $(formMessages).removeClass('success');
//           $(formMessages).addClass('error');

//           // Set the message text.
//           if (data.responseText !== '') {
//               $(formMessages).text(data.responseText);
//           } else {
//               $(formMessages).text('Oops! An error occured and your message could not be sent.');
//           }
//       });
//     });
// });