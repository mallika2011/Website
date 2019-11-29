var feedback=[];


function check()
{
  if(localStorage.feedbackrecord)
  {
    feedback=JSON.parse(localStorage.feedbackrecord);
    for(var i=0;i<feedback.length;i++){
      createTable(feedback[i].username,feedback[i].myskill,feedback[i].mypro);
    }
  }
}

function onSubmit(){
  var name = document.getElementById("name").value;
  var skill=document.getElementById("skill").value;
  var pro=document.getElementById("pro").value;


  var feedbackobj={username:name,myskill:skill, mypro:pro};
  feedback.push(feedbackobj);

  localStorage.feedbackrecord=JSON.stringify(feedback);

  createTable(name,skill,pro);
  document.getElementById("name").value = "";


}


function createTable(name,skill,pro){
  var table= document.getElementById("formtable");

  var row=table.insertRow();
  var namecell=row.insertCell(0);
  var skillcell=row.insertCell(1);
  var procell=row.insertCell(2);

  namecell.innerHTML=name;
  skillcell.innerHTML=skill;
  procell.innerHTML=pro;
}
