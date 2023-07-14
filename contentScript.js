function attachTweetButtonListener() {
    const tweetButton = document.querySelector("[data-testid='tweetButtonInline']");
    if (tweetButton) {
      const handleClick = function() {
        console.log("Tweet button clicked");
        const content = document.getElementsByClassName("DraftEditor-editorContainer")[0].firstElementChild.innerText;
        const encodedContent = encodeURIComponent(content);
        console.log(encodedContent);
        const url = `https://hachyderm.io/share?text=${encodedContent}`;
        //window.open(url, "_blank", "height=500,width=500");
        chrome.runtime.sendMessage(url);
      };
  
      tweetButton.removeEventListener("click", handleClick); // Remove any existing event listeners
      tweetButton.addEventListener("click", handleClick); // Attach the event listener
  
    } else {
      setTimeout(attachTweetButtonListener, 100);
    }
  }
  
  attachTweetButtonListener();
  