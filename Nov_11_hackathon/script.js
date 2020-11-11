function selectModal(){
    var selectvalue=document.getElementById('newform').value;
    if(selectvalue=="NEWTICKET"){
        location.replace("createTicket.html") 
    }
}
function redirectpage() {
    location.replace("index.html")
  }