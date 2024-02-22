import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

interface FuelQuoteFormProps {
    clientProfile: {
        deliveryAddress: string;
    };
}

const FuelQuoteForm: React.FC<FuelQuoteFormProps> =  ({clientProfile}) => {
    const [gallonsRequested, setGallonsRequested] =  useState<number | ''>('');
    const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
    const [suggestedPrice, setSuggestedPrice] = useState<number | ''>('');


    const gallonChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGallonsRequested(Number(e.target.value));
    };

    const dateChanges = (date: Date | null) => {
        setDeliveryDate(date);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Since not building pricing module yet, will leave blank for now.

        // setSuggestedPrice(calculatedPrice)
    };

    return(
        <div>
            <h2>Fuel Quote Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="gallonsRequested">Gallons Requested *</label>
                    <input 
                        type="number"
                        id="gallonsRequested"
                        value = {gallonsRequested}
                        onChange={gallonChanges}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='deliveryAddress'>DeliveryAddress</label>
                    <input
                        type="text"
                        id="deliveryAddress"
                        value={clientProfile.deliveryAddress}
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor="deliveryDate">Delivery Date</label>
                    <input 
                        id="deliveryDate"
                        selected = {deliveryDate}
                        onChange={dateChanges}
                        dateFormat="MM/dd/yyyy"
                    />
                </div>
                <div>
                    <label htmlFor="suggestedPrice">Suggested Price per gallon</label>
                    <input
                        type="number"
                        id="suggestedPrice"
                        value={suggestedPrice}
                        readOnly
                    />    
                </div>
                <button type = "submit">Submit</button>
            </form>
        </div>
    );
};
export default FuelQuoteForm;