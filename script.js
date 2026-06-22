console.log("Social Media Growth India Loaded Successfully");

document.querySelector(".btn1").addEventListener("click", function(){
    console.log("WhatsApp Button Clicked");
});



// WHY CHOOSE US ANIMATION

const whyCards = document.querySelectorAll(".why-card");

const whyObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

whyCards.forEach((card) => {
    whyObserver.observe(card);
});