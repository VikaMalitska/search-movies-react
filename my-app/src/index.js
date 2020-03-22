import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {getTrendingMoviesFetch} from "./api";
// import App from './App';
import * as serviceWorker from './serviceWorker';

// const movie = {
//   title: "My movie",
//   vote_average: 10,
//   src: "https://image.tmdb.org/t/p/w500//db32LaOibwEliAmSL2jjDF6oDdj.jpg",
//   owerview: "this is owerview"
// };
function Image(props) {
  return <img width="100%" src={props.src} alt={props.alt} />;
}

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      like: false,
      // time: new Date()
    };
  }

  tick() {
    this.setState({ time: new Date() });
  }

  handlerLike = () => {
    this.setState({ like: !this.state.like });
  };

  handlerShowOwerw = () => {
    this.setState({ show: !this.state.show });
  };

  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const {
      data: { title, vote_average, poster_path, overview }
    } = this.props;

    return (
      <div style={{ width: "400px" }}>
        <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.handlerShowOwerw}>
            {this.state.show ? "hide" : "show"}
          </button>

          <button
            type="button"
            onClick={this.handlerLike}
            className={this.state.like ? "btn-like" : ""}
          >
            {this.state.like ? "dislike" : "like"}
          </button>
        </div>
        {this.state.show ? <p>{overview}</p> : null}
        {/* {this.state.show ? <p>{this.state.time.toLocaleTimeString()}</p> : null} */}
      </div>
    );
  }
}

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      listMovies: []
    }
  }

  handleListMovies = (data) => {
    this.setState({
      listMovies: data
    })
  }

  async getTrendingMoviesList() {
    const response = await getTrendingMoviesFetch();
    const result = await response.json();
    this.handleListMovies(result.results);
    console.log(result.results);
  }
  componentDidMount() {
    this.getTrendingMoviesList();
  }

  render () {
    return (
      <div>
        {this.state.listMovies.map(movie => (console.log(movie), <MovieItem data = {movie}/>))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
