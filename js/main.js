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


$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);

    // document.querySelector('.fp-controlArrow.fp-prev').innerHTML = '<h1 class="slider-arrow"><i class="fas fa-chevron-left"></i></h1>'

    // document.querySelector('.fp-controlArrow.fp-next').innerHTML = '<h1 class="slider-arrow"><i class="fas fa-chevron-right"></i></h1>'


});