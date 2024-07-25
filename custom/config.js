var ishttps = document.location.protocol == "https:";
var wsHost = null;
var viewhost = null;
var viewhosts = null;
var apihost = null;
var apihosts = null;
var isWebrtcPlay = false;


var lastIndex = location.pathname.lastIndexOf("/v3");
if (lastIndex < 0) {
    lastIndex = location.pathname.lastIndexOf("/");
}
var path = location.pathname.substr(0, lastIndex);

viewhost = location.protocol + "//" + location.host + path + "/";

//var hostDomain = "54.179.186.251";
var hostDomain = "gps51.com";

if (location.hostname.indexOf('localhost') != -1 || location.hostname.indexOf('127.0.0.1') != -1) {

    viewhosts = viewhost;
    if (location.pathname.indexOf("gpsserver") != -1) {
        apihost = viewhost;
        apihosts = viewhosts;
        wsHost = "ws://localhost:90";
    } else {
        apihost = 'https://www.gps51.com:443/';
        apihosts = 'https://www.gps51.com:443/';
        // apihost = 'https://video.safetruck.co:8443/';
        // apihosts = 'https://video.safetruck.co:8443/';
        wsHost = "wss://" + hostDomain + "/wss";
    }

} else {
    if (ishttps == true) {
        viewhosts = "https://" + location.host + path + "/";
        apihost = "https://" + hostDomain + ":443/";
        apihosts = "https://" + hostDomain + ":443/";
        wsHost = "wss://" + hostDomain + "/wss";
    } else {
        viewhosts = "http://" + location.host + path + "/";
        apihost = "http://" + hostDomain + "/";
        apihosts = "https://" + hostDomain + "/";
        wsHost = "ws://" + hostDomain + ":90/wss";
    }
}

window.viewhosts = viewhosts;
window.apihosts = apihosts;