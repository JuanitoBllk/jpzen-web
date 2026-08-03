const atlas = {
  name: 'ATLAS',
  category: 'Infrastructure Core',
  status: 'IMPLEMENTED FOUNDATION',
  description: 'The private foundation where systems are built, tested, and maintained for practical exploration.',
  architecture: [
    'Internet',
    'Network',
    'Private Infrastructure Host',
    'Containers',
    'Services'
  ],
  systems: [
    {
      name: 'Proxmox VE',
      role: 'Virtualization Layer',
      description: 'Provides the private environment for isolated system foundations.'
    },
    {
      name: 'Docker',
      role: 'Container Platform',
      description: 'Supports repeatable application environments for laboratory work.'
    },
    {
      name: 'OpenClaw',
      role: 'Automation Research',
      description: 'Supports controlled experiments in AI-assisted workflows.'
    },
    {
      name: 'Nginx Proxy Manager',
      role: 'Service Routing',
      description: 'Organizes access patterns inside the private laboratory environment.'
    },
    {
      name: 'SearXNG',
      role: 'Research Utility',
      description: 'Supports private research and information exploration workflows.'
    }
  ]
};

export { atlas };
