"use client";
import React, { useState } from "react";
import Select from "react-select";
type LocationOption = {
    value: string;
    label: string;
  };
const Locationdropdown = () => {
    const [selectedOption, setSelectedOption] = useState<LocationOption | null>(null);

  const locations = [
    { value: "Karachi", label: "Karachi" },
    { value: "lahore", label: "lahore" },
    { value: "Islamabad", label: "Islamabad" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Faisalabad", label: "Faisalabad" },
  ];

  const handleChange = (option:any) => {
    setSelectedOption(option);

  };

  return (
    <div className="max-w-48">
      <label className="block text-gray-700 font-bold text-2xl mb-2">
       Locations
      </label>
      <Select
        options={locations}
        value={selectedOption}
        onChange={handleChange}
        placeholder="Select your city"
        className="text-gray-700 outline-none"
      />
      {selectedOption && (
        <p className="text-sm text-gray-600 mt-2">
          You selected: <span className="font-bold">{selectedOption.label}</span>
        </p>
      )}
    </div>
  )
}

export default Locationdropdown
