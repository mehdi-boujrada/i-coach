import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import basket from '../images/basket.jpg';
import football from '../images/americanfootball.jpeg';
import Button from '@mui/material/Button';
import gym from '../images/gym.jpg';
import gym2 from '../images/gym2.jpg';
import goalkeper from '../images/goalkeper.jpg';
import tennis from '../images/tennis.jpg';
import {Link} from 'react-router-dom';

export default function Post() {
  
    return (
        <>
  <Grid container spacing={2}>
  <Grid item xs={6}>
    <Card sx={{ maxWidth: 700 }} style={{ marginBlock: "20px", marginLeft: "20px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            K
          </Avatar>
        }
     
        title="Speed and dribling workout"
        subheader="december 14, 2022"
      />
      <CardMedia
        component="img"
        height="400"
        style={{backgroundImage: `url(${basket})`}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          you want to increase your speed while dribling with ball this course is for you, in this course i provide multiple drils that will help u increase your speed to get pass your opponents and get to the basket.
        </Typography>
      </CardContent> 
      <Button style={{ marginBlock: "20px", marginLeft: "20px" }} variant="contained">Take this course</Button>
      <Button style={{ marginBlock: "20px", marginLeft: "20px" }} variant="outlined">learn more</Button>
    </Card>
    </Grid>
    <Grid item xs={6}>
    <Card sx={{ maxWidth: 700 }} style={{ marginBlock: "20px", marginLeft: "20px" }}>
        
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            k
          </Avatar>
        }
     
        title="catch the ball with high effency"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="400"
        style={{backgroundImage: `url(${football})`}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          this course is designed for wide reservers that want a high effency when it commes to catching the ball. this course provide some gym exercices and drills that will make stand out from the croude.
        </Typography>
      </CardContent> 
      <Button style={{ marginBlock: "20px", marginLeft: "20px" }} variant="contained">Take this course</Button>
      <Button style={{ marginBlock: "20px", marginLeft: "20px" }} variant="outlined">learn more</Button>
    </Card>
        </Grid>
   
   


    <Grid item xs={6}>
    <Card sx={{ maxWidth: 700 }} style={{ marginBlock: "20px", marginLeft: "20px" }}>
        
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            M
          </Avatar>
        }
     
        title="are you skinny and want to gain muscule"
        subheader="december 14, 2022"
      />
      <CardMedia
        component="img"
        height="400"
        style={{backgroundImage: `url(${gym})`}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            are you trying to get bigger and dont know how?
            this is the best ourse for you because after taking this ourse you will be able to gain muscule and get stronger. it doesn't mather if you are a male or female this course will work for both.
        </Typography>
      </CardContent> 
      <Button style={{ marginBlock: "20px", marginLeft: "20px" }} variant="contained">Take this course</Button>
      <Button style={{ marginBlock: "20px", marginLeft: "20px" }} variant="outlined">learn more</Button>
    </Card>
        </Grid>
        <Grid item xs={6}>
    <Card sx={{ maxWidth: 700 }} style={{ marginBlock: "20px", marginLeft: "20px" }}>
        
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            F
          </Avatar>
        }
     
        title="you wanna lose weith and dont know how?"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="400"
        style={{backgroundImage: `url(${gym2})`}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        you want to lose weight for various reasons, such as improving their health, increasing their energy levels, or feeling more confident in their appearance If you're considering losing weight, it's important to do so in a healthy and sustainable way.        </Typography>
      </CardContent> 
      <Button style={{ marginBlock: "20px", marginLeft: "20px" }} variant="contained">Take this course</Button>
      <Button style={{ marginBlock: "20px", marginLeft: "20px" }} variant="outlined">learn more</Button>
    </Card>
        </Grid>




        <Grid item xs={6}>
    <Card sx={{ maxWidth: 700 }} style={{ marginBlock: "20px", marginLeft: "20px" }}>
        
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
     
        title="are you tired of people score on you?"
        subheader="december 14, 2022"
      />
      <CardMedia
        component="img"
        height="400"
        style={{backgroundImage: `url(${goalkeper})`}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The Goalkeeper program has five stages of development; Footwork/Balance, Ball Handling/Boxing, Diving/BreakAways, Shot Stopping/Crosses, and Angles/Distribution. At this level our main focus will be on technical Player development.        </Typography>
      </CardContent> 
      <Button style={{ marginBlock: "20px", marginLeft: "20px" }} variant="contained">Take this course</Button>
      <Button style={{ marginBlock: "20px", marginLeft: "20px" }} variant="outlined">learn more</Button>
    </Card>
        </Grid>
        <Grid item xs={6}>
    <Card sx={{ maxWidth: 700 }} style={{ marginBlock: "20px", marginLeft: "20px" }}>
        
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            k
          </Avatar>
        }
     
        title="become the nect nadal"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="400"
        style={{backgroundImage: `url(${tennis})`}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Level up your tennis game with the next best thing to a private lesson. Master insider secrets and a winner’s mindset.        </Typography>
      </CardContent> 
      <Button style={{ marginBlock: "20px", marginLeft: "20px" }} variant="contained">Take this course</Button>
      <Button style={{ marginBlock: "20px", marginLeft: "20px" }} variant="outlined">learn more</Button>
    </Card>
        </Grid>

        </Grid>




    


   

    </>
  );
}
