import React from "react";
import { useTranslation } from "react-i18next";
import { OHRIProgrammeSummaryTiles } from "@ohri/openmrs-esm-ohri-commons-lib";

function CovidCasesTiles() {
  const { t } = useTranslation();

  const tiles = [
    {
      title: t("totalCases", "Total Cases"),
      linkAddress: "#",
      subTitle: "",
      value: "--",
    },
    {
      title: t("confirmedCases", "Confirmed Cases"),
      linkAddress: "#",
      subTitle: "",
      value: "--",
    },
    {
      title: t("suspectedCases", "Suspected Cases"),
      linkAddress: "#",
      subTitle: "",
      value: "--",
    },
    {
      title: t("probableCases", "Probable Cases"),
      linkAddress: "#",
      subTitle: "",
      value: "--",
    },
    {
      title: t("totalDeaths", "Total Deaths"),
      linkAddress: "#",
      subTitle: "",
      value: "--",
    },
  ];

  return <OHRIProgrammeSummaryTiles tiles={tiles} />;
}

export default CovidCasesTiles;
