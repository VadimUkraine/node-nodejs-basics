const parseEnv = () => {
    // Write your code here 
    const prefix = 'RSS_';
    const envVariables = Object.fromEntries(
      Object.entries(process.env)
       .filter(arr => arr[0].includes(prefix))
    );

    const printVariablesArray = [];

    for (let key in envVariables) {
      printVariablesArray.push(`${key}=${envVariables[key]}; `)
    }

    if (!printVariablesArray.length) {
      console.log('No necessary environment variables');
      return;
    }

    const stringOfVariables = printVariablesArray.join('').slice(0, -2);
    console.log( stringOfVariables);
};

parseEnv();