import { data } from './data.js'
export default function AnimalFacts() {
  const randomData = Math.floor(Math.random() * data.length);
  return(
    <div id="card-container">
      {data.map((fact) => {
        if(fact.id === randomData) {
          return <div key={fact.id}>
            <h3 id='animal-name'>{fact.name}</h3>
            <span id='fact'>
              <p>{fact.fact}</p>
            </span>
          </div>
        }
      })}
    </div>
  )
}