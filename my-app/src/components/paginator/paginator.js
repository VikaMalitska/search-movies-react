// import React from 'react';

//    class Paginator extends React.Component {
//         constructor (props){
//             super(props);
//             this.pages = [];
//             for(let i = 1; i <= totalPages; i++) {
//                 pages.push(i)
//             }

//             this.state = {
//                 currentPortionPages: 1,
//                 portionSize: props.portionSize,

//             }
//         }
//         handleCurrentPortionPages = (way) => {
//             if (way == 0){
//                 this.setState({
//                     currentPortionPages: this.state.currentPortionPages - 1
//                 })
//             } else {
//                 this.setState({
//                     currentPortionPages: this.state.currentPortionPages + 1
//                 })
//             }
//         }

//         leftPortionPageNumber = (currentPortionPages) => {
//             return ((currentPortionPages - 1) * this.state.portionSize + 1)
//         }
//         rightPortionPageNumber = (currentPortionPages) => {
//             return (currentPortionPages * this.state.portionSize)
//         }


//     render() {
//         return(
//             <div>
//                 {this.state.currentPortionPages > 1 && 
//                 <button onClick = {() => {this.handleCurrentPortionPages("0")}}> {"<"}</button>}
//             </div>
//         )
//     }
// }

// export default Paginator;