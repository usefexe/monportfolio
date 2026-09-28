import { useState } from 'react';
import { classes } from '~/utils/style';
import * as Icons from './tech-icons';
import styles from '../services.module.css';

const iconMap = {
  'React': Icons.ReactIcon,
  'Next.js': Icons.NextjsIcon,
  'Laravel': Icons.LaravelIcon,
  'Node.js': Icons.NodejsIcon,
  'Express': Icons.ExpressIcon,
  'MongoDB': Icons.MongodbIcon,
  'MySQL': Icons.MysqlIcon,
  'PostgreSQL': Icons.PostgresqlIcon,
  'Git': Icons.GitIcon,
  'Docker': Icons.DockerIcon,
};

export const TechChip = ({ tech, style }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const IconComponent = iconMap[tech];
  const isActive = hovered || clicked;

  return (
    <button
      className={classes(styles.chip, isActive && styles.chipActive)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
      aria-label={tech}
      style={style}
    >
      <span className={styles.chipInner}>
        <span className={styles.chipText}>{tech}</span>
        {IconComponent && (
          <span className={styles.chipIcon}>
            <IconComponent />
          </span>
        )}
      </span>
    </button>
  );
};
