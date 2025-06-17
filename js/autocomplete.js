const weaponInput = document.getElementById("weapon");
const suggestionsBox = document.getElementById("suggestions");

weaponInput.addEventListener("input", function() {
    const query = weaponInput.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (query.length === 0) return;

    const filteredWeapons = weaponList.filter(weapon => weapon.toLowerCase().includes(query));

    filteredWeapons.forEach(weapon => {
        const suggestion = document.createElement("div");
        suggestion.innerText = weapon;
        suggestion.classList.add("suggestion-item");
        suggestionsBox.appendChild(suggestion);

        suggestion.addEventListener("click", function() {
            weaponInput.value = weapon;
            suggestionsBox.innerHTML = "";
        });
    });
});