import React, { useEffect } from 'react'
import axios from 'axios'

export default () => {

  const getRepos = () => {
  axios.get('https://api.github.com/users/louiscasciodev/repos')
  .then((response) => {
    const repos = response.data 
    console.log("test repos", repos)
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
  });
}

useEffect(() => {
  getRepos()
});


  return (
    <>
    Jule et Lili
    </>
  );
}
