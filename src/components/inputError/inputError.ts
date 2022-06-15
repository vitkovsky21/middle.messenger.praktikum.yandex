import Block from '../../core/Block';

interface InputProps {
  error?: string;
}

export class InputError extends Block {
  constructor({ error }: InputProps) {
    super({ error });
  }

  protected render(): string {
    return `
        <div class="error">{{#if error}}{{error}}{{/if}}</div>
    `;
  }
}
