setTimeout(function(){


document.getElementById("logo").style.display = "none";
document.getElementById("content").style.display = "block";

Swal.fire({
  icon: 'info',
  title: 'Welcome to Square Meals',
  text: 'Proper food, proper quality, proper taste',
  footer: '<b>A <a href="https://leoturnbull.com" target="_blank">Leo Turnbull</a> project</b>'
})


}, 3000); 