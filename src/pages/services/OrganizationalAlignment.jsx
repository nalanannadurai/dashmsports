import ServicePage from '../../components/service/ServicePage';

const data = {
  serviceName: 'Organizational Alignment Review',
  title: 'Organizational Alignment Review',
  subheadline: 'Strong organizations win when leadership, communication, and execution move together.',
  description: [
    'This service focuses on helping sports organizations identify misalignment between departments, leaders, and decision-makers. We assess communication patterns, incentives, and structure so teams can reduce friction and improve collective execution.',
    'When leadership, operations, and strategy are not aligned, performance suffers. We help diagnose the source and deliver practical steps toward better cohesion.',
  ],
  problems: [
    'Leadership misalignment creating contradictory priorities across teams',
    'Disconnect between coaching, analytics, and operations departments',
    'Poor communication flow leading to information silos',
    'Conflicting departmental incentives undermining collective performance',
    'Organizational friction that affects results without clear root causes',
  ],
  howWeWork: [
    'Assess leadership and departmental alignment across the organization',
    'Review communication structure and decision-making pathways',
    'Identify conflicting incentives and systemic bottlenecks',
    'Diagnose specific sources of organizational friction',
    'Deliver practical recommendations to improve cohesion and execution',
  ],
  deliverables: [
    'Alignment review summary report',
    'Communication and structure analysis',
    'Friction point identification and prioritization',
    'Leadership recommendations and action framework',
    'Implementation guidance and follow-up structure',
  ],
  idealClients: [
    'Team leadership groups experiencing internal disconnect',
    'Athletic departments with competing departmental priorities',
    'Organizations struggling with cross-functional execution',
    'Decision-makers seeking measurable improvement in cohesion',
  ],
};

export default function OrganizationalAlignment() {
  return <ServicePage {...data} />;
}