var currentNumber = $('#dynamic-number').text();

$({numberValue: currentNumber}).animate({numberValue: 10}, {
    duration: 6000,
    easing: 'linear',
    step: function() { 
        $('#dynamic-number').text(Math.ceil(this.numberValue)); 
    }
});

var currentNumber = $('#dynamic-number2').text();

$({numberValue: currentNumber}).animate({numberValue: 20}, {
    duration: 6000,
    easing: 'linear',
    step: function() { 
        $('#dynamic-number2').text(Math.ceil(this.numberValue)); 
    }
});

var currentNumber = $('#dynamic-number3').text();

$({numberValue: currentNumber}).animate({numberValue: 25}, {
    duration: 6000,
    easing: 'linear',
    step: function() { 
        $('#dynamic-number3').text(Math.ceil(this.numberValue)); 
    }
});

var currentNumber = $('#dynamic-number4').text();

$({numberValue: currentNumber}).animate({numberValue: 35}, {
    duration: 6000,
    easing: 'linear',
    step: function() { 
        $('#dynamic-number4').text(Math.ceil(this.numberValue)); 
    }
});

var currentNumber = $('#dynamic-number5').text();

$({numberValue: currentNumber}).animate({numberValue: 175}, {
    duration: 6000,
    easing: 'linear',
    step: function() { 
        $('#dynamic-number5').text(Math.ceil(this.numberValue)); 
    }
});

var currentNumber = $('#dynamic-number6').text();

$({numberValue: currentNumber}).animate({numberValue: 180}, {
    duration: 6000,
    easing: 'linear',
    step: function() { 
        $('#dynamic-number6').text(Math.ceil(this.numberValue)); 
    }
});

var currentNumber = $('#dynamic-number7').text();

$({numberValue: currentNumber}).animate({numberValue: 288}, {
    duration: 6000,
    easing: 'linear',
    step: function() { 
        $('#dynamic-number7').text(Math.ceil(this.numberValue)); 
    }
});

var currentNumber = $('#dynamic-number8').text();

$({numberValue: currentNumber}).animate({numberValue: 2500}, {
    duration: 6000,
    easing: 'linear',
    step: function() { 
        $('#dynamic-number8').text(Math.ceil(this.numberValue)); 
    }
});