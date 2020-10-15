//define functions here
function getIt() {
    $('p').on('click', function() {
        alert('Hey!');
    })
};

function frameIt() {
    $('img').on('load', function() {
        $(this).addClass('tasty').css({ "border-color": "red", });;
    })
};

function submitIt() {
    $('form').on('submit', function() {
        alert("Your form is going to be submitted now.")
    })
};

function pressIt() {
    $('input').on('keydown', function(key) {
        if (key.which == 71) {
            alert('G was pressed');
        }
    });
};


$(document).ready(function() {
    getIt()
    frameIt()
    submitIt()
    pressIt()
});