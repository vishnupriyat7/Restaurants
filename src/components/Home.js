import React, {useEffect} from 'react';

function Home() {

useEffect(()=>{
        let restaurants = async()=>  {
            let resData = await fetch("./restaurants.json");
            let restaurants = await resData.json();
            console.log(restaurants);
        }
        restaurants();
},[])








  return (
    <div><h1>Home</h1></div>
  )
}

export default Home