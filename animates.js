// let navhead = document.querySelector(".navhead"); //should grab first navbar class.. which is what we need
// let navbody = document.querySelector(".navbody");
// let heading = document.querySelector(".Main");


// window.onscroll = animateIntro;

function animateNav(e) {
    //get heading height
    $(document).ready(function () {
        if (!window.pageYOffset) { //at top of page
          //  document.querySelector(".navhead").style.visibility = "visible";
          document.querySelector(".Me").style.paddingTop = "1rem"
            $(".navhead").slideDown(1000); //check this later
        } else if (window.pageYOffset > 20 && window.pageYOffset < heading.offsetHeight-25) {
            $(".navbody").slideUp();
            // document.querySelector(".navhead").style.visibility= "hidden";
            document.querySelector(".navhead").style.display = "none";
            document.querySelector(".Me").style.paddingTop = "8.5rem";
            document.querySelector(".navbody").style.opacity = '0.5';
        } else if (window.pageYOffset > heading.offsetHeight+75) {
            $(".navbody").slideDown();
            document.querySelector(".navbody").style.opacity = '0.8';

        }

    });
}
    // Shorthand for $( document ).ready()
    $(function() {
        console.log( "ready!" );
        $("#myName").fadeIn(2000);
        $("#introPic").fadeIn(2000);
        // $(".navbody").slideUp(1000); //.slideDown(1000);

    });