import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                <li className="plus">
                    Project Income
                    <span>$1,000</span>
                    <button className="delete-btn">X</button>

                </li>
                <li className="minus">
                    Project Salaries
                    <span>-$500</span>
                    <button className="delete-btn">X</button>

                </li>
            </ul>
        </div>
    )
    }