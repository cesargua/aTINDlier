import React, { useState, useEffect, useRef } from 'react'
import {Card, CardContent, Box, Typography, CardMedia} from '@mui/material'
import TinderCard from 'react-tinder-card'


function Product_Card({product, budget, budgetChange, setSwiped, swiped}){
    const tinderRef = useRef();
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
        // position:"absolute"
    }

    const imageStyle= {
        height: '400px',
        width: '300px',
        margin: 'auto',
        borderRadius: '10%'
    }
    const onSwipe = (direction) => {
        if(direction==='right'){
            budgetChange(budget-product.price)
        }
    }
    const onCardLeftScreen= ()=>{
        console.log(tinderRef)
        tinderRef.current.restoreCard();
        setSwiped(!swiped);
    }
    
    return(
        <>
            {/* <Box width='200px' height="500px" sx={boxStyle}> */}
                <TinderCard className="tinder_card" ref={tinderRef} onSwipe={onSwipe} onCardLeftScreen={()=>{onCardLeftScreen();}}>
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
                </TinderCard>

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

