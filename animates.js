let navhead = document.querySelector(".navhead"); //should grab first navbar class.. which is what we need
let navbody = document.querySelector(".navbody");
let heading = document.querySelector(".Main");

window.onscroll = animateNav;

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

        // $(".navbar").slideUp(1000);

        //console.log(heading.offsetHeight);


    });

}