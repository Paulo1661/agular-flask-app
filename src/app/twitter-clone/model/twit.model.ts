export interface Twit {
  id: string,
  user: string,
  date: Date,
  text: string
  nbrlikes?: number | 0,
  sentiment?: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL'
}
