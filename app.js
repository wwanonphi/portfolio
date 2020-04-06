 $(document).ready(function(){
 text();

$("#skills").click(function(){
   
  var secondPage=document.querySelector('.infoPage');

   $('html,body').animate({
  scrollTop:$(".infoPage").offset().top

  },1000);
});


$("#contactInfo").click(function(){
   
    var secondPage=document.querySelector('.contactinfo');
  
     $('html,body').animate({
    scrollTop:$(".contactinfo").offset().top
  
    },1000);
  });
  
 });

 
function text(){
    
var text = "Full-Stack software developer.";   
var textLengt=text.length;
var arrayText=[];
const holder = document.querySelector("#infoHolder");
for(let i =0;i <textLengt;i++){
arrayText.push(text[i]);

} 
    var increment=0;
    arrayText.forEach(element => {
          increment+=60;
       setTimeout(() => {
           holder.append(element); 
       }, increment); 
      
    });
 
}
