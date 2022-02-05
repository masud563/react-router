import queryString from 'query-string';
// import React, { Component } from 'react';

// class PostDetail extends Component {
   
//   render() { 
//     return (
//       <p>Post no.{this.props.match.params.id}</p>
//     );
//   }
// }
 
// export default PostDetail;

const PostDetail = ({match, location, history}) => {
  const query= queryString.parse(location.search);
  console.log(query);
  const handleHome = () => {
    history.push('/');
   }
  return ( 
    <div>
      <p>Post no.{match.params.id}</p>
      <p>It was posted on - {match.params.month}/{match.params.year}</p>
      <button onClick={handleHome}>Home</button>
    </div>
   );
}
 
export default PostDetail;