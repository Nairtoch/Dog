// Service Worker Registration

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("serviceWorker.js")

    .then(registration => {
        console.log("Service Worker registered.");
        console.log(registration);
    }).catch(error => {
        console.log("Service Worker request failed.");
        console.log(error);
    })
} else {
    // Browser doen't support Service Worker.
    alert("PWA not supported.");
    // Aka fuck u git gud
}

let btn = document.getElementById('btnClick');
let image = document.getElementById('image');

btn.addEventListener('click', function() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(result => {
            console.log(result);
            image.src = result.message
        })
        .catch(err=>console.log(err))
})