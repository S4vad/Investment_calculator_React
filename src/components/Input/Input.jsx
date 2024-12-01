
import React,{useState} from "react";
import classes from "./Input.module.css"

function Input(props){
    const initialUserInput={
      'current-savings':10000,
      'yearly-contribution':1200,
      'expected-return':7,
      duration:10
    }

    const [userInput,setUserInput] = useState(initialUserInput);
    const inputHandler=(event) =>{
      const name=event.target.name;
      const value=event.target.value;
      setUserInput((prevInput)=>{
        return{
          ...prevInput,
          [name]:value
        }
      })


    }

    const submitHandler=(event)=>{
      event.preventDefault()

      props.userPass(userInput)
    }

    const resetHandler=(event)=>{
      event.preventDefault()

    }

    // className={classes['input-group']} using this instead "." because name have "-" so not use dot  method
    return(
      <form className={classes.form}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input onChange={inputHandler} type="number" id="current-savings" name="current-savings" value={userInput['current-savings']}  />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange={inputHandler} type="number" id="yearly-contribution" name="yearly-contribution" value={userInput['yearly-contribution']} />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange={inputHandler} type="number" id="expected-return" name="expected-return" value={userInput['expected-return']}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={inputHandler} type="number" id="duration" name="duration" value={userInput['duration']}/>
          </p>
        </div>
        <p className={classes.actions}>
          <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
            Reset
          </button>
          <button onClick={submitHandler} type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
    )
}

export default Input;