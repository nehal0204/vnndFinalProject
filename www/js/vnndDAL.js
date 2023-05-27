/**
 * File Name: vnndDAL.js
 *
 * Revision History:
 *       Nehal Dogra & Vatsal Nariya, 2022-04-15 : Created
 */

var PlayList = {
    insert: function (options, callback) {
        function txFunction(tx) {
            var createPlayList = "INSERT INTO playlist(songName, artistName, genreId, releaseDate, addFavourite, rating) VALUES(?,?,?,?,?,?);";

            tx.executeSql(createPlayList, options, callback, errorHandler);

        }

        function successTransaction() {
            console.info("Success: Insert Transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function (options, callback) {
        function txFunction(tx) {
            var createPlayList = "UPDATE playlist SET songName=?, artistName=?, genreId=?, releaseDate=?, addFavourite=?, rating=? WHERE id=?;";
            tx.executeSql(createPlayList, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Update Transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function (options, callback) {
        function txFunction(tx) {
            var createPlayList = "DELETE FROM playlist WHERE id=?;";
            tx.executeSql(createPlayList, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Delete Transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function (options, callback) {
        function txFunction(tx) {
            var createPlayList = "SELECT * FROM playlist WHERE id=?;";
            tx.executeSql(createPlayList, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Select Transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function (options, callback) {
        function txFunction(tx) {
            var createPlayList = "SELECT * FROM playlist;";
            tx.executeSql(createPlayList, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: SelectAll Transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectFavourite: function (options, callback) {
        function txFunction(tx) {
            var createPlayList = "SELECT * FROM playlist WHERE addFavourite = 'true';";
            tx.executeSql(createPlayList, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: select favourite Transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }

};

var Genre = {
    selectAll: function(options, callback){
        function txFunction(tx) {
            var createGenre = "SELECT * FROM genre;";
            tx.executeSql(createGenre, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: selectAll Transaction is successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);

    }

};