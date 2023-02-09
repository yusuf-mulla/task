import React from "react";
import "./RegisterForm.css";

export const RegisterForm = () => {
  return (
    <div className="App">
      {" "}
      <form action="">
        <h1 className="heading">REGISTER</h1>
        <label htmlFor="" className="fn">
          First Name:
        </label>
        <input type="text" required className="in1" />
        <label htmlFor="" className="ln">
          Last Name:
        </label>
        <input type="text" required className="in2" />
        <br />
        <br />
        <br />
        <label htmlFor="" className="ps">
          Pasword:
        </label>
        <input type="password" required className="in3" />
        <label htmlFor="" className="mb">
          Mobile No:
        </label>
        <input type="number" required className="in4" />
        <br />
        <br />
        <br />
        <label htmlFor="" className="db">
          Date of Birth:
        </label>
        <input type="date" className="in5" />
        <label htmlFor="" className="gn">
          Gender:
        </label>
        <select name="" id="" className="op">
          <option value="">select</option>
          <option value="">Male</option>
          <option value="">Female</option>
          <option value="">Other</option>
        </select>
        <br />
        <br />
        <br />
        <label for="" className="tc">
          I agree T&C
        </label>
        <input type="checkbox" className="cb"></input>
        <div className="hvr">
          <input type="submit" className="sbb" />
          <input type="reset" className="rst" />
        </div>
      </form>
      <div>
        <table className="table">
          <tr>
            <th> Item Name</th>
            <th>Item Qnty</th>
            <th>Import From</th>
          </tr>
          <tr>
            <td>Onion</td>
            <td>2000KG</td>
            <td>Maharashtra</td>
          </tr>
          <tr>
            <td>Poteto</td>
            <td>3200KG</td>
            <td>Utter pradesh</td>
          </tr>
          <tr>
            <td>Sapodilla</td>
            <td>1800 KG</td>
            <td>Gujrat</td>
          </tr>
          <tr>
            <td>Wheat</td>
            <td>2500KG</td>
            <td>Panjab</td>
          </tr>
        </table>
      </div>
      <div className="oll">
        <ol>
          <li>Swift</li>
          <li>BMW</li>
          <li>Audi</li>
          <li>Mercedes</li>
          <li>MG hactor</li>
        </ol>
        <div className="ull">
          <ul>
            <li>car</li>
            <li>Bike</li>
            <li>Bisycle</li>
            <li>Moter Car</li>
            <li>Truck</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
