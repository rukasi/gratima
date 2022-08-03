function anichange (objName, linkName) {
    if ( $(objName).css('display') == 'none' ) {
        $(objName).animate({height: 'show'}, 400);
        $(linkName).addClass('close');
        $(linkName).removeClass('open');
    } else {
        $(objName).animate({height: 'hide'}, 200);
        $(linkName).removeClass('close');
        $(linkName).addClass('open');
    }
}

