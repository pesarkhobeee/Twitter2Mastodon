console.log("Service worker started!");
// https://developer.chrome.com/docs/extensions/reference/alarms/#type-AlarmCreateInfo
// https://stackoverflow.com/questions/26883915/google-chrome-extension-alarm-at-specific-time

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // 2. A page requested user data, respond with a copy of `user`
    // Open the popup window
    chrome.windows.create({
        url: message,
        type: 'popup',
        width: 200,
        height: 100
      });
  });