import React from "react";
import { useTranslation } from "react-i18next";
import { Tabs, Tab, TabPanels, TabPanel, TabList } from "@carbon/react";
import EpiSummary from "./tabs/epi-summary";
import EpiCharts from "./tabs/epi-charts";
import GeoMapping from "./tabs/geo-mapping";

const CovidCasesSummary: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <Tabs type="container">
      <TabList contained>
        <Tab>{t("epiSummary", "Epi Summary")}</Tab>
        <Tab>{t("epiCharts", "Epi Charts")}</Tab>
        <Tab>{t("geoMapping", "Geo Mapping")}</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <EpiSummary />
        </TabPanel>
        <TabPanel>
          <EpiCharts />
        </TabPanel>
        <TabPanel>
          <GeoMapping />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CovidCasesSummary;
