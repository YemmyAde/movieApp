import React, { useEffect, useState } from "react"
import { getToprated, movieImg } from '../services/httpRequest'

const TopRated = () => {

    const [ movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [imgs, setImgs] = useState("") 


    useEffect( async() => {
        const res = await getToprated()
        const movieArray = res.data.results;
        const imgLoad = movieImg.url;
        setImgs(imgLoad);
        setMovies(movieArray)
        setLoading(false)
    }, [])
    
    

    return (
        <div>
            <p> Top rated</p>
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
        </div>
    )
}

export default TopRated
