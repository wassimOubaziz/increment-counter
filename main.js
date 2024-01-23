const counters = document.querySelectorAll(".container .social h1");

counters.forEach((counter) => {
  counter.innerHTML = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 200;
    if (c < target) {
      counter.innerText = `${Math.floor(c + increment)}`;
      setTimeout(updateCounter, 1);
    }
  };
  updateCounter();
});
