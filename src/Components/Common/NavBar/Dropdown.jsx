import React, { Fragment, useState } from "react";
import { Container } from "./NavBarStyle";
import France45 from "../../../Pictures/France45.svg";
import USA from "../../../Pictures/USA.svg";

const Dropdown = (props) => {
  const [selectedValue, setSelectedValue] = useState("FR");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getCountryImage = (countryName) => {
    if (countryName === "FR") {
      return France45;
    } else if (countryName === "EN") {
      return USA;
    }
    // Return a default image if the country name doesn't match any condition
    return null;
  };

  const countries = [
    {
      id: 1,
      name: "FR",
    },
    {
      id: 2,
      name: "EN",
    },
  ];

  return (
    <Fragment>
      <Container>
        <div className="dropdown-container">
          <div className="selected-option" onClick={toggleDropdown}>
            {selectedValue && (
              <>
                <img
                  src={getCountryImage(selectedValue)}
                  alt={selectedValue}
                  className="dropdown-image"
                />
                {selectedValue}
              </>
            )}
          </div>
          {isOpen && (
            <ul className="options">
              {countries.map((country) => (
                <li
                  key={country.id}
                  className="option"
                  onClick={() => {
                    handleSelectChange({ target: { value: country.name } });
                    toggleDropdown();
                  }}
                >
                  <img
                    src={getCountryImage(country.name)}
                    alt={country.name}
                    className="dropdown-image"
                  />
                  {country.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export default Dropdown;




// import React, {  Fragment, useState, useEffect } from "react";
// import { Container } from "./NavBarStyle";
// import France45 from "../../../Pictures/France45.svg";
// import USA from "../../../Pictures/USA.svg";
// const Dropdown = (props) => {
//     const [selectedValue, setSelectedValue] = useState("");
//     const handleSelectChange = (event) => {
//       setSelectedValue(event.target.value);
//     };

//     const countries = [
//       {
//         id: 1,
//         src: France45,
//         name: "FR",
//       },
//       {
//         id: 2,
//         src:USA,
//         name: "EN",
//       },
//     ];

//   return (
//     <Fragment>
//       <Container>
//         <div>
//           <form className="chevron">
//             <label htmlFor="dropdown"></label>
//             <select
//               id="dropdown"
//               className="Lang"
//               value={selectedValue}
//               onChange={handleSelectChange}
//             >
//               {countries.map((country) => (
//                 <option key={country.id} value={country.name}>
//                   {country.name}
//                   <img
//                     src={country.src}
//                     alt={country.name}

//                   />
//                 </option>
//               ))}
//             </select>
//           </form>
//         </div>
//       </Container>
//     </Fragment>
//   );
// }

// export default Dropdown

{
  /* <option value=""  >
        FR
              
              </option>
              <option value="option1">ENG</option> */
}
