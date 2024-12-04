import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
//Component
import Favpoke from './componect/Favpoke'
import ReactLoading from 'react-loading';

function App() {
  //const [count, setCount] = useState(0)
  const [poke, setPoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [number, setNumber] = useState(1);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    const loadPoke = async () => {
      try {
        setLoading(true);
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`, {
          signal: abortController.signal
        });
        setPoke(response.data)
        setError("");

      } catch {
        setError("Sth wrong", error);
      } finally {
        setLoading(false);
      }
    }
    loadPoke(poke);

    return () => abortController.abort();
  }, [number])

  //console.log(poke);
  const prevPoke = () => {
    setNumber((number) => number - 1)
  }
  const nextPoke = () => {
    setNumber((number) => number + 1)
  }
  const addFev = () => {
    setFav((oldState) => [...oldState, poke])
  }

  console.log("You fav prok", fav);

  return (
    <>
      <div className="max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            {loading ? <ReactLoading type='spin' color='black' height={'20%'} width={'20%'} />
              :

              <>
                <h1>{poke?.name}</h1>
                <button onClick={addFev}>Add to favourite.</button>
                <br />
                <img src={poke?.sprites?.other?.home.front_default} alt={poke?.name} />
                <ul>
                  {
                    poke?.abilities?.map((abil, idx) =>
                    (
                      <li key={idx}>{abil.ability.name}</li>
                    ))
                  }
                </ul>

                <button onClick={prevPoke}>Previour</button> <button onClick={nextPoke}>Next</button>

              </>}

          </div>
          <div>
            <h2>
              Your fav proke
            </h2>
            {fav.length > 0 ? <Favpoke fav={fav} /> : <div clssName='flex h-full justify-center items-center'><p>No favourite Pokemon</p></div>}
            
          </div>

        </div>
      </div>
    </>
  )
}

export default App
