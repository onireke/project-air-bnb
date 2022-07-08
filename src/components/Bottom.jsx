
function Bottom (props){
  let badgeText 
  if (props.item.openSpots ===0){
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online"){
    badgeText = "ONLINE"
  }
  
    return(
        <div className="bottom">
          {badgeText && <div className="card-badge">{badgeText}</div>}
            <div className="first-div">
              <img src={`../images/${props.item.coverImg}`} alt=""      className="bottom-image"/> 
              <div className="bottom-stats">
                <img src= "/images/star.png" className="stats-image" alt="starImg"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray"> ({props.item.stats.reviewCount}) . </span>
                <span className="gray">{props.item.location}</span>
                <p>{props.item.title}</p>
                <p>From <span className="bold">${props.item.price}</span>/ person</p>
              </div>
              

            </div>  
        </div>
    )
}


export default Bottom




// const nums = [1, 2, 3, 4, 5, 6]

// const squared = nums.map(function(item) {
//   return item * item
// }

// )

// console.log(squared)


// const lists = ["alice", "bob", "charlie", "danielle"]

// const capitalizedName = lists.map((list) => {
//   return list[0].toUpperCase() + list.slice(1)
// })

// console.log(capitalizedName)

