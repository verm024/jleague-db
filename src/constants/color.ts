export type color =
  | 'white'
  | 'grey'
  | 'black'
  | 'red'
  | 'blue'
  | 'yellow'
  | 'green';

export const colorMapper: { [key in color]: string } = {
  white: '#FEFAF6',
  grey: '#EEEDEB',
  black: '#151515',
  red: '#EE4E4E',
  blue: '#5AB2FF',
  yellow: '#FFC100',
  green: '#A1DD70',
};
