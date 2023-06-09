import React, { useState, useEffect, useRef, useMemo } from 'react'
import {Grid, Card, CardContent, Box, Typography, CardMedia} from '@mui/material'
import TinderCard from 'react-tinder-card'
import Accept from './Accept.jsx'
import Reject from './Reject.jsx'


function Product_Card({products, budget, budgetChange}){
    const priceRef = useRef();
    const [currIndex, setCurrentIndex] = useState(products.length - 1);
    const tinderRef = useRef(currIndex);

    const refs = useMemo(
        () => {
        //  console.log(Array(products.length))  
        return Array(products.length)
        .fill(0)
        .map((i) => React.createRef())
        }
    , [])
    
    const boxStyle = {
        display: 'inline-block', 
        mx: '2px', 
        transform: 'scale(0.8)', 
        align: 'center'
    }

    const cardStyle = {
        // bottom: 200,
        backgroundColor: "#FAF9F6",
        borderRadius: '10%',
        width:"500px",
        height:"600px",
        // position:"absolute"
    }

    const imageStyle= {
        height: '400px',
        width: '300px',
        margin: 'auto',
        borderRadius: '10%'
    }

    const swipeHandler = (direction, price, index) => {
        console.log(price)
        console.log(parseFloat(budget)-price);
        setCurrentIndex(index-1);
        tinderRef.current = index-1;
         if(direction==='right'){
            budgetChange(parseFloat(budget)-price)
        }
       
    }
    const onCardLeftScreen= (dir)=>{
        // const price = priceRef.current.childNodes[1].data;
        // // console.log(priceRef)
        // console.log(budget-price);

        //  if(dir==='right'){
        //     budgetChange(budget-price)
        // }

        // setSwiped(!swiped);
    }
    const swipeClickHandler= async (dir) =>{
        console.log(refs);
        if(currIndex < products.length){
            await refs[currIndex].current.swipe(dir);
        }
        // budgetChange(budget-price);
    }
    
    return(
        <>
            {/* <Box width='200px' height="500px" sx={boxStyle}> */}
           
            {/* <div className="card-container" > */}
                <Grid className='reject-grid' item xs={2} >
                    <Reject swipeClickHandler={swipeClickHandler}/>
                </Grid>
                <Grid item xs={5} sx={{ minHeight: '100vh' }} >
                {products.map((product,index)=>
                        <TinderCard className="tinder_card" key={product.id} ref={refs[index]} onSwipe={(dir)=>{swipeHandler(dir, product.price, index)}} 
                        onCardLeftScreen={(dir)=>{onCardLeftScreen(dir);}}>
                            <Card sx={cardStyle} > 
                                <CardContent>
                                    <CardMedia
                                        component='img'
                                        height='10'
                                        image={product.image}
                                        sx={imageStyle}
                                    />
                                    <Typography gutterBottom variant='h5' component='div' className='product-name'>
                                        {product.title}
                                    </Typography>
                                    <Typography gutterBottom variant='h7' component='div' className='product-price'>
                                        ${product.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </TinderCard>
                          )
                    }
                    </Grid>
                <Grid item xs={0}>
                    <Accept swipeClickHandler={swipeClickHandler}/>
                </Grid>
                {/* </div> */}
              
             {/* <TinderCard onSwipe={onSwipe} onCardLeftScreen={()=>{onCardLeftScreen();}}>
                <Card sx={cardStyle}>
                    <CardContent>
                        <CardMedia
                            component='img'
                            height='10'
                            image={product.image}
                            sx={imageStyle}
                        />
                        <Typography gutterBottom variant='h5' component='div' className='product-name'>
                            {product.title}
                        </Typography>
                        <Typography gutterBottom variant='h7' component='div' className='product-price'>
                            ${product.price}
                        </Typography>
                    </CardContent>
                </Card>
            </TinderCard> */}
        </>
    )


}

export default Product_Card;

