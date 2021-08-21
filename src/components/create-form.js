import React from 'react';
import TextInput from '@leafygreen-ui/text-input';
import Card from '@leafygreen-ui/card';
import '../App.css'

export default function CreateForm({ onCreate }) {

    function submitHandler(event) {
        event.preventDefault();
        onCreate({
            id: event.target.location.value,
            location: event.target.location.value,
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        });
        event.target.reset();
    }
    return (
    <Card 
    className="card-styles" 
    as="article"
    darkMode='true'
    >
        <form onSubmit={submitHandler}>

            <legend>Create Cookie Stand</legend>

            <div>
            <TextInput
                htmlFor="location"
                name="location"
                label="Location"
                description="Enter the location for the new shop below"
                placeholder="Montreal"
                />
            </div>

            <div id="inputDiv">
                
                <fieldset>
                    <label htmlFor="min-customers">Minimum Customers per Hour</label>
                    <input type="number" name="min-customers" />
                </fieldset>

                <fieldset>
                    <label htmlFor="max-customers">Maximum Customers per Hour</label>
                    <input type="number" name="max-customers" />
                </fieldset>

                <fieldset>
                    <label htmlFor="avg-cookies">Average Cookies per Sale</label>
                    <input type="number" name="avg-cookies" step=".1" />
                </fieldset>
                <button type="submit">Add a Shop</button>
            </div>

        </form>
    </Card>
    )
}
