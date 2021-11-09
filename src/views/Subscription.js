import React from 'react'
import "../assets/css/about.css";
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

function Subscription() {
    return (
        <>
        <h3 className="about-title pt-3 ">PRICING PLANS</h3><br/><br/>
        <p class="p1">Select one of the following plans given below to get more number of predictions access per day and to avoid limited number of prediction per day limitation.</p><br/><br/><p class="p2">Happy Trading...</p><br/><br/>
        <PricingTable  highlightColor='#1976D2'>
    <PricingSlot buttonText='TRY IT FREE' title='FREE' priceText='0 Rs./YEAR' >
        <PricingDetail> <b>1</b> Prediction/DAY</PricingDetail>
    </PricingSlot>
    <PricingSlot highlighted buttonText='SUBSCRIBE' title='BASIC' priceText='999 Rs./YEAR'>
        <PricingDetail> <b>3</b> Predictions/DAY</PricingDetail>
    </PricingSlot>
    <PricingSlot buttonText='SUBSCRIBE' title='SUPER' priceText='1999 Rs./YEAR'>
        <PricingDetail> <b>5</b> Predictions/DAY</PricingDetail>
    </PricingSlot>
    <PricingSlot buttonText='SUBSCRIBE' title='PREMIUM' priceText='2999 Rs./YEAR'>
        <PricingDetail id="p1"> <b>7</b> Predictions/DAY</PricingDetail>
    </PricingSlot>
</PricingTable>
</>
    )
}

export default Subscription

//Add below line when connecting this to backend
// onClick={this.submit} 