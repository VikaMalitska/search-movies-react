import React from 'react';
import ReactDOM from 'react-dom';


const ItemLikeMovie = (props)=> {
    const {title, vote_average} = props.props
    return(
        <li className="list-group-item">
            <div className="d-flex justify-content-between">
                <p className="list-group-title">{title}</p>
                <p className="list-group-vote">{vote_average}</p>
            </div>
        </li>
    )
}
export default class MovieWillWatch extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const {list} = this.props || [];
        return(
            <div className={"col-3"}>
                <h2>{`Will Watch: ${list.size} movies`}</h2>
                <ul className={"list-group"}>
                    {list.size > 0 ?  [...list.values()].map((item) => <ItemLikeMovie props={item} key={item.title} />)  : null}  
                </ul>
            </div>
        )
    }
}