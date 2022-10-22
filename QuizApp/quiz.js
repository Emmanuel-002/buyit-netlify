let questionDB = [
    {
      question: 'When is the International Day for the Eradication of Poverty observed?',
      A: 'October 15',
      B: 'October 12',
      C: 'October 17',
      D: 'October 22',
      Answer: 'October 17'
    },
    {
      question: 'Which Indian city has won World Green City Award 2022?',
      A: 'hyderabad',
      B: 'Indore',
      C: 'Bhopal',
      D: 'Pune',
      Answer: 'hyderabad'
    },
    {
      question: 'The 5th Assembly of International Solar Alliance (ISA) is being held under the presidentship of which country?',
      A: 'Netherlands',
      B: 'France',
      C: 'Japan',
      D: 'India',
      Answer: 'India'
    },
    {
      question: 'Government of India has launched MBBS Course books in which language for the very first time?',
      A: 'Tamil',
      B: 'Hindi',
      C: 'Bhojpuri',
      D: 'Punjabi',
      Answer: 'Hindi'
    },
    {
      question: 'Which company has developed India’s first aluminum freight train rake?',
      A: 'NALCO',
      B: 'Vedanta Limited',
      C: 'Jindal Aluminium',
      D: 'Hindalco',
      Answer: 'Hindalco'
    },
    {
      question: 'What is India’s rank in the Global Hunger Index 2022?',
      A: '110',
      B: '103',
      C: '107',
      D: '102',
      Answer: '107'
    },
    {
      question: 'Which country is set to host the 90th Interpol General Assembly?',
      A: 'Turkey',
      B: 'India',
      C: 'China',
      D: 'Vietnam',
      Answer: 'India'
    },
    {
      question: 'The current managing director of International Monetary Fund (IMF) is?',
      A: 'Kristalina Georgieva',
      B: 'Jim Yong Kim',
      C: 'Christine Lagarde',
      D: 'David Lipton',
      Answer: 'Kristalina Georgieva'
    },
    {
      question: 'Who is the current secretary general of the united nations?',
      A: 'Antonio Guterres',
      B: 'Ban Ki-moon',
      C: 'Christine Lagarde',
      D: 'Kofi Annan',
      Answer: 'Antonio Guterres'
    },
    {
      question: 'Secretary general united nations Antonio Guterres belongs to?',
      A: 'United States',
      B: 'Portugal',
      C: 'Czech Republic',
      D: 'Germany',
      Answer: 'Portugal'
    },
    {
      question: 'United States on 31 May 2020 launched spaceflight from its own soil after a decade. The spacecraft was built by',
      A: 'Apple',
      B: 'Amazon',
      C: 'NASA',
      D: 'SpaceX',
      Answer: 'SpaceX'
    },
    {
      question: 'The recent leap year, where February has/had 29 days, is/was?',
      A: '2019',
      B: '2020',
      C: '2021',
      D: '2022',
      Answer: '2019'
    },
  ];
  const questionWithId = function(array){
    let arrayObj = {}
    this.array = array.map((ar)=>{
      return {id: Math.random()*100, ...ar, ...arrayObj}
    })
    return this.array.sort((a,b)=>a.id-b.id);
  }
  questionDB = questionWithId(questionDB)
  let count = 1;
  let sum = 0;
  
  function start(){
    document.getElementById('question').innerHTML = questionDB[0].question;
    document.getElementById('question_number').innerHTML = `Question ${count}`; 
    document.getElementById('optionA').innerHTML =  `A. ${questionDB[0].A}`
    document.getElementById('optionB').innerHTML =  `B. ${questionDB[0].B}`
    document.getElementById('optionC').innerHTML =  `C. ${questionDB[0].C}`
    document.getElementById('optionD').innerHTML =  `D. ${questionDB[0].D}`
    document.querySelector('.instruction').style.display = 'none'
    document.querySelector('section').style.display = 'block'
  }
  function finish(){
    document.location.reload(true);
    // document.querySelector('section').style.display = 'none'
    // document.querySelector('.instruction').style.display = 'block'
  }
  const choiceA = function(){
    document.getElementById('noOption').innerHTML = '';
    document.getElementById('mark').innerHTML = `Your Choice: ${questionDB[0].A}`
  }
  const choiceB = function(){
    document.getElementById('noOption').innerHTML = '';
    document.getElementById('mark').innerHTML = `Your Choice: ${questionDB[0].B}`
  }
  const choiceC = function(){
    document.getElementById('noOption').innerHTML = '';
    document.getElementById('mark').innerHTML = `Your Choice: ${questionDB[0].C}`
  }
  const choiceD = function(){
    document.getElementById('noOption').innerHTML = '';
    document.getElementById('mark').innerHTML = `Your Choice: ${questionDB[0].D}`
  }
  const next = function(){
   if(document.getElementById('mark').innerHTML){
    if(count <= 10){
    document.getElementById('mark').innerHTML === `Your Choice: ${questionDB[0].Answer}` ? sum++ : '';
    count++;
    questionDB.shift()
    document.getElementById('question').innerHTML = questionDB[0].question;
    document.getElementById('question_number').innerHTML = `Question ${count}`; 
    document.getElementById('optionA').innerHTML =  `A. ${questionDB[0].A}`
    document.getElementById('optionB').innerHTML =  `B. ${questionDB[0].B}`
    document.getElementById('optionC').innerHTML =  `C. ${questionDB[0].C}`
    document.getElementById('optionD').innerHTML =  `D. ${questionDB[0].D}`
    document.getElementById('mark').innerHTML = ''
    document.getElementById('score').value = sum
    console.log(questionDB)
    if(count === 11){
      let score = document.getElementById('score').value;
      score = score/10*100;
      document.querySelector('.container').innerHTML= `Your score is ${score}%`
      document.querySelector('#finish').style.display = 'block'
      document.querySelector('#next').style.display = 'none'
    }
    }
   }
   else{
    document.getElementById('noOption').innerHTML = 'Choose an option';
   }
  }
  