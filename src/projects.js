import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, Box} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '40px',
  },
  title: {
    margin: '20px auto 20px auto',
    textAlign: 'center',
  },
  details: {
    margin: '-20px auto 70px auto',
    textAlign: 'center',
    color: '#A2A2A2',

  },
  // thumbnail: {
  //   transform: "${this.state.hovered ? 'scale(1.2,1.2)' : 'scale(1,1)'}",
  //   transition: "${this.state.hovered ? '0.5s' :  '0.5s'}",
  //   // width: '50%'
  // }
}));

export default function SpacingGrid() {
  
  const classes = useStyles();


  return (
    <Grid container justify="center" className={classes.root} >
      <Grid justify="center" item xs={5} style={{marginRight:'25px'}}>
        <div style={{margin:'50px'}}></div>
        <div className="img-wrapper">
            <img
                src="https://ueno.co/static/6aaadd9ae00abb7450ff868e7cd1c1b3/e7405/02be3ae3-c281-47ca-b8f1-e8a29a5cf474_dorsia_casestudy_hero.webp"
                alt=""
                className="hover-zoom"
            />
        </div>
        <p className={classes.title} >Dorsia</p>
        <Box display={{ xs: 'none', md: 'block' }}>
          <p className={classes.details}>Branding, Product, Marketing</p>
        </Box>
        
        
        <div className="img-wrapper">
            <img
                src="https://ueno.co/static/4a8222b171e682312a7771e9e51ff1d7/8fc1f/668f801c-fad1-465e-a023-9b83348aa070_clearmotion-grid.webp"
                alt=""
                className="hover-zoom"
            />
        </div>
        <p className={classes.title}>Dorsia</p>
        <Box display={{ xs: 'none', md: 'block' }}>
          <p className={classes.details}>Branding, Product, Marketing</p>
        </Box>
        
        
        <div className="img-wrapper">
            <img
                src="https://ueno.co/static/6de8d4d5c9c9553938c4b4aa1a589b98/8fc1f/53f3f30d-b24d-4da9-ad4d-96cdf8c6292b_dropdbox-guide.webp"
                alt=""
                className="hover-zoom"
            />
        </div>
        <p className={classes.title}>Dorsia</p>
        <Box display={{ xs: 'none', md: 'block' }}>
          <p className={classes.details}>Branding, Product, Marketing</p>
        </Box>
        
        <div className="img-wrapper">
            <img
                src="https://ueno.co/static/da4eb8d9f3845cb563400f68d440d1bd/8fc1f/d3a97c0e-446e-49f7-aa2e-b0187a813c5f_santatracker.webp"
                alt=""
                className="hover-zoom"
            />
        </div>
        <p className={classes.title}>Dorsia</p>
        <Box display={{ xs: 'none', md: 'block' }}>
          <p className={classes.details}>Branding, Product, Marketing</p>
        </Box>
        
        <div className="img-wrapper">
            <img
                src="https://ueno.co/static/b6fbef506b1a46b67d12ccc60c076470/8fc1f/30a872c9-ec6d-4da8-a40e-cf597409cb05_Cowboy1200x1200.webp"
                alt=""
                className="hover-zoom"
            />
        </div>
        <p className={classes.title}>Dorsia</p>
        <Box display={{ xs: 'none', md: 'block' }}>
          <p className={classes.details}>Branding, Product, Marketing</p>
        </Box>
      </Grid>
      <Grid justify="center" item xs={5}>
      
      <div className="img-wrapper">
            <img
                src="https://ueno.co/static/5038419186136bcececcf44c09df777a/8fc1f/fa4cfb00-b4bc-497c-8691-b6187f3affce_lonelyplanet_hero.webp"
                alt=""
                className="hover-zoom"
            />
      </div>
      <p className={classes.title}>Dorsia</p>
      <Box display={{ xs: 'none', md: 'block' }}>
          <p className={classes.details}>Branding, Product, Marketing</p>
        </Box>
      
      <div className="img-wrapper">
            <img
                src="https://ueno.co/static/66e23e8d5a46f6cfd8bc28aaebe3b81f/8fc1f/90594130-e628-4097-a7a4-53c62a9ad61a_espn-thumb.webp"
                alt=""
                className="hover-zoom"
            />
      </div>
      <p className={classes.title}>Dorsia</p>
      <Box display={{ xs: 'none', md: 'block' }}>
          <p className={classes.details}>Branding, Product, Marketing</p>
        </Box>
      
      <div className="img-wrapper">
            <img
                src="https://ueno.co/static/2fa64aeba6c76d13d61a1f6e6c810286/8fc1f/6805d3d5-174a-4355-8265-a4446e971882_copper-image.webp"
                alt=""
                className="hover-zoom"
            />
      </div>
      <p className={classes.title}>Dorsia</p>
      <Box display={{ xs: 'none', md: 'block' }}>
          <p className={classes.details}>Branding, Product, Marketing</p>
        </Box>
      
      <div className="img-wrapper">
            <img
                src="https://ueno.co/static/fb65a052c22192a5ab78fd2c84798325/8fc1f/798efde1-7b06-4d72-93fb-d98a45ea64e3_redbull.webp"
                alt=""
                className="hover-zoom"
            />
      </div>
      <p className={classes.title}>Dorsia</p>
      <Box display={{ xs: 'none', md: 'block' }}>
          <p className={classes.details}>Branding, Product, Marketing</p>
        </Box>
      
      <div className="img-wrapper">
            <img
                src="https://ueno.co/static/72299ba88c8105be346665e058b42e0b/e7405/ca3d4561-c5b2-4e99-8147-f916251f451f_uber-thumb.webp"
                alt=""
                className="hover-zoom"
            />
      </div>
      <p className={classes.title}>Dorsia</p>
      <Box display={{ xs: 'none', md: 'block' }}>
          <p className={classes.details}>Branding, Product, Marketing</p>
        </Box>
      </Grid>
    </Grid>
  );
}
