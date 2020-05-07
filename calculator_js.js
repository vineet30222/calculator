var display=document.getElementById("display");
var display1=document.getElementById("display-1");
var buttons=document.getElementsByClassName("button");
var operator="";
var operand1=null;
var operand2=null;
var flush1=0;
var flush2=0;
var flushequal=0;
var op=0;
var tempstring="";


for(var i=0;i<buttons.length;i++){
		buttons[i].addEventListener('click',function(){
  	var strin = this.innerText;
  	// console.log(i);
    console.log(strin);
  	if(strin=="AC")
      {
        display.innerText="";
        display1.innerText="";
        
        op=0;
        operand1=null;
        operand2=null;
        tempstring="";
        flush1=0;
        flush2=0;
      }

  	else if(strin=="+/-")
      {
        var f=-1*parseFloat(display.innerText);
        var l=f.toString();
        display.innerText=l;
        tempstring=l;
        
        
      }
  	else if(strin=="/")
    {
    

      if(op>=1)
      {

        var temp=parseFloat(display.innerText);
      
      if(operator=="-")
        operand1=operand1-temp;

      else if(operator=="*")
        operand1=operand1*temp;

       if(operator=="/")
        operand1=operand1/temp;

      else if(operator=="+")
        operand1=operand1+temp;

        display.innerText=operand1.toString();
        op=0;
      }
      operator=strin;
      operand1=parseFloat(display.innerText);
      tempstring=tempstring+strin
      display1.innerText=tempstring;
      flush2=1;
      op++;

      
    }
  
  else if(strin=="*")
      {
         

        

         if(op>=1)
          {
            var temp=parseFloat(display.innerText);
            
            if(operator=="-")
            operand1=operand1-temp;

          else if(operator=="*")
            operand1=operand1*temp;

           if(operator=="/")
            operand1=operand1/temp;

          else if(operator=="+")
            operand1=operand1+temp;

            display.innerText=operand1.toString();
            op=0;
          }
            operator=strin;
            operand1=parseFloat(display.innerText);
            tempstring=tempstring+strin;
          	display1.innerText=tempstring;
          	flush2=1;
            op++;
          
       
      }
  	else if(strin=="-")
    {
      

           if(op>=1)
          {
            var temp=parseFloat(display.innerText);
            if(operator=="-")
              operand1=operand1-temp;

            else if(operator=="*")
             operand1=operand1*temp;

           if(operator=="/")
             operand1=operand1/temp;

            else if(operator=="+")
              operand1=operand1+temp;
          
            display.innerText=operand1.toString();
            op=0;
          }

          operator=strin;
          operand1=parseFloat(display.innerText);
         tempstring=tempstring+strin;
          display1.innerText=tempstring;
          flush2=1;
          op++;
     
    }
  
  else if(strin=="+")
      {
        

               if(op>=1)
            {
              
              var temp=parseFloat(display.innerText);
              if(operator=="-")
              operand1=operand1-temp;

            else if(operator=="*")
              operand1=operand1*temp;

             if(operator=="/")
              operand1=operand1/temp;

            else if(operator=="+")
              operand1=operand1+temp;

              display.innerText=operand1.toString();
              op=0;
            }

              operator=strin;
              operand1=parseFloat(display.innerText);
            	
                tempstring=tempstring+strin;
            display1.innerText=tempstring;
            	flush2=1;
              op++;
       
        
      }
  	else if(strin=="=")
    {
     

      operand2=parseFloat(display.innerText);
      display1.innerText=tempstring+strin;
      
      if(operator=="+"){
      var ans=eval("operand1 + operand2");
      display.innerText=ans.toString();
      }

      else if(operator=="-"){
      var ans=eval("operand1 - operand2");
      display.innerText=ans.toString();
      }

      else if(operator=="*"){
      var ans=eval("operand1 * operand2");
      display.innerText=ans.toString();
      }

      else if(operator=="/"){
      var ans=eval("operand1 / operand2");
      display.innerText=ans.toString();
      }

      else
        console.log("hey");

      flushequal=1;
      op=0;
        operand1=null;
        operand2=null;
        tempstring="";
        flush1=0;
        flush2=0;
      
    }
 
  	
    else
    {
      
      
     if(flushequal==0){

        if(flush2==0){
          display.innerText=display.innerText+strin;
          tempstring=tempstring+strin
          
          
         }

       if(flush2==1){
          display.innerText="";
          display.innerText=strin;
          tempstring=tempstring+strin
          
          flush2=0;
        
        }

        if(flush1==1)
          { tempstring="";
            display1.innerText="";
            display.innerText="";
            display.innerText=strin;
            flush1=0;
          
         }

      }

    else{
            if(flushequal==1)
            {
              display1.innerText="";
              display.innerText="";
              display.innerText=display.innerText+strin;
              tempstring=tempstring+strin
            
              flushequal=0;
              flush1=0;
              flush2=1;
              
            }
          }
       
    }
  
 
});
}
i=0;


