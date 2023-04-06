import React, { useMemo } from "react";
import {
  EncounterList,
  EncounterListColumn,
  getObsFromEncounter,
  PatientChartProps,
} from "@ohri/openmrs-esm-ohri-commons-lib";
import { useTranslation } from "react-i18next";
import { moduleName } from "../..";
import {
  contactInvestigationEncounterType_UUID,
  contactNumber_UUID,
  prolongedContact_UUID,
  typeOfContact_UUID,
} from "../../constants";

const ContactInvestigation: React.FC<PatientChartProps> = ({ patientUuid }) => {
  const { t } = useTranslation();
  const title = t("contactInvestigation", "Contact Investigation");

  const columns: EncounterListColumn[] = useMemo(
    () => [
      {
        key: "days",
        header: t("contactIdNumber", "Contact ID number"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, contactNumber_UUID);
        },
      },
      {
        key: "lossOfSmell",
        header: t("prolongedContact", "Prolonged Contact"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, prolongedContact_UUID);
        },
      },
      {
        key: "shortnessOfBreath:",
        header: t("typeOfContact", "Type of Contact"),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, typeOfContact_UUID);
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
      form={{ package: "covid", name: "contactInvestigation" }}
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
