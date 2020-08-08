import React from 'react';


function NewTransaction() {

    return(

        <div>
            <h3>Add New Transation</h3>
            <form>
                <div>
                    <label name="description" htmlFor="description">Description:</label><br/>
                    <input name="description" id="description" required={true} placeholder="Enter Description here.."></input>
                    <br/><br/>
                </div>
                
                <div>
                    <label name="amount" htmlFor="amount">Amount:<br/>(negative - expense, positive - income)</label><br/>
                    <input name="amount" id="amount" required={true} placeholder="Enter Amount here.."></input>
                    <br/><br/>
                </div>
                
                <button>Add transation</button>
            
            </form>
        </div>
    )

}

export default NewTransaction;