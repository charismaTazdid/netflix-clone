import React, { useEffect } from 'react';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getMyFavouriteList } from '../../Action/favouriteList';
import FavMovie from './FavMovie/FavMovie';
import useStyles from './styles';

const MyFavList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.auth.authData);
  useEffect(() => {
    dispatch(getMyFavouriteList(loggedInUser?.user?.email));
  }, [loggedInUser, dispatch]);

  const myList = useSelector(state => state?.MovieList);
  console.log(myList);
  console.log(loggedInUser);
  return (
    <div className={classes.container}>
      <Container >
        {
          !myList.length &&
          <div className={classes.containerX}>
            <CircularProgress />
            <div className={classes.notFound}>
              <Typography variant='h4'> NO FAVOURITE </Typography>
              <Typography variant='h4'> MOVIE FOUND </Typography>
              <Typography variant='body'> go to home page and add make your Favourite List </Typography>

            </div>
          </div>
        }

        <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3} >

          {
            myList.map((movie) => (
              <Grid item key={movie._id} xs={12} sm={12} md={6} lg={4}>
                <FavMovie movie={movie} > </FavMovie>
              </Grid>
            ))
          }

        </Grid>
      </Container>
    </div>
  )
}

export default MyFavList;
