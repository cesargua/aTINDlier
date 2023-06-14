import React, { useState, useEffect, useRef, useMemo } from 'react'
import {Grid, Card, CardContent, Box, Typography, CardMedia} from '@mui/material'
import TinderCard from 'react-tinder-card'
import Accept from './Accept.jsx'
import Reject from './Reject.jsx'
import controllers from '../backend/controllers.js'


function Product_Cards({updateHistory, products, budget, budgetChange}){
    // const priceRef = useRef();
    const [currIndex, setCurrentIndex] = useState(products.length - 1);
    // const [leftScreen, setLeftScreen] = useState(false);
    const tinderRef = useRef(currIndex);

    const cardRefs = useMemo(
        () => {
        //  console.log(Array(products.length))  
        return Array(products.length)
        .fill(0)
        .map((i) => React.createRef())
        }
    , [])

    // const priceRefs = useMemo(
    //     () => {
    //     //  console.log(Array(products.length))  
    //     return Array(products.length)
    //     .fill(0)
    //     .map((i) => React.createRef())
    //     }
    // , []);
    const priceRefs = Array(products.length).map((i) => products[i].price)
    

    // const leftScreen = useMemo(
    //     () => {
    //     //  console.log(Array(products.length))  
    //     return Array(products.length)
    //     .fill(0)
    //     .map((i) => React.createRef())
    //     }
    // , []);

    
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

    const denySwipe= (price) => {
        const newBudget = parseFloat(budget)-price;
        if(newBudget <= 0){
            alert('Your budget is too low for that! Add more money!')
            return 'right';
        }   
    }
    
    const swipeHandler = async (direction, price, title, index) => {
        console.log(price)
        const newBudget = parseFloat(budget)-price;
        console.log('You swiped ', direction , '!');
        // console.log('budget change')
        console.log('budget change inside swipe handler is', newBudget);
        if(direction==='right' && newBudget > 0) {
            budgetChange(newBudget);
            updateHistory({title: title, price: price});
        } else if(direction==='right' && newBudget <= 0){
            cardRefs[currIndex].current.restore = true;
            return;
        }
        setCurrentIndex(index-1);
        tinderRef.current = index-1;
    }

    const onCardLeftScreen= (dir, price,index)=>{
        console.log('budget before leaving screen:', budget)
        const newBudget = parseFloat(budget)-price;
        console.log('new budget is', newBudget );
        console.log(currIndex);
        if(cardRefs[currIndex].current.restore){
            alert('Add in to your budget!');
            cardRefs[currIndex].current.restoreCard();
            setCurrentIndex(index+1);
            tinderRef.current = index+1;
            cardRefs[currIndex].current.restore = false;
        }
    }

    const swipeClickHandler= async (dir) =>{
        const price = parseFloat(products[currIndex].price);
        console.log(products[currIndex].title)
        console.log(price);
        const newBudget = budget-price;
        console.log(price)
        if(currIndex < products.length){
            if((dir === 'right' && newBudget>=0) ||dir === 'left') await cardRefs[currIndex].current.swipe(dir);
            else alert('Add in more to your budget!')
        }   
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
                        <TinderCard className="tinder_card" key={product.id} preventSwipe={['up','down']} ref={cardRefs[index]} onSwipe={(dir)=>{swipeHandler(dir, product.price, product.title, index)}} 
                        onCardLeftScreen={(dir)=>{onCardLeftScreen(dir, product.price, index);}}>
                            <Card sx={cardStyle} > 
                                <CardContent >
                                    <CardMedia
                                        component='img'
                                        height='10'
                                        image={product.images[0]}
                                        sx={imageStyle}
                                    />
                                    <Typography gutterBottom variant='h5' component='div' className='product-name'>
                                        {product.title}
                                    </Typography>
                                    <Typography gutterBottom /*ref={priceRefs[index]}*/  variant='h7' component='div' className='product-price'>
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

export default Product_Cards;

