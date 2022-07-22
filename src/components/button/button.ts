import Block from '../../core/Block';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export class Button extends Block {
  constructor({ text, onClick }: ButtonProps) {
    super({ text, events: { click: onClick } });
  }

  protected render(): string {
    return `
      <button class="btn" type="button">{{text}}</button>
    `;
  }
}
