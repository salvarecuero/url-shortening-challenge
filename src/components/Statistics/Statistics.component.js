import React from "react";
import StatisticsCard from "../StatisticsCard/StatisticsCard.component";
import "./Statistics.styles.scss";

// Statistics cards logo's
import { ReactComponent as CardLogo1 } from "../../assets/images/icon-brand-recognition.svg";
import { ReactComponent as CardLogo2 } from "../../assets/images/icon-detailed-records.svg";
import { ReactComponent as CardLogo3 } from "../../assets/images/icon-fully-customizable.svg";

function Statistics() {
  return (
    <div id="statistics-container">
      <div id="statistics-info-container">
        <span id="statistics-title">Advanced Statistics</span>
        <span id="statistics-description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </span>
      </div>
      <div id="statistics-cards-container">
        <StatisticsCard Logo={CardLogo1} title="Brand Recognition">
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </StatisticsCard>
        <StatisticsCard Logo={CardLogo2} title="Detailed Records">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </StatisticsCard>
        <StatisticsCard Logo={CardLogo3} title="Fully Customizable">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </StatisticsCard>
      </div>
    </div>
  );
}

export default Statistics;
