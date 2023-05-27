/**
 * File Name: vnndfacade.js
 *
 * Revision History:
 *       Nehal Dogra & Vatsal Nariya, 2022-04-16 : Created
 */
// WELCOMING USER
function showPage() {
    var revEmailAddPage = localStorage.getItem("Name");
    $("#headingHome").html("<img src=\"img/MUSIC-ICON.png\" id=\"logo1\"  class=\"d-inline-block\" alt=\"#\">\n" + "Welcome, " + revEmailAddPage);
}

function addPlaylist() {
    if (doValidate_frmaddPlaylist()) {
        console.log("Add Form is valid");
        var songName = $("#SongAdd").val();
        var artistName = $("#ArtistAdd").val();
        var genreId = $("#genreAdd").val();
        var releaseDate = $("#dateAdd").val();
        var addFavourite = $("#yesAdd").prop("checked");
        var rating = $("#ratingsAdd").val();


        var options = [songName, artistName, genreId, releaseDate, addFavourite, rating];
        console.info(`${songName} ${artistName} ${genreId}  ${releaseDate}  ${addFavourite} ${rating}`);


        function callback() {
            console.info("Success: Record Inserted successfully");
            alert("New Feedback Added");
        }

        PlayList.insert(options, callback);

    } else {
        console.log("Add Form is invalid");
    }

}

function updatePlaylist() {
    if (doValidate_frmUpdatePlaylist()) {
        console.log("Modify Form is valid");
        // var id = $("#txtId").val();
        var id = localStorage.getItem("id");

        var songName = $("#SongModify").val();
        var artistName = $("#ArtistModify").val();
        var genreId = $("#genreModify").val();
        var releaseDate = $("#dateModify").val();
        var addFavourite = $("#yesModify").prop("checked");
        var rating = $("#ratingsModify").val();


        var options = [songName, artistName, genreId, releaseDate, addFavourite, rating, id];
        console.info(`${songName} ${artistName} ${genreId}  ${releaseDate}  ${addFavourite} ${rating}`);


        function callback() {
            console.info("Updating...");
            console.info("Success: Update successful");
            alert("Feedback updated successfully");

        }

        PlayList.update(options, callback);
    } else {
        console.log("Modify Form is invalid");
    }
}

function deletePlaylist() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");

    var options = [id];

    function callback() {
        console.info("Deleting...");
        console.info("Success: Delete successful");
        alert("Feedback deleted successfully");
        $(location).prop("href", "#pageView");

    }

    PlayList.delete(options, callback);
}

function updateGenresDropdown(form) {

    var options = [];

    function callback(tx, results) {
        if (form === "Add") {
            var htmlCode1 = "";
            for (var y = 0; y < results.rows.length; y++) {
                var row1 = results.rows[y];
                htmlCode1 += `<option value = ${row1['id']}> ${row1['name']}</option>`
            }
            var lv1 = $("#genreAdd");
            lv1 = lv1.html(htmlCode1);
            lv1.selectmenu("refresh");
        } else if (form === "Modify") {
            var htmlCode = "";
            for (var i = 0; i < results.rows.length; i++) {
                var row = results.rows[i];
                htmlCode += `<option value = ${row['id']}> ${row['name']}</option>`
            }
            var lv = $("#genreModify");
            lv = lv.html(htmlCode);
            lv.selectmenu("refresh");
        }
    }


    Genre.selectAll(options, callback);


}

function addshow() {
    $("#SongAdd").val("");
    $("#ArtistAdd").val("");
    $("#genreAdd").val("");
    $("#dateAdd").val("");
    $("#yesAdd").prop("checked", true);
    $("#frmAddPlaylist :radio").checkboxradio("refresh");
    $("#ratingsAdd").val("1");
    $("#ratingsAdd").slider("refresh");

}

function viewFavourite() {
    var options = [];

    function callback(tx, results) {
        var html = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            var songName = row['songName'];
            html += `<li>
                            <a data-role="button" data-row-id=${row['id']} href="#">
                                <h1>${songName}</h1>
                            </a>
                        </li>`
        }

        if (results.rows.length === 0) {
            html = `<h4>No Favourites added</h4>`
        }
        var lv = $("#listviewFavourite");
        lv = lv.html(html);
        lv.listview("refresh");

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop("href", "#pageModify");
        }

        $("#listviewFavourite a").on("click", clickHandler);
    }

    PlayList.selectFavourite(options, callback);
}

function viewPlaylist() {
    var options = [];

    function callback(tx, results) {
        var htmlCode = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            var songName = row['songName'];
            var artistName = row['artistName'];
            var rating = row['rating'];

            htmlCode += `<li>
                            <a data-role="button" data-row-id=${row['id']} href="#">
                                <h1>${songName}</h1>
                                <p>Artist Name: ${artistName}</p>
                                <p>Ratings: ${rating}</p>    
                            </a>
                        </li>`
        }

        if (results.rows.length === 0) {
            htmlCode = `<h4>No Songs found</h4>`
        }


        var lv = $("#listviewPlaylist");
        lv = lv.html(htmlCode);
        lv.listview("refresh");

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop("href", "#pageModify");
        }

        $("#listviewPlaylist a").on("click", clickHandler);
    }

    PlayList.selectAll(options, callback);
}

function showCurrentPlaylist() {

    var id = localStorage.getItem("id");
    var options = [id];

    function callback(tx, results) {
        console.info("Selecting a Feedback");
        var row = results.rows[0];
        var songName = row['songName'];
        var artistName = row['artistName'];
        var genreId = row['genreId'];
        var releaseDate = row['releaseDate'];
        var addFavourite = row['addFavourite'];
        var rating = row['rating'];


        $("#txtId").val(id);
        $("#SongModify").val(songName);
        $("#ArtistModify").val(artistName);
        $("#genreModify").val(genreId);
        $("#genreModify").selectmenu("refresh");
        $("#dateModify").val(releaseDate);
        $("#ratingsModify").val(rating);
        $("#ratingsModify").slider("refresh");
        if (addFavourite === 'true') {
            $("#yesModify").prop("checked", true);
        } else {
            $("#noModify").prop("checked", true);
        }
        $("#frmModifyPlaylist :radio").checkboxradio("refresh");
    }

    PlayList.select(options, callback);

}
// clear DB
function clearDatabase() {
    dropTables();
    alert("Database cleared. All tables dropped.");
}
