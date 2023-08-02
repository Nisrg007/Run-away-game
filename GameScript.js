score=0;
cross=true;

audio=new Audio('gamesound.mp3');
audiogameover=new Audio('scream.mp3');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown=function(e){
    console.log("the keycode:",e.keyCode);
    if (e.keyCode==38) {
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
    setTimeout(()=>{
        dino.classList.remove('animateDino');

    },700);
    }  
    if (e.keyCode==39) {
    dino=document.querySelector('.dino');
        dinooX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinooX+100+"px"
    
    }
    if (e.keyCode==37) {
    dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinoX-100)+"px"
    }
}

setInterval(()=>{
    dino=document.querySelector('.dino');
    obstacle=document.querySelector('.obstacle');
    gameOver=document.querySelector('.gameOver');

    dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dinoY=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    obstacleX=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    obstacleY=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(dinoX-obstacleX);
    offsetY=Math.abs(dinoY-obstacleY);
        console.log(offsetX,offsetY);
    if (offsetX<60 && offsetY<110) {
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleAni');
        audiogameover.play();
        setTimeout(() => {
            audiogameover.pause();
            
        }, 1000);
        
    }else if(offsetX<145 && cross){
        score+=100;
        cross=false;
        updateScore(score);
        setTimeout(()=>{
            cross=true;
        },2000);

        setTimeout(()=>{
            anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newdur=anidur-0.1;
            obstacle.style.animationDuration=newdur+'s';

        },700)
             
        
    }

},10);

function updateScore(score){
    scoreob.innerHTML="Your Score:"+score
}