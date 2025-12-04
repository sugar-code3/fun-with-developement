import React, { useState } from 'react'

const FilterableProductTable = () => {
 const [filterText,setFilterText ]=useState("");
 const [instockonly ,setInstockOnly]=useState(false)
  return (
    <div>
    <center className='m-8 header '>
      <input type='text' className='border-black mx-4  border-2 w-96' placeholder='Search..' />
      <label className='mx-4 checkbox'>
      <input type='checkbox' className='w-12 mx-0' />Only show product in stock</label>
      </center>
    </div>
  )
}

export default FilterableProductTable