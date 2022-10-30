function checkCount() {
    experiences = document.querySelector('.experiences')
    let count = experiences.childElementCount;
    if (count > 4) {

        experiences.style.overflowY = "scroll"

    }   
    else {

        console.log("teste")

    }

}