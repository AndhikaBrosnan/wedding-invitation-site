import React from 'react'
import {
  MdCalendarToday,
  MdLocationOn,
  MdQueryBuilder,
} from 'react-icons/md'
import styles from './styles.module.css'

const EventDetailCard = ({
  eventName,
  eventDate,
  eventTime,
  eventVenue,
  venueAddress,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.eventName}>{eventName}</p>
      <div className={styles.detailContainer}>
        <MdCalendarToday />
        <span className={styles.detailText}>{eventDate}</span>
      </div>
      <div className={styles.detailContainer}>
        <MdQueryBuilder />
        <span className={styles.detailText}>{eventTime}</span>
      </div>
      <div className={styles.detailContainer}>
        <MdLocationOn />
        <span className={styles.detailText}>{eventVenue}</span>
      </div>
      <p className={styles.addressText}>{venueAddress}</p>
    </div>
  )
}

export default EventDetailCard
