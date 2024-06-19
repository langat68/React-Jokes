
import './App.scss'
import Joke from './components/Joke'
import jokeData from './data/data.json'
function App() {


  return (
    <>
    {
      jokeData && jokeData.map((joke) => {
        return(
          <Joke key={joke.id} id={joke.id} joke={joke.joke} rating={joke.rating} />
        )
      })


    }
  

    </>
  )
}

export default App
