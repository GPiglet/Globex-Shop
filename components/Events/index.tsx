



import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const CarouselItem = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={6.43}>
                    <Box
                    sx={{
                        width: '100%'
                    }}
                    component="img"
                    alt="PRADA"
                    src="/images/event-prada.jpg"
                    />
                </Grid>
                <Grid item xs={5.57} >
                    <Box
                    sx={{
                        width: '100%'
                    }}
                    component="img"
                    alt="PRADA"
                    src="/images/event-prada-background.png"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

const EventCarousel = (props: any) => {
  return (
    <Box
    >
        <CssBaseline />
        <Container maxWidth="xl" disableGutters>
            <Carousel animation="slide">
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Container>
    </Box>
  );
};
export default EventCarousel;
