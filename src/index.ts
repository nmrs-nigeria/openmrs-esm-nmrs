import { createConditionalDashboardLink } from "@ohri/openmrs-esm-ohri-commons-lib";
import {
  getAsyncLifecycle,
  defineConfigSchema,
  provide,
  getSyncLifecycle,
} from "@openmrs/esm-framework";
import { configSchema } from "./config-schema";
import { dailyMonitoringOfContact_dashboardMeta } from "./dashboardMeta";
import nmrsConfig from "./nmrs-config.json";
import nmrsLogoConfig from "./nmrs-logo-config";

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
    featureName: "hello-world",
    moduleName,
  };

  defineConfigSchema(moduleName, configSchema);

  provide(nmrsConfig);
  provide(nmrsLogoConfig);

  return {
    pages: [],
    extensions: [
      {
        id: "daily-monitoring-dashboard",
        slot: "daily-monitoring-slot",
        load: getSyncLifecycle(
          createConditionalDashboardLink(
            dailyMonitoringOfContact_dashboardMeta
          ),
          options
        ),
        meta: dailyMonitoringOfContact_dashboardMeta,
        online: true,
        offline: true,
      },
      // {
      //   name: "Red box",
      //   load: getAsyncLifecycle(
      //     () => import("./boxes/extensions/red-box"),
      //     options
      //   ),
      //   slot: "Boxes",
      // },
    ],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS, version };
