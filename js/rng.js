document.getElementById("rollButton").addEventListener("click", function() {
    const weapon = document.getElementById("weapon").value.trim();

    if (!weaponList.includes(weapon)) {
        document.getElementById("result").innerText = "Weapon not found!";
        return;
    }

    const stats = generateRivenStats(weapon);
    document.getElementById("result").innerText = stats.join(", ");
});

function generateRivenStats(weapon) {
    const possibleStats = ["Damage", "Multishot", "Critical Chance", "Status Chance", "Reload Speed"];
    let rolledStats = [];

    while (rolledStats.length < 3) {
        const stat = possibleStats[Math.floor(Math.random() * possibleStats.length)];
        if (!rolledStats.includes(stat)) {
            rolledStats.push(stat);
        }
    }

    return rolledStats;
}
