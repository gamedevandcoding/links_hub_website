let language_data_field = [];
let language_data = 
[
    {
        "loading": "Caricamento...",

        "website":   "SITO WEB",
        "email":     "E-MAIL",
        "portfolio": "PROGETTI",

        "hireMe":    "SERVIZI",
        "shop":      "NEGOZIO",
        "community": "UNISCITI ALLA COMMUNITY",
        "extra":     "EXTRA LINKS",
        
        "page":    "pagina",
        "server":  "server",
        "rewards": "premi",

        "services": "GUARDA SERVIZI",
        "commission": "commissiona lavoro",

        "devment":   "Sviluppo",
        "web":       "Web",
        "software":  "Software",
        "game":      "Giochi",
        "assetprod": "Produzione Assets",
        "modelling": "Modellazione 3D",
        "texturing": "Texturizzazione",
        "digitanim": "Animazione Digitale",

        "allrights": "- Tutti i diritti riservati",
        "offlsite":  "- Sito ufficiale",

        "noDataCollected": "NESSUN DATO PERSONALE VIENE RACCOLTO",
        "cookiesFree": "- NO COOKIES",

        "popup_title": "SERVIZIO ATTUALMENTE NON DISPONIBILE",
        "popup_paragraph_01": "Questo servizio è attualmente in costruzione, e presto sarà disponibile.",
        "popup_paragraph_02": "Nel frattempo è possibile usufruire di altri servizi, guardare videoguide e molto altro.",
        "popup_paragraph_03": "Grazie per la vostra pazienza.",
        "popup_close": "CHIUDI",

        "back_homepage": "INDIETRO",

        "lang": "italian"
    },
    {
        "loading": "Chargement...",

        "website":   "SITE WEB",
        "email":     "E-MAIL",
        "portfolio": "PROJETS",

        "lang": "french"
    },
    {
        "loading": "Wird Geladen...",
        
        "website":   "WEB SEITE",
        "email":     "E-MAIL",
        "portfolio": "PROJEKTE",

        "lang": "german"
    },
    {
        "loading": "Cargando...",

        "website":   "SITIO WEB",
        "email":     "E-MAIL",
        "portfolio": "PROYECTOS",

        "lang": "spanish"
    },
    {
        "loading": "Carregando...",

        "website":   "SITE WEB",
        "email":     "E-MAIL",
        "portfolio": "PROJETOS",

        "lang": "portuguese"
    },
    {
        "loading": "Loading.ru...",

        "website":   "WEBSITE.ru",
        "email":     "E-MAIL.ru",
        "portfolio": "PORTFOLIO.ru",

        "lang": "russian"
    },
    {
        "loading": "加载中...",

        "website":   "网站",
        "email":     "电子邮件",
        "portfolio": "项目",

        "hireMe":    "雇佣我",
        "shop":      "购买",
        "community": "加入社区",
        "extra":     "额外链接",
        
        "page":    "页面",
        "server":  "服务器",
        "rewards": "奖励",

        "services": "查看所有服务",
        "commission": "委托工作",

        "devment":   "编程与设计",
        "web":       "网站",
        "software":  "软件",
        "game":      "游戏",
        "assetprod": "Assets 生产",
        "modelling": "三维建模",
        "texturing": "模型纹理",
        "digitanim": "数字动画",

        "allrights": "- 版权所有",
        "offlsite":  "- 官方网站",

        "noDataCollected": "不收集个人数据",
        "cookiesFree": "- 无COOKIES",

        "popup_title": "目前不支持此项服务",
        "popup_paragraph_01": "这项服务目前正在建设中, 不久将提供。",
        "popup_paragraph_02": "在此期间您可以查看其他服务, 享受教程和更多。",
        "popup_paragraph_03": "谢谢您的耐心等待。",
        "popup_close": "关闭",

        "lang": "chinese"
    },
    {
        "loading": "読み込み中...",

        "website":   "ウェブサイト",
        "email":     "電子メール",
        "portfolio": "プロジェクト々",

        "lang": "japanese",
    },
    {
        "loading": "로딩중...",

        "website":   "웹사이트",
        "email":     "이메일",
        "portfolio": "프로젝트들",

        "lang": "korean"
    }
];


/* ---------------- SPAWN CJK STYLE ---------------- */
let styleName = ['style_chinese.css','style_japanese.css','style_korean.css'];
let styleID = ['font-CN','font-JP','font-KR'];

function spawn_style(x){
    try{
        var cssId = styleID[x];
        if (!document.getElementById(cssId)){
            
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.id   = cssId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = 'extra_style/'+ styleName[x];
            link.media = 'all';
            head.appendChild(link);
        }
    }catch(error){}
}
/* ---------------- SPAWN CJK STYLE ---------------- */



