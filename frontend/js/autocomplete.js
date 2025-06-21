function setupAutocomplete() {
  const input = document.getElementById("weapon");
  const suggestionsBox = document.getElementById("suggestions");

  input.addEventListener("input", function () {
    const query = input.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (query.length === 0) return;

    const matches = getWeaponNames().filter(name =>
      name.toLowerCase().includes(query)
    );

    matches.forEach(name => {
      const item = document.createElement("div");
      item.innerText = name;
      item.classList.add("suggestion-item");

      item.addEventListener("click", () => {
        input.value = name;
        suggestionsBox.innerHTML = "";
      });

      suggestionsBox.appendChild(item);
    });
  });
}
