import React from "react";

export const CityComponent = (props) => {
  const { setCity, fetchData } = props;
  return (
    <div className="cityComponent">
      <p className="chooseCity">Choose your city</p>
      <form className="cityForm" onSubmit={fetchData}>
        <input
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type={"submit"}> Search</button>
      </form>
    </div>
  );
};