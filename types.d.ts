declare interface OutputMod {
    mod: string;
    min: number;
    max: number;
    chance?: number;
    param?: number;
}

declare interface Formula {
    description?: string;
    inputs: string[];
    output: string;
    mods?: OutputMod[];
}
