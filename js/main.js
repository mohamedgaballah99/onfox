$(document).ready(function(){
    
    $('.navbar-nav .nav-item .nav-link').click(function(){
        
        $(this).parent().parent().find('.nav-item .nav-link').removeClass('active');
        
        
        $(this).addClass('active');
        
        
    });
    
});


        




































