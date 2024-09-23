self.addEventListener("install", function () {
  console.log("install");
});

self.addEventListener("activate", function () {
  console.log("activate");
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
