import React from 'react';


function NewTransaction() {

    return(

        <div className="add_trans">
            <h3 className="trans_head">Add New Transaction</h3>
            <form>
                <div>
                    <label name="description" htmlFor="description">Description: <span className="negative">*</span></label><br/>
                    <input name="description" id="description" required={true} placeholder="Enter Description here.."></input>
                    <br/><br/>
                </div>
                
                <div>
                    <label name="amount" htmlFor="amount">Amount: <span className="negative">*</span><br/>(<span className="positive">positive</span> - income, <span className="negative">negative</span> - expense)</label><br/>
                    <input name="amount" id="amount" required={true} placeholder="Enter Amount here.."></input>
                    <br/><br/>
                </div>
                
                <button>Add transaction</button>
            
            </form>
        </div>
    )

}

export default NewTransaction;