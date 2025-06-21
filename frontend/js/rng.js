window.addEventListener("DOMContentLoaded", function () {
  loadWeapons(() => {
    setupAutocomplete(); // Call after data is loaded
    console.log("✅ RNG Ready");
  });
});

document.getElementById("rollButton").addEventListener("click", function () {
  const weaponName = document.getElementById("weapon").value.trim();

  const weaponData = getWeaponData(weaponName);
  if (!weaponData) {
    document.getElementById("result").innerText = "❌ Weapon not found!";
    return;
  }

  const rolledStats = generateRivenStats(weaponData);
  document.getElementById("result").innerText = rolledStats.join(", ");
});

function generateRivenStats(weapon) {
  const disposition = weapon.disposition || 1.0;
  const possibleStats = ["Damage", "Multishot", "Critical Chance", "Status Chance", "Reload Speed"];
  const rolled = [];

  while (rolled.length < 3) {
    const stat = possibleStats[Math.floor(Math.random() * possibleStats.length)];
    if (!rolled.some(s => s.startsWith(stat))) {
      const value = (Math.random() * 100 * disposition).toFixed(1);
      rolled.push(`${stat} +${value}%`);
    }
  }

  return rolled;
}
