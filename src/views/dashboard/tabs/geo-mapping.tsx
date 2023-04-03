import React from "react";
import { useTranslation } from "react-i18next";
import { EmptyStateComingSoon } from "@ohri/openmrs-esm-ohri-commons-lib";

const GeoMapping: React.FC<{}> = () => {
  const { t } = useTranslation();
  const title = t("geoMapping", "Geo Mapping");

  return <EmptyStateComingSoon headerTitle={title} displayText={title} />;
};

export default GeoMapping;
