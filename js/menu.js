(() => {
  const refs = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openMenuBtn: document.querySelector('[data-menu-open]'),
    // Додати атрибут data-menu-close на кнопку закриття
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-menu]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenulBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.menu.classList.toggle('is-open');
  }
})();