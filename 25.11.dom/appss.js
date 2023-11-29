const lists = document.querySelectorAll(`nav ul li`);
window.onscroll = function() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      console.log("Səhifə scroll edir!");
  }
};