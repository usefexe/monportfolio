import { useId, useRef } from 'react';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import { ChevronDownIcon } from './icons';
import styles from './faq-item.module.css';

export const FaqItem = ({ question, answer, className, open = false, onToggle, style }) => {
  const contentRef = useRef();
  const id = useId();

  return (
    <div className={classes(styles.item, className)} data-open={open} style={style}>
      <button
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => onToggle?.()}
      >
        <Text className={styles.question} size="l" as="span" weight="medium">
          {question}
        </Text>
        <ChevronDownIcon className={styles.chevron} />
      </button>
      <div
        className={styles.content}
        id={id}
        role="region"
        style={{ '--contentHeight': open ? `${contentRef.current?.scrollHeight}px` : '0px' }}
      >
        <div className={styles.contentInner} ref={contentRef}>
          <Text size="m" as="p" secondary>
            {answer}
          </Text>
        </div>
      </div>
    </div>
  );
};
