import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const FuelQuoteHistory = () => {
  return (
    <div>
      <h1>Fuel Quote History</h1>
      <form>
        <div>
          <label htmlFor="gallonsRequested">Gallons Requested *</label>
          <input
            type="number"
            id="gallonsRequested"
            required
          />
        </div>
        <div>
          <label>Delivery Address</label>
          <p>1234 Street, City, State, Zip</p> {}
        </div>
        <div>
          <label htmlFor="deliveryDate">Delivery Date</label>
          <DatePicker
            id="deliveryDate"
            dateFormat="MM/dd/yyyy"
            onChange={() => {}} 
          />
        </div>
        <div>
          <label htmlFor="suggestedPrice">Suggested Price per gallon</label>
          <input
            type="number"
            id="suggestedPrice"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="totalAmountDue">Total Amount Due</label>
          <input
            type="number"
            id="totalAmountDue"
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default FuelQuoteHistory;
