import React from 'react'
import "./PlansScreen.css"
import { plans } from '../Plans'


export default function PlansScreen() {

    return (
        <div className='plansScreen'>
            {plans.map((plan) => {
                return (
                    <div className="plansScreen__plan">
                        <div className="plansScreen__info">
                            <h5>{plan.name}</h5>
                            <h6>{plan.description}</h6>
                        </div>
                        <button>Subscribe</button>
                    </div>

                )
            })}
        </div>
    )
}

