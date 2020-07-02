// Toggle Main Menu
function openMenu() {
    $("#main-menu").slideDown(300);
    $("#menu-open").hide();
    $("#menu-close").show();
}

function closeMenu() {
    $("#main-menu").slideUp(300);
    $("#menu-close").hide();
    $("#menu-open").show();
}

$(document).click(function (event) {
    if (!$(event.target).closest('#main-menu').length) {
        if ($('#main-menu').is(":visible")) {
            closeMenu();
        }
    }
})