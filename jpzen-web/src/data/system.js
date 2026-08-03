export const systems = [

  {
    name: "ATLAS",

    category: "Infrastructure Core",

    description:
      "The foundation layer where systems are built, tested and maintained.",

    status: "● OPERATIONAL",

    systems: [
      "Proxmox VE",
      "Linux Containers",
      "Docker Runtime",
      "Self-hosted Services"
    ],

    details: {
      host: "pve1",

      platform: "Proxmox VE",

      virtualization: "LXC + Docker",

      services: [
        "AdGuard",
        "Nginx Proxy Manager",
        "OpenClaw"
      ]
    }
  },


  {
    name: "NOVA",

    category: "AI & Automation Core",

    description:
      "Exploring intelligent systems, agents and automation workflows.",

    status: "● OPERATIONAL",

    systems: [
      "OpenClaw",
      "AI Agents",
      "Automation Workflows",
      "Experimental Systems"
    ],

    details: {
      runtime: "Docker",

      platform: "OpenClaw",

      purpose:
        "AI automation experiments"
    }
  },


  {
    name: "ORION",

    category: "Network & Connectivity Core",

    description:
      "Designing a smarter and more secure connectivity environment.",

    status: "○ DEVELOPMENT",

    systems: [
      "DNS Architecture",
      "VLAN Segmentation",
      "Firewall Layer",
      "Wireless Infrastructure"
    ],

    details: {

      current:
        "Home Network",

      planned: [
        "VLAN",
        "Firewall",
        "Managed Wireless"
      ]
    }
  }

];