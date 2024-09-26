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
    icon: "/icon_512x512.png",
    vibrate: [200, 100, 200, 100,],
    badge:'/clickicon_96x96.png'
  }

  self.registration.showNotification('타이틀입니다.',options);

})

// self.addEventListener('push', function(event) {
  
//  console.log(event)
 
 

// event.waitUntil(
//   self.registration.showNotification("test클릭", options)
// );
// });