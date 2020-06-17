import React from 'react'
import './homepage.style.scss'

const HomePage = ()=>(
    <div className='homepage'>
        <div className='directory-menu'>
            <div className ='menu-item'>
                <div className='content'>
                <h1 className="title">Hat</h1>
                <span className="subtitle">SHOP</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className="title">Jacket</h1>
                    <span className="subtitle">SHOP</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className="title">Womens</h1>
                    <span className="subtitle">SHOP</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className="title">Men</h1>
                    <span className="subtitle">SHOP</span>
                </div>
            </div>                             
        </div>
    </div>
)

export default HomePage