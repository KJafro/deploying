// console.log("Service Worker Successfully Loaded!");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved from Backend");
  self.registration.showNotification(data.title, {
    body: "Everyday Being~~~",
    icon: "https://images.unsplash.com/photo-1580250642511-1660fe42ad58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
  });
});
