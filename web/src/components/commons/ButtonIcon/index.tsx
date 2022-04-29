import './styles.css'

export interface IButtonIcon {
  text: string;
}

export function ButtonIcon({ text }: IButtonIcon) {
  return (
    <button className='btn btn-primary btn-icon'>
      <h6>{text}</h6>
    </button>
  );
}

