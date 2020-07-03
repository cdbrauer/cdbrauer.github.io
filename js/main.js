// Toggle Main Menu
function openMenu() {
    $("#main-menu").slideDown(300);
    $("#menu-open").hide();
    $("#menu-close").show();
    $("#sidebar").animate({opacity: '0'}, 300);
}

function closeMenu() {
    $("#main-menu").slideUp(300);
    $("#menu-close").hide();
    $("#menu-open").show();
    $("#sidebar").animate({opacity: '1'}, 300);
}

$(document).click(function (event) {
    if (!$(event.target).closest('#main-menu').length) {
        if ($('#main-menu').is(":visible")) {
            closeMenu();
        }
    }
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const $sidebar = $("#sidebar");
    const rect = document.getElementById("sidebar-container").getBoundingClientRect();
    const currentOpacity = $sidebar.css("opacity")

    console.log(currentOpacity);

    if (rect.top < 0) {
        // if (currentOpacity == 0){
        //     $sidebar.animate({opacity: '1'}, 300);
        // }
        document.getElementById("sidebar").style.top = -rect.top + "px";
    } else {
        // if (currentOpacity == 1) {
        //     $sidebar.animate({opacity: '0'}, 300);
        // }
        document.getElementById("sidebar").style.top = "0";
    }
}