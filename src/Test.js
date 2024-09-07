import React from 'react'
import axios from 'axios'
const Test = () => {
  async function paymentHandler(){
          const response= await axios.post("http://localhost:9000/checkout",{
            amount :9000,
            currency :"INR"
          })

          console.log(response.data)
          var options = {
            "key": "rzp_test_nKloVUIf02hQTe", // Enter the Key ID generated from the Dashboard
            "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id":"", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
  }

  return (
  <button onClick={()=>{
    paymentHandler()
  }}>Pay now</button>
  )
}

export default Test