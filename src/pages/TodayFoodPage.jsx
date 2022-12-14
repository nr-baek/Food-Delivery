import React from "react";
import BottomMenu from "../components/common/BottomMenu";
import TodayFood from "../components/TodayFood";
import { Container } from "../components/common/styles";

function TodayFoodPage() {
  return (
    <Container>
      <TodayFood />
      <BottomMenu />
    </Container>
  );
}

export default TodayFoodPage;
