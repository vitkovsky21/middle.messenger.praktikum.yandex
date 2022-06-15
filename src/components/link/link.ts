import Block from '../../core/Block';

interface LinkProps {
  text: string;
  to: string;
  onClick: () => void;
}

export class Link extends Block {
  constructor({text, to, onClick}: LinkProps) {
    super({text, to, events: { click: onClick }});
  }

  render() {
    return `<a class="btn link">{{text}}</a>`;
  }
}