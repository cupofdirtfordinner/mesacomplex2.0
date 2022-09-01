fetch("roots/js/json/lines.json")
.then(res => res.json())
.then(json => {
    document.getElementById("splash").innerHTML = json[Math.floor(Math.random() * json.length)];
}).catch(error => {
    console.log(error);
});

fetch("roots/js/json/sponsor.json")
.then(res => res.json())
.then(json => {
    document.getElementById("sponsor").innerHTML = json[Math.floor(Math.random() * json.length)];
}).catch(error => {
    console.log(error);
});