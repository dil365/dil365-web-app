export type LAWValue = {
  sl: string,
  tl: string,
  word: string,
  description: string,
  syntactic: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'preposition' | 'conjunction' | 'interjection'
  level: 'A1' | 'B1' | 'C1' | 'A2' | 'B2' | 'C2',
  category?: string,
  example: string,
}

export type CardComponentPropsType = {
  value: LAWValue
}

