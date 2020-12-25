const questions = [
    {
        id:1,
        question:"Jak nazywa się okrąg o promieniu 1?",
        answer:"okrąg jednostkowy"
    },
    {
        id:2,
        question:"Miarę łukową można mierzyć w? (zaczyna sie na r)",
        answer:"radianach"
    },
    {
        id:3,
        question:"Jak nazywa się najmniejszy okres dodatni funkcji?",
       answer:"okres postawowy"
    },
    {
        id:4,
        question:"Wykres funkcji sinus nazywamy ?",
        answer:"sinusoidą"
    },
    {
        id:5,
        question:"Wykres funkcji cosinus nazywamy",
        answer:"cosinusoidą"  
    },
    {
        id:6,
        question:"Oblicz wartość funkcji trygonometrycznej sin420(po maxymalnym skroceniu)",
        answer:"pier3/2"
    },
    {
        id:7,
        question:"Oblicz wartość funkcji trygonometrycznej tg(-1035*)(po maxymalnym skroceniu)",
        answer:"1"
    },
    {
        id:8,
        question:"Oblicz wartość funkcji trygonometrycznej ctg420(po maxymalnym skroceniu)",
        answer:"pier3/3"
    },
    {
        id:9,
        question:"Oblicz wartość funkcji trygonometrycznej cos420(po maxymalnym skroceniu)",
        answer:"1/2"
    },
    {
        id:10,
        question:"Wykres funkcji tangens nazywamy",
        answer:"tangensoidą"
    },
    {
        id:11,
        question:"Wykres funkcji cotangens nazywamy",
        answer:"cotangensoidą"
    },
    {
        id:12,
        question:"Podaj wzór na 1 trygonometryczną ",
        answer:"sin^2a+cos^2a=1"
    },
    {
        id:13,
        question:"Podaj wzór na sumę sinusów",
        answer:"sin(a+b)=sinacosb+cosasinb"
    },
    {
        id:14,
        question:"Podaj wzór na różnicę sinusów",
        answer:"sin(a-b)= sinacosb-cosasinb"
    },
    {
        id:15,
        question:"Podaj wzór na sumę cosinusów",
        answer:"cos(a+b)=cosacosb-sinasinb"
    },
    {
        id:16,
        question:"Podaj wzór na różnicę cosinusów",
        answer:"cos(a-b)=cosacosb+sinasinb"
    },
];

const goodAn = [];
const badAn = []

const gratulations = ["Dobra robota! Rusz się dodatkowo o 3 do przodu",
    "Dobra robota! Rusz się dodatkowo o jedno do przodu","Dobra robota! Rusz się dodatkowo o 5 do przodu",
     "pOlSkA gUrOm", "Rekord skoczni! ruszasz sie o 7 pól do przodu!"]
     
const shame = ["Zła odpowiedź! cofasz się o 3 pola","Zła odpowiedź! cofasz się o 1 pole","Bardzo Zła odpowiedź!!! cofasz się o 5 pól",
        "Źle.", "Niepoprawna odpowiedź.","Klęska!","Szkoda, zła odpowiedź.","Tragiczny błąd!"]


const goodAnswer = (questionId) => {
    goodAn.push(questions[questionId]);
    alert(gratulations[Math.floor(Math.random()*gratulations.length)]);
}

const badAnswer = (questionId) => {
    badAn.push(questions[questionId]);
    alert(shame[Math.floor(Math.random()*shame.length)]);
}

const displayQuestion = () => {
    if(!questions.length){
        alert('Nie ma już pytań!')
        return;
    }
    const arrIndex = Math.floor(Math.random()*questions.length);
    const questionObject = questions[arrIndex];
    const questionId = questionObject.id;
    console.log(questions, questionObject)
    const answer = prompt(questionObject.question);
    if(answer == questionObject.answer){
        goodAnswer(questionId);
    }
    else{
        badAnswer(questionId);
    }
    questions.splice(arrIndex, 1);
}

[...document.querySelectorAll('div#poles>div.sq1')].forEach(div => {
    div.addEventListener('click', () => {
        displayQuestion();
    })
})

