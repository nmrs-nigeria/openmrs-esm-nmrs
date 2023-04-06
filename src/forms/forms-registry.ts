import case_investigation from "./covid/case-investigation.json";
import daily_monitoring from "./covid/daily-monitoring.json";
import contact_investigation from "./covid/contact-investigation.json";

export default {
  covid: {
    case_investigation: {
      "1.0": case_investigation,
    },
    daily_monitoring: {
      "1.0": daily_monitoring,
    },
    contact_investigation: {
      "1.0": contact_investigation,
    },
  },
};
