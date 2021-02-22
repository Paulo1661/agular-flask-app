export interface SentimentPrediction {
  label: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL',
  score: number,
  elapsedTime: number
}
