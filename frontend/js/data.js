let weaponList = [];

function loadWeapons(callback) {
  fetch('weapons.json')
    .then(res => res.json())
    .then(data => {
      weaponList = data;
      console.log(`✅ Loaded ${weaponList.length} weapons`);
      if (callback) callback();
    })
    .catch(err => {
      console.error("❌ Failed to load weapons.json", err);
    });
}

function getWeaponNames() {
  return weaponList.map(w => w.name);
}

function getWeaponData(name) {
  return weaponList.find(w => w.name === name) || null;
}
