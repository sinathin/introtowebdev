
window.onload = function () {//needed because JS needs to run once page loads for it to grab DOM objects which may not have loaded yet
   // let Fname = document.querySelector('#firstName');
   // let Lname = document.querySelector('#lastName');
    /*
    Fname.addEventListener("input",temp);
    function temp(){
        console.log(Fname.value);
    }
    */

    //Try to turn to arrow function

    //Fname.addEventListener("input", () => console.log(Fname.value));
    //Lname.addEventListener("input", () => console.log(Lname.value));

    /*What we want to do:
    1)Have user enter in name and story
    2) once they hit submit (OR maybe enter) grab the info
    3) and insert it into the publish stories with some fancy formating
    4) clear the fields out
    */
    let submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.addEventListener("click", collectStory);

    function collectStory(e){
        e.preventDefault();//prevents the submit button from actually submitting
        let Fname = document.querySelector('#firstName');
        let Lname = document.querySelector('#lastName');
        let title = document.querySelector('#title');
        let story = document.querySelector('#story');
        //console.log(`Thank you ${Fname.value} ${Lname.value} for clicking submit and sharing ${title.value}`);
         //Create element to insert
        let block = document.createElement('article');
        //create heading
        let heading = document.createElement('h3');
        heading.appendChild(document.createTextNode(`${title.value}`));
        //create name
        let name = document.createElement('h5');
        name.appendChild(document.createTextNode(`By: ${Fname.value} ${Lname.value}`))
        //create storytext
        let storytext = document.createElement('p');
        storytext.appendChild(document.createTextNode(`${story.value}`));

        //adding into article
        block.appendChild(heading);
        block.appendChild(name);
        block.appendChild(storytext);
       

        let container = document.querySelector(".published");
        container.insertBefore(block, container.nextElementSibling);
        document.querySelector('.published article').classList.add('.published-article');
        
        Fname.value = '';
        Lname.value ='';
        title.value = '';
        story.value = '';
        
        //console.log(block);
    }

}