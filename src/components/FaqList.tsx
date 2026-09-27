import clsx from 'clsx'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'
import { useState } from 'react'
import { DEFAULT_FAQ, type FaqItem } from '../lib/content'
import styles from './FaqList.module.css'

interface FaqListProps {
  items?: readonly FaqItem[]
}

export function FaqList({ items = DEFAULT_FAQ }: FaqListProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <section className={styles.section} aria-labelledby="faq-heading" data-feat-id="feat_feat-f038b237">
      <h2 id="faq-heading" className={styles.heading}>
        <MessageCircleQuestion size={22} className={styles.headingIcon} aria-hidden="true" />
        자주 묻는 질문
      </h2>
      <ul className={styles.list}>
        {items.map((item) => {
          const open = openId === item.id
          const panelId = `faq-panel-${item.id}`
          return (
            <li key={item.id} className={styles.item}>
              <h3>
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  {item.question}
                  <ChevronDown size={18} className={clsx(styles.chevron, open && styles.chevronOpen)} aria-hidden="true" />
                </button>
              </h3>
              {open && (
                <p id={panelId} className={styles.answer}>
                  {item.answer}
                </p>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
