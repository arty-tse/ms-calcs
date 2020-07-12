import PropTypes from "prop-types";
import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const FlameStat = ({ name, min, max, statValue, onStatChange }) => {
  return (
    <Form.Group as={Row}>
      <Form.Label column sm={4}>
        {name}
      </Form.Label>
      <Col>
        <Form.Control
          type="number"
          min={min}
          {...(max ? { max: max } : {})}
          value={statValue}
          onChange={(e) => onStatChange(parseInt(e.target.value, 10))}
        />
      </Col>
    </Form.Group>
  );
};

FlameStat.propTypes = {
  name: PropTypes.string.isRequired,
  statValue: PropTypes.number.isRequired,
  onStatChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

FlameStat.defaultProps = {
  statValue: 0,
  min: 0,
};

export default FlameStat;
