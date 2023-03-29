import React from "react";
import {
  EmptyStateComingSoon,
  PatientChartProps,
} from "@ohri/openmrs-esm-ohri-commons-lib";

const ContactInvestigation: React.FC<PatientChartProps> = ({ patientUuid }) => {
  const title = "Contact Investigation";

  return <EmptyStateComingSoon headerTitle={title} />;
};

export default ContactInvestigation;
