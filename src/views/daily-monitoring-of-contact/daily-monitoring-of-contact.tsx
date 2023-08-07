import React, { useMemo } from "react";
import {
  EmptyStateComingSoon,
  EncounterList,
  EncounterListColumn,
  getObsFromEncounter,
  PatientChartProps,
} from "@ohri/openmrs-esm-ohri-commons-lib";
import { useTranslation } from "react-i18next";
import { moduleName } from "../../index";
import { dailyCaseMonitoringEncounterType_UUID } from "../../constants";
const DailyMonitoringOfContact: React.FC<PatientChartProps> = ({
  patientUuid,
}) => {
  const { t } = useTranslation();
  const title = "Daily Monitoring of Contact";
  const columns: EncounterListColumn[] = useMemo(
    () => [
      {
        key: "days",
        header: t("days", "Days"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "days");
        },
      },
      {
        key: "lossOfSmell",
        header: t("lossOfSmell", "Loss of Sense of Smell"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "", true);
        },
      },
      {
        key: "tasteDisorder:",
        header: t("tasteDisorder", "Taste Disorder"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "");
        },
      },
      {
        key: "rhinitis",
        header: t("rhinitis", "RHINITIS"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "");
        },
      },
      {
        key: "cough",
        header: t("cough", "Cough"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "");
        },
      },
      {
        key: "fever",
        header: t("fever", "Fever"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "");
        },
      },
      {
        key: "shortnessOfBreath:",
        header: t("shortnessOfBreath", "Shortness of Breath"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "", true);
        },
      },
      {
        key: "soreThroat:",
        header: t("soreThroat", "Sore Throat"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "");
        },
      },
      {
        key: "actions",
        header: t("actions", "Actions"),
        getValue: (encounter) => [
          {
            form: { name: "covid", package: "daily_monitoring" },
            encounterUuid: encounter.uuid,
            intent: "*",
            label: t("viewDetails", "View Details"),
            mode: "view",
          },
          {
            form: { name: "covid", package: "daily_monitoring" },
            encounterUuid: encounter.uuid,
            intent: "*",
            label: t("editForm", "Edit Form"),
            mode: "edit",
          },
        ],
      },
    ],
    [t]
  );
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={dailyCaseMonitoringEncounterType_UUID}
      form={{ package: "covid", name: "daily_monitoring" }}
      columns={columns}
      description={title}
      headerTitle={title}
      launchOptions={{
        displayText: t("add", "Add"),
        moduleName: moduleName,
      }}
    />
  );
};
export default DailyMonitoringOfContact;
