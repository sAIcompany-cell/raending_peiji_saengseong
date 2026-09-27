import { useId, useState } from 'react'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import { DEFAULT_FAQ, type FaqItem } from '../lib/content'
import styles from './FaqList.module.css'

export function FaqList({ items = DEFAULT_FAQ }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section data-feat-id="feat_feat-f038b237" className={styles.section} aria-labelledby={`${baseId}-title`}>
      <h2 id={`${baseId}-title`} className={styles.heading}>
        자주 묻는 질문
      </h2>
      <ul className={styles.list}>
        {items.map((item, i) => {
          const expanded = open === i
          const panelId = `${baseId}-panel-${i}`
          const buttonId = `${baseId}-button-${i}`
          return (
            <li key={item.question} className={clsx(styles.item, expanded && styles.expanded)}>
              <h3 className={styles.questionWrap}>
                <button
                  id={buttonId}
                  type="button"
                  className={styles.question}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpen(expanded ? null : i)}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={20} className={styles.chevron} aria-hidden="true" />
                </button>
              </h3>
              <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!expanded} className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
