interface OutputMod {
    mod: string;
    min: number;
    max: number;
    chance?: number;
    param?: number;
}

export interface Formula {
    description?: string;
    inputs: string[];
    output: string;
    mods?: OutputMod[];
}

export function checkFormulaeDuplicates(formulae: Formula[]) {
    const formulaeClone = JSON.parse(JSON.stringify(formulae))

    formulaeClone.forEach(formula => {
        const formulaInputs = formula.inputs.sort().join(",");

        const c = formulaeClone.filter(f => {
            return f.inputs.sort().join(",") === formulaInputs;
        }).length;

        if (c > 1) {
            throw new Error(`Duplicate formula found: ${formulaInputs} -> ${formula.output}`);
        }
    });
}

