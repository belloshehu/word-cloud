export interface TextInputProps {
  tokens: string[];
  text: string;
  setText: (text: string) => void;
  textTokenizer: () => void;
}

export type Token = string[];

export interface WordFrequency {
  [key: string]: number;
}

export interface WordFrequencyProps {
  word: string;
  frequency: number;
}

export interface WordFrequencyListProps {
  words: WordFrequency;
}

export interface ButtonProps {
  buttonText: string;
  clickHandler: () => void;
}
