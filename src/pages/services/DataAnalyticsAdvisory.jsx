import ServicePage from '../../components/service/ServicePage';

const data = {
  serviceName: 'Data & Analytics Advisory',
  title: 'Data & Analytics Advisory',
  subheadline: 'Turn information into action, not just reporting.',
  description: [
    'We help organizations use data more effectively by turning analytics into meaningful decision support. This includes helping clients identify the right metrics, build practical frameworks, and create systems that connect data to real strategic choices.',
    'Our goal is not more reporting — it\'s better decisions at every level of the organization.',
  ],
  problems: [
    'Data collected but never meaningfully acted upon',
    'Reporting that generates output without driving action',
    'Weak integration between analytics teams and leadership decision-making',
    'Unclear or inconsistent performance metrics across departments',
    'Lack of practical dashboards or analytical models with real utility',
  ],
  howWeWork: [
    'Evaluate current analytics capabilities and usage patterns',
    'Identify key decision points where data can add meaningful value',
    'Develop practical metrics, KPIs, and decision-support frameworks',
    'Recommend dashboards, models, and reporting structures',
    'Improve leadership adoption and integration of data-driven insights',
  ],
  deliverables: [
    'Analytics capability assessment',
    'KPI and decision-support framework',
    'Dashboard or model design recommendations',
    'Data-to-decision integration strategy',
    'Implementation and adoption guidance',
  ],
  idealClients: [
    'Front offices building or maturing analytics capabilities',
    'Athletic departments seeking data-driven decision-making',
    'Sports organizations with data but limited analytical action',
    'Leaders who want better integration of analytics into strategy',
  ],
};

export default function DataAnalyticsAdvisory() {
  return <ServicePage {...data} />;
}