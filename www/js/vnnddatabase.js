/**
 * File Name: vnnddatabase.js
 *
 * Revision History:
 *       Nehal Dogra & Vatsal Nariya, 2022-04-16 : Created
 */
var db;

function errorHandler(error) {
    console.error("SQL Error: " + error.message);
}

var DB = {
    createDatabase: function () {
        var shortName = "vnndFinalProject";
        var version = "1.0";
        var displayName = "DB for vnndFinalProject app";
        var dbSize = 2 * 1024 * 1024;

        function dbCreateSuccess() {
            console.info("Success: Database created successfully");
        }

        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);
    },
    createTables: function () {
        function txFunction(tx) {

            var dropGenre = "DROP TABLE IF EXISTS genre;";
            console.info("Dropping Table: Genre if exists...")

            var createGenre = "CREATE TABLE IF NOT EXISTS genre( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";
            console.info("Creating Table: genre...");

            console.info("Inserting data to Table: genre...");
            var genreRock = "INSERT INTO genre (name) VALUES ('Rock')";
            var genrePop = "INSERT INTO genre (name) VALUES ('Pop')";
            var genreHipHop = "INSERT INTO genre (name) VALUES ('Hip Hop')";
            var genreClassical = "INSERT INTO genre (name) VALUES ('Classical')";
            var genreCountry = "INSERT INTO genre (name) VALUES ('Country')";
            var genreDancePop = "INSERT INTO genre (name) VALUES ('Dance Pop')";

            var createPlaylist = "CREATE TABLE IF NOT EXISTS playlist( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "songName VARCHAR(30) NOT NULL," +
                "artistName VARCHAR(30) NOT NULL," +
                "genreId INTEGER NOT NULL," +
                "releaseDate DATE," +
                "addFavourite VARCHAR(1)," +
                "rating INTEGER," +
                "FOREIGN KEY(genreId) REFERENCES genre(id));";
            var options = [];

            console.info("Creating Table: playlist...");

            function successDropTableGenre() {
                console.info("Success: genre table dropped");
            }

            function successCreateTableGenre() {
                console.info("Success: genre table created successfully");
            }

            function successInsertRowGenre() {
                console.info("Success: row inserted successfully to genre table");
            }

            function successCreateTablePlaylist() {
                console.info("Success: playlist table created successfully");
            }

            tx.executeSql(dropGenre, options, successDropTableGenre, errorHandler);
            tx.executeSql(createGenre, options, successCreateTableGenre, errorHandler);
            tx.executeSql(genreRock, options, successInsertRowGenre, errorHandler);
            tx.executeSql(genrePop, options, successInsertRowGenre, errorHandler);
            tx.executeSql(genreHipHop, options, successInsertRowGenre, errorHandler);
            tx.executeSql(genreClassical, options, successInsertRowGenre, errorHandler);
            tx.executeSql(genreCountry, options, successInsertRowGenre, errorHandler);
            tx.executeSql(genreDancePop, options, successInsertRowGenre, errorHandler);
            tx.executeSql(createPlaylist, options, successCreateTablePlaylist, errorHandler);
        }

        function successTransaction() {
            console.info("Success transaction: All tables created successfully");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
}
function dropTables(){
    function txFunction(tx) {
        var DropGenre = "DROP TABLE IF EXISTS genre;"
        var DropPlaylist = "DROP TABLE IF EXISTS playlist;"
        var options = [];

        function successCallback1() {
            console.info("Success: table dropped successfully");
        }
        function successCallback2() {
            console.info("Success: table dropped successfully");
        }

        tx.executeSql(DropGenre, options, successCallback1, errorHandler);
        tx.executeSql(DropPlaylist, options, successCallback2, errorHandler);
    }

    function successTransaction() {
        console.info("Success: Transaction is successful");
    }

    db.transaction(txFunction, errorHandler, successTransaction);


}