export const handleBeforeInstallPrompt = (event) => {
  event.preventDefault();
  const installButton = document.getElementById("installButton");
  installButton.style.display = "block";
  installButton.addEventListener("click", () => {
    // Access deferredPrompt from the event object
    const deferredPrompt = event;
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        // Reset deferredPrompt
        event = null;
        document.getElementById("installButton").style.display = "none";
      });
    }
  });
};
