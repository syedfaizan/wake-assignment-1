const inquirer = require('inquirer');

var questions = [{
  type: 'input',
  name: 'length',
  message: "How many distinct values to read?",
}, {
  type: 'input',
  name: 'sequence',
  message: "Enter the Sequence",
}]

inquirer
  .prompt(questions)
  .then(res => {
    let run1 = [];
    let run2 = [];
    let sum = 0;

    if (!res.length) {
      return console.error("Please enter number of distict values!");
    }
    if (!res.sequence) {
      return console.error("Please enter the sequence of transactions!");
    }

    let maxLength = res.length;
    let sequenceOftransactions = res.sequence.split(' ');
    sequenceOftransactions = sequenceOftransactions.slice(0, maxLength);
    let sequence = sequenceOftransactions.map(item => {
      return parseInt(item);
    })


    sequence.forEach((num, index) => {
      if (run1.length == 0) {
        run1.push(num);
      } else {
        run1.push(run1[index - 1] + num);
      }
    });

    sequence.reverse().forEach((num, index) => {
      if (run2.length == 0) {
        run2.push(num);
      } else {
        run2.push(run2[index - 1] + num);
      }
    });

    run2 = run2.reverse();

    // Finds the indexes where the values of both arrays are same and sums them
    for (var i = 0; i < maxLength - 1; i++) {
      if (run1[i] === run2[i]) {
        sum += i;
      }
    }

    console.log("Sum of Indexes:", sum);

  })