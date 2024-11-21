import dayjs from 'dayjs'

export const formatDate = (timestamp: number) => dayjs(timestamp).format('ddd MMM DD HH:mm:ss')
