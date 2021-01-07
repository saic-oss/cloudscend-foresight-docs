module.exports = {
  someSidebar: {
    Sage: [
      {
        type: "category",
        label: "Sage Users Guide",
        items: [
          "sage-intro",
          "sage-cloud-app-mod-overview",
          "sage-getting-started",
          "sage-managing-apps",
          "sage-api-guide",
          "sage-troubleshooting",
        ],
      },
      {
        type: "category",
        label: "Sage Installation Guide",
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
        label: "Sage Operations Guide",
        items: [
          "sage-ops-general",
          "sage-ops-overview",
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