/* -------------- APPLY LANGUAGE -------------- */
function apply_language(x,index){

    try{

        /* -------------- GET LANGUAGE FIELD -------------- */
        try{
            if(language_data[x].loading){ document.getElementById("loading_message").innerText = language_data[x].loading; }
        }catch(error){ console.log("Error: --loading-- not applied"); }

        try{
            if(language_data[x].website){ document.getElementById("website").innerText = language_data[x].website; }
            if(language_data[x].email){ document.getElementById("email").innerText = language_data[x].email; }
            if(language_data[x].portfolio){ document.getElementById("portfolio").innerText = language_data[x].portfolio; }
        }catch(error){ console.log("Error: --basic-- not applied"); }

        try{
            if(language_data[x].hireMe){ document.getElementById("hireMe").innerText = language_data[x].hireMe; }
            if(language_data[x].shop){ document.getElementById("shop").innerText = language_data[x].shop; }
            if(language_data[x].community){ document.getElementById("community").innerText = language_data[x].community; }
            if(language_data[x].extra){ document.getElementById("extra").innerText = language_data[x].extra; }
        }catch(error){ console.log("Error: --section-- not applied"); }

        try{
            if(language_data[x].page){ document.getElementById("page_detail").innerText = language_data[x].page; }
            if(language_data[x].server){ document.getElementById("server_detail").innerText = language_data[x].server; }
            if(language_data[x].rewards){ document.getElementById("rewards_detail").innerText = language_data[x].rewards; }
        }catch(error){ console.log("Error: --detail-- not applied"); }

        try{
            if(language_data[x].services){ document.getElementById("services_title").innerText = language_data[x].services; }
            if(language_data[x].commission){ document.getElementById("services_subtitle").innerText = language_data[x].commission; }
        }catch(error){ console.log("Error: --services-- not applied"); }

        try{
            if(language_data[x].devment){ document.getElementById("devment").innerText = language_data[x].devment; }
            if(language_data[x].web){ document.getElementById("web").innerText = language_data[x].web; }
            if(language_data[x].software){ document.getElementById("software").innerText = language_data[x].software; }
            if(language_data[x].game){ document.getElementById("game").innerText = language_data[x].game; }
            if(language_data[x].assetprod){ document.getElementById("assetprod").innerText = language_data[x].assetprod; }
            if(language_data[x].modelling){ document.getElementById("modelling").innerText = language_data[x].modelling; }
            if(language_data[x].texturing){ document.getElementById("texturing").innerText = language_data[x].texturing; }
            if(language_data[x].digitanim){ document.getElementById("digitanim").innerText = language_data[x].digitanim; }
        }catch(error){ console.log("Error: --expertise_list-- not applied"); }

        try{
            if(language_data[x].allrights){ document.getElementById("allrights").innerText = language_data[x].allrights; }
            if(language_data[x].offlsite){ document.getElementById("offlsite").innerText = language_data[x].offlsite; }
        }catch(error){ console.log("Error: --credits-- not applied"); }

        try{
            if(language_data[x].noDataCollected){ document.getElementById("noDataCollected_info").innerText = language_data[x].noDataCollected; }
            if(language_data[x].cookiesFree){ document.getElementById("cookiesFree_info").innerText = language_data[x].cookiesFree; }
        }catch(error){ console.log("Error: --privacy-- not applied"); }

        try{
            if(language_data[x].popup_title){ document.getElementById("popup_title").innerText = language_data[x].popup_title; }
            if(language_data[x].popup_paragraph_01){ document.getElementById("popup_paragraph_01").innerText = language_data[x].popup_paragraph_01; }
            if(language_data[x].popup_paragraph_02){ document.getElementById("popup_paragraph_02").innerText = language_data[x].popup_paragraph_02; }
            if(language_data[x].popup_paragraph_03){ document.getElementById("popup_paragraph_03").innerText = language_data[x].popup_paragraph_03; }
            if(language_data[x].popup_close){ document.getElementById("close_popup_btn_text").innerText = language_data[x].popup_close; }
        }catch(error){ console.log("Error: --popup-- not applied"); }
        /* -------------- GET LANGUAGE FIELD -------------- */





        
        try{
            if(language_data[x].back_homepage){ document.getElementById("back_homepage_span__text").innerText = language_data[x].back_homepage; }
        }catch(error){ console.log("Error: --back_homepage-- not applied"); }
        





        if(index !== null){ spawn_style(index); }
        console.log("Transl = " + language_data[x].lang);

    } catch(error){ console.log("Error: language not applied"); }
}
/* -------------- APPLY LANGUAGE -------------- */



/* -------------- DETECT LANGUAGE -------------- */
function detect_language(){
    
    try{
        var userLang = navigator.language || navigator.userLanguage;
        switch (true){

            case userLang.indexOf('it')>= 0:
                apply_language(0,null);
                break
            case userLang.indexOf('fr')>= 0:
                apply_language(1,null);
                break
            case userLang.indexOf('de')>= 0:
                apply_language(2,null);
                break
            case userLang.indexOf('es')>= 0:
                apply_language(3,null);
                break
            case userLang.indexOf('pt')>= 0:
                apply_language(4,null);
                break
            case userLang.indexOf('ru')>= 0:
                //apply_language(5,null);
                break
            case userLang.indexOf('zh')>= 0:
                apply_language(6,0);
                break
            case userLang.indexOf('ja')>= 0:
                apply_language(7,1);
                break
            case userLang.indexOf('ko')>= 0:
                apply_language(8,2);
                break
                
            default:
                console.log("default lang: english");
                break;
        }
        console.log("lang detected: " + userLang);

    }catch{console.log("error");};
}
/* -------------- DETECT LANGUAGE -------------- */

window.onload = detect_language();