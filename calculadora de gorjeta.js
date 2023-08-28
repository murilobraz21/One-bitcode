

  
function calculateTip(event){
   event.preventDefault();
   let bill=document.getElementById('bill').value;
   let servicequal=document.getElementById('servicequal').value;
   let numpeople=document.getElementById('people').value;

 if(bill==''| servicequal==0){
    alert("por favor preencha os valores")
    return;
 }

 if(numpeople == ""| numpeople<=1){
     numpeople=1;
     document.getElementById('each').style.display="none"
     
     
 }
 else{
    document.getElementById('each').style.display="block"
 }

 let total=(bill*servicequal)/numpeople;
 let divisao= total+2;
 console.log(divisao)
 divisao=divisao.toFixed(2);
 total=total.toFixed(2);

 let=ContaTotal=(bill/numpeople) 
 ContaTotal=ContaTotal.toFixed(2);
 console.log("total")
 console.log(ContaTotal)
 document.getElementById('tip').innerHTML=total;
 document.getElementById('totaltip').style.display="block";
 ///document.getElementById('totalconta').innerHTML=ContaTotal;
 document.getElementById('dividirconta').innerHTML=ContaTotal;





} 

    document.getElementById('totaltip').style.display="none";
    document.getElementById('each').style.display="none";
    document.getElementById('tipsForm').addEventListener('submit',calculateTip);