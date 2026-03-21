const formulae = [
    {inputs: ["weap", "isc"], output: "usetype,uni"},
    {inputs: ["armo", "isc"], output: "usetype,uni"},
    {inputs: ["amul", "isc"], output: "usetype,uni"},
    {inputs: ["ring", "isc"], output: "usetype,uni"},

    // Charms
    {inputs: ["cm3", "isc"], output: "usetype,uni"},
    {inputs: ["cm3", "gpb", "isc"], output: "Cold Rupture"},
    {inputs: ["cm3", "gpr", "isc"], output: "Flame Rift"},
    {inputs: ["cm3", "gpy", "isc"], output: "Crack of the Heavens"},
    {inputs: ["cm3", "gpg", "isc"], output: "Rotting Fissure"},
    {inputs: ["cm3", "skz", "isc"], output: "Bone Break"},
    {inputs: ["cm2", "gpv", "isc"], output: "Black Cleft"},
    {inputs: ["cm3", "gpb", "jew", "isc"], output: "Crafted Cold Rupture"},
    {inputs: ["cm3", "gpr", "jew", "isc"], output: "Crafted Flame Rift"},
    {inputs: ["cm3", "gpy", "jew", "isc"], output: "Crafted Crack of the Heavens"},
    {inputs: ["cm3", "gpg", "jew", "isc"], output: "Crafted Rotting Fissure"},
    {inputs: ["cm3", "skz", "jew", "isc"], output: "Crafted Bone Break"},
    {inputs: ["cm3", "gpv", "jew", "isc"], output: "Crafted Black Cleft"},

    // Jewels
    {inputs: ["jew", "isc"], output: "usetype,uni"},
];

const spawns = [];

if (config.annihilusEnabled) {
    spawns.push("Annihilus");
    formulae.push({inputs: ["cm1", "isc"], output: "Annihilus"});
}

if (config.hellfireTorchEnabled) {
    spawns.push("Hellfire Torch");
    formulae.push({inputs: ["cm2", "isc"], output: "Hellfire Torch"});
}

if (config.colossalJewelsEnabled) {
    [
        "Defender's Bile",
        "Guardian's Thunder",
        "Protector's Frost",
        "Defender's Fire",
        "Protector's Stone",
        "Guardian's Light",
    ].forEach(jewel => spawns.push(jewel));

    [
        {inputs: ["jew", "gpg", "isc"], output: "Defender's Bile"},
        {inputs: ["jew", "gpy", "isc"], output: "Guardian's Thunder"},
        {inputs: ["jew", "gpb", "isc"], output: "Protector's Frost"},
        {inputs: ["jew", "gpr", "isc"], output: "Defender's Fire"},
        {inputs: ["jew", "skz", "isc"], output: "Protector's Stone"},
        {inputs: ["jew", "gpv", "isc"], output: "Guardian's Light"},
    ].forEach(f => formulae.push(f));
}

if (spawns.length > 0) {
    const filename = "global\\excel\\uniqueitems.txt";
    const content = D2RMM.readTsv(filename);

    content.rows.forEach(row => {
        if (spawns.includes(row["index"])) {
            row["spawnable"] = "1";
            row["lvl"] = "85";
        }
    });

    D2RMM.writeTsv(filename, content);
}

export default formulae;
