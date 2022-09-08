// import React, {useState, useEffect} from 'react';
import '../App.css'
// import Form from '../Form'
// import Footer from '../Footer'
// a component 

const data = [
  {'id': 1,
   'fruitName': 'Mango',
   'price': 20.00,
  },
  {'id': 2,
  'fruitName': 'Orange',
  'price': 30.00,
 },
 {'id': 3,
 'fruitName': 'Banana',
 'price': 45.00,
},
{'id': 4,
'fruitName': 'RaspBerries',
'price': 200.00,
},
{'id': 5,
'fruitName': 'Grapes',
'price': 80.00,
},
{'id': 6,
'fruitName': 'Melon',
'price': 60.00,
},
]
function App() {

  // const[num, setNum] = useState(0)
  // useEffect(() =>{
  //   setNum(num+20)
  // },[])
  return (
    <div>
      {data.map(item =><div key={item.id}
      style={{border: '2px solid #469da4', width: '20%', margin:'2%'}}>
        <p>{item.fruitName}</p>
        <small>{item.price}</small>
      </div>)}
  {/* //     <p>{num}</p>
  //     <button onClick={()=>{setNum(num+1)}}>Click me</button> */}
       {/* <Form/>  */}
      {/* <About/> */}
      {/* <h1>OUR WEBSITE</h1> */}
      {/* <About/> */}
      {/* <About/> */}
      
    </div>
    
  );
}

export default App;
