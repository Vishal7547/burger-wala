import React from 'react'
import MenuCard from './MenuCard'
import burger1 from '../../images/burger1.png'
import burger2 from '../../images/burger2.png'
import burger3 from '../../images/burger3.png'

function Menu() {
  const addToCartHandler=(itemNum)=>{

  }
  return (
    <section id='menu'>
      <h1>MENU</h1>
      <div>
        <MenuCard itemNum={1} burgerSrc={burger1} price={200} delay={0.1} title='Cheese Burger' handler={addToCartHandler}/>
        <MenuCard itemNum={1} burgerSrc={burger2} price={500} delay={0.5} title='Cheese Burger with French Fries' handler={addToCartHandler}/>
        <MenuCard itemNum={1} burgerSrc={burger3} price={700} delay={0.8} title='Cheese Burger' handler={addToCartHandler}/>

      </div>
    </section>
  )
}

export default Menu
