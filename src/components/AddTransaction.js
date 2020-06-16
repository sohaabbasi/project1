import React ,{useState} from 'react'

export const AddTransaction = () => {
    const [description,setDescription]=useState('')
    const [amount,setAmount]=useState(0)
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">DESCRIPTION</label>
                    <input type="text" 
                           id="description" 
                           placeholder="Enter Text....."
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                    />
  
                </div>
                <div className="form-control">
                     <label htmlFor="amount">
                            AMOUNT 
                            <br/>
                            (negative-expense , positive-income)
                     </label>
                     <input type="number" 
                            id="amount" 
                            placeholder="Enter Amount...."
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                       />
             </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
