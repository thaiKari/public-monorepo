import './buttons.module.css';

/* eslint-disable-next-line */
export interface ButtonsProps {}

export function PinkButton(props: ButtonsProps) {
  return (
    <button style={{backgroundColor:'pink'}}>
      click me
    </button>
  );
}

export function GreenButton(props: ButtonsProps) {
  return (
    <button style={{backgroundColor:'green'}}>
      click meee
    </button>
  );
}
