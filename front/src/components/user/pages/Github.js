import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default () => {

  const [data, setData] = useState([]);

  const getRepos = () => {
    axios
      .get('https://api.github.com/users/louiscasciodev/repos')
      .then(result => setData(result.data));
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
}


useEffect(() => {
  getRepos()
}, []);


// const [repos, setRepos] = useState();

// const getRepos = () => {
//   axios.get('https://api.github.com/users/louiscasciodev/repos')
//     .then((response) => {
//       setRepos(response.data)
//       console.log("test repos", repos)
//       // console.log(response.data);
//       // console.log(response.status);
//       // console.log(response.statusText);
//       // console.log(response.headers);
//       // console.log(response.config);
//     });
// }

// useEffect(() => {
//   getRepos()
// });



return (
  <>
    {console.log("test repos", data)}
    <ul>
      {data && data.map((item, key )=> (
        <li key={item.id} >
          {item.name}
        </li>
      ))}
    </ul>
  </>
);
}
