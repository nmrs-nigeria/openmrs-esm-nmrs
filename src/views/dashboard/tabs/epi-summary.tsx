import React from "react";
import { useTranslation } from "react-i18next";
import { EmptyStateComingSoon } from "@ohri/openmrs-esm-ohri-commons-lib";

const EpiSummary: React.FC<{}> = () => {
  const { t } = useTranslation();
  const title = t("epiSummary", "Epi Summary");

  return <EmptyStateComingSoon headerTitle={title} displayText={title} />;
};

export default EpiSummary;
