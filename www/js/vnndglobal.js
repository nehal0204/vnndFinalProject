/**
 * File Name: vnndglobal.js
 *
 * Revision History:
 *       Nehal Dogra & Vatsal Nariya, 2022-04-16 : Created
 */
function btnAddPlayist_add() {
    addPlaylist();
}

function updatePlaylist_click() {
    updatePlaylist();
}

function deletePlaylist_click() {
    deletePlaylist();
}

function pageAdd_click() {
    updateGenresDropdown("Add");
    addshow();
}

function pageModify_click() {
    updateGenresDropdown("Modify");
    showCurrentPlaylist();
}

function pageView_click() {
    viewPlaylist();
}

function pageFavourite_click() {
    viewFavourite();
}

function cancelmodify_click() {
    $(location).prop("href", "#pageView");
}
function btnSaveDefault_click() {
    var x = $("#fName").val();
    localStorage.setItem("Name", x);
    localStorage.getItem("Name");
    var y = $("#defaultEmail").val();
    localStorage.setItem("DefaultEmail", y);
    localStorage.getItem("DefaultEmail");
    alert("You are a registered member!");
}
function addPageShow() {
    showPage();
}

function clearDatabaseBtn_click() {
    confirm("Do you really want to clear all your Data?");
    localStorage.clear();
    clearDatabase();
}

function btnCapturepicture_click() {
    capturepicture();
}

function btnLoadFromLibrary_click() {
    loadFromLibrary();
}


function init() {
    $("#btnDefault").on("click", btnSaveDefault_click);
    $("#pageHome").on("pageshow", addPageShow);
    $("#btnAddPlayist").on("click", btnAddPlayist_add);
    $("#updatePlaylist").on("click", updatePlaylist_click);
    $("#butn").on("click", clearDatabaseBtn_click);
    $("#chngB").click(function() {
        $('[data-role=page]').page({theme:'b'});
    });
    $("#chngW").click(function() {
        $('[data-role=page]').page({theme:'a'});
    });
    $("#pageAdd").on("pageshow", pageAdd_click);
    $("#pageModify").on("pageshow", pageModify_click);
    $("#pageView").on("pageshow", pageView_click);
    $("#pageFavourite").on("pageshow", pageFavourite_click);


    $("#cancelmodify").on("click", cancelmodify_click);
    $("#deletePlaylist").on("click", deletePlaylist_click);

    $("#Capture").on("click", btnCapturepicture_click);
    $("#Load").on("click", btnLoadFromLibrary_click);


}

$(document).ready(function () {
    init();
    initDB();
});

function initDB(){
    try{
        DB.createDatabase();
        if (db) {
            console.info("Creating tables..");
            DB.createTables();
        }
        else{
            console.error("Cannot create tables: database does not exist!");
        }
    } catch(e){
        console.error("Error: (Fatal) Error in initDB(), can not proceed.");
    }
}