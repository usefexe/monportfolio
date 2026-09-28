import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { classes, cssProps, numToMs } from '~/utils/style';
import styles from './value-card.module.css';

export const ValueCard = ({ icon: Icon, title, description, index = 0, className }) => (
  <div
    className={classes(styles.card, className)}
    style={cssProps({ delay: numToMs(index * 80) })}
  >
    <Icon className={styles.icon} />
    <Heading className={styles.title} level={4} as="h3">
      {title}
    </Heading>
    <Text className={styles.description} size="s" as="p" secondary>
      {description}
    </Text>
  </div>
);
