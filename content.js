(function() {
  // Function to click on the "Save Draft" button
  function clickSaveDraftButton() {
    const saveDraftButton = document.querySelector('.qcButtons .qc_reject_btn');
    if (saveDraftButton) {
      saveDraftButton.click();
      console.log('Clicked on the "Save Draft" button.');
    } else {
      console.log('Save Draft button not found.');
    }
  }

  // Listen for clicks on "Next Image" button
  const nextImageButton = document.querySelector('.p-button.img_control_btn img[src*="rightArrow"]');
  if (nextImageButton) {
    nextImageButton.closest('.p-button').addEventListener('click', () => {
      console.log('Next Image button clicked.');
      clickSaveDraftButton();
    });
  }

  // Listen for clicks on "Previous Image" button
  const prevImageButton = document.querySelector('.p-button.img_control_btn img[src*="leftArrow"]');
  if (prevImageButton) {
    prevImageButton.closest('.p-button').addEventListener('click', () => {
      console.log('Previous Image button clicked.');
      clickSaveDraftButton();
    });
  }
})();
