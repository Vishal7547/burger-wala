import React from "react";
import { Country, State } from "country-state-city";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shippingInfo } = useSelector((state) => state.cart);
  const [hNo, setHNo] = useState(shippingInfo.hNo);
  const [area, setArea] = useState(shippingInfo.area);
  const [city, setCity] = useState(shippingInfo.city);
  const [country, setCountry] = useState(shippingInfo.country);
  const [state, setState] = useState(shippingInfo.state);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "addShippingInfo",
      payload: {
        hNo,
        area,
        city,
        state,
        country,
        pinCode,
        phoneNo,
      },
    });

    localStorage.setItem(
      "shippingInfo",
      JSON.stringify({
        hNo,
        city,
        area,
        state,
        country,
        pinCode,
        phoneNo,
      })
    );

    navigate("/confirmorder");
  };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>H.No.</label>
            <input
              value={hNo}
              required
              onChange={(e) => setHNo(e.target.value)}
              type="text"
              placeholder="Enter House No."
            />
          </div>
          <div>
            <label>Area</label>
            <input
              value={area}
              required
              onChange={(e) => setArea(e.target.value)}
              type="text"
              placeholder="Enter Area"
            />
          </div>
          <div>
            <label>City</label>
            <input
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Enter City"
            />
          </div>

          <div>
            <label>Country</label>

            <select
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          {Country && (
            <div>
              <label>State</label>
              <select
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
          )}

          <div>
            <label>Pin Code</label>
            <input
              type="number"
              placeholder="Enter Pincode"
              required
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </div>
          <div>
            <label>Phone No.</label>
            <input
              value={phoneNo}
              required
              onChange={(e) => setPhoneNo(e.target.value)}
              type="number"
              placeholder="Enter Phone No."
            />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
