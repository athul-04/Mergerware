// client/Lender.js
import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LenderCollection } from '../api/links';
import { BorrowerCollection } from '../api/links';
import './Lender.css'; 

const Lenderjs = () => {
  const [loanRequests, setLoanRequests] = useState([]);

  const handleConfirmPayment = (loanId, borrowerId) => {
 
  };

  const lenders = useTracker(() => LenderCollection.find().fetch());

  // Fetch loan requests whenever lenders change
//   useTracker(() => {
//     const requests = BorrowerCollection.find({ status: 'pending' }).fetch();
//     setLoanRequests(requests);
//   });

  return (
    <div className="lender-container">
      <h2>Lender Dashboard</h2>
      <div className="loan-requests">
        <h3>Loan Requests</h3>
        <table>
          <thead>
            <tr>
              <th>Borrower</th>
              <th>Loan Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loanRequests.map((loan) => (
              <tr key={loan._id}>
                <td>{loan.borrowerName}</td>
                <td>${loan.amount}</td>
                <td>
                  <button onClick={() => handleConfirmPayment(loan._id, loan.borrowerId)}>
                    Confirm Payment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="past-payments">
        <h3>Past Payments</h3>
      
      </div>
    </div>
  );
};

export default Lenderjs;
