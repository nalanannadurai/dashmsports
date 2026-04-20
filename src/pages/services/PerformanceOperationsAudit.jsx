import ServicePage from '../../components/service/ServicePage';

const data = {
  serviceName: 'Performance & Operations Audit',
  title: 'Performance & Operations Audit',
  subheadline: 'Find the hidden inefficiencies that hold performance back.',
  description: [
    'This service helps sports organizations evaluate how day-to-day operations, communication, and execution impact performance. We identify breakdowns in process, accountability, and workflow.',
    'Leadership can use these insights to improve efficiency, close execution gaps, and create stronger alignment across the organization.',
  ],
  problems: [
    'Operational inefficiencies that drain resources and slow execution',
    'Unclear staff responsibilities creating gaps in accountability',
    'Breakdowns in communication across departments and levels',
    'Weak accountability systems without measurable outcomes',
    'Persistent gaps between strategic intent and on-the-ground execution',
  ],
  howWeWork: [
    'Review workflows, systems, and organizational processes end-to-end',
    'Assess responsibility and reporting structure across staff tiers',
    'Identify process bottlenecks and high-friction areas',
    'Evaluate how operational patterns affect overall performance',
    'Recommend improvements for efficiency, clarity, and execution',
  ],
  deliverables: [
    'Operations audit summary',
    'Workflow and accountability analysis',
    'Process improvement recommendations',
    'Execution support framework',
    'Leadership debrief and priority action plan',
  ],
  idealClients: [
    'Athletic departments seeking operational improvement',
    'Team operations groups managing complex workflows',
    'Sports performance organizations needing clarity',
    'Leadership teams experiencing execution breakdowns',
  ],
};

export default function PerformanceOperationsAudit() {
  return <ServicePage {...data} />;
}