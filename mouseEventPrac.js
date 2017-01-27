
    function change2sky() {
        var obj = document.all && document.all("body") || document.getElementById && document.getElementById("body");
        if(obj) {
            obj.style.color = "blue";
            obj.style.backgroundImage = 'url("./mouseEvPicturesFile/sky.gif")';
            obj.style.backgroundColor = "#ceffff";
            
        }
    }
    function change2land() {
        var obj = document.all && document.all("body") || document.getElementById && document.getElementById("body");
        if(obj) {
            obj.style.color = "green";
            obj.style.backgroundImage = 'url("./mouseEvPicturesFile/land.gif")';
            obj.style.backgroundColor = "#ceff9c";
            
        }
    }
    function change2sea() {
        var obj = document.all && document.all("body") || document.getElementById && document.getElementById("body");
        if(obj) {
            obj.style.color = "#4d260b";
            obj.style.backgroundColor = "#5555ff";
            obj.style.backgroundImage = 'url("./mouseEvPicturesFile/sea.gif")';
        }
    }
    function change3sky(){
        var obj = document.all && document.all("body") || document.getElementById && document.getElementById("body");
        if(obj) {
            obj.style.color = "red";
            obj.style.size = "2";
            obj.style.backgroundImage = 'url("./mouseEvPicturesFile/rocket.jpg")';
        }

    }
    
