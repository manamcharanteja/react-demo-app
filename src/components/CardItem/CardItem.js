import React from 'react'

const CardItem = ({item, handleClick}) => {
      
      
  return (
    <div class="flex items-center">
    <img src={item.image} class="w-16 h-16 rounded-full" alt="Product" />
    <div class="ml-4">
      <h2 class="text-lg font-bold">{item?.title}</h2>
      <p class="text-gray-500">{item?.price}</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={handleClick && handleClick(item)}>Add To Cart</button>
    </div>
  </div>
  
  

    
  )
}

export default CardItem