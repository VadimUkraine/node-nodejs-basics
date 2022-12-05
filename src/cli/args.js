const parseArgs = () => {
    // Write your code here 
    const prefix = '--';
    const argumentsValues = process.argv.slice(2);
    const printArgumentsArray = [];
    
    argumentsValues.forEach((el, index) => {
      if (el.includes(prefix)) {
        printArgumentsArray.push(`${el.slice(2)} is ${argumentsValues[index + 1]}, `)
      }
    });

    if (!printArgumentsArray.length) {
      console.log('No necessary arguments values');
      return;
    }

    const stringOfArguments = printArgumentsArray.join('').slice(0, -2);
    console.log(stringOfArguments);
};

parseArgs();