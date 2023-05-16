// button submit 
let btn = document.querySelector("#btn");
let rateCard = document.querySelector(".rate");
let thankCard = document.querySelector(".thanks");

btn.addEventListener("click" , function() {
    btn.style.cssText = "background-color: white ; color:var(--Orange-color);";
    thankCard.classList.remove("hidden");
    rateCard.classList.add("hidden");

});

//star review
let star = document.querySelectorAll("#star");
let rate = document.querySelector("#rate");
let rateing = null;

star.forEach((star) =>{
    star.addEventListener("click" , (e) =>{
        const active =document.querySelector('.active');
        if(active) {
            active.classList.remove('active');
        }
        const stat = e.target;
        star.classList.add("active")

        rate.innerHTML = star.innerHTML;
    })
})