import React, { useEffect, useState } from "react"
import { getPopular, movieImg } from '../services/httpRequest'

const PopularMovies = () => {

    const [ movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [imgs, setImgs] = useState("") 


    useEffect( async() => {
        const res = await getPopular()
        const movieArray = res.data.results;
        const imgLoad = movieImg.url;
        setImgs(imgLoad);
        setMovies(movieArray)
        setLoading(false)
    }, [])
    
    

    return (
        <div>
           { movies.map(
               (item) =>{
                   const id = item.id
                   const title = item.original_title
                   const posterimg = item.poster_path
                   return (
                   <div key={id}>
                    <img src={`${imgs}${posterimg}`} alt="" />
                    {console.log(imgs, posterimg)}
                    <p>0 Like </p> <p> Comment </p>
                      <p style={{color:"white"}}> {title} </p>
                </div>

                   )
               }
           )} 
           <h1> hello</h1>
        </div>
    )
}

export default PopularMovies
