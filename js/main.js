// Toggle Main Menu
function openMenu() {
    $("#main-menu").slideDown(500);
    $("#menu-open").hide();
    $("#menu-close").show();
}

function closeMenu() {
    $("#main-menu").slideUp(500);
    $("#menu-close").hide();
    $("#menu-open").show();
}