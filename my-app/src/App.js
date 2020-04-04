import React from 'react';
import MovieItem from "./components/movieItem";
import { getTrendingMoviesFetch, queryStringFetch } from "./api";
import MovieWillWatch from "./components/movieWillWatch";
import {MovieTabs} from "./components/movieTabs";
import Paginator from "./components/pagination";
// import {API_KEY} from "./utils";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listMovies: [],
      moviesWillWatch: new Map(),
      sort_by: "popularity.desc",
      current_page: 1,
      currentPortionPages:1,
      total_pages: 0
    }
  }

  handleListMovies = (list, totalPages) => {
    
    this.setState({
      listMovies: list,
      total_pages: totalPages
    })
  }

  handleCurrentPage = (curPage) => {
    this.setState({
      current_page: curPage
    })
  }

  handleCurrentPortionPages = (way) => {
    if(way === "toleft")
      this.setState({
        currentPortionPages: this.state.currentPortionPages - 1
      }); 
    else if (way === "toright") {
        this.setState({
          currentPortionPages: this.state.currentPortionPages + 1
        }) 
    } else {this.setState({
      currentPortionPages: 1
    }) }
  }

  addLikeMovie = (id, movie) => {
    this.setState({
      moviesWillWatch: this.state.moviesWillWatch.set(id, movie)
    })
  }
  deleteLikeMovie = (id) => {
    this.state.moviesWillWatch.delete(id);
    this.setState({
      moviesWillWatch: this.state.moviesWillWatch
    })
  }
  handleMoviesWillWatch = (movie) => {
    let { title, vote_average, id } = movie
    if (!title) { title = movie.name }
    if (this.state.moviesWillWatch.get(id)) {
      this.deleteLikeMovie(id)
    } else { this.addLikeMovie(id, { title, vote_average }) }
  }
  updateSortBy = (valueSort) => {
    this.setState({
      sort_by: valueSort
    })
  }

  async getTrendingMoviesList(sortBy, curPage) {
    const response = await getTrendingMoviesFetch(sortBy, curPage);
    const result = await response.json();
    console.log(sortBy, curPage)
    this.handleListMovies(result.results, result.total_pages);
  }
    
  componentDidMount() {
    this.getTrendingMoviesList(this.state.sort_by, this.state.current_page);
    // fetch(`https://developers.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=3&sort_by=${this.state.sort_by}`).then((response) => {return response.json()}).then((res) => {console.log(res)})
  }
  
  componentDidUpdate(prevProps, prevState) {
    //  console.log("prevProps", prevProps)
    //  console.log("prevState" ,prevState)
    //  console.log("this", this.props, "thisState", this.state)
     if(prevState.sort_by !== this.state.sort_by) {
      this.handleCurrentPortionPages();
      this.handleCurrentPage("1");
       this.getTrendingMoviesList(this.state.sort_by, this.state.current_page );}
      //  } else {this.getTrendingMoviesList(this.state.sort_by, this.state.current_page )}
    // else if (prevState.sort_by === this.state.sort_by) {
    //   this.getTrendingMoviesList(this.state.sort_by, this.state.current_page );
    //  }
    else if (prevState.current_page !== this.state.current_page) {
      this.getTrendingMoviesList(this.state.sort_by, this.state.current_page )
    }
     console.log(`${this.state.sort_by}, ${this.state.current_page}`)
  }

  render() {
   
    return (
      <div className={"conteiner"}>
        <div className={"row mt-4"}>
          <div className={"col-9"}>
          <div className={"row"}>
              <div className={"col-12"}>
                <Paginator totalPages={this.state.total_pages} handleCurrentPortionPages={this.handleCurrentPortionPages} currentPortionPages={this.state.currentPortionPages} handleCurrentPage={this.handleCurrentPage}/>
              </div>
            </div>  
            <div className={"row"}>
              <div className={"col-12"}>
                <MovieTabs sort_by={this.state.sort_by} updateSort={this.updateSortBy}/>
              </div>
            </div>
            <div className={"row"}>
              
              {this.state.listMovies.map(movie => <MovieItem data={movie} key={movie.id} handleMoviesWillWatch={() => this.handleMoviesWillWatch(movie)} />)}

            </div>
          </div>
          <MovieWillWatch list={this.state.moviesWillWatch} />
        </div>
      </div>
    );
  }
}

export default App;
