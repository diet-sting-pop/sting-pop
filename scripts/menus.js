function addMenus() {
    $("#main-window").prepend(getMainLeftMenuHtml).append(getMainRightMenuHtml());
    addMap();
}
function addLeftMenu() {
    $("#main-window").prepend(getMainLeftMenuHtml);
    addMap();
}

function addMap() {
    let name = "Bordeaux";
    let country = "France";
    let population = "15 000 000";
    let img = "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/481000/481844-Bordeaux.jpg";
    let coordinates = [44.84, -0.58];
    let link = "https://fr.wikipedia.org/wiki/Bordeaux"
    $(".leftMenu").append(loadRandomTownWidget(name, country, population, img, link));
    var map = L.map('map').setView(coordinates, 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

function loadRandomTownWidget(name, country, population, img, link) {
    return "<div style='display: table'>\n" +
        "       <div class='header'>\n" +
        "           <u>Random town</u>\n" +
        "       </div>\n" +
        "       <div class='row country-data'>\n" +
        "           <p class='cell'><u>Name</u> : " + name + "</p>\n" +
        "       </div>\n" +
        "       <div class='row country-data'>\n" +
        "           <p class='cell'><u>Country</u> : " + country + "</p>\n" +
        "       </div>\n" +
        "       <div class='row country-data'>\n" +
        "           <p class='cell'><u>Population</u> : " + population + "</p>\n" +
        "       </div>\n" +
        "       <div class='row '>\n" +
        "           <img class='cell' style='width: 100%' src='" + img + "'>\n" +
        "       </div>\n" +
        "       <div class='row country-data'>\n" +
        "           <br>\n" +
        "       </div>\n" +
        "       <div class='row country-data'>\n" +
        "           <div class='cell country-map' id='map'></div>\n" +
        "       </div>\n" +
        "       <div class='row country-data'>\n" +
        "           <p class='cell'><a href='" + link + "'>Website</a></p>\n" +
        "       </div>\n"
}

function getMainLeftMenuHtml() {
    return "<div class='leftMenu'>\n" +
        "    <div style='margin-top: 36px'>\n" +
        "        <div class='row'>\n" +
        "            <a class='cell' href='thoughts.html'><img class='button' src='resources/menu/button1.png'/></a>\n" +
        "            <a class='cell' href='ttrpg.html'><img class='button' src='resources/menu/button2.png'/></a>\n" +
        "        </div>\n" +
        "        <div class='row'>\n" +
        "            <a class='cell' href='music.html'><img class='button' src='resources/menu/button4.png'/></a>\n" +
        "            <a class='cell' href='recipes.html'><img class='button' src='resources/menu/button5.png'/></a>\n" +
        "        </div>\n" +
        "        <div class='row'>\n" +
        "            <a class='cell' href='artsAndCrafts.html'><img class='button' src='resources/menu/button6.png'/></a>\n" +
        "            <a class='cell' href='guestbook.html'><img class='button' src='resources/menu/button7.png'/></a>\n" +
        "        </div>\n" +
        "        <div class='row'>\n" +
        "            <a class='cell' href='credit.html'><img class='button' src='resources/menu/button8.png'/></a>\n" +
        "            <a class='cell' href='about.html'><img class='button' src='resources/menu/button3.png'/></a>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>";
}

function getMainRightMenuHtml() {
    return "<div class='rightMenu'>\n" +
        "                    <div style='margin-top: 36px; display: table'>\n" +
        "                        <div class='header'>\n" +
        "                            <u>News</u>\n" +
        "                        </div>\n" +
        "                        <div class='row'>\n" +
        "                            <p class='cell'><u>12/2024</u> : I am finally working on my own website!</p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <br>\n" +
        "                    <br>\n" +
        "                    <br>\n" +
        "                    <div style='margin-top: 36px; display: table; width: 100%'>\n" +
        "                        <div class='header'>\n" +
        "                            <u>Webring</u>\n" +
        "                        </div>\n" +
        "                        <div class='row'>\n" +
        "                            <a class='cell' href='https://insect.christmas'><img class='button' src='resources/webring/insect.gif'/></a>\n" +
        "                            <a class='cell' href='https://brutalmoose.com/'><img class='button' src='resources/webring/moose.png'/></a>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>";
}