import React from 'react';

export const MovieTabs = (props) => {
    const {updateSort, sort_by} = props;

    const handleaClick = value => () =>{
        updateSort(value)
    }

    const getClasslink = value => {
        return `nav-link ${sort_by === value ? "active" : ""}`
    }

    return (
        <ul className={"tabs nav tab-pills"}>
            <li className={"nav-item"}>
                <div className={getClasslink("popularity.desc")}
                onClick={handleaClick("popularity.desc")}
                >
                    POPULARITY DESC
                </div>
            </li>
            <li className={"nav-item"}>
                <div className={getClasslink("revenue.desc")}
                onClick={handleaClick("revenue.desc")}
                >
                    REVENUE DESC
                </div>
            </li>
            <li className={"nav-item"}>
                <div className={getClasslink("vote_average.desc")}
                onClick={handleaClick("vote_average.desc")}
                >
                    VOTE AVERAGE DESC
                </div>
            </li>
        </ul>
    )
}