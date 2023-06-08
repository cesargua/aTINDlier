import React, { useState, useEffect } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
// import '../css/App.css'
import Product_Card from './Product_Card.jsx'

import {Grid} from '@mui/material'
import Budget from './Budget.jsx'
import Navbar from './Navbar.jsx'
import '../index.css'

// import "@aws-amplify/ui-react/styles.css"; // Ensure React UI libraries are styled correctly
// import { Amplify } from 'aws-amplify'
// import awsconfig from './aws-exports'
// Amplify.configure(awsconfig) // Configures the Amplify libraries with the cloud backend set up via the Amplify CLI

function App() {
  // const [ , ] = useState()

  const [products, setProducts] = useState([])
  const [budget, setBudget] = useState(20000);
  

  //call api here
  const budgetChange= (change) =>{
      // setBudget(change.toFixed(2));
      setBudget(parseFloat(change.toFixed(2)));
  }

  const GETProduct = (id =1) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
              console.log(json)
              setProducts(json)
            }).catch((err)=>{
              console.error(err)
            });
  }

  const GETAllProducts = () =>{
    fetch(`https://fakestoreapi.com/products/`)
            .then(res=>res.json())
            .then(json=>{
              console.log(json)
              setProducts(json)
            }).catch((err)=>{
              console.error(err)
            });
    
  }



  // useEffect(()=>{
  //   GETProduct(Math.floor(Math.random() * 10));
  // },[]);
  // useEffect(()=>{
  //   GETProduct(Math.floor(Math.random() * 10));
  // },[clicked]);
  // useEffect(()=>{
  //   console.log('here!')
  //   GETProduct(Math.floor(Math.random() * 10));
  // },[swiped]);

   useEffect(()=>{
    GETAllProducts();
   },[]);


  
  return (
    <div>
        <Navbar />
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '20vh' }}
        >
          <Budget budget={budget} budgetChange={budgetChange}/>
        </Grid>
        <Grid
          container
          spacing={30}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '120vh' }}
        >
         
         
            {/* {products ? products.map(product=><Product_Card products={products} product={product} budget={budget} budgetChange={budgetChange} swiped={swiped} setSwiped={setSwiped}/> ): null } */}
            {products? <Product_Card products={products} budget={budget} budgetChange={budgetChange}/>: null}
          </Grid>
      </div>
  )

}

export default App;

{/* <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}
>
  <Grid item xs={3}>
    <LoginForm />
  </Grid>
</Grid> */}


{/* <Card /> */}
// return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  // return (

  // )