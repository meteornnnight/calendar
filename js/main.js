window.onload=function(){
    var otab=document.getElementById("flex-container");
    var obox=otab.getElementsByTagName("div");
    var note=document.getElementById("note");
    var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    for (let index = 0; index < obox.length; index++) {
        // add event for each box
        obox[index].onclick=function(){
            for(let i=0; i<obox.length; i++)
            {
                obox[i].className="";
            }
        obox[index].className="active";
        note.innerHTML="<h2>To do list in "+month[index]+":"+"</h2>";
        }       
    }





}