import React from 'react';

function History() {
    return(
        <div >
            <div className="hist_head">
                <h3>History</h3>
            </div>
            
            <div className="tran_history">
                <ul>
                    <li>Cash <span>+00.00</span></li><span className="cross">X</span>
                    <li>Books <span>+00.00</span></li><span className="cross">X</span>
                </ul>
            </div>
        </div>
    )
}

export default History;
