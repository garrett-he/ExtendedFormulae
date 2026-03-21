const prefixes = [
    {name: "Fine", id: 256, inputs: ["skz"]},
    {name: "Serpent's", id: 303, inputs: ["mpot"]},
    {name: "Shimmering", id: 322, inputs: ["gpw"]},
    {name: "Sapphire", id: 349, inputs: ["gpb"]},
    {name: "Ruby", id: 369, inputs: ["gpr"]},
    {name: "Amber", id: 388, inputs: ["gpy"]},
    {name: "Emerald", id: 408, inputs: ["gpg"]},
    {name: "Hibernal", id: 625, inputs: ["glb"]},
    {name: "Flaming", id: 637, inputs: ["glr"]},
    {name: "Shocking", id: 648, inputs: ["gly"]},
    {name: "Pestilent", id: 661, inputs: ["glg"]},
];

const suffixes = [
    {name: "Balance", id: 267, inputs: ["yps"]},
    {name: "Greed", id: 284, inputs: ["key"]},
    {name: "Good Luck", id: 291, inputs: ["wms"]},
    {name: "Vita", id: 349, inputs: ["hpot"]},
    {name: "Inertia", id: 401, inputs: ["vps"]},
    {name: "Anthrax", id: 693, inputs: ["gsg"]},
    {name: "Winter", id: 705, inputs: ["gsb"]},
    {name: "Incineration", id: 717, inputs: ["gsr"]},
    {name: "Storms", id: 729, inputs: ["gsy"]},
];

const formulae = [];

prefixes.forEach(prefix => {
    suffixes.forEach(suffix => {
        formulae.push({
            inputs: ["cm1", ...prefix.inputs, ...suffix.inputs],
            output: `usetype,mag,pre=${prefix.id},suf=${suffix.id}`
        });
    });
});

prefixes.forEach(prefix => {
    formulae.push({
        inputs: ["cm1", ...prefix.inputs],
        output: `usetype,mag,pre=${prefix.id}`
    });
});

suffixes.forEach(suffix => {
    formulae.push({
        inputs: ["cm1", ...suffix.inputs],
        output: `usetype,mag,suf=${suffix.id}`
    });
});

export default formulae;
