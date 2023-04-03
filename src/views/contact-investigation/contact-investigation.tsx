import React from "react";
import {
  EmptyStateComingSoon,
  PatientChartProps,
} from "@ohri/openmrs-esm-ohri-commons-lib";
import { useTranslation } from "react-i18next";

const ContactInvestigation: React.FC<PatientChartProps> = ({ patientUuid }) => {
  const { t } = useTranslation();
  const title = t("contactInvestigation", "Contact Investigation");

  return <EmptyStateComingSoon headerTitle={title} displayText={title} />;
};

export default ContactInvestigation;
