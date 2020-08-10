var isDetect = false;
function isScrolledIntoView(elem)
{
    var result = false;
    //if(!isDetect){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){
            isDetect = true;
            result =  true;
        }
    //}
    //console.log(result);
    return result;
}





$(window).scroll(function () {
    var height = $(document).scrollTop();
    if(height > 0){
        changeWhiteMenu();
    }else{
        changeColorMenu();
        $(".menuitem").mouseover(function(){
            changeWhiteMenu();
        });

        $(".menuitem").mouseleave(function(){
            changeColorMenu();
        });
    }
}); 

function changeWhiteMenu(){
    $(".headlist").addClass("headlist_white");
    $(".logo").addClass("logo_black");
    $(".menuitem").addClass("blk_bd");
    $(".underline").addClass("blk_underline");
    $(".titlle_item").css("color","#000");
}
function changeColorMenu(){
    $(".headlist").removeClass("headlist_white");
    $(".logo").removeClass("logo_black");
    $(".menuitem").removeClass("blk_bd");
    $(".underline").removeClass("blk_underline");
    $(".titlle_item").css("color","#fff");
}

