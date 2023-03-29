import {
  getAsyncLifecycle,
  defineConfigSchema,
  provide,
} from "@openmrs/esm-framework";
import { configSchema } from "./config-schema";
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

function setupOpenMRS() {
  const moduleName = "@nmrs/esm-nmrs-app";

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
