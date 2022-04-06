const h3_AboutMeText = ["software", "game", "web"];
var count = 0;


function change_h3_AboutMeText(){

    try{
        
        document.getElementById("about_me__header").innerText = h3_AboutMeText[count].toUpperCase();
        if(document.getElementById("about_me__hero")){ document.getElementById("about_me__hero").innerText = h3_AboutMeText[count]; }
        
        if(count < ( h3_AboutMeText.length - 1 ) ){
            count++;
        }
        else{ count = 0; }
        
    }catch(error){}

}
setInterval(change_h3_AboutMeText, 3000);
window.onload = change_h3_AboutMeText();