console.log("loaded js")
// var content = document.querySelector(".card-content");
var seeMoreButtons=document.querySelectorAll('.seeMoreButton');
// var content = this.previousElementSibling;
var seebelow=document.querySelector('.seemore')

// seeMoreButton.addEventListener('click',function(event){
console.log(seebelow);
seeMoreButtons.forEach(button=>{
    button.addEventListener('click',function(){

        var card=this.closest('.card');
        var content=card.querySelector('.card-content')

        if (content.style.display === 'none' || !content.style.display) {
            content.style.display = 'block';
            this.textContent = 'See Less ';
            seebelow.style.display=="none";
        } else {
            content.style.display = 'none';
            seebelow.style.display=="block";
            this.textContent = 'See More';
        }
    });
});