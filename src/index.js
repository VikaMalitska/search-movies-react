import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

// const movie = {
//   title: "My movie",
//   vote_average: 10,
//   src: "https://image.tmdb.org/t/p/w500//db32LaOibwEliAmSL2jjDF6oDdj.jpg",
//   owerview: "this is owerview"
// };




ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
