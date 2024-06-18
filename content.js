(function() {
  // Function to click on the "Save as Draft" button
  function clickSaveDraftButton() {
    const saveDraftButton = document.querySelector('.qcButtons .qc_reject_btn');
    if (saveDraftButton) {
      saveDraftButton.click();
      console.log('Clicked on the "Save as Draft" button.');
    } else {
      console.log('Save Draft button not found.');
    }
  }

  // Auto-click the "Save as Draft" button every 3 seconds
  setInterval(() => {
    console.log('Attempting to click the "Save as Draft" button.');
    clickSaveDraftButton();
  }, 15000); // 3000 milliseconds = 3 seconds
})();
