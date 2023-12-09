//gnavi
const triggers = document.querySelectorAll('.accordion-trigger');
triggers.forEach((trigger) => {
  const dataPanel = trigger.dataset.panel;
  const panel = document.getElementById(dataPanel);

  trigger.addEventListener('click', (e) => {
    const target = e.currentTarget;
    const isOpen = trigger.classList.contains('open');

    if (isOpen) {
      // アコーディオンを閉じる
      target.classList.remove('open');
      panel.classList.add('close');
      panel.animate([{opacity: '1'}, {opacity: '0'}], 200);
    } else {
      // アコーディオンを開く
      target.classList.add('open');
      panel.classList.remove('close');
      panel.animate([{opacity: '0'}, {opacity: '1'}], 400);
    }
  });
});
