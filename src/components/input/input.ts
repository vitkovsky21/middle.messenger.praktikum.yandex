import Block from '../../core/Block';

interface InputProps {
  onBlur?: () => void;
  onFocus?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  minlength?: string;
  id?: string;
  error?: string;
}

export class Input extends Block {
  constructor({
    onBlur = () => {}, onFocus = () => {}, type = 'text', minlength, error, id, placeholder, value,
  }: InputProps) {
    super({
      type, placeholder, value, error, minlength, id, events: { blur: onBlur, focus: onFocus },
    });
  }

  protected render(): string {
    return `
        <input 
        type="{{type}}" 
        placeholder="{{placeholder}}" 
        value="{{value}}"
        class="field"/>
    `;
  }
}
