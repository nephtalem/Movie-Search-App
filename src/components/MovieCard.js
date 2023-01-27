import React from 'react'

export const MovieCard = ({movie}) => {


  
const saveMovie = async() =>{

        const currentValue =  await localStorage.getItem('movies')
        await localStorage.setItem(`${movie.title}`, (currentValue ? currentValue + JSON.stringify(movie):JSON.stringify(movie) ))
        alert('Movie saved! Checkout the saved item')
        
  }

  const resetMovie = async() => {
        await localStorage.removeItem(`${movie.title}`)
        alert('Movie removed! Checkout the saved item')
  }

  
  return (
    <div className='card'>
    <img 
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt = ''
    />
    <div className='card-desc'>
        <h3>{movie.title}</h3>
        <p>Rating: {movie.vote_average}</p>
        <p>{movie.release_date}</p>
        <p><small>{movie.overview}</small></p>
    </div>
    <button className=' reset-btn' onClick={resetMovie}>Reset</button>
    <button className=' save-btn' onClick={saveMovie}>Save</button>
</div>
  )
}
