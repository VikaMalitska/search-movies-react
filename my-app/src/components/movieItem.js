import React from 'react';
import ReactDOM from 'react-dom';
import "../index.css";






function Image(props) {
    return <img className={"card-img-top"} src={props.src}  alt={props.alt}  />;
}

export default class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            like: false
        };
    }

    // tick() {
    //     this.setState({ time: new Date() });
    // }

    handlerLike = () => {
        this.setState({ like: !this.state.like });
    };

    handlerShowOwerw = () => {
        this.setState({ show: !this.state.show });
    };


    componentWillUnmount() {
    }

    render() {
        const {
            data: { title, vote_average, poster_path, overview, name }, handleMoviesWillWatch
        } = this.props;
        
        
        return (
            <div className="card" >
                <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />

                <div className={"card-body"}>
                    <h6 className={"card-title"}>{title || name}</h6>
                    <p className={"card-text"}>{vote_average}</p>
                    <div>
                        <button type="button" onClick={this.handlerShowOwerw}>
                            {this.state.show ? "hide" : "show"}
                        </button>

                        <button
                            type="button"
                            onClick = {()=>{
                                handleMoviesWillWatch(); 
                                this.handlerLike();
                            }}
                            className={this.state.like ? "btn-like" : ""}
                        >
                            {this.state.like ? "NoWotch" : "WillWatch"}
                        </button>
                    
                        {this.state.show ? <p>{overview}</p> : null}
                {/* {this.state.show ? <p>{this.state.time.toLocaleTimeString()}</p> : null} */}
                    </div>
                </div>
            </div>
        );
    }
}



{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src=".../100px180/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}