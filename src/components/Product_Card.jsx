import React, { useState, useEffect, useRef, useMemo } from 'react'
import {Grid, Card, CardContent, Box, Typography, CardMedia} from '@mui/material'
import TinderCard from 'react-tinder-card'
import Accept from './Accept.jsx'
import Reject from './Reject.jsx'


function Product_Card({products, budget, budgetChange}){
    
    const priceRef = useRef();
    const [currIndex, setCurrentIndex] = useState(products.length - 1);
    const tinderRef = useRef(currIndex);
    
    const boxStyle = {
        display: 'inline-block', 
        mx: '2px', 
        transform: 'scale(0.8)', 
        align: 'center'
    }

    const cardStyle = {
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
    const swipeHandler = (direction, price) => {
        console.log(price)
        console.log(parseFloat(budget)-price)
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
    const clickHandler= () =>{
        setClicked(!clicked)
        budgetChange(budget-price);
    }
    
    return(
        <>
            {/* <Box width='200px' height="500px" sx={boxStyle}> */}
           
            {/* <div className="card-container" > */}
                <Grid item xs={2}>
                    <Reject />
                </Grid>
                <Grid item xs={5} >
                {products.map(product=>
                        <TinderCard className="tinder_card" key={product.id} ref={tinderRef} onSwipe={(dir)=>{swipeHandler(dir, product.price)}} 
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
                        <Accept clickHandler={clickHandler}/>
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

