import React from 'react';

import './products.css';

async function getProducts() {
  try {
    const res = await fetch('/api/Products')
    console.log(res.status)
    console.log(res.statusText)
    // const text = await res.text()
    const products = await res.json()
    // debugger;
    return products
  } catch (err) {
    throw err.message;
  }
  
  // return new Promise((resolve) => {
  //   resolve([{
  //     id: 1,
  //     name: 'product'
  //   },
  //   {
  //     id: 2,
  //     name: 'product2'
  //   }])
  // })
}

class Products extends React.Component {
  constructor () {
    super();
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    const products = await getProducts();
    this.setState({ products })
  }

  render() {
    return (
    <div>
      {this.state.products.map(p => <div className="item">{p.name}</div>)}
    </div>
    )
  }
}

export default Products