module.exports = {
  someSidebar: {
    "CloudScend Foresight": [
      {
        type: "category",
        label: "CloudScend Foresight Users Guide",
        items: [
          "foresight-cloud-app-mod-overview",
          "foresight-intro",
          "foresight-getting-started",
          "foresight-managing-apps",
          "foresight-api-guide",
          "foresight-troubleshooting",
        ],
      },
      {
        type: "category",
        label: "CloudScend Foresight Installation Guide",
        items: [
          "foresight-install-intro",
          "foresight-install-EKS", //,
          //"foresight-install-ECS",
          //{
          //  type: "category",
          //  label: "Installing CloudScend Foresight On-Prem or in Other Clouds",
          //  items: ["foresight-install-docker-engine", "foresight-install-kubernetes"],
          //},
        ],
      },
      {
        type: "category",
        label: "CloudScend Foresight Operations Guide",
        items: [
          "foresight-ops-overview",
          "foresight-ops-general",
          "foresight-ops-standard-guidelines",
          "foresight-ops-diagnostic",
        ],
      },
      {
        type: "category",
        label: "FAQs",
        items: ["foresight-faqs"],
      },
    ],
  },
};
