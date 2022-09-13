setInterval(10)
fetch("/roots/js/json/lines.json")
.then(res => res.json())
.then(json => {
    const splash = document.getElementById("splash")
    splash.innerHTML = json[Math.floor(Math.random() * json.length)];
    splash.style.animationDuration = `${Math.round(splash.clientWidth / 200)}s`
}).catch(error => {
    console.log(error);
});