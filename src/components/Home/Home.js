import React from 'react';
import requests from '../../utils/dataUrl';
import TopBanner from '../TopBanner/TopBanner';
import Movies from '../Movies/Movies';

const Home = () => {

  return (
    <div>
      <TopBanner />
      <Movies title={'NETFLIX OREGINAL'} fecthUrl={requests.orginal}> </Movies>
      <Movies title={'Trending Now'} fecthUrl={requests.tranding}></Movies>
      <Movies title={'Top Rated'} fecthUrl={requests.topRated}></Movies>
      <Movies title={'Action Movies'} fecthUrl={requests.actionMovie}></Movies>
      <Movies title={'Comedy Movies'} fecthUrl={requests.comedeyMovie} ></Movies>
      <Movies title={'Romance Movies'} fecthUrl={requests.romanticMovie} ></Movies>
      <Movies title={'Horror Movies'} fecthUrl={requests.horrorMovie} ></Movies>
      <Movies title={'Documentaries'} fecthUrl={requests.documentary} ></Movies>
    </div>
  )
}

export default Home;
