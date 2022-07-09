import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import StarIcon from '@mui/icons-material/Star';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const DealsOfDay = (props: any) => {
  const refSlider = React.useRef<any>(null);
  const refNextArrow = React.useRef<any>(null);
  const refPrevArrow = React.useRef<any>(null);

  const NextArrow = (props: any) => {
    return (
      <IconButton onClick={props.onClick} ref={refNextArrow}
        sx = {{
          position: 'absolute',
          top: '45%',
          right: 0,
          background: 'rgba(39, 39, 39, 0.8)',
          color: '#fff',
          opacity: 0,
        }}
      >
        <NavigateNextIcon />
      </IconButton>
    )
  }

  const PrevArrow = (props: any) => {
    return (
      <IconButton onClick={props.onClick} ref={refPrevArrow}
        sx = {{
          position: 'absolute',
          top: '45%',
          left: 0,
          zIndex: 1,
          background: 'rgba(39, 39, 39, 0.8)',
          color: '#fff',
          opacity: 0,
        }}
      >
        <NavigateBeforeIcon />
      </IconButton>
    )
  }

  const products = [
    {
      title: 'Womens Denim Jacket',
      image: '/images/product2.png',
      rate: 4.4,
      price: 1000,
      discount: 0.3,
    },

    {
      title: 'Womens Denim Jacket',
      image: '/images/product3.jpg',
      rate: 4.4,
      price: 1000,
      discount: 0.3,
    },

    {
      title: 'Womens Denim Jacket',
      image: '/images/product1.png',
      rate: 4.4,
      price: 1000,
      discount: 0.3,
    },

    {
      title: 'Womens Denim Jacket',
      image: '/images/product4.jpg',
      rate: 4.4,
      price: 1000,
      discount: 0.3,
    },

    {
      title: 'Womens Denim Jacket',
      image: '/images/product5.jpg',
      rate: 4.4,
      price: 1000,
      discount: 0.3,
    },
    
  ];

  const setting = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const onSliderMouseOver = () => {
    refNextArrow.current.style.opacity = 1;
    refPrevArrow.current.style.opacity = 1;
  };
  const onSliderMouseOut = () => {
    refNextArrow.current.style.opacity = 0;
    refPrevArrow.current.style.opacity = 0;
  };

  React.useEffect(
    () => {
      const node = refSlider.current;
      if (node) {
        node.addEventListener("mouseover", onSliderMouseOver);
        node.addEventListener("mouseout", onSliderMouseOut);
        return () => {
          node.removeEventListener("mouseover", onSliderMouseOver);
          node.removeEventListener("mouseout", onSliderMouseOut);
        };
      }
    },
    [refSlider.current] // Recall only if ref changes
  );
  return (
    <Box
      sx={{
        mt: 4,
        mb: 4,
      }}
    >
      <CssBaseline />
      <Container maxWidth="xl" >
        <Typography variant="h4">Deals of the Day</Typography>
        <Box ref={refSlider}>
          <Slider {...setting} >
            {products.map((product, index) => {
              return (
                <Box key={index} sx={{p: 2}}>
                <Card
                  sx={{
                    borderRadius: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Box
                      sx={{
                          width: '30%',
                          ml: 'auto',
                          mr: 'auto',
                          mb: 2,
                      }}
                      component="img"
                      src="/images/levis.svg"
                    />
                    <Typography gutterBottom variant="h5" textAlign={'center'} component="div">
                      Best of Styles
                    </Typography>
                    <Typography gutterBottom variant="body2" textAlign={'center'} component="div">
                      Under Rs. {product.price}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
                </Card>
                </Box>
              )
            })}
          </Slider>
        </Box>
        
      </Container>
        
    </Box>
  );
};
export default DealsOfDay;
