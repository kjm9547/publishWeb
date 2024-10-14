self.addEventListener("install", function () {
  console.log("install");
  self.skipWaiting();
});

self.addEventListener("activate", function () {

});

self.addEventListener("fetch", function (event) {
  console.log("hi");
  if (event.request.url.includes("bootstrap")) {
    console.log("Fetch request for");
    event.respondWith(
      new Response(
        ".hotel-slogan { background: red!important; } nav{display:none}",
        { headers: { "Content-Type": "text/css" } }
      )
    );
  }
});

self.addEventListener('message', (event) => {
  const {message} = event.data.payload;

  const options = {
    body: message,
    icon: "/new512x512.png",
    vibrate: [200, 100, 200, 100,],
    badge:'/clickicon_192x192.png'
  }

  self.registration.showNotification('타이틀입니다.',options);

})

self.addEventListener('push',(event) => {
  console.log(event)
  const options = {
    body: "data.body",
  };

  event.waitUntil(
    self.registration.showNotification("title", options)
  );
})