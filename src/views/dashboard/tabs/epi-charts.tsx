import React from "react";
import { useTranslation } from "react-i18next";
import { EmptyStateComingSoon } from "@ohri/openmrs-esm-ohri-commons-lib";

const EpiCharts: React.FC<{}> = () => {
  const { t } = useTranslation();
  const title = t("epiCharts", "Epi Charts");

  return <EmptyStateComingSoon headerTitle={title} displayText={title} />;
};

export default EpiCharts;
