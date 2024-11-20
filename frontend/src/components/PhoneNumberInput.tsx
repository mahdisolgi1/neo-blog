import { useState } from "react";
import styles from "./PhoneNumberInput.module.scss";
import { IoIosArrowDown } from "react-icons/io";

const countries = [
   { code: "+1", country: "United States", flagUrl: "https://flagcdn.com/w320/us.png" },
   { code: "+44", country: "United Kingdom", flagUrl: "https://flagcdn.com/w320/gb.png" },
   { code: "+91", country: "India", flagUrl: "https://flagcdn.com/w320/in.png" },
   { code: "+49", country: "Germany", flagUrl: "https://flagcdn.com/w320/de.png" },
   { code: "+98", country: "Iran", flagUrl: "https://flagcdn.com/w320/ir.png" },
];

interface PhoneNumberInputProps {
   onChange: (phoneNumber: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ onChange }) => {
   const [selectedCode, setSelectedCode] = useState(countries[0].code);
   const [phoneNumber, setPhoneNumber] = useState("");
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const handleSelectCode = (code: string) => {
      setSelectedCode(code);
      setIsDropdownOpen(false);
      onChange(`${code} ${phoneNumber}`);
   };

   const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newNumber = e.target.value;
      setPhoneNumber(newNumber);
      onChange(`${selectedCode} ${newNumber}`);
   };

   return (
      <div className={styles.phoneNumberInputContainer}>
         <div className={styles.countrySelectContainer} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <div className={styles.selectedCountry}>
               <img
                  src={countries.find((country) => country.code === selectedCode)?.flagUrl}
                  alt=""
                  className={styles.countryFlag}
               />
            </div>
            <IoIosArrowDown color="white" className={styles.dropDownIcon} />
            {isDropdownOpen && (
               <div className={styles.dropdownOptions}>
                  {countries.map((country) => (
                     <div
                        key={country.code}
                        className={styles.dropdownOption}
                        onClick={() => handleSelectCode(country.code)}
                     >
                        <img src={country.flagUrl} alt="" className={styles.countryFlag} />
                     </div>
                  ))}
               </div>
            )}
         </div>

         <input
            type="text"
            className={styles.phoneNumberInput}
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
         />
      </div>
   );
};

export default PhoneNumberInput;
