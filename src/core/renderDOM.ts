import Block from './Block';

export default function renderDOM(block: Block) {
  const root = document.querySelector('#app');

  root!.textContent = '';
  root!.appendChild(block.getContent());
}
