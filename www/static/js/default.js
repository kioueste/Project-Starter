$(document).ready(function() {
    
    // Open external links in a new window or tab
    $('a[rel$=external]').live('click', function() {
        $(this).attr('target', "_blank");
    });

});