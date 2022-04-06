var show_popup_screen = false;
try{

    let btns_href = document.querySelectorAll("a.nav_item_hitbox");

    [].forEach.call(btns_href, function(el){
        el.addEventListener("click", function(){

            if(!el.hasAttribute("href")){
                
                show_popup_screen = true;
                document.getElementById("popup_screen").style.display = "flex";
                document.getElementById("main_div").classList.add("filter_blur");
                document.getElementById("switch_theme_hitbox").classList.add("filter_blur");
                document.body.classList.add("noscroll");
                
            }
            
        });
    });
    
}catch(error){}



try{

    let btns_close_popup = document.getElementsByClassName("close_popup_message");

    [].forEach.call(btns_close_popup, function(el){
        el.addEventListener("click", function(){

            show_popup_screen = false;
            document.getElementById("popup_screen").style.display = "none";
            document.getElementById("main_div").classList.remove("filter_blur");
            document.getElementById("switch_theme_hitbox").classList.remove("filter_blur");
            document.body.classList.remove("noscroll");

        });
    });
    
}catch(error){}