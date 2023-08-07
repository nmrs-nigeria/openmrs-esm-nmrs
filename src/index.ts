import {
  getAsyncLifecycle,
  defineConfigSchema,
  provide,
  getSyncLifecycle,
} from "@openmrs/esm-framework";
import { addToBaseFormsRegistry } from "@ohri/openmrs-ohri-form-engine-lib";
import { createDashboardLink } from "@openmrs/esm-patient-common-lib";
import {
  OHRIHome,
  OHRIWelcomeSection,
  createOHRIDashboardLink,
} from "@ohri/openmrs-esm-ohri-commons-lib";
import { configSchema } from "./config-schema";
import {
  CaseInvestigationMeta,
  ContactInvestigationMeta,
  CovidCasesSummaryMeta,
  DailyMonitoringOfContactMeta,
} from "./dashboard.meta";
import nmrsConfig from "./nmrs-config.json";
import nmrsLogoConfig from "./nmrs-logo-config";
import nmrsForms from "./forms/forms-registry";

export const moduleName = "@nmrs/esm-nmrs-app";

const options = {
  featureName: "nmrs-nigeria",
  moduleName,
};

export const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

export const caseInvestigationDashboardLink = getSyncLifecycle(
  createDashboardLink({ ...CaseInvestigationMeta, moduleName }),
  options
);

export const caseInvestigation = getAsyncLifecycle(
  () => import("./views/case-investigation/case-investigation"),
  {
    featureName: "case-investigation",
    moduleName,
  }
);

export const contactInvestigationDashboardLink = getSyncLifecycle(
  createDashboardLink({ ...ContactInvestigationMeta, moduleName }),
  options
);

export const contactInvestigation = getAsyncLifecycle(
  () => import("./views/contact-investigation/contact-investigation"),
  {
    featureName: "contact-investigation",
    moduleName,
  }
);

export const dailyContactMonitoringDashboardLink = getSyncLifecycle(
  createDashboardLink({ ...DailyMonitoringOfContactMeta, moduleName }),
  options
);

export const dailyContactMonitoring = getAsyncLifecycle(
  () =>
    import("./views/daily-monitoring-of-contact/daily-monitoring-of-contact"),
  {
    featureName: "daily-monitoring-of-contact",
    moduleName,
  }
);

export const covidCasesSummaryDashboardLink = getSyncLifecycle(
  createOHRIDashboardLink(CovidCasesSummaryMeta),
  options
);

export const covidCasesSummary = getSyncLifecycle(OHRIHome, {
  featureName: "Covid Cases Summary",
  moduleName,
});

export const covidCasesSummaryHomeHeader = getSyncLifecycle(
  OHRIWelcomeSection,
  {
    featureName: "covid-cases-summary-home-header",
    moduleName,
  }
);

export const covidCasesSummaryHomeHeaderTile = getAsyncLifecycle(
  () => import("./views/dashboard/covid-cases-tiles"),
  {
    featureName: "covid-cases-summary-home-tiles",
    moduleName,
  }
);

export const covidCasesSummaryTabs = getAsyncLifecycle(
  () => import("./views/dashboard/covid-cases-summary"),
  {
    featureName: "covid-cases-summary-tabs",
    moduleName,
  }
);

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
  addToBaseFormsRegistry(nmrsForms);

  provide(nmrsConfig);
  provide(nmrsLogoConfig);
}
