import React from 'react';

import { getRequest } from '../../utilities/webRequest';

const Home = () => {
  getRequest('/api/test')
    .then(res => console.log(res))
    .catch(err => console.log(err));
  return (
    <div>
      <h1>Welcome home</h1>
    </div>
  );
};

export default Home;
