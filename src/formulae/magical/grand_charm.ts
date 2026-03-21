const prefixes = [
    {name: "Sharp", id: 253, inputs: ["skz"]},
    {name: "Fletcher's", id: 430, inputs: ["r01"]},
    {name: "Acrobat's", id: 431, inputs: ["r02"]},
    {name: "Harpoonist's", id: 432, inputs: ["r03"]},
    {name: "Burning", id: 442, inputs: ["r04"]},
    {name: "Sparking", id: 443, inputs: ["r05"]},
    {name: "Chilling", id: 444, inputs: ["r06"]},
    {name: "Hexing", id: 454, inputs: ["r07"]},
    {name: "Fungal", id: 455, inputs: ["r08"]},
    {name: "Graverobber's", id: 456, inputs: ["r09"]},
    {name: "Lion Branded", id: 466, inputs: ["r10"]},
    {name: "Captain's", id: 467, inputs: ["r11"]},
    {name: "Preserver's", id: 468, inputs: ["r12"]},
    {name: "Expert's", id: 478, inputs: ["r13"]},
    {name: "Fanatic", id: 479, inputs: ["r14"]},
    {name: "Sounding", id: 480, inputs: ["r15"]},
    {name: "Trainer's", id: 490, inputs: ["r16"]},
    {name: "Spiritual", id: 491, inputs: ["r17"]},
    {name: "Natural", id: 492, inputs: ["r18"]},
    {name: "Entrapping", id: 502, inputs: ["r19"]},
    {name: "Mentalist's", id: 503, inputs: ["r20"]},
    {name: "Shogukusha's", id: 504, inputs: ["r21"]},
    {name: "Chaotic", id: 700, inputs: ["r22"]},
    {name: "Sullied", id: 701, inputs: ["r23"]},
    {name: "Fiendish", id: 702, inputs: ["r24"]},
];

const suffixes = [
    {name: "Balance", id: 265, inputs: ["yps"]},
    {name: "Greed", id: 281, inputs: ["key"]},
    {name: "Vita", id: 339, inputs: ["hpot"]},
    {name: "Inertia", id: 399, inputs: ["vps"]},
];

const formulae = [];

prefixes.forEach(prefix => {
    suffixes.forEach(suffix => {
        formulae.push({
            inputs: ["cm3", ...prefix.inputs, ...suffix.inputs],
            output: `usetype,mag,pre=${prefix.id},suf=${suffix.id}`
        });
    });
});

prefixes.forEach(prefix => {
    formulae.push({
        inputs: ["cm3", ...prefix.inputs],
        output: `usetype,mag,pre=${prefix.id}`
    });
});

suffixes.forEach(suffix => {
    formulae.push({
        inputs: ["cm3", ...suffix.inputs],
        output: `usetype,mag,suf=${suffix.id}`
    });
});

export default formulae;
