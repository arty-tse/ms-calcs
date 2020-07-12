import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ClassSelector from "./ClassSelector";
import FlameStat from "./FlameStat";
import "./FlameScore.sass";

const FlameScore = () => {
  const [str, setStr] = useState(0);
  const [dex, setDex] = useState(0);
  const [int, setInt] = useState(0);
  const [luk, setLuk] = useState(0);
  const [att, setAtt] = useState(0);
  const [matt, setMatt] = useState(0);
  const [allStat, setAllStat] = useState(0);
  const [showFlameScore, toggleShowFlameScore] = useState(false);
  const [flameScore, setFlameScore] = useState(0);
  const [type, setType] = useState("none");

  const calculateFlameScore = () => {
    toggleShowFlameScore(true);
    let flatStats = 0;
    if (type !== "none") {
      for (let stat of classTypes.get(type)) {
        switch (stat) {
          case "STR":
            flatStats += str;
            break;
          case "DEX":
            flatStats += dex;
            break;
          case "INT":
            flatStats += int;
            break;
          case "LUK":
            flatStats += luk;
            break;
          default:
        }
      }
    }
    let attFlameScore = type !== "INT" ? att * 4 : matt * 4;
    setFlameScore(flatStats + attFlameScore + allStat * 10);
  };

  const classTypes = new Map([
    ["STR", ["STR"]],
    ["DEX", ["DEX"]],
    ["INT", ["INT"]],
    ["LUK", ["LUK"]],
  ]);

  return (
    <Container>
      <Row id="classSelectorContainer">
        <ClassSelector type={type} onTypeChange={setType} />
      </Row>
      <hr />
      <Form id="flameScoreInputContainer">
        <FlameStat name="STR" statValue={str} onStatChange={setStr} />
        <FlameStat name="DEX" statValue={dex} onStatChange={setDex} />
        <FlameStat name="INT" statValue={int} onStatChange={setInt} />
        <FlameStat name="LUK" statValue={luk} onStatChange={setLuk} />
        <FlameStat name="ATT" statValue={att} onStatChange={setAtt} />
        <FlameStat name="MATT" statValue={matt} onStatChange={setMatt} />
        <FlameStat
          name="% All Stat"
          statValue={allStat}
          onStatChange={setAllStat}
        />
      </Form>
      <hr />
      <Row id="flameScoreContainer">
        <Col sm={4}>
          <Button onClick={() => calculateFlameScore()} variant="dark" block>
            Calculate
          </Button>
        </Col>
        <Col>{showFlameScore ? flameScore : null}</Col>
      </Row>
    </Container>
  );
};

export default FlameScore;
