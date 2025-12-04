import React from 'react'
import Tablerows from './Tablerows';
import ProductCategoryRow from './ProductCategoryRow';

function ProductTable({products}) {
    const rows=[];
    let lastCategory=null;
    products.forEach((product) => {
        if(product.category !==lastCategory){
            rows.push(<ProductCategoryRow category ={product.category} key={product.category} />);
        }
        rows.push(<Tablerows product={product} key={product.name} />);
        lastCategory=product.category;

});
  return (
    <div><table className=' border-2 border-solid border-black m-12 w-5'>
    <thead className='border-2 border-black'>
    <tr className='border-2 border-black'>
        <th className='border-2 border-black'>Name</th>
        <th className='border-2 border-black'>price</th>
        </tr >
        </thead>
        <tbody className='border-2 border-black'>{rows}       
        </tbody>
    </table></div>
  )
}

export default ProductTable