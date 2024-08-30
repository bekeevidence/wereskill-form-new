"use client";
import { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { db } from "@/utils/firebaseCongig";
import { addDoc, collection } from "firebase/firestore";
import TextInput from "@/components/TextInput";
export default function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [city, setCity] = useState("");
  const [heardAboutOn, setHeardAboutOn] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      firstName,
      lastName,
      email,
      phonNumber,
      country,
      city,
      heardAboutOn,
    };
    console.log(payload);
    try {
      const docRef = await addDoc(collection(db, "submissions"), payload);
      alert("Document written with ID: " + docRef.id);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setCountry("");
      setCity("");
      setDetails("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4  p-5 md:p-24"
      >
        <TextInput
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          id={"firstName"}
          label={"First Name"}
          name={"first-name"}
          type={"text"}
          placeholder={"Enter your First Name"}
        />
        <TextInput
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          id={"lastName"}
          label={"Last Name"}
          name={"last-name"}
          type={"text"}
          placeholder={"Enter your Last Name"}
        />
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id={"email"}
          label={"Email Address"}
          name={"email"}
          type={"email"}
          placeholder={"Enter your Email Address"}
        />
        <PhoneInputWithCountrySelect
          value={phonNumber}
          international
          onChange={(e) => setPhoneNumber(e)}
          name="phone"
          defaultCountry="NG"
          numberInputProps={{
            className:
              "rounded-none border h-full px-4 focus:outline-none outline-none", // my Tailwind classes
          }}
          id="phone"
        />
        <div>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="h-full tracking-wide w-full p-2 outline-none border"
            name=""
            id="country"
          >
            <option value={null} disabled>
              Select your Country
            </option>
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
        <TextInput
          value={city}
          onChange={(e) => setCity(e.target.value)}
          id={"city"}
          label={"City"}
          name={"city"}
          type={"text"}
          placeholder={"Enter your city here"}
        />{" "}
        <TextInput
          value={heardAboutOn}
          onChange={(e) => setHeardAboutOn(e.target.value)}
          id={"details"}
          label={"How did you hear about We-Reskill"}
          name={"details"}
          type={"text"}
          placeholder={
            "Tell us how you heard about us. E.g. Facebook, Twitter, etc."
          }
        />{" "}
        <div></div>
        <div className="justify-center flex">
          <button
            disabled={
              firstName &&
              lastName &&
              email &&
              phonNumber &&
              country &&
              city &&
              details
                ? false
                : true
            }
            className={`bg-yellow-200 disabled:bg-gray-200 w-[90%]  rounded-lg p-2`}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
