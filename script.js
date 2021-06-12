const parallax = document.querySelector(".parallax");
const diligence = document.querySelector(".mobileDiligence");
const auditing = document.querySelector(".mobileAuditing");
const business = document.querySelector(".mobileBusiness");
const moderation = document.querySelector(".mobileModeration");
const services = document.querySelector(".services");
const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{
  const scrolled = window.scrollY;
  console.log(scrolled);
  

  if(scrolled!=0 ){
      nav.classList.add("color");
  }
  else{
      nav.classList.remove("color");
  }
  
  
});

// parallax effect
function NotForMobileDevicese(){

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

    const newDiligence = services.children[1].children[0].innerHTML;
    const newCard = document.createElement("div");
    newCard.classList.add("card","mobileCard","diligence");
    newCard.innerHTML = newDiligence;

    services.appendChild(newCard)
    
  }
  else{

    window.addEventListener("scroll",()=>{
    let scrolled = window.scrollY;

    parallax.style.transform = "translateY("+ scrolled*0.5 +"px)";
      });
  }    

}

NotForMobileDevicese();

diligence.addEventListener("click",()=>{

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

      if(services.children[4].classList.contains("diligence")){
          return;        
      }
      else{

        services.children[4].remove();
        const newDiligence = services.children[1].children[0].innerHTML;

        const newCard = document.createElement("div");
        newCard.classList.add("card","mobileCard");
        newCard.innerHTML = newDiligence;

        services.appendChild(newCard)
      }
      
      
    }
    else{
      return;
    }
 
});

auditing.addEventListener("click",()=>{

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    if(services.children[4].classList.contains("auditing")){
      return;
    }
    else{

      services.children[4].remove();
      const newAuditing = services.children[1].children[1].innerHTML;
      const newCard = document.createElement("div");
      newCard.classList.add("card","mobileCard","auditing");
      newCard.innerHTML = newAuditing;

      services.appendChild(newCard)
    }
  }
})
business.addEventListener("click",()=>{

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    if(services.children[4].classList.contains("business")){
      return;
    }
    else{
      services.children[4].remove();
      const newBusiness = services.children[2].children[0].innerHTML;
      const newCard = document.createElement("div");
      newCard.classList.add("card","mobileCard","business");
      newCard.innerHTML = newBusiness;

      services.appendChild(newCard)
    }
  }
})
moderation.addEventListener("click",()=>{

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    if(services.children[4].classList.contains("moderation")){
      return;
    }
    else{

      services.children[4].remove();
      const newModeration = services.children[2].children[1].innerHTML;
      const newCard = document.createElement("div");
      newCard.classList.add("card","mobileCard","moderation");
      newCard.innerHTML = newModeration;

      services.appendChild(newCard)
    }
  }
})


