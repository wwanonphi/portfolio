$(document).ready(function () {

    //GET THE CURRENT SCROLLTOP POSITION
    //IF SCROLLTOP POSITION = 0 AND < 729 THEN SHOW THE   ARROW BUTTON DOWNWARD
    //IF SCROLLTOP POSITION = 729 AND > 729 THEN SHOW THE ARROW BUTTON DOWNWARD
    //IF SCROLLTOP PISITION > 729 THEN SHOW ARROW BUTTON UPWARD
  

    setInterval(()=>{
     setArrowBtn($("html,body").scrollTop());
    },100);

    $("#btnScrollTopPos,#btnScrollBotPos").click(function(){
      ScrollToPosition($("html,body").scrollTop(),$(this).attr("id")); 
    });

    function setArrowBtn(scrollTopVal){ 
      //scroll top view is first page 0 - 728
      if(scrollTopVal <= 685){
        //show down btn
          $("#btnScrollTopPos").hide(); 
        $("#btnScrollBotPos").show('slow');
      }
      //scroll top view is second page 729 - 1385
      else if(scrollTopVal >685 && scrollTopVal <1384 ){
        //show up and down arrow btn
        $("#btnScrollTopPos").show('slow');
        $("#btnScrollBotPos").show('slow');
      }
      //scroll top view is third page
      else  if(scrollTopVal >=1385){
        //show up arrow btn
         $("#btnScrollTopPos").show('slow');
         $("#btnScrollBotPos").hide();
      }
    }

    function ScrollToPosition(ScrollTopVal,btnId){

      //if btnId == btnTopScroll check the current scrollTop value
      //if btnId == btnBotScoll check the current scrollTop value

      //if btnid==scrollbotbtn and current scrolltop value <= 685 then scroll to second page
      //if btnid==scrollbotbtn and current scrolltop value > 685 && scrolltop value < 1386 then scroll to third page
      //if btnid==scrolltopbtn and current scrolltop value >685 && scrolltop value <1386 then scroll to first page
      //if btnid==scrolltopbtn and current scrolltop value ==1386 then scroll to second page
      if(btnId=="btnScrollBotPos" && ScrollTopVal < 685){
        $("html,body").animate({scrollTop:$(".container-fluid:eq(1)").offset().top},500); //GOTO SECOND PAGE
      }
      if(btnId=="btnScrollBotPos" && (ScrollTopVal > 685 && ScrollTopVal < 1386)){
        $("html,body").animate({scrollTop:$(".container-fluid:eq(2)").offset().top},500); //GOTO THIRD PAGE
      }
      if(btnId=="btnScrollTopPos" && (ScrollTopVal > 685 && ScrollTopVal < 1386)){
        // $("html,body").animate({scrollTop:$(".container-fluid:eq(0)").offset().top},500); 
        $("html,body").animate({scrollTop:$("header").offset().top},500); // GOTO FIRST PAGE
      }
      if(btnId=="btnScrollTopPos" && (ScrollTopVal >= 1385)){
        $("html,body").animate({scrollTop:$(".container-fluid:eq(1)").offset().top},500); //GOTO SECOND PAGE
      }


       
    }
  });