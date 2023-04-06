import React, { useMemo } from "react";
import {
  EncounterList,
  EncounterListColumn,
  getObsFromEncounter,
  PatientChartProps,
} from "@ohri/openmrs-esm-ohri-commons-lib";
import { useTranslation } from "react-i18next";
import { moduleName } from "../..";
import { contactInvestigationEncounterType_UUID } from "../../constants";

const ContactInvestigation: React.FC<PatientChartProps> = ({ patientUuid }) => {
  const { t } = useTranslation();
  const title = t("contactInvestigation", "Contact Investigation");

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
            form: { name: "covid", package: "contact_investigation" },
            encounterUuid: encounter.uuid,
            intent: "*",
            label: t("viewDetails", "View Details"),
            mode: "view",
          },
          {
            form: { name: "covid", package: "contact_investigation" },
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
      encounterUuid={contactInvestigationEncounterType_UUID}
      form={{ package: "covid", name: "contact_investigation" }}
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

export default ContactInvestigation;
