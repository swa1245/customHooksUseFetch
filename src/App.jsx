// import React, { useState } from "react";
// customHooks
// function useCounter(){
//   const [count, setCount] = useState(0);
//   function clickme() {
//     setCount(count + 1);
//   }
//   return { count, clickme };
// };

// const App = () => {
//   const { count, clickme } = useCounter();
//   return (
//     <div>
//       <button onClick={clickme}>{count}</button>
//     </div>
//   );
// };

// export default App;

//  usefetch
// in react we cant make first argument async of useeffect

// import React, { useState } from "react";
// import Use from "./hooks/Use";

// const App = () => {
//   const [current, setCurrent] = useState(1);
//   const {fdata,loading} = Use("https://jsonplaceholder.typicode.com/posts/" + current);

//   if(loading){
//     return <div>Loading...</div>
//   }
//   return (
//     <div>
//       <button onClick={() => setCurrent(1)}>click</button>
//       <button onClick={() => setCurrent(2)}>click</button>
//       <button onClick={() => setCurrent(3)}>click</button>

//       <h1>{JSON.stringify(fdata)}</h1>
//     </div>
//   );
// };

// export default App;

// useprev
import React, { useState } from "react";
import Usepr from "./hooks/Usepr";

const App = () => {
  const [count, setCount] = useState(0);
  const prev = Usepr(count);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((curr)=>curr+1)}>click me</button>
      <p> prev value :{prev}</p>
    </div>
  );
};

export default App;
