import React from 'react'
import requests from '../../dataUrl'
import TopBanner from '../TopBanner/TopBanner'
import Movies from '../Movies/Movies';
import { useDispatch } from 'react-redux'
import { authStateChanged } from '../../Action/AuthAction'

const Home = () => {
  const dispatch = useDispatch();
  dispatch(authStateChanged());

  return (
    <div>
      <TopBanner />
      <Movies
        title={'NETFLIX OREGINAL'}
        fecthUrl={requests.orginal}
      >
      </Movies>
      <Movies title={'Trending Now'} fecthUrl={requests.tranding}></Movies>
      <Movies title={'Top Rated'} fecthUrl={requests.topRated}></Movies>
      <Movies
        title={'Action Movies'}
        fecthUrl={requests.actionMovie}
      ></Movies>
      <Movies
        title={'Comedy Movies'}
        fecthUrl={requests.comedeyMovie}
      ></Movies>
      <Movies
        title={'Romance Movies'}
        fecthUrl={requests.romanticMovie}
      ></Movies>
      <Movies
        title={'Horror Movies'}
        fecthUrl={requests.horrorMovie}
      ></Movies>
      <Movies
        title={'Documentaries'}
        fecthUrl={requests.documentary}
      ></Movies>
    </div>
  )
}

export default Home;
