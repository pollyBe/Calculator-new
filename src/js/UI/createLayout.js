import { createElement } from './createElement';
import { createCalculatorView } from './createCalculatorUi';

const body = document.querySelector('body');

export const createLayout = () => {
  const header = createElement('header', { class: 'header' });
  const themeButton = createElement(
    'button',
    {
      class: 'theme-button',
      type: 'button',
    },
    ['Switch to Dark Theme']
  );
  themeButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      themeButton.textContent = 'Switch to Light Theme';
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      themeButton.textContent = 'Switch to Dark Theme';
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  });

  header.append(themeButton);
  const main = createElement('main', { class: 'main' });
  main.innerHTML = createCalculatorView();
  const footer = createElement('footer', { class: 'footer' });
  const date = createElement('div', { class: 'date' });
  const currentYear = new Date().getFullYear();
  date.textContent = `${currentYear}`;
  const author = createElement('div', { class: 'author' });
  const authorName = createElement(
    'a',
    { class: 'author-name', href: 'https://github.com/pollyBe' },
    ['Created by Polina Belash']
  );

  author.append(authorName);
  footer.append(date, author);

  body.append(header, main, footer);
};
