try{

    var input_checkbox_hireMe = document.getElementById("input_hireMe");
    var input_checkbox_shop = document.getElementById("input_shop");

    const dropdown_hireMe_arrow = document.getElementById("hireMe_arrow");
    const dropdown_shop_arrow = document.getElementById("shop_arrow");

    try{

        function rotate_arrows(){
            try {

                dropdown_hireMe_arrow.classList.add("accordion_opened");
                dropdown_shop_arrow.classList.add("accordion_opened");
            }
            catch (error) {}
        }
        function reset_arrows(){
            try {
                
                dropdown_hireMe_arrow.classList.remove("accordion_opened");
                dropdown_shop_arrow.classList.remove("accordion_opened");
            }
            catch (error) {};
        }

        var checkboxes = document.getElementsByClassName("accordion_input");
        var media_query = window.matchMedia("screen and (min-width: 585px)");

        [].forEach.call(checkboxes, function(el) {
            el.addEventListener("click", function() {
                if(media_query.matches){
                    if (el.checked == true){
                        for (var i = 0; i < checkboxes.length; i++) {
                            checkboxes[i].checked = true;
                        }
                        rotate_arrows();
                    }else{
                        for (var i = 0; i < checkboxes.length; i++) {
                            checkboxes[i].checked = false;
                        }
                        reset_arrows();
                    }
                }
                else{

                    switch(el.id.toString()){
                        case "input_hireMe":
                            dropdown_hireMe_arrow.classList.toggle("accordion_opened");
                            break;
                        case "input_shop":
                            dropdown_shop_arrow.classList.toggle("accordion_opened");
                            break;
                    }
                }


            },{passive: true} ,false);
        });

        
        function openDropdowns(media_query) {
            for (var i = 0; i < checkboxes.length; i++){
                if(checkboxes[i].checked){
                    input_checkbox_hireMe.checked = true;
                    input_checkbox_shop.checked = true;
                    rotate_arrows();
                }
            }
        }

        openDropdowns(media_query);
        media_query.addEventListener("change",openDropdowns);
    

    }catch(error){console.log("ERROR: something went wrong !");}

}catch(error){}