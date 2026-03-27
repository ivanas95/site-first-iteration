$('.toggleHide-quality').on('click', function(e) {
    
    e.preventDefault(); // stops page jump
    $('.hidden-weight').show();

});


$('.toggleHide-thinner').on('click', function(e) {

    e.preventDefault(); 
    $('.hidden-thinner').show();

})
$('.toggleHide-thicker').on('click', function(e) {

    e.preventDefault(); 
    $('.hidden-thicker').show();

});

$('.option').on('click', function(e) {

    e.preventDefault(); 
    $('.hidden-mm-scale').show();

});

$('.toggleHide-np1, .numberList, .toggleHide-mmscale').on('click', function(e) {

    e.preventDefault(); 
    $('.hidden-ink').show();

});


$('.toggleHide-ink').on('click', function(e) {

    e.preventDefault(); 
    $('.hidden-feel').show();

});

$('.toggleHide-feel').on('click', function(e) {

    e.preventDefault(); 
    $('.hidden-body').show();

});

$('.toggleHide-body').on('click', function(e) {

    e.preventDefault(); 
    $('.hidden-closure').show();

});

$('.toggleHide-closure').on('click', function(e) {

    e.preventDefault(); 
    $('.hidden-grip').show();

});

$('.toggleHide-griptype').on('click', function(e) {

    e.preventDefault(); 
    $('.hidden-griptype').show();

});


$('.toggleHide-grip, .toggleHide-griptype-specify').on('click', function(e) {

    e.preventDefault(); 
    $('.hidden-colour').show();

});

$('.toggleHide-colour').on('click', function(e) {

    e.preventDefault(); 
    $('.hidden-brand').show();

});