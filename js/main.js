function handleselection(obj) {
    var vid_elm = document.getElementById("vidwindow1");
    var chatpan = document.getElementById("chatpan1");
                    
    if(obj.id == "url1"){
        vid_elm.pause();
        switch(obj.selectedIndex)
        {
            case 0:
                vid_elm.src = "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/88/Big_Buck_Bunny_alt.webm/Big_Buck_Bunny_alt.webm.360p.vp9.webm";
                break;
            
            case 1:
                vid_elm.src = "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a2/Elephants_Dream_%282006%29.webm/Elephants_Dream_%282006%29.webm.360p.vp9.webm";
                break;
                
            case 2:
                vid_elm.src = "https://upload.wikimedia.org/wikipedia/commons/transcoded/1/19/Glazing-Doughnuts.webm/Glazing-Doughnuts.webm.360p.vp9.webm";
                break;
        }
        vid_elm.load();
        vid_elm.currentTime = 0;
        vid_elm.play();
    }
    else if(obj.id == "position"){
        vid_elm.pause();
        switch(obj.selectedIndex)
        {
            case 0:
                chatpan.style.top = "10px";
                chatpan.style.right = "30px";
                break;
            
            case 1:
                chatpan.style.top = "220px";
                chatpan.style.right = "30px";
                break;
                
            case 2:
                chatpan.style.top = "430px";
                chatpan.style.right = "30px";
                break;
        }
        vid_elm.load();
        vid_elm.currentTime = 0;
        vid_elm.play();
    }       
    else if(obj.id == "widthheight"){
        vid_elm.pause();
        switch(obj.selectedIndex)
        {
            case 0:
                vid_elm.width = 320;
                vid_elm.height = 180;
                break;
            
            case 1:
                vid_elm.width = 160;
                vid_elm.height = 90;
                break;
        }
        vid_elm.load();
        vid_elm.currentTime = 0;
        vid_elm.play();
    }
}

function HandleOnClick(obj) {
    var vid_elm = document.getElementById("vidwindow1");
    var chatpan = document.getElementById("chatpan1");
                    
    if( (obj.id == "BBBButton") || (obj.id == "EDButton") ||(obj.id == "GDButton") ) {
        console.log("Handle URL!!");
        vid_elm.pause();
        switch(obj.id)
        {
            case "BBBButton":
                vid_elm.src = "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/88/Big_Buck_Bunny_alt.webm/Big_Buck_Bunny_alt.webm.360p.vp9.webm";
                break;
            
            case "EDButton":
                vid_elm.src = "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a2/Elephants_Dream_%282006%29.webm/Elephants_Dream_%282006%29.webm.360p.vp9.webm";
                break;
                
            case "GDButton":
                vid_elm.src = "https://upload.wikimedia.org/wikipedia/commons/transcoded/1/19/Glazing-Doughnuts.webm/Glazing-Doughnuts.webm.360p.vp9.webm";
                break;
        }
        vid_elm.load();
        vid_elm.currentTime = 0;
        vid_elm.play();
    }
    else if( (obj.id == "TopButton") || (obj.id == "MidButton") ||(obj.id == "BottomButton") ) {
        vid_elm.pause();
        switch(obj.id)
        {
            case "TopButton":
                chatpan.style.top = "10px";
                chatpan.style.right = "30px";
                break;
            
            case "MidButton":
                chatpan.style.top = "220px";
                chatpan.style.right = "30px";
                break;
                
            case "BottomButton":
                chatpan.style.top = "430px";
                chatpan.style.right = "30px";
                break;
        }
        vid_elm.load();
        vid_elm.currentTime = 0;
        vid_elm.play();
    }
    else if( (obj.id == "320Button") || (obj.id == "160Button") ) {
        vid_elm.pause();
        switch(obj.id)
        {
            case "320Button":
                vid_elm.width = 320;
                vid_elm.height = 180;
                break;
            
            case "160Button":
                vid_elm.width = 160;
                vid_elm.height = 90;
                break;
        }
        vid_elm.load();
        vid_elm.currentTime = 0;
        vid_elm.play();
    }
}
