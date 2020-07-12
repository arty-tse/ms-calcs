import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";

const ClassSelector = ({ type, onTypeChange }) => {
  return (
    <DropdownButton
      title={type !== "none" ? type : "Class Type"}
      variant="dark"
    >
      <Dropdown.Item onClick={() => onTypeChange("STR")}>STR</Dropdown.Item>
      <Dropdown.Item onClick={() => onTypeChange("DEX")}>DEX</Dropdown.Item>
      <Dropdown.Item onClick={() => onTypeChange("INT")}>INT</Dropdown.Item>
      <Dropdown.Item onClick={() => onTypeChange("LUK")}>LUK</Dropdown.Item>
    </DropdownButton>
  );
};

ClassSelector.propTypes = {
  type: PropTypes.string.isRequired,
  onTypeChange: PropTypes.func.isRequired,
};

export default ClassSelector;
