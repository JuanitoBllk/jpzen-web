const systems = [

  {
    id: "atlas",

    name: "ATLAS",

    category: "Infrastructure Core",
    description:
      "The foundation layer where systems are built, tested and maintained.",

    status: "IMPLEMENTED FOUNDATION",

    systems: [
      "Virtualization",
      "Container Platforms",
      "Self-hosted Experimentation",
      "System Foundations"
    ],

    focusLabel: "CURRENT FOCUS",
    focus: "Maintaining a dependable private foundation for practical experiments and future systems."
  },


  {
    id: "nova",

    name: "NOVA",

    category: "AI & Automation Core",
    description:
      "Exploring intelligent systems, agents and automation workflows.",

    status: "ACTIVE EXPERIMENTATION",

    systems: [
      "AI Agents",
      "Automation Workflows",
      "Experimental Systems",
      "Applied Research"
    ],

    focusLabel: "CURRENT FOCUS",
    focus: "Exploring useful AI-assisted workflows through small, testable automation experiments."
  },


  {
    id: "orion",

    name: "ORION",
    category: "Network & Connectivity Core",

    description:
      "Designing a smarter and more secure connectivity environment.",

    status: "PLANNED EVOLUTION",

    systems: [
      "DNS Architecture",
      "VLAN Segmentation",
      "Firewall Layer",
      "Wireless Infrastructure"
    ],

    focusLabel: "TRAJECTORY",
    focus: "Designing a more deliberate connectivity environment through staged, evidence-based improvements."
  }

];
export { systems };
