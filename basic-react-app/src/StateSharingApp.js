import { useState } from "react";

function StateShare({ counter, onClick }) {
    return (
      <button onClick={onClick}>
        Clicked {counter} times
      </button>
    );
  }

export default function StateSharingApp(){
    const [counter, setCounter] = useState(0);

    function handleClick() {
        setCounter(counter+1);
    }

    return(
        <>
            <StateShare counter={counter} onClick={handleClick}/>
            <StateShare counter={counter} onClick={handleClick}/>
        </>
    );

}