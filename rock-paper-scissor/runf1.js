// function hello(name){
//     console.log("Hello "+ name)
// }

// hello("AKSHAY")
// import { readFile } from 'js'
// readFile('score.txt',(err,data)=>{
//     if(err){
//         console.log('error')
//     }
//     hscore=data
// });
let nameofp = prompt("Enter Your Name ",'')
if(nameofp!=undefined){
    alert ('Welcome '+ nameofp +' To Rock Paper Scisser Game ')
}
let score=0
let hscore=0


const rock =document.querySelector("#user-rock")
const paper=document.querySelector("#user-paper")
const scissors=document.querySelector("#user-scissors")

const comprock = document.querySelector("#computer-rock")
const comppaper=document.querySelector("#computer-paper")
const compscissors=document.querySelector("#computer-scissors")

pscore=document.getElementById("score")
win=document.getElementById('win')
high=document.getElementById('highscore')

pscore.innerHTML=" "+score
high.innerHTML=" "+hscore

// function clicked(){
    //     console.log("clicked")
    // }
    // let arr=[1,2,3]
function compchoise(us){
    randomchoise = (Math.floor(Math.random() * 3))+1
    a = randomchoise;
    if (a==1){
        comprock.style.transform ='scale(1.2)'
        comppaper.style.transform =''
        compscissors.style.transform =''
        // console.log("Computer Selected Rock")
        winner(a,us)
    }       
    else if (a==2){
        comprock.style.transform =''
        comppaper.style.transform ='scale(1.2)'
        compscissors.style.transform =''
        // console.log("Computer Selected Paper")
        winner(a,us)
    }
    else{
        comprock.style.transform =''
        comppaper.style.transform =''
        compscissors.style.transform ='scale(1.2)'
        // console.log("Computer Selected Scisser")
        winner(a,us)
    }
    pscore.innerHTML=" "+score
    if(score>hscore){
        hscore=score
    }
    high.innerHTML=" "+hscore
}
    
rock.addEventListener("click",selectrock)
paper.addEventListener("click",selectpaper)
scissors.addEventListener("click",selectscissors)
// console.log(rock.style)
// console.log(paper.style)
// console.log(scissors.style)
// console.log(comprock.style)
// console.log(comppaper.style)
// console.log(compscissors.style)

function winner(a,b){
    if(a==b){
        win.innerHTML="Draw"
        // console.log("Score = "+score)
    }
    else if(a==1 && b==2){
        win.innerHTML='You Won'
        score++
        // console.log("Score = "+score)
    }
    else if(a==2 && b==3){
        win.innerHTML='You Won'
        score++
        // console.log("Score = "+score)
    }
    else if(a==3 && b==1){
        win.innerHTML='You Won'
        score++
        // console.log("Score = "+score)
    }
    else{
        win.innerHTML=""
        let restart=confirm ("You Lost With Score "+score)
        comprock.style.transform =''
        comppaper.style.transform =''
        compscissors.style.transform =''
        rock.style.transform =''
        paper.style.transform =''
        scissors.style.transform =''

        if (!restart){
            window.close()
        }
        score=0
        // console.log("Score = "+score)
    }
}

function selectrock(){
    // console.log("Rock is selected")
    scissors.style.transform =''
    paper.style.transform =''
    rock.style.transform ='scale(1.2)'
    // rock.style.border='4 px dashed black'
    compchoise(1)
}
function selectpaper(){
    // console.log("Paper is selected")
    rock.style.transform =''
    scissors.style.transform =''
    paper.style.transform ='scale(1.2)'    
    compchoise(2)
}
function selectscissors(){
    // console.log("Scisser is selected")
    rock.style.transform =''
    paper.style.transform =''
    scissors.style.transform ='scale(1.2)'
    compchoise(3)
}
