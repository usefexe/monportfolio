import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { classes, cssProps, numToMs } from '~/utils/style';
import { CheckIcon } from './icons';
import styles from './solution-card.module.css';

export const SolutionCard = ({
  icon: Icon,
  title,
  description,
  features,
  index = 0,
  featured = false,
  className,
}) => (
  <div
    className={classes(styles.card, featured && styles.cardFeatured, className)}
    style={cssProps({ delay: numToMs(index * 80) })}
  >
    <div className={styles.iconWrap}>
      <Icon className={styles.icon} />
    </div>
    <Heading className={styles.title} level={featured ? 3 : 4} as="h3">
      {title}
    </Heading>
    <Text className={styles.description} size={featured ? 'l' : 'm'} as="p" secondary>
      {description}
    </Text>
    {!!features?.length && (
      <ul className={styles.features}>
        {features.map(feature => (
          <li className={styles.feature} key={feature}>
            <CheckIcon className={styles.featureIcon} size={featured ? 16 : 14} />
            <Text size="s" as="span">
              {feature}
            </Text>
          </li>
        ))}
      </ul>
    )}
  </div>
);
