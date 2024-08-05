const questions =[{
      'que' : 'Which of the following is markup language ?',
      'a':'HTML',
      'b':'css',
      'c':'JavaScript',
      'd':'PHP',
      'correct':'a',
},

{
    'que' : 'what year was JavaScript launched ?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b',
},

{
    'que' : 'What does CSS stands for ?',
    'a':'comercial style sinc',
    'b':'comunication script seage',
    'c':'cascading style script',
    'd':'cascading style sheet',
    'correct':'d',
},



]

let index = 0;
let total=questions.length
let right=0 , wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.options')
const loadQuestion = () =>{
    if(index===total){
        return endQuiz()
    }
     reset();
     const data = questions[index]
     console.log(data)
     quesBox.innerText= ` ${data.que}`;
     optionInputs[0].nextElementSibling.innerText=data.a;
     optionInputs[1].nextElementSibling.innerText=data.b;
     optionInputs[2].nextElementSibling.innerText=data.c;
     optionInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuiz =() =>{
    const data =questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
            } 
        }
    )
    return answer;
}

const reset=() =>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false;
    }
 )
}

const endQuiz=() =>{
    document.getElementById("box").innerHTML= `
      <h3> Thank you for playing  the Quiz</h3>
      <h2> ${right} / ${total} are correct </h2>
    `
}

loadQuestion();