document.addEventListener('DOMContentLoaded', function () {
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const hiddenBoxes = document.querySelectorAll('.box-container .box:nth-child(n+4)');
  
    seeMoreBtn.addEventListener('click', function () {
      // Toggle visibility of hidden product boxes
      hiddenBoxes.forEach(box => {
        box.style.display = (box.style.display === 'none' || box.style.display === '') ? 'block' : 'none';
      });
  
      // Change button text based on visibility
      seeMoreBtn.innerText = (hiddenBoxes[0].style.display === 'none') ? 'See More' : 'See Less';
    });
  });
  




 