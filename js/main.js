$( document ).ready(function() {
    console.log( "ready!" );

// jQuery quiz plugin from https://github.com/jchamill/jquery-quiz
$('#quiz').quiz({
    questions: [
      {
        'q': 'How many hurricane categories are there?',
        'options': [
          'Three',
          'Five',
          'Eight',
          'Ten'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Nope. Were you even paying attention?'
    },
    {
        'q': 'A storm is given a name once it becomes a ________.',
        'options': [
          'Tropical Disturbance',
          'Tropical Depression',
          'Tropical Storm',
          'Hurricane'
        ],
        'correctIndex': 2,
        'correctResponse': 'Yes!',
        'incorrectResponse': 'Wrong. Try harder next time!'
      },
      {
        'q': 'Hurricanes normally ________ when they hit land.',
        'options': [
          'get weaker',
          'get stronger',
          'slow down',
          'speed up'
        ],
        'correctIndex': 0,
        'correctResponse': 'That\'s right!',
        'incorrectResponse': 'Absolutely not.'
      },
      {
        'q': 'Which of the following is a normal size for the eye of a hurricane?',
        'options': [
          '200 miles',
          '100 miles',
          '50 miles',
          '20 miles'
        ],
        'correctIndex': 3,
        'correctResponse': 'You got it!',
        'incorrectResponse': 'Did you even read the slides?'
      },
      {
        'q': 'When the wind direction is counterclockwise in the northern hemisphere and clockwise in the southern hemisphere, this is known as _________.',
        'options': [
          'wind directionality',
          'the Coriolis effect',
          'Gaspard Force',
          'bad weather'
        ],
        'correctIndex': 1,
        'correctResponse': 'Right!',
        'incorrectResponse': 'You\'re just wrong.'
      }
    ]
  });
//   End quiz plugin JS
});

//  Activating slider plugin

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);

});

//  End slider plugin JS

//  Activating modal plugin

var modal = new jBox('<a href="https://www.jqueryscript.net/tags.php?/Modal/">Modal</a>', {
  attach: $('#myModal'),
  width: 550,
  overlay: false,
  repositionOnOpen: false,
  repositionOnContent: false,
  target: $('#target'),
});
modal.setContent($('#modal-content').html());

//  End modal plugin JS

//  Activating loading screen plugin

$.LoadingOverlay("show");

setTimeout(function(){
    $.LoadingOverlay("hide");
}, 3000);

//  End loading screen JS


var button = document.getElementById("info");

button.addEventListener('click', function() {
    const icon = this.querySelector('i');
  
    // If the class name of the icon contains fa-info-circle (the name of the icon from FontAwesome), change it to fa-times-circle when the 
    // user clicks it. 
    if (icon.classList.contains('fa-info-circle')) {
        icon.classList.remove('fa-info-circle');
        icon.classList.add('fa-times-circle');
    // If the class name of the icon is not fa-info-circle, remove the current name (which would be fa-times-circle since there are only two 
    // options) and make it fa-info-circle.
    } else {
        icon.classList.remove('fa-times-circle');
        icon.classList.add('fa-info-circle');
    }
  });