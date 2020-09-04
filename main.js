var secimler = ["tas","kagit","makas"]

var myscore  = 0
var compscore = 0
var mychoice 
var index
var compchoice
var scrbrd = document.querySelector(".scoretable")
var whowin = document.querySelector(".whowin")
var mypng = document.querySelector("#mypng")
var comppng = document.querySelector("#comppng")








function game(bu){
    mychoice = bu.value
    index = Math.floor((Math.random() * 3));
    compchoice = secimler[index]
    // console.log(compchoice);
    // console.log(deneme());
    // console.log("myscore:",myscore,"compscore",compscore)
    if(deneme() == "iwin"){
        whowin.classList.remove("yellow")
        whowin.classList.remove("red")
        whowin.classList.add("green")
        whowin.innerText = "You Winnn!"
        myscore += 1
    }
    else if(deneme() == "compwin"){
        whowin.classList.remove("yellow")
        whowin.classList.remove("green")
        whowin.classList.add("red")
        whowin.innerText = "You Lose :("
        compscore += 1
    }
    else{
        whowin.classList.remove("green")
        whowin.classList.remove("red")
        whowin.classList.add("yellow")
        whowin.innerText = "Draw!"
    }
    scrbrd.innerText = myscore+":"+compscore

}


function deneme(){
    if(mychoice == "tas"){
        mypng.setAttribute("src","./images/rock.jpg")
        if(compchoice == "kagit"){
            comppng.setAttribute("src","./images/paper.jpg")
            return "compwin"
        }
        else if(compchoice == "makas"){
            comppng.setAttribute("src","./images/asd.jpeg")
            return "iwin"
        }
        else if(compchoice == "tas"){
            comppng.setAttribute("src","./images/rock.jpg")
            return "draw"
        }
    }
    else if(mychoice == "kagit"){
        mypng.setAttribute("src","./images/paper.jpg")
        if(compchoice == "kagit"){
            comppng.setAttribute("src","./images/paper.jpg")
            return "draw"
        }
        else if(compchoice == "makas"){
            comppng.setAttribute("src","./images/asd.jpeg")
            return "compwin"
        }
        else if(compchoice == "tas"){
            comppng.setAttribute("src","./images/rock.jpg")
            return "iwin"
        }
    }
    else if(mychoice == "makas"){
        mypng.setAttribute("src","./images/asd.jpeg")
        if(compchoice == "kagit"){
            comppng.setAttribute("src","./images/paper.jpg")
            return "iwin"
        }
        else if(compchoice == "makas"){
            comppng.setAttribute("src","./images/asd.jpeg")
            return "draw"
        }
        else if(compchoice == "tas"){
            comppng.setAttribute("src","./images/rock.jpg")
            return "compwin"
        }
    }   
    else{
        return "hecbiri"
    }
}





function restart(){
    comppng.setAttribute("src","./images/js2.jpg")
    mypng.setAttribute("src","./images/you.png")
    var myscore  = 0
    var compscore = 0
    whowin.innerText = ""
    scrbrd.innerText = myscore+":"+compscore
}








