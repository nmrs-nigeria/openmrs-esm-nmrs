import {
  getAsyncLifecycle,
  defineConfigSchema,
  provide,
  getSyncLifecycle,
} from "@openmrs/esm-framework";
import { configSchema } from "./config-schema";
import nmrsConfig from "./nmrs-config.json";
import nmrsLogoConfig from "./nmrs-logo-config";
import {
  CaseInvestigationMeta,
  ContactInvestigationMeta,
  CovidCasesSummaryMeta,
  DailyMonitoringOfContactMeta,
} from "./dashboard.meta";
import { createDashboardLink } from "@openmrs/esm-patient-common-lib";
import { addToBaseFormsRegistry } from "@ohri/openmrs-ohri-form-engine-lib";
import nmrsForms from "./forms/forms-registry";
import {
  OHRIHome,
  createOHRIDashboardLink,
} from "@ohri/openmrs-esm-ohri-commons-lib";

declare var __VERSION__: string;
const version = __VERSION__;

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

const backendDependencies = {
  fhir2: "^1.2.0",
  "webservices.rest": "^2.2.0",
};

export const moduleName = "@nmrs/esm-nmrs-app";

function setupOpenMRS() {
  const options = {
    featureName: "nmrs-nigeria",
    moduleName,
  };

  defineConfigSchema(moduleName, configSchema);
  addToBaseFormsRegistry(nmrsForms);

  provide(nmrsConfig);
  provide(nmrsLogoConfig);

  return {
    pages: [],
    extensions: [
      {
        id: "case-investigation",
        slot: "ohri-covid-patient-chart-slot",
        load: getSyncLifecycle(
          createDashboardLink(CaseInvestigationMeta),
          options
        ),
        meta: CaseInvestigationMeta,
      },
      {
        id: "case-investigation-ext",
        slot: "case-investigation-slot",
        load: getAsyncLifecycle(
          () => import("./views/case-investigation/case-investigation"),
          {
            featureName: "case-investigation",
            moduleName,
          }
        ),
      },
      {
        id: "contact-investigation",
        slot: "ohri-covid-patient-chart-slot",
        load: getSyncLifecycle(
          createDashboardLink(ContactInvestigationMeta),
          options
        ),
        meta: ContactInvestigationMeta,
      },
      {
        id: "contact-investigation-ext",
        slot: "contact-investigation-slot",
        load: getAsyncLifecycle(
          () => import("./views/contact-investigation/contact-investigation"),
          {
            featureName: "contact-investigation",
            moduleName,
          }
        ),
      },
      {
        id: "daily-monitoring-of-contact",
        slot: "ohri-covid-patient-chart-slot",
        load: getSyncLifecycle(
          createDashboardLink(DailyMonitoringOfContactMeta),
          options
        ),
        meta: DailyMonitoringOfContactMeta,
      },
      {
        id: "daily-monitoring-of-contact-ext",
        slot: "daily-monitoring-of-contact-slot",
        load: getAsyncLifecycle(
          () =>
            import(
              "./views/daily-monitoring-of-contact/daily-monitoring-of-contact"
            ),
          {
            featureName: "daily-monitoring-of-contact",
            moduleName,
          }
        ),
      },
      {
        id: "covid-cases-summary-ext",
        slot: "ohri-covid-dashboard-slot",
        load: getSyncLifecycle(
          createOHRIDashboardLink(CovidCasesSummaryMeta),
          options
        ),
        meta: CovidCasesSummaryMeta,
      },
      {
        id: "covid-cases-summary",
        slot: "covid-cases-summary-slot",
        load: getSyncLifecycle(OHRIHome, {
          featureName: "Covid Cases Summary",
          moduleName,
        }),
        meta: CovidCasesSummaryMeta,
        online: true,
        offline: true,
      },
    ],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS, version };
