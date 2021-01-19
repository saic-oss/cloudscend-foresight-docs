module.exports = {
  someSidebar: {
    CloudScendForesight: [
      {
        type: "category",
        label: "CloudScend Foresight Users Guide",
        items: [
          "sage-cloud-app-mod-overview",
          "sage-intro",
          "sage-getting-started",
          "sage-managing-apps",
          "sage-api-guide",
          "sage-troubleshooting",
        ],
      },
      {
        type: "category",
        label: "CloudScend Foresight Installation Guide",
        items: [
          "sage-install-intro",
          "sage-install-EKS", //,
          //"sage-install-ECS",
          //{
          //  type: "category",
          //  label: "Installing Sage On-Prem or in Other Clouds",
          //  items: ["sage-install-docker-engine", "sage-install-kubernetes"],
          //},
        ],
      },
      {
        type: "category",
        label: "CloudScend Foresight Operations Guide",
        items: [
          "sage-ops-overview",
          "sage-ops-general",
          "sage-ops-standard-guidelines",
          "sage-ops-diagnostic",
        ],
      },
      {
        type: "category",
        label: "FAQs",
        items: ["sage-faqs"],
      },
    ],
  },
};
