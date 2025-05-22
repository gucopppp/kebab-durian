
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = (' WISHING U ALL THE BESTT TODAY AND ALWAYS,HOPEE U HAVE AN AMAZINGGG DAYY FILLED WITH FUNN, LAUGHTER, ANDD GREATTT MEMORIES“').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};