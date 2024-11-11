function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function (e) {

  if (!e.target.closest('.dropbtn')) { // Check if clicked outside the dropdown
  
    var myDropdown = document.getElementById("myDropdown");

    if (myDropdown.classList.contains('show')) {
      document.getElementById("down").style.display = "none";
      document.getElementById("up").style.display = "inherit";

      myDropdown.classList.remove('show');
    }
  }
}
