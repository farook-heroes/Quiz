var quizData = [
  {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "javascript",
      correct: "d",
  },
  {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
  },
  {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
  },
  {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
  },
{
    question:"what is new web version of world?",
    a:"web 1.0",
    b:"web 2.0",
    c:"web 3.0",
    d:"web 4.0",
    correct:"c",

},

];
window.onload=function () {
  loadquiz();
}
var arr=[-1,-1,-1,-1,-1];


function clearRadioGroup(GroupName)
{
  var ele = document.getElementsByName(GroupName);
	for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
}
function getvalue(GroupName)
{
  var ele = document.querySelector( 'input[name="answer"]:checked');   
      if(ele==undefined)
      {
        return -1;
      }
      else
      {
        return ele.value;
      }
}

var cur=0;
var score=0;
function increment()
{
  var r= getvalue('answer');
  arr[cur]=r;
  
 
  cur++;
  loadquiz();
}
function decrement()
{
  var r= getvalue('answer');
  arr[cur]=r;
  
  cur--;
  loadquiz();
}
function calculate()
{
  var r= getvalue('answer');
  arr[cur]=r;
  
  for(var i=0;i<4;i++)
  {
    if(arr[i] === quizData[i].correct)
    {
      
      score++;
    }
   

  } 
  var result=(score *100)/4;
  progressbar();
  document.getElementById("points").innerHTML=result+"%";
  document.getElementById("result").style.visibility="visible";
  document.getElementById("quiz").display="none";
  document.getElementById("submit").style.display="none";
  document.getElementById('a').disabled=true;
  document.getElementById('b').disabled=true;
  document.getElementById('c').disabled=true;
  document.getElementById('d').disabled=true;

 
}
function loadquiz()
{
  clearRadioGroup('answer');
  if(arr[cur]!=-1)
  {
    
    var a=document.getElementById('a');
    var b=document.getElementById('b');
    var c=document.getElementById('c');
    var d=document.getElementById('d');
     if(a.value==arr[cur])
     {
        a.checked=true;
     }
     if(b.value==arr[cur])
     {
        b.checked=true;
     }
     if(c.value==arr[cur])
     {
        c.checked=true;
     }
     if(d.value==arr[cur])
     {
      d.checked=true;
     }
  }
  
  if(cur==4)
  {
    document.getElementById("next").disabled=true;
    document.getElementById("submit").style.visibility="visible";
    
        
  }
   else if(cur==0)
  {
    document.getElementById("prev").disabled=true;
  }
  else
  {
    document.getElementById("prev").disabled=false;
    document.getElementById("next").disabled=false;
    document.getElementById("submit").style.visibility="hidden";
  }
  document.getElementById("question").innerHTML=quizData[cur].question
  document.getElementById('a_text').innerHTML=quizData[cur].a
  document.getElementById('b_text').innerHTML=quizData[cur].b
  document.getElementById('c_text').innerHTML=quizData[cur].c
  document.getElementById('d_text').innerHTML=quizData[cur].d
  progressbar();
 
}
function progressbar()
{
  let j=0;
  for(var i=0;i<5;i++)
  {
    if(arr[i]!=-1)
    {
      j+=1;
    }
  }
  res=(j/5)*100;
  document.getElementById("progress_bar").style.width=res+"%";
 
}