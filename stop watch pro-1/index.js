window.onload = function(){
    let Seconds= 0;
    let Tens = 0;
    let appSeconds=document.getElementById('seconds');
    let appTens=document.getElementById('tens');
    let Start=document.getElementById('start');
    let Stop=document.getElementById('stop');
    let Reset=document.getElementById('reset');
    let Interval;
    


Start.onclick=function(){
    clearInterval(Interval)
     Interval=setInterval(startTimer,10)

}
Stop.onclick=function(){
    clearInterval(Interval)
}
Reset.onclick=function(){
    Seconds='00'
    Tens='00'
    appSeconds.innerText=Seconds;
    appTens.innerText=Tens;
}


//functions











//starttimer function
function startTimer(){
    Tens++;
    if(Tens <= 9){
   appTens.innerText="0"+Tens
    }if(Tens>=10){
   appTens.innerText=Tens;
    }if(Tens>99){
       Seconds++;
       appSeconds.innerText=Seconds;
       Tens=0;
       appTens.innerText=Tens;
   
    }
    if(Seconds<9){
       appSeconds.innerText='0'+ Seconds;
    }if(Seconds>=10){
       appSeconds.innerText=Seconds;
    }




    //styling

      if(Seconds==5){
          document.getElementsByClassName('text')[0].style.color='black';
      }
      if(Seconds==6){
          document.getElementsByClassName('text-2')[0].style.color='black';
      }
   
   }


}








