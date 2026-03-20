import {Formula} from "./formulae";

export function appendFormulae(formulae: Formula[]) {
    const filename = "global\\excel\\cubemain.txt";
    const content = D2RMM.readTsv(filename);

    formulae.forEach(f => {
        const row = {
            description: f.description || "Extended Formulae",
            enabled: 1,
            version: 100,
            numinputs: f.inputs.length,
            lvl: 99,
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
