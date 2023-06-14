import React, { useState, useEffect } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
// import '../css/App.css'
import Product_Cards from './Product_Cards.jsx'
import axios from 'axios';
import {Grid} from '@mui/material'
import Budget from './Budget.jsx'
import Navbar from './Navbar.jsx'
import controllers from '../backend/controllers.js'
import '../index.css'

// import "@aws-amplify/ui-react/styles.css"; // Ensure React UI libraries are styled correctly
// import { Amplify } from 'aws-amplify'
// import awsconfig from './aws-exports'
// Amplify.configure(awsconfig) // Configures the Amplify libraries with the cloud backend set up via the Amplify CLI

function App() {

  const [products, setProducts] = useState([])
  const [budget, setBudget] = useState(0);
  const [productsBought, setProductsBought] = useState([])
  
  const getUser = async (id='WdhZLj5S5Bdb8em9GLWk') => {
    try {
      const data = await controllers.getUserById(id);
      setBudget(data.budget);
    } catch(err){
      console.error(err);
    }
  }

  const updateUser = async (obj, id='WdhZLj5S5Bdb8em9GLWk') => {
    try {
      console.log('update: ', obj)
      await controllers.updateUser(id, obj);
    } catch(err){
      console.error(err);
    }
  }
  
  //call api here
  const budgetChange= (change) =>{
      // setBudget(change.toFixed(2));
      const newBudget = parseFloat(change.toFixed(2))
      setBudget(newBudget);
      updateUser({budget: newBudget});
  }

  const updateHistory= (card) =>{
    const newProducts = [...productsBought, card]
    setProductsBought(newProducts);
    updateUser({history: newProducts});
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
    // fetch(`/api`)
    //         .then(res=>res.json())
    //         .then(json=>{
    //           console.log(json)
    //           setProducts(json)
    //         }).catch((err)=>{
    //           console.error(err)
    //         });
    axios.get('https://dummyjson.com/products').then(res=>{
      // console.log(res.data);
      const newProd = res.data
      console.log(res.data.products)
      setProducts(res.data.products);
    }).catch(err=>{
      console.error(err);
    })
  }



   useEffect(()=>{
    GETAllProducts();
    getUser();
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
          sx={{ minHeight: '110vh' }}
        >
            {/* {products ? products.map(product=><Product_Card products={products} product={product} budget={budget} budgetChange={budgetChange} swiped={swiped} setSwiped={setSwiped}/> ): null } */}
            {products.length > 0? <Product_Cards updateHistory={updateHistory} products={products} budget={budget} budgetChange={budgetChange}/>: null}
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