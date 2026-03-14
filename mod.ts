import etherealFormulae from "./formulae/ethereal";
import miscFormulae from "./formulae/misc";
import portalFormulae from "./formulae/portal";
import rerollingFormulae from "./formulae/rerolling";
import setFormulae from "./formulae/set";
import socketFormulae from "./formulae/socket";
import superiorFormulae from "./formulae/superior";
import uniqueFormulae from "./formulae/unique";
import upgradeFormulae from "./formulae/upgrade";

function appendFormulae(formulae: Formula[]) {
    const filename = "global\\excel\\cubemain.txt";
    const content = D2RMM.readTsv(filename);

    formulae.forEach(f => {
        const row = {
            description: f.description,
            enabled: 1,
            version: 100,
            numinputs: f.inputs.length,
            plvl: 99,
            ilvl: 99,
            output: f.output
        };

        for (let i = 0; i < f.inputs.length; i++) {
            row[`input ${i + 1}`] = f.inputs[i];
        }

        if ("mods" in f) {
            for (let i = 0; i < f.mods.length; i++) {
                row[`mod ${i + 1}`] = f.mods[i].mod;
                row[`mod ${i + 1} min`] = f.mods[i].min;
                row[`mod ${i + 1} max`] = f.mods[i].max;

                if ("chance" in f.mods[i]) {
                    row[`mod ${i + 1} chance`] = f.mods[i].chance;
                }

                if ("param" in f.mods[i]) {
                    row[`mod ${i + 1} param`] = f.mods[i].param;
                }
            }
        }

        content.rows.push(row);
    });

    D2RMM.writeTsv(filename, content);
}

function checkFormulaDuplicates(formulae: Formula[]) {
    formulae.forEach(formula => {
        const c = formulae.filter(f => {
            return f.inputs.sort().join(",") === formula.inputs.sort().join(",");
        }).length;

        if (c > 1) {
            throw new Error(`Duplicate formula found: ${formula.inputs.join(",")} -> ${formula.output}`);
        }
    });
}

const formulae = [
    ...etherealFormulae,
    ...miscFormulae,
    ...portalFormulae,
    ...rerollingFormulae,
    ...setFormulae,
    ...socketFormulae,
    ...superiorFormulae,
    ...uniqueFormulae,
    ...upgradeFormulae
];

checkFormulaDuplicates(formulae);

const filename = "global\\excel\\uniqueitems.txt";
const content = D2RMM.readTsv(filename);

const spawnableItems = [
    "Hellfire Torch",
    "Annihilus",
    "Defender's Bile",
    "Guardian's Thunder",
    "Protector's Frost",
    "Defender's Fire",
    "Protector's Stone",
    "Guardian's Light",
];

content.rows.forEach(row => {
    if (spawnableItems.includes(row["index"])) {
        row["spawnable"] = "1";
        row["lvl"] = "85";
    }
});

D2RMM.writeTsv(filename, content);

appendFormulae(formulae);
