try{

    var get_ColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const moon_svg = document.getElementById("moon_icon");
    const sun_svg = document.getElementById("sun_icon");
    var input_checkbox_darkmode = document.getElementById("checkbox_darkmode");


    //Local Storage --------------------------------------------------
    if(window.localStorage.getItem("darkmode") === null){
        window.localStorage.setItem("darkmode", get_ColorScheme.toString().toLowerCase());
    }
    console.log("START localStorage =", window.localStorage.getItem("darkmode"));
    //Local Storage --------------------------------------------------


    function darkmode_true(){

        document.body.classList.add("dark_mode");
        moon_svg.style.display = "none";
        sun_svg.style.display = "block";

    }
    function darkmode_false(){

        document.body.classList.remove("dark_mode");
        moon_svg.style.display = "block";
        sun_svg.style.display = "none";

    }


    /* -------------- Check Dark Mode -------------- */
    function check_dark_mode(){

        try{

            if (window.localStorage.getItem("darkmode") == "true"){

                darkmode_true();
                input_checkbox_darkmode.checked = true;
            }
            else{
                darkmode_false();
                input_checkbox_darkmode.checked = false;
            }
            console.log("Dark Mode: " + get_ColorScheme , window.localStorage.getItem("darkmode"));

        }
        catch(error){

            if (get_ColorScheme == true){

                darkmode_true();
                input_checkbox_darkmode.checked = true;

                try{window.localStorage.setItem("darkmode", "true");}
                catch(error){console.log("ERROR: localStorage-darkmode")}
            }
            else{

                darkmode_false();
                input_checkbox_darkmode.checked = false;

                try{window.localStorage.setItem("darkmode", "false");}
                catch(error){console.log("ERROR: localStorage-darkmode")}
            }
            console.log("Dark Mode: " + get_ColorScheme , window.localStorage.getItem("darkmode"));

        }

    }
    window.onload = check_dark_mode();
    /* -------------- Check Dark Mode -------------- */



    /* -------------- Enable / Disable Dark Mode -------------- */
    input_checkbox_darkmode.addEventListener("click", ()=>{
        var get_checkbox_darkmode_value = input_checkbox_darkmode.checked;
        console.log("Boolean: " + get_checkbox_darkmode_value);

        try{

            if (get_checkbox_darkmode_value == true) {
                console.log("DARK");
                
                darkmode_true();

                try{window.localStorage.setItem("darkmode", "true");}
                catch(error){console.log("ERROR: localStorage-darkmode")}
                
            }
            else{
                console.log("LIGHT");
        
                darkmode_false();

                try{window.localStorage.setItem("darkmode", "false");}
                catch(error){console.log("ERROR: localStorage-darkmode")}
            }

        }catch(error){}

    })
    /* -------------- Enable / Disable Dark Mode -------------- */

}catch(error){

    try{
        document.getElementById("switch_theme_hitbox").style.display = "none";
        var cssId = 'darkmode_css';
        if (!document.getElementById(cssId))
        {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.id   = cssId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = 'style_darkmode.css';
            link.media = 'all';
            head.appendChild(link);
        }
    } catch(error){}

}