/*let features = 'height=600,width=800',
    url = 'https://www.w3schools.com/js/js_scope.asp';

let jsWindow = window.open(url, 'about', features);

setTimeout(() => {
    window.open('https://www.w3schools.com/js/js_errors.asp', 'about')
}, 3000);
*/


let jsWindow = window.open(
  "http://127.0.0.1:5500/Class_19_20220720/object.html",
  "about",
  "height=600,width=800"
);

setTimeout(() => {
  window.open("http://127.0.0.1:5500/Class_17_20221307/index.html", "about");
}, 3000);

setTimeout(() => {
  jsWindow.resizeTo(600, 300); // Will not work for third part resources because of CORS
}, 6000);

setTimeout(() => {
    jsWindow.close();
  }, 9000);

  setTimeout(() => {
    window.open("http://127.0.0.1:5500/Class_16_20221107/index.html", "_blank");
  }, 12000);
