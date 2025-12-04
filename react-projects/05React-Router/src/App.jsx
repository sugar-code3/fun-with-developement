import { useState } from 'react'
import "./App.css"
import './index.css'
import FilterableProductTable from './components/FilterabelProductTable'
import ProductTable from './components/ProductTable'

function App() {
const products=[
  {category: "Fruits", price: "$1", stocked: true,name:"Apple"},
  {category: "Fruits", price: "$2", stocked: true,name:"DragonFruits"},
  {category: "Fruits", price: "$3", stocked: false,name:"PassionFruits"},
  {category: "Vegetables", price: "$4", stocked: true ,name:"Spinach"},
  {category: "Vegetables", price: "$5", stocked: false,name:"Pumpkin"},
  {category: "Vegetables", price: "$6", stocked: true,name:"Peas"}
]

  return (
    <>
<FilterableProductTable />
<ProductTable products={products}></ProductTable>
    </>
  )
}

export default App
