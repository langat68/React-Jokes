import './Joke.scss';
 interface JokeData{
    id: number;
    joke: string;
    rating: number;
 }







const Joke = (data:JokeData) => {

 
    
  return (
    <div  key = {data.id} className='joke'>
      <h4 className='id'>{data.id}</h4>
      <p className='data'>{data.joke}</p>
      <p className='rating'>{data.rating}</p>
    </div>
  )
}

export default Joke
