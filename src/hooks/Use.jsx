import React, { useEffect, useState } from "react";
// use fetch code
// const Use = () => {
//   const [posts, setPosts] = useState([]);
//   async function getPost() {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const data = await response.json();
//     setPosts(data);
//   }
//   useEffect(() => {
//     getPost();
//   }, []);
//   return posts.title;
// };

// 
// import React from 'react'

const Use = (url) => {
    const [fdata, setData] = useState({});
    const [loading, setLoading] = useState(true);
    async function getdetail() {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      }
      useEffect(() => {
        getdetail();
      }, [url]);
      return {fdata,loading};
}

export default Use
// export default Use;
