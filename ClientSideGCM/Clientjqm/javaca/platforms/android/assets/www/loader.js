var jqmReady = $.Deferred();
var cordovaReady = $.Deferred();

    console.log("loading started");
$(document).on("mobileinit",
        function () {
            console.log("Testing >> Mobile init is loaded");
            jqmReady.resolve();
        }
);
document.addEventListener("deviceready", function () {
    console.log("Testing >> deviceready is loaded");
    console.log("Testing >> Cordova IME" + cordova.plugins.uid.IMEI);
    cordovaReady.resolve();
});


