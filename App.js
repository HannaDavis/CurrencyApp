import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Screen from './components/Screen';
import 'bootstrap/dist/css/bootstrap.css';
const API_KEY = '';

var unirest = require('unirest');
class App extends Component {
  state = {
    covertFromCurrency : undefined,
    covertToCurrency : undefined,
    result : undefined,
    error : undefined
  }

  getCurrencyRates = async(e) => {
    e.preventDefault();
    const from = e.target.elements.convert_from.value;
    const to = e.target.elements.convert_to.value;
    const from_amt = e.target.elements.from_amt.value;
    let data = [];
    const request =  unirest.get(`https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=${from}&to=${to}`)
    .header("X-RapidAPI-Host", "currency-exchange.p.rapidapi.com")
    .header("X-RapidAPI-Key", API_KEY)
    .then(data => {

      const converted_amt = from_amt * data.body;
      const res =  from_amt+ from +"=" + converted_amt.toFixed(2) + to;
      console.log( data.body);
       this.setState({ result:res });
     })
    .catch(err => console.log(err));
  }


  render(){
      const currencies = [
        {
            abbreviation : "USD",
            name : "United States Dollars"
        },
        {
            abbreviation : "EUR",
            name : "Euro"
        },
        {
            abbreviation : "GBP",
            name : "United Kingdom Pounds"
        },
        {
            abbreviation : "DZD",
            name : "Algeria Dinars"
        },
        {
            abbreviation : "AUD",
            name : "Australia Dollars"
        },
        {
            abbreviation : "BSD",
            name : "Bahamas Dollars"
        },
        {
            abbreviation : "BBD",
            name : "Barbados Dollars"
        },
        {
            abbreviation : "CAD",
            name : "Canada Dollars"
        },
        {
            abbreviation : "CLP",
            name : "Chile Pesos"
        },
        {
            abbreviation : "CNY",
            name : "China Yuan Renmimbi"
        },
        {
            abbreviation : "XCD",
            name : "Eastern Caribbean Dollars"
        },
        {
            abbreviation : "EGP",
            name : "Egypt Pounds"
        },
        {
            abbreviation : "INR",
            name : "India Rupees"
        },
        {
            abbreviation : "IDR",
            name : "Indonesia Rupiah"
        },
        {
            abbreviation : "ILS",
            name : "Israel New Shekels"
        },
        {
            abbreviation : "JMD",
            name : "Jamaica Dollars"
        },
        {
            abbreviation : "JPY",
            name : "Japan Yen"
        },
        {
            abbreviation : "JOD",
            name : "Jordan Dinar"
        },
        {
            abbreviation : "KRW",
            name : "Korea (South) Won"
        },
        {
            abbreviation : "LBP",
            name : "Lebanon Pounds"
        },
        {
            abbreviation : "MYR",
            name : "Malaysia Ringgit"
        },
        {
            abbreviation : "NZD",
            name : "New Zealand Dollars"
        },
        {
            abbreviation : "PKR",
            name : "Pakistan Rupees"
        },
        {
            abbreviation : "PHP",
            name : "Philippines Pesos"
        },
        {
            abbreviation : "SAR",
            name : "Saudi Arabia Riyal"
        },
        {
            abbreviation : "SGD",
            name : "Singapore Dollars"
        },
        {
            abbreviation : "ZAR",
            name : "South Africa Rand"
        },
        {
            abbreviation : "KRW",
            name : "South Korea Won"
        },
        {
            abbreviation : "TWD",
            name : "Taiwan Dollars"
        },
        {
            abbreviation : "THB",
            name : "Thailand Baht"
        },
        {
            abbreviation : "TTD",
            name : "Trinidad and Tobago Dollars"
        },
        {
            abbreviation : "ZMK",
            name : "Zambia Kwacha"
        },
        {
            abbreviation : "EUR",
            name : "Euro"
        },
        {
            abbreviation : "XCD",
            name : "Eastern Caribbean Dollars"
        },
        {
            abbreviation : "XDR",
            name : "Special Drawing Right (IMF)"
        },
        {
            abbreviation : "XAG",
            name : "Silver Ounces"
        },
        {
            abbreviation : "XAU",
            name : "Gold Ounces"
        },
        {
            abbreviation : "XPD",
            name : "Palladium Ounces"
        }
      ];

      return(
        <div className="mainContent">
          <div className="formBox">
            <Title/>
            <Form
              getCurrencyRates={this.getCurrencyRates}
              currencies={currencies}/>
            <Screen
              result={this.state.result}/>
          </div>
        </div>
      );
  }
}

export default App;
