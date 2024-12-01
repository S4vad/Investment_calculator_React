import Header from "./components/Header/Header"
import Input from './components/Input/Input';
import Table from './components/Table/Table';
import React,{useState} from 'react';

function App() {
  const [userInput,setUserInput]=useState(null);
   
  const calculateHandler = (userInput) => {
    setUserInput(userInput); 
  };

  const yearlyData = []; 

  if(userInput){   //instead of this we can directly create a state and updata yearlyDate throught setUserInput ,in this method we can take yearlyData directly

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];


    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({

        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

  }

  return (
    <div>
      <Header />
      <Input userPass={calculateHandler}/>
      {!userInput && <p style={{textAlign:'center'}}  >No investemt calculated yet.</p>}
      {userInput && <Table data={yearlyData} intialInvestment={userInput['current-savings']}/>} 
      


    </div>
  );
  //intial investement passing from input.jsx
}

export default App;
