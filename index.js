const inquirer = require('inquirer');

// let lengthOfSubArray = null;
// let sequenceOfTransactions = null;

let userResponses = null;

var questions = [{
  type: 'input',
  name: 'length',
  message: "How many distinct values to read?",
},{
  type: 'input',
  name: 'sequence',
  message: "Enter the Sequence",
}]

var sequence = []

inquirer
  .prompt(questions)
  .then( res => {
    let maxLength = res.length;
    let sequenceOftransactions = res.sequence.split(' ');
    sequenceOftransactions = sequenceOftransactions.slice(0, maxLength);
    let sequence = sequenceOftransactions.map( item => {
      return parseInt(item);
    })

    let run1 = [];

    sequence.forEach( (num, index) => {
      if( run1.length == 0 ){
        run1.push(num);
      } else{
        run1.push( run1[index -1] + num );
      }
      
    });

    let run2 = [];

    sequence.reverse().forEach( (num, index) => {
      if( run2.length == 0 ){
        run2.push(num);
      } else{
        run2.push( run2[index -1] + num );
      }
      
    });
    run2 = run2.reverse();

    // console.log(run1);
    // console.log(run2);

    let indexesToSum = [];

    for( var i = 0 ; i < maxLength-1 ; i++ ){
      if( run1[i] == run2[i]){
        indexesToSum.push(i);
      }
    }

    console.log("Sum of Indexes: ",indexesToSum.reduce( (num, sum) => num+ sum));
    







  })

