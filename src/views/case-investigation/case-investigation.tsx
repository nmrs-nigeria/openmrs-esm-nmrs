import {
  EncounterList,
  EncounterListColumn,
  PatientChartProps,
  getObsFromEncounter,
} from "@ohri/openmrs-esm-ohri-commons-lib";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { caseInvestigationEncounterType_UUID } from "../../constants";
import { moduleName } from "../..";

const CaseInvestigation: React.FC<PatientChartProps> = ({ patientUuid }) => {
  const { t } = useTranslation();
  const title = t("caseInvestigation", "Case Investigation");

  const columns: EncounterListColumn[] = useMemo(
    () => [
      {
        key: "statusOfContact",
        header: t("statusOfContact", "Status of contact"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "");
        },
      },
      {
        key: "nameOfDataCollector",
        header: t("nameOfDataCollector", "Name of data collector"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "", true);
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
        key: "cough",
        header: t("cough", "Cough"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "");
        },
      },
      {
        key: "nausea",
        header: t("nausea", "Nausea"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "");
        },
      },
      {
        key: "chestPain",
        header: t("chestPain", "Chest pain"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "", true);
        },
      },
      {
        key: "headache",
        header: t("headache", "Headache"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "");
        },
      },
      {
        key: "previouslyVaccinated",
        header: t("previouslyVaccinated", "Previously vaccinated"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, "");
        },
      },
      {
        key: "actions",
        header: t("actions", "Actions"),
        getValue: (encounter) => [
          {
            form: { name: "covid", package: "case_investigation" },
            encounterUuid: encounter.uuid,
            intent: "*",
            label: t("viewDetails", "View Details"),
            mode: "view",
          },
          {
            form: { name: "covid", package: "case_investigation" },
            encounterUuid: encounter.uuid,
            intent: "*",
            label: t("editForm", "Edit Form"),
            mode: "edit",
          },
        ],
      },
    ],
    []
  );

  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={caseInvestigationEncounterType_UUID}
      form={{ package: "covid", name: "case_investigation" }}
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

export default CaseInvestigation;
