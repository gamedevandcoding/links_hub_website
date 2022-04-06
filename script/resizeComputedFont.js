function resizeFont(){
    
    var isHanLang = false;
    var baseFontSize = 0;
    var text_field = 0;
    var computedFontSize = 0;



    /* --------------------------- LANGUAGE DETECTION --------------------------- */
    try{
        var userLang = navigator.language || navigator.userLanguage;
        if( userLang.indexOf('zh')>= 0 || userLang.indexOf('ko')>= 0 || userLang.indexOf('ja')>= 0 ){

            isHanLang = true;
            if(document.getElementById("services_title")){
                document.getElementById("services_title").classList.remove("services_hireMe");
                document.getElementById("services_title").classList.add("nav_item_span");
            }
        }
    }catch(error){ console.log("Error: --user_lang-- not detected"); }
    /* --------------------------- LANGUAGE DETECTION --------------------------- */



    try{
        if(document.getElementById("loading_message") != null){

            baseFontSize = 24;
            text_field = document.getElementById("loading_message");
            computedFontSize = parseFloat(window.getComputedStyle( text_field ).getPropertyValue("font-size"));

            text_field.style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
        }
    }catch(error){ console.log("Error: --loading_message-- not resized"); }



    /* --------------------------- SERVICES --------------------------- */
    try{
        if(document.getElementById("back_homepage_span__text") != null){

            baseFontSize = 20;
            text_field = document.getElementById("back_homepage_span__text");
            computedFontSize = parseFloat(window.getComputedStyle( text_field ).getPropertyValue("font-size"));

            text_field.style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
        }
    }catch(error){ console.log("Error: --back_homepage_span__text-- not resized"); }

    try{
        if(document.getElementsByClassName("service_title")[0] != null){

            baseFontSize = 25;
            text_field = document.getElementsByClassName("service_title");
            computedFontSize = parseFloat(window.getComputedStyle( text_field[0] ).getPropertyValue("font-size"));

            if (window.matchMedia("screen and (max-width: 325px)").matches){ baseFontSize = 20;}
            for(var x=0;x<text_field.length;x++){ text_field[x].style.fontSize = ( baseFontSize * ( baseFontSize / computedFontSize ) ).toString() + 'px'; };
        }
    }catch(error){ console.log("Error: --service_title-- not resized"); }

    try{
        if(document.getElementsByClassName("service_info")[0] != null){

            baseFontSize = 16;
            text_field = document.getElementsByClassName("service_info");
            computedFontSize = parseFloat(window.getComputedStyle( text_field[0] ).getPropertyValue("font-size"));

            if (window.matchMedia("screen and (max-width: 325px)").matches){ baseFontSize = 14;}
            for(var x=0;x<text_field.length;x++){ text_field[x].style.fontSize = ( baseFontSize * ( baseFontSize / computedFontSize ) ).toString() + 'px'; };
        }
    }catch(error){ console.log("Error: --service_info-- not resized"); }

    try{
        if(document.getElementsByClassName("service_on")[0] != null){

            baseFontSize = 16;
            text_field = document.getElementsByClassName("service_on");
            computedFontSize = parseFloat(window.getComputedStyle( text_field[0] ).getPropertyValue("font-size"));

            if (window.matchMedia("screen and (max-width: 325px)").matches){ baseFontSize = 14;}
            for(var x=0;x<text_field.length;x++){ text_field[x].style.fontSize = ( baseFontSize * ( baseFontSize / computedFontSize ) ).toString() + 'px'; };
        }
    }catch(error){ console.log("Error: --service_on-- not resized"); }
    /* --------------------------- SERVICES --------------------------- */






    /* --------------------------- MAIN --------------------------- */
    try{
        if(document.getElementsByClassName("switch_theme_info")[0] != null){

            baseFontSize = 15;
            text_field = document.getElementsByClassName("switch_theme_info");
            computedFontSize = parseFloat(window.getComputedStyle( text_field[0] ).getPropertyValue("font-size"));

            if (window.matchMedia("screen and (max-width: 325px)").matches){ baseFontSize = 12; }
            text_field[0].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
            text_field[1].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
        }
    }catch(error){ console.log("Error: --switch_theme_info-- not resized"); }



    try{
        if(document.getElementsByClassName("h3__header")[0] != null){

            baseFontSize = 25;
            text_field = document.getElementsByClassName("h3__header");
            computedFontSize = parseFloat(window.getComputedStyle( text_field[0] ).getPropertyValue("font-size"));

            if (window.matchMedia("screen and (max-width: 585px)").matches){ baseFontSize = 20; }
            text_field[0].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
            text_field[1].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
        }
    }catch(error){ console.log("Error: --h3__header-- not resized"); }

    try{
        if(document.getElementsByClassName("h3__hero")[0] != null){

            baseFontSize = 25;
            text_field = document.getElementsByClassName("h3__hero");
            computedFontSize = parseFloat(window.getComputedStyle( text_field[0] ).getPropertyValue("font-size"));

            if (window.matchMedia("screen and (max-width: 325px)").matches){ baseFontSize = 20; }
            text_field[0].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
            text_field[1].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
        }
    }catch(error){ console.log("Error: --h3__hero-- not resized"); }



    try{
        if(document.getElementsByClassName("nav_item_span")[0] != null){

            baseFontSize = 25;
            text_field = document.getElementsByClassName("nav_item_span");
            computedFontSize = parseFloat(window.getComputedStyle( text_field[0] ).getPropertyValue("font-size"));

            if (window.matchMedia("screen and (max-width: 325px)").matches){ baseFontSize = 20;}
            for(var x=0;x<text_field.length;x++){ text_field[x].style.fontSize = ( baseFontSize * ( baseFontSize / computedFontSize ) ).toString() + 'px'; };
        }
    }catch(error){ console.log("Error: --nav_item_span-- not resized"); }



    try{
        if(document.getElementsByClassName("dropdown_h3")[0] != null){

            baseFontSize = 18;
            text_field = document.getElementsByClassName("dropdown_h3");
            computedFontSize = parseFloat(window.getComputedStyle( text_field[0] ).getPropertyValue("font-size"));

            if (window.matchMedia("screen and (max-width: 325px)").matches){

                if( isHanLang == true ){baseFontSize = 16.5;}
                else{baseFontSize = 15;}
            }
            text_field[0].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
            text_field[1].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
        }
    }catch(error){ console.log("Error: --dropdown_h3-- not resized"); }

    try{
        if(document.getElementsByClassName("services_hireMe")[0] != null){

            baseFontSize = 14;
            text_field = document.getElementsByClassName("services_hireMe");
            computedFontSize = parseFloat(window.getComputedStyle( text_field[0] ).getPropertyValue("font-size"));

            text_field[0].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
            text_field[1].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
        }
    }catch(error){ console.log("Error: --services_hireMe-- not resized"); }



    try{
        if(document.getElementsByClassName("section_title_h3")[0] != null){

            baseFontSize = 18;
            text_field = document.getElementsByClassName("section_title_h3");
            computedFontSize = parseFloat(window.getComputedStyle( text_field[0] ).getPropertyValue("font-size"));

            if (window.matchMedia("screen and (max-width: 325px)").matches){

                if( isHanLang == true ){baseFontSize = 16.5;}
                else{baseFontSize = 15;}
            }
            text_field[0].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
            text_field[1].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
        }
    }catch(error){ console.log("Error: --section_title_h3-- not resized"); }

    try{
        if(document.getElementsByClassName("nav_item_detail")[0] != null){

            baseFontSize = 14;
            text_field = document.getElementsByClassName("nav_item_detail");
            computedFontSize = parseFloat(window.getComputedStyle( text_field[0] ).getPropertyValue("font-size"));

            for(var x=0;x<text_field.length;x++){ text_field[x].style.fontSize = ( baseFontSize * ( baseFontSize / computedFontSize ) ).toString() + 'px'; };
        }
    }catch(error){ console.log("Error: --nav_item_detail-- not resized"); }
    /* --------------------------- MAIN --------------------------- */





    
    /* --------------------------- FOOTER --------------------------- */
    try{
        if(document.getElementsByClassName("expertise_h3")[0] != null){

            baseFontSize = 18;
            text_field = document.getElementsByClassName("expertise_h3");
            computedFontSize = parseFloat(window.getComputedStyle( text_field[0] ).getPropertyValue("font-size"));
            
            if( isHanLang == true ){

                if(window.matchMedia("screen and (max-width: 325px)").matches){ baseFontSize = 19 }
                else{ baseFontSize = 20; }
            }

            text_field[0].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
            text_field[1].style.fontSize = Math.round(( baseFontSize * ( baseFontSize / computedFontSize )) ).toString() + "px";
        }
    }catch(error){ console.log("Error: --expertise_h3-- not resized"); }

    try{
        if(document.getElementsByClassName("list_item")[0] != null){

            baseFontSize = 14;
            text_field = document.getElementsByClassName("list_item");
            computedFontSize = parseFloat(window.getComputedStyle( text_field[0] ).getPropertyValue("font-size"));

            for(var x=0;x<text_field.length;x++){ text_field[x].style.fontSize = ( baseFontSize * ( baseFontSize / computedFontSize ) ).toString() + 'px'; };
        }
    }catch(error){ console.log("Error: --list_item-- not resized"); }
    /* --------------------------- FOOTER --------------------------- */



}






try{

    var span_size = 0;
    function check_span_size(){

        if (18 < span_size && span_size < 28){
            console.log("included");
        }
        else{
            console.log("not include");
            resizeFont();
        }
    }

    /* --------------------------- GET SPAN_SIZE --------------------------- */
    if(document.getElementsByClassName("nav_item_span")[0] != null){ 
        span_size = parseFloat(window.getComputedStyle( document.getElementsByClassName("nav_item_span")[0] ).getPropertyValue("font-size"));
        check_span_size();
    }
    else{ 
        span_size = parseFloat(window.getComputedStyle( document.getElementsByClassName("service_title")[0] ).getPropertyValue("font-size"));
        check_span_size();
    }
    /* --------------------------- GET SPAN_SIZE --------------------------- */

}catch(error){ console.log("Error: --list_item-- not resized"); }