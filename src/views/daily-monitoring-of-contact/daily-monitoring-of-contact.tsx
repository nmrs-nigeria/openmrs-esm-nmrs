import React from "react";
import {
  EmptyStateComingSoon,
  PatientChartProps,
} from "@ohri/openmrs-esm-ohri-commons-lib";

const DailyMonitoringOfContact: React.FC<PatientChartProps> = ({
  patientUuid,
}) => {
  const title = "Daily Monitoring of Contact";

  return <EmptyStateComingSoon headerTitle={title} displayText={title} />;
};

export default DailyMonitoringOfContact;
