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


// Results Animation

const resultCards = document.querySelectorAll('.result-card');

const resultObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }

    });

});

resultCards.forEach((card)=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s ease";

    resultObserver.observe(card);

});


const statCards = document.querySelectorAll(".stat-card");

const statObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }

    });

});

statCards.forEach((card)=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s ease";

    statObserver.observe(card);

});





const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item)=>{

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click",()=>{

        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
        }else{
            answer.style.maxHeight =
            answer.scrollHeight + "px";
        }

    });

});


const ctaSection = document.querySelector(".cta-section");

const ctaObserver = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}

});

});

ctaSection.style.opacity="0";
ctaSection.style.transform="translateY(40px)";
ctaSection.style.transition="0.8s ease";

ctaObserver.observe(ctaSection);




const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const number = this.querySelector('input[type="tel"]').value;
    const service = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;

    const whatsappMessage =
`Hello Social Media Growth India

Name: ${name}

WhatsApp: ${number}

Service: ${service}

Message: ${message}`;

    window.open(
`https://wa.me/918603731247?text=${encodeURIComponent(whatsappMessage)}`,
"_blank"
);

});