import React from 'react';

    const Paginator = (props) => {
        const portionSize = 5;
        const {totalPages, currentPortionPages, handleCurrentPortionPages, handleCurrentPage} = props;
        
        const leftPortionPageNumber = (currentPortionPages) => {
            return ((currentPortionPages - 1) * portionSize + 1)
        }
        const rightPortionPageNumber = (currentPortionPages) => {
            return (currentPortionPages * portionSize)
        }
        
        const totalportionPages = totalPages / portionSize;
        
        let pages = [];
        for(let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }
        
        return(
            <div>
                {currentPortionPages > 1 && 
                    <button onClick = {() => {handleCurrentPortionPages("toleft")}}> {"<"}</button>}

                    {pages
                        .filter(p => p >= (leftPortionPageNumber(currentPortionPages)) && p <= (rightPortionPageNumber(currentPortionPages)))
                    .map(p => <button key={p} onClick={(event) => {handleCurrentPage(p)}}>{p}</button>)
                    }  
                {totalportionPages > currentPortionPages &&  <button onClick = {() => {handleCurrentPortionPages("toright")}}> {">"}</button>}   
            </div>
        )    
}


export default Paginator;