import React, { useState } from 'react';
import useStyles from './styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Container } from '@mui/material';
import { Delete, MoreHoriz } from '@mui/icons-material';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import { useDispatch } from 'react-redux';
import { deleteFromList } from '../../../Action/favouriteList';
import Dialog from './Dialog';


const FavMovie = ({ movie }) => {
  const distpatch = useDispatch();
  const classes = useStyles();
  const [dialogopen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    distpatch(deleteFromList(id))
  };
  const textResizer = (string, countChar) => {
    return string?.length > countChar ? string.substr(0, countChar - 1) + `  ...more` : string;
  };

  return (
    <Container>
        <Dialog dialogopen={dialogopen} setDialogOpen={setDialogOpen} />

      <Card className={classes.card} raised elevation={10}>
        <div className={classes.cardContent} >
          <CardMedia className={classes.media} image={movie.posterUrl} title={movie.name} component='div'
          />
          {
            <div className={classes.overlay2}>
              <Button style={{ color: 'white' }} size="small"
               onClick={handleDialogOpen} >
                <MoreHoriz fontSize='large'> </MoreHoriz>
              </Button>
            </div>
          }
          <Typography className={classes.title} variant='h5' gutterBottom >{movie.name}</Typography>
          <div className={classes.details} >
            <Typography variant='body2' color='textSecondary' >
              <b>overview:</b> {textResizer(movie.overview, 160)}
            </Typography>
          </div>
          <CardContent>
            <Typography variant='body2' color='textSecondary' >
              Release Date : {movie.releaseDate || 'Unknown'}
            </Typography>
          </CardContent>
        </div>
        <CardActions className={classes.cardActions}>
          <Button color='primary' disabled size="small">
            <OndemandVideoRoundedIcon /> Watch
          </Button>
          {
            <Button color='error' size="small" variant='contained'
              onClick={() => handleDelete(movie._id)} >
              <Delete fontSize='small' color='string' > </Delete> Remove
            </Button>
          }
        </CardActions>
      </Card>
    </Container>
  );
};

export default FavMovie;


