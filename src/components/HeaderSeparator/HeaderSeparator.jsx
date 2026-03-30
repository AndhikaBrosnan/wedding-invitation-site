import React from 'react'
import { MdFavorite } from 'react-icons/md'

import styles from './styles.module.css'

const HeaderSeparator = () => {
  return (
    <div className={styles.separatorContainer}>
      <div className={styles.separatorLine} />
      <MdFavorite className={styles.separatorIcon} />
      <div className={styles.separatorLine} />
    </div>
  )
}

export default HeaderSeparator
