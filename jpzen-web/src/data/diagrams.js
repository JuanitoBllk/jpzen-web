const diagrams = [
  {
    id: 'personal-technology-laboratory',
    name: 'Personal Technology Laboratory',
    purpose: 'A conceptual view of how learning, infrastructure and experimentation reinforce one another.',
    nodes: [
      { id: 'internet', label: 'Internet', description: 'A broad source of technical knowledge and reference.' },
      { id: 'knowledge', label: 'Knowledge', description: 'Concepts collected through study, observation and practice.' },
      { id: 'laboratory', label: 'Laboratory Environment', description: 'A controlled place for practical learning.' },
      { id: 'experiments', label: 'Experiments', description: 'Small systems and iterations that test understanding.' },
      { id: 'documentation', label: 'Documentation', description: 'Records that preserve engineering knowledge over time.' }
    ],
    connections: [
      { from: 'internet', to: 'knowledge', label: 'informs' },
      { from: 'knowledge', to: 'laboratory', label: 'shapes' },
      { from: 'laboratory', to: 'experiments', label: 'enables' },
      { from: 'experiments', to: 'documentation', label: 'records' }
    ]
  },
  {
    id: 'infrastructure-core-concept',
    name: 'Infrastructure Core Concept',
    relatedCore: 'ATLAS',
    purpose: 'A conceptual sequence for understanding the layers that support infrastructure experimentation.',
    nodes: [
      { id: 'infrastructure', label: 'Infrastructure Layer', description: 'The foundational environment for system learning.' },
      { id: 'virtualization', label: 'Virtualization', description: 'A concept for creating isolated computing environments.' },
      { id: 'containers', label: 'Containers', description: 'Portable application environments used in practical exploration.' },
      { id: 'services', label: 'Services', description: 'Useful systems built from the layers beneath them.' }
    ],
    connections: [
      { from: 'infrastructure', to: 'virtualization', label: 'organizes' },
      { from: 'virtualization', to: 'containers', label: 'supports' },
      { from: 'containers', to: 'services', label: 'enables' }
    ]
  },
  {
    id: 'automation-workflow-concept',
    name: 'Automation Workflow Concept',
    relatedCore: 'NOVA',
    purpose: 'A public conceptual flow for exploring practical AI-assisted automation.',
    nodes: [
      { id: 'input', label: 'Input', description: 'A question, task or trigger for an experiment.' },
      { id: 'ai-processing', label: 'AI Processing', description: 'A reasoning step that explores possible assistance.' },
      { id: 'automation-logic', label: 'Automation Logic', description: 'A controlled workflow that applies the experiment.' },
      { id: 'result', label: 'Result', description: 'An outcome that can be reviewed and improved.' }
    ],
    connections: [
      { from: 'input', to: 'ai-processing', label: 'guides' },
      { from: 'ai-processing', to: 'automation-logic', label: 'informs' },
      { from: 'automation-logic', to: 'result', label: 'produces' }
    ]
  },
  {
    id: 'network-evolution-concept',
    name: 'Network Evolution Concept',
    relatedCore: 'ORION',
    purpose: 'A staged conceptual view of future connectivity learning and improvement.',
    nodes: [
      { id: 'connectivity', label: 'Connectivity', description: 'The starting point for understanding communication between systems.' },
      { id: 'architecture', label: 'Architecture', description: 'A deliberate structure for organizing future connectivity.' },
      { id: 'segmentation', label: 'Segmentation', description: 'A concept for creating clearer boundaries between environments.' },
      { id: 'security', label: 'Security', description: 'A design consideration that guides future evolution.' }
    ],
    connections: [
      { from: 'connectivity', to: 'architecture', label: 'informs' },
      { from: 'architecture', to: 'segmentation', label: 'guides' },
      { from: 'segmentation', to: 'security', label: 'strengthens' }
    ]
  }
];

export { diagrams };
