import { data } from './data.js'
export default function AnimalFacts() {
  const randomData = Math.floor(Math.random() * data.length);
  return(
    <div id="card-container">
      {data.map((fact, index) => {
        if(index === randomData) {
          return <div key={index}>
            <h3>{fact.name}</h3>
            <span>
              <p>{fact.fact}</p>
            </span>
          </div>
        }
      })}
    </div>
  )
}