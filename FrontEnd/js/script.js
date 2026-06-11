function clickBtnMenu(menu){
    menu.style.display='flex';
    console.log(1);
    
}
function changerBtnMenu(){
    btnMenuMobile.style.display='none';
    IconeCroix.style.display='block';

}


let svgGit=document.querySelector(".SvgGit");
let svgEmail=document.querySelector(".SvgEmail");
let svgLinkedIn=document.querySelector(".SvgLinkedIn");


svgEmail.addEventListener("click",()=>{
    window.open("https://mail.google.com/mail/u/2/#inbox?compose=jrjtXMncZdstQnNgtKjHbHMjPpHtwqXPmJcZjwmbzCXwLnphWrKMcTPgNmsPhNRwJLkVmVSK","_blank");
});

svgLinkedIn.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/rayan-derguini-50118a1b4/","_blank");
});

svgGit.addEventListener("click",()=>{
    window.open("https://github.com/Rayaninfog2","_blank");
});

//Version Mobile
let svgGitMobile=document.querySelector(".SvgGitMobile");
let svgEmailMobile=document.querySelector(".SvgEmailMobile");
let svgLinkedInMobile=document.querySelector(".SvgLinkedInMobile");


svgEmailMobile.addEventListener("click",()=>{
    window.open("https://mail.google.com/mail/u/2/#inbox?compose=jrjtXMncZdstQnNgtKjHbHMjPpHtwqXPmJcZjwmbzCXwLnphWrKMcTPgNmsPhNRwJLkVmVSK","_blank");
});

svgLinkedInMobile.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/rayan-derguini-50118a1b4/","_blank");
});

svgGitMobile.addEventListener("click",()=>{
    window.open("https://github.com/Rayaninfog2","_blank");
});

let menuMobile=document.querySelector(".leMenu");
let navbarMobile=document.querySelector(".navbarMobile");
let btnMenuMobile=document.querySelector(".menuIcone");
let IconeCroix=document.querySelector(".IconeCroix");

let bool=false;
let boolBtnMenu=false;
btnMenuMobile.addEventListener("click",()=>{
    menuMobile.style.display='flex';
    btnMenuMobile.style.display='none';
    IconeCroix.style.display='block';

    

});
IconeCroix.addEventListener("click",()=>{
    menuMobile.style.display='none';
    IconeCroix.style.display='none';
    btnMenuMobile.style.display='block';
})

function supprimerMenuMobile(){
    if(window.innerWidth>768){
        menuMobile.style.display='none';
    }

}

window.addEventListener("resize",supprimerMenuMobile);

//Btn me contacter
function defilerPage(sectionPage){
    window.location.href=sectionPage;
}


let btnMeContacter=document.querySelector(".BtnNavbar");
btnMeContacter.addEventListener("click",()=>{
    defilerPage("#contact");
});

let btnMobileMeContacter=document.querySelector(".BtnMenuMobile");
btnMobileMeContacter.addEventListener("click",()=>{
    defilerPage("#contactMobile");
});

let btnVoirProjets=document.querySelector(".Btn1");
btnVoirProjets.addEventListener("click",()=>{
    defilerPage("#projets");
});

let btnMobileVoirProjets=document.querySelector(".Btn1Mobile");
btnMobileVoirProjets.addEventListener("click",()=>{
    defilerPage("#projets");
});

//Telecharger mon CV
let btnTelechargerCV=document.querySelector(".Btn2");
btnTelechargerCV.addEventListener("click",()=>{
    window.location.href="./assets/MonCV.pdf";
})

let btnMobileTelechargerCV=document.querySelector(".Btn2Mobile");
btnMobileTelechargerCV.addEventListener("click",()=>{
    window.location.href="./assets/MonCV.pdf";
})

//Envoie d'email
emailjs.init(
    { publicKey:'a9zsanpHJJXFjm9FJ' }
);

let formContact=document.querySelector(".Form");
formContact.addEventListener("submit", async (event)=>{
    event.preventDefault();//evite le rechargement de la page

    try{
        await emailjs.sendForm(
            "service_rayan.d.i",
            "template_rayan.d.i",
            formContact
        )
        alert("Email envoyé");
        formContact.reset();
    }catch(err){
        console.error(err);
        alert("Echec lors de l'envoi de l'email!");
    }
});

//Email pour version mobile
let formMobile=document.querySelector(".FormMobile");
formMobile.addEventListener("submit", async (event)=>{
    event.preventDefault();//evite le rechargement de la page

    try{
        await emailjs.sendForm(
            "service_rayan.d.i",
            "template_rayan.d.i",
            formMobile
        )
        alert("Email envoyé");
        formMobile.reset();
    }catch(err){
        console.error(err);
        alert("Echec lors de l'envoi de l'email!");
    }
});


//acceder aux projets

function accederProjet(url){
    window.open(url,"_blank");
}

let projetJeuTron=document.querySelector(".carteProjet2");
projetJeuTron.addEventListener("click",()=>{
    accederProjet("https://troneonwars.netlify.app/");
})
/*
let projetRecettesCuisine=document.querySelector(".carteProjet3");
projetRecettesCuisine.addEventListener("click",()=>{
    accederProjet("http://kitchenmanagerbd.onrender.com/");
})
*/





