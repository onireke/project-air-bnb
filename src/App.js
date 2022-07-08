import Nav from "./components/Nav"
import Section from "./components/Section"
import Bottom from "./components/Bottom"
import data from "./data"

function App(){
       const bottoms = data.map(item => {
              return (
       <Bottom  
               key={item.id}
               item={item}
        />

              )
       })
  return(
      <div>
        <Nav />
        <Section />
           <section className="card-list">
              {bottoms}
          </section>
      </div>
  )
}

export default App




// function App(){

//   const date = new Date()
//   const hours = date.getHours() %12
//   let timeOfDay

//   if (hours < 12){
//     timeOfDay = "morning"
  
//   } else if (hours >=12 && hours < 13){
//     timeOfDay = "afternoon"
//   } else {
//     timeOfDay = "night"
//   }
//   return (
//     <h1>Good {timeOfDay}!</h1>

//   )
// }

// export default App