const bjornMax = 5;
const bjornList = [];

function getBjornBox(bjornDex, bjornId) {
    let style = bjornId!=="mini"?"":"style='display: none'";
    bjornDex = bjornId!=="mini"?bjornDex:"mini";
    return "<div id=\"bjorn-box-"+bjornId+"\" class=\"bjorn-box window\">\n" +
        "            <div class=\"bjorn-bar window\">\n" +
        "                <img src=\"resources/bjornOVision/bjorn%20window%20title.png\" class=\"windowTitle\">\n" +
        "                <img "+style+" onclick=\"bjornMiniClick()\" src=\"resources/window/minimize.png\" class=\"windowButton bjorn-btn\">\n" +
        "                <img style='display: none' src=\"resources/window/enlarge.png\" class=\"windowButton bjorn-btn\">\n" + //TODO: flemme de le coder pour l'instant
        "                <img onclick=\"bjornClick()\" src=\"resources/window/close.png\" class=\"windowButton bjorn-btn\">\n" +
        "            </div>\n" +
        "            <div class=\"bjorn-content\">\n" +
        "                <img style=\"width: 100%\" src=\"resources/bjornOVision/bjorn"+bjornDex+".png\">\n" +
        "            </div>\n" +
        "        </div>"
}

function getBjornDex() {
    let index = Math.floor(Math.random() * bjornMax + 1);
    while (bjornList.includes(index)) {
        index = Math.floor(Math.random() * bjornMax + 1);
    }
    bjornList.push(index);
    return index;
}

function addBjornBox(bjornId) {
    let bjornDex = getBjornDex();
    $("#bjorn-root").append(getBjornBox(bjornDex, bjornId));
}

let index = 0;

function bjornClick() {
    index++;
    if (index < 6) {
        $("#bjorn-root").append("<img class='speech-bubble' id='sb-"+index+"' src='resources/bjornOVision/text/sb-"+index+".png'/>")
        if (index === 4) {
            $("#map").css("display", "none")
            $("#bjorn-box-1").css("display", "unset").css("width", "80vh").css("height", "calc(80vh + 18px)").css("top", "20%").css("left", "10%")
        }
        if (index === 5) {
            this.addBjornBox(2);
            this.addBjornBox(3);
            $(".bjorn-btn").css("display", "none")
            $("#bjorn-box-1").css("display", "unset")
        }
    }
}

function bjornMiniClick() {
    addBjornBox("mini")
    $("#bjorn-box-1").css("display", "none")
}