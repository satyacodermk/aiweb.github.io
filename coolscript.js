// function fun() {
//     alert('Mouse is over');
// }
// var d = document.getElementById('mybutid');
// d.addEventListener('mouseover', fun);

//note: to apply changes on specific attribute or parameter we need to specify that in css and then using class or id can be modified
var pw=document.getElementById("pid");
    function validation(){
        if(pw.value!="abcdef"){
            pid.style.border="3px solid red";
            return false;
        }
        else{
            pid.style.border="3px solid green";
            return true;
        }
       
    }
// window.onload = function() {
    var butele = document.getElementById('mybut');
    var leftpos = butele.offsetLeft;
    //alert("the left length is: " + leftpos); //returns the position of element
    //total left position of button is 330 and marginleft is 200 originally
 
        butele.addEventListener("mouseover", fun);
        
        // butele.addEventListener("mouseout", fun1)
   

    // pw.onchange=function(e){

    //     if(pw.value!=""){
    //         // input.style.border="3px solid red";
    //         // alert("The password is correct....");
    //         e.target.style.input="4px solid red";
    //     }
    // }
    function fun() {
        //alert("Hello this is mouseover");
        if(pw.value!="abcdef"){
        if (leftpos < 330) {
            //alert("the left changed length is: " + butele.offsetLeft);
            leftpos = butele.offsetLeft;
            mybut.style.marginLeft = "220px";
            mybut.style.background="white"
            mybut.style.color = "red";
            mybut.style.transition = "1s";
        } else if (leftpos == 330 || leftpos == 520) {
            leftpos = butele.offsetLeft;
            mybut.style.marginLeft = "10px";
            mybut.style.color = "red";
            mybut.style.background="white"
            mybut.style.transition = "1s";

        } else if (leftpos > 330) {
            leftpos = butele.offsetLeft;
            mybut.style.marginLeft = "390px";
            mybut.style.color = "red";
            mybut.style.background="white"
            mybut.style.transition = "1s";
        }
        //leftpos = document.getElementById("mybut").offsetLeft;
    }
    else{
        mybut.style.color="white";
        mybut.style.background="green";
        
    }

    }
    function donefun(){
        
        if(pw.value!="abcdef"){
            alert("Wrong Password...");
        }
        else{
            alert("Welcome Sir....");
        }
    }
    var n=document.getElementById("e");
    function check(){
        if(n.value==""){
            alert("Please Enter the Name...");
        }

    }

    //just for testing purpose
    // function fun1() {
    //     //alert("Hello this is mouseover");
    //     // mybut.style.margin = "110px";
    //     mybut.style.marginRight = "70px";
    //     mybut.style.transition = "all 2s";

    // }
   

// }