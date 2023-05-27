/**
 * File Name: vnndcamera.js
 *
 * Revision History:
 *       Nehal Dogra & Vatsal Nariya, 2022-04-16 : Created
 */
function capturepicture() {
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true
    };

    function onSuccess(photoData) {
        var image = $("#Snap");
        image.prop("src", "data:image/jpeg;base64," + photoData);
    }

    function onFail(error) {
        alert("Failed because : " + error.message);
    }

    navigator.camera.getPicture(onSuccess, onFail, options);
}

function loadFromLibrary() {
    var options = {
        quality: 50,
        // allowEdit: true,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    };

    function onSuccess(photoData) {
        var image = $("#Snap");
        image.prop("src", "data:image/jpeg;base64," + photoData);
    }

    function onFail(error) {
        alert("Failed because : " + error.message);
    }

    navigator.camera.getPicture(onSuccess, onFail, options);
}
