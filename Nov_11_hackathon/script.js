function selectModal(){
    var selectvalue=document.getElementById('newform').value;
    if(selectvalue=="NEWTICKET"){
        location.replace("createTicket.html") 
    }
}
function redirectpage() {
    location.replace("index.html")
  }

function CreateContact(){
    fetch("https://newaccount1605092002696.freshdesk.com/api/v2/contacts", {
body: JSON.stringify({name:document.getElementById('fullname').value,
  job_title:document.getElementById('title').value,
  email:document.getElementById('email').value,phone:document.getElementById('wrkph').value,
   }),
  headers: {
    Authorization: "Basic SXBYNDV0dmdDOU43cGlDSEhmY0U6WA==",
    "Content-Type": "application/json"
  },
  method: "POST"
}).then((resp)=>{
    return resp.json()
}).then((result)=>{
    console.log(result);
}).catch((err)=>{console.log(err)})

}
var obj=[]
function getContact1(){
   
    var tbody1=document.getElementById('tbody')
     fetch("https://newaccount1605092002696.freshdesk.com/api/v2/contacts", {
   headers: {
     Authorization: "Basic SXBYNDV0dmdDOU43cGlDSEhmY0U6WA=="
   }
 }).then((resp)=>{
     return resp.json()
 }).then((result)=>{
     console.log(result);
     result.forEach(element=>{
 obj.push((element.email),(element.id))
     })
     
 }).catch((err)=>{console.log(err)})
 }
 getContact1();
 
 function checkforRequestor(){
 for(i=0;i<obj.length;i++){
     if(obj[i]==localStorage.getItem("checkkey")){
         requester=obj[i+1];
         localStorage.setItem("anskey", requester);
     }
     else{
         alert('Contact not in list. Please add new one')
     }
 }
 }