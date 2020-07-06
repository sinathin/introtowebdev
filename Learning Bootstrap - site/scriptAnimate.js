/*What I want to do:
 1. once we start scrolling past initial position, the nav bar dissapears
 2. It wont appear until EITHER we've stopped scrolling OR/AND we're past the base of the heading container
 3. I would like to use an animation in css, to allow for the nav bar to kind dissolve in or slide down
 4. IF we want to get it back at the top of hading contain, it will just be in its original position
*/

let navbar = document.querySelector(".navbar"); //should grab first navbar class.. which is what we need
let heading = document.querySelector(".headblock");

window.onscroll = animateNav;

function animateNav(e) {
    //get heading height
    $(document).ready(function () {
        if (!window.pageYOffset) { //at top of page
            $(".navbar").slideDown();
            document.querySelector(".navbar").style.opacity = '1';
        }
        else if (window.pageYOffset > 20 && window.pageYOffset < heading.offsetHeight) {
            $(".navbar").slideUp(1000);
            document.querySelector(".navbar").style.opacity ='0.5';
        } 
        else if (window.pageYOffset > heading.offsetHeight ) {
            $(".navbar").slideDown(400);
            document.querySelector(".navbar").style.opacity = '0.8';

        }
            
           // $(".navbar").slideUp(1000);

        //console.log(heading.offsetHeight);


    });

}