import { useState, useRef, useEffect } from 'react';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { baseMeta } from '~/utils/meta';
import { classes } from '~/utils/style';
import { FaqItem } from './components/faq-item';
import {
  ChatIcon,
  CloudUploadIcon,
  ClipboardIcon,
  FlaskIcon,
  GlobeIcon,
  HammerIcon,
  LayersIcon,
  LifeBuoyIcon,
  LinkIcon,
  PuzzleIcon,
  RocketIcon,
  SearchIcon,
  SettingsIcon,
  TrendUpIcon,
  WorkflowIcon,
  ZapIcon,
} from './components/icons';
import { SolutionCard } from './components/solution-card';
import { ValueCard } from './components/value-card';
import { TechChip } from './components/tech-chip';
import styles from './services.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Solutions',
    description:
      'Digital solutions built around your business — from websites to full-stack platforms, dashboards, and everything that keeps them running.',
  });
};

const solutions = [
  {
    icon: GlobeIcon,
    title: 'Business Websites',
    description:
      'Fast, modern websites that represent your business well and turn visitors into clients.',
    features: ['Responsive design', 'SEO ready', 'Content management', 'Fast hosting & deployment'],
  },
  {
    icon: WorkflowIcon,
    title: 'Business Automation',
    description:
      'Automating repetitive tasks so your team spends less time on manual work and more on growth.',
    features: ['Workflow automation', 'Third-party integrations', 'Custom internal tools', 'Notifications & alerts'],
  },
  {
    icon: LayersIcon,
    title: 'Custom Dashboards',
    description:
      'Clear, real-time dashboards that turn your data into decisions you can actually act on.',
    features: ['Real-time data', 'Role-based access', 'Custom reports', 'Data visualization'],
  },
  {
    icon: RocketIcon,
    title: 'Full-Stack Platforms',
    description:
      'End-to-end applications built with scalable architecture, from database to interface.',
    features: ['Authentication', 'API & database', 'Admin dashboard', 'Cloud deployment'],
  },
  {
    icon: LinkIcon,
    title: 'API Integrations',
    description:
      'Connecting your product with the tools and services you already rely on.',
    features: ['Payment gateways', 'Third-party APIs', 'Webhooks', 'Data synchronization'],
  },
  {
    icon: SettingsIcon,
    title: 'Maintenance & Improvements',
    description:
      'Ongoing support to keep your product secure, fast, and evolving with your needs.',
    features: ['Bug fixes', 'Performance tuning', 'Feature updates', 'Security patches'],
  },
];

const values = [
  {
    icon: PuzzleIcon,
    title: 'Problem Solving',
    description: 'I focus on understanding the problem before writing a single line of code.',
  },
  {
    icon: ZapIcon,
    title: 'Performance',
    description: 'Fast, responsive, and optimized applications by default, not as an afterthought.',
  },
  {
    icon: ChatIcon,
    title: 'Communication',
    description: 'Clear, honest updates throughout the project — no surprises at the end.',
  },
  {
    icon: TrendUpIcon,
    title: 'Scalable',
    description: 'Built to grow with your business, not something you outgrow in a year.',
  },
];

const process = [
  { icon: SearchIcon, title: 'Discovery', description: 'Understanding your goals, users, and constraints.' },
  { icon: ClipboardIcon, title: 'Planning', description: 'Mapping out scope, architecture, and timeline.' },
  { icon: HammerIcon, title: 'Development', description: 'Building the solution in focused, visible iterations.' },
  { icon: FlaskIcon, title: 'Testing', description: 'Checking edge cases, performance, and real usage.' },
  { icon: CloudUploadIcon, title: 'Deployment', description: 'Shipping to production, safely and smoothly.' },
  { icon: LifeBuoyIcon, title: 'Support', description: 'Staying available for fixes, tweaks, and growth.' },
];

const techStack = [
  'React',
  'Next.js',
  'Laravel',
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Git',
  'Docker',
];

const faqs = [
  {
    question: 'How long does a project take?',
    answer:
      `It depends on scope. A business website usually takes 1–2 weeks, while a full-stack platform or dashboard can take 4–8 weeks. You'll get a clear timeline after the discovery call.`,
  },
  {
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. I can rebuild or improve an existing site or app — whether that means a visual refresh, better performance, or a full rebuild on more scalable foundations.',
  },
  {
    question: 'Do you provide maintenance?',
    answer:
      'Yes, ongoing maintenance and support plans are available after launch, covering fixes, updates, and small improvements as your needs change.',
  },
  {
    question: 'Can we work remotely?',
    answer:
      'Absolutely. I work with clients remotely using calls, async updates, and shared project boards, so location is never a blocker.',
  },
];

// Custom hook to observe a section and return visible state (fires once)
function useVisible(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

export const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // Hero is always visible on load — no scroll needed
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    // Slight delay so CSS transition plays on mount
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Refs for each scrolled section
  const solutionsRef = useRef();
  const valuesRef = useRef();
  const processRef = useRef();
  const techRef = useRef();
  const faqRef = useRef();
  const ctaRef = useRef();

  // Visibility state per section
  const solutionsVisible = useVisible(solutionsRef);
  const valuesVisible = useVisible(valuesRef);
  const processVisible = useVisible(processRef);
  const techVisible = useVisible(techRef);
  const faqVisible = useVisible(faqRef);
  const ctaVisible = useVisible(ctaRef);

  return (
    <div className={styles.services}>
      {/* Hero */}
      <Section className={styles.hero} as="section">
        <div className={styles.heroContent}>
          <Heading level={2} as="h1" className={styles.heroTitle} data-visible={heroVisible}>
            <DecoderText text="Building Digital Solutions That Solve Real Problems" start delay={200} />
          </Heading>
          <Text size="xl" as="p" className={styles.heroDescription} secondary data-visible={heroVisible}>
            Whether you need a business website, a full-stack application, or a custom
            digital solution, I help transform ideas into reliable products.
          </Text>
          <Button className={styles.heroButton} href="/contact" icon="chevron-right" iconHoverShift data-visible={heroVisible}>
            Let&rsquo;s Talk
          </Button>
        </div>
      </Section>

      {/* Solutions */}
      <Divider className={styles.divider} />
      <Section className={styles.section} as="section" ref={solutionsRef}>
        <div className={styles.sectionHeader} data-visible={solutionsVisible}>
          <Text className={styles.eyebrow} size="s" as="p">
            Solutions
          </Text>
          <Heading level={3} as="h2" className={styles.sectionTitle}>
            What I can build for you
          </Heading>
        </div>
        <div className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} index={index} featured={index === 0} {...solution} />
          ))}
        </div>
      </Section>

      <Divider className={styles.divider} />

      {/* Why work with me */}
      <Section className={classes(styles.section, styles.whyWorkSection)} as="section" ref={valuesRef}>
        <div className={styles.sectionHeader} data-visible={valuesVisible}>
          <Text className={styles.eyebrow} size="s" as="p">
            Why work with me
          </Text>
          <Heading level={3} as="h2" className={styles.sectionTitle}>
            What sets the work apart
          </Heading>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <ValueCard key={value.title} index={index} {...value} />
          ))}
        </div>
      </Section>

      <Divider className={styles.divider} />

      {/* Process */}
      <Section className={styles.section} as="section" ref={processRef}>
        <div className={styles.sectionHeader} data-visible={processVisible}>
          <Text className={styles.eyebrow} size="s" as="p">
            Process
          </Text>
          <Heading level={3} as="h2" className={styles.sectionTitle}>
            How a project comes together
          </Heading>
        </div>
        <ol className={styles.timeline} data-visible={processVisible}>
          {process.map((step, index) => (
            <li className={styles.timelineStep} key={step.title} style={{ '--step-index': index }}>
              <div className={styles.timelineMarker}>
                <step.icon className={styles.timelineIcon} />
                <Text className={styles.timelineNumber} size="s" as="span" secondary>
                  {String(index + 1).padStart(2, '0')}
                </Text>
              </div>
              <Heading level={5} as="h3" className={styles.timelineTitle}>
                {step.title}
              </Heading>
              <Text size="s" as="p" secondary>
                {step.description}
              </Text>
            </li>
          ))}
        </ol>
      </Section>

      <Divider className={styles.divider} />

      {/* Tech stack */}
      <Section className={styles.section} as="section" ref={techRef}>
        <div className={styles.sectionHeader} data-visible={techVisible}>
          <Text className={styles.eyebrow} size="s" as="p">
            Tech stack
          </Text>
          <Heading level={3} as="h2" className={styles.sectionTitle}>
            Tools behind the solutions
          </Heading>
        </div>
        <ul className={styles.chipList} data-visible={techVisible}>
          {techStack.map((tech, index) => (
            <TechChip key={tech} tech={tech} style={{ '--chip-index': index }} />
          ))}
        </ul>
      </Section>

      <Divider className={styles.divider} />

      {/* FAQ */}
      <Section className={classes(styles.section, styles.faqSection)} as="section" ref={faqRef}>
        <div className={styles.sectionHeader} data-visible={faqVisible}>
          <Text className={styles.eyebrow} size="s" as="p">
            FAQ
          </Text>
          <Heading level={3} as="h2" className={styles.sectionTitle}>
            Common questions
          </Heading>
        </div>
        <div className={styles.faqList} data-visible={faqVisible}>
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              {...faq}
              open={openFaq === index}
              onToggle={() => setOpenFaq(prev => (prev === index ? null : index))}
              style={{ '--faq-index': index }}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className={styles.cta} as="section" ref={ctaRef}>
        <Heading level={3} as="h2" className={styles.ctaTitle} data-visible={ctaVisible}>
          Have an idea?
          <br />
          Let&rsquo;s build it together.
        </Heading>
        <Button className={styles.ctaButton} href="/contact" icon="chevron-right" iconHoverShift data-visible={ctaVisible}>
          Start a conversation
        </Button>
      </Section>

      <Footer />
    </div>
  );
};
