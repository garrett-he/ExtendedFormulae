import {checkFormulaeDuplicates, Formula} from "./lib/formulae";
import {appendFormulae} from "./lib/cubemain";

import etherealFormulae from "./formulae/ethereal";
import magicalFormulae from "./formulae/magical/index";
import miscFormulae from "./formulae/misc";
import portalFormulae from "./formulae/portal";
import rerollingFormulae from "./formulae/rerolling";
import setFormulae from "./formulae/set";
import socketFormulae from "./formulae/socket";
import superiorFormulae from "./formulae/superior";
import uniqueFormulae from "./formulae/unique";
import upgradeFormulae from "./formulae/upgrade";


const formulae: Formula[] = [
    ...etherealFormulae,
    ...magicalFormulae,
    ...miscFormulae,
    ...portalFormulae,
    ...rerollingFormulae,
    ...setFormulae,
    ...socketFormulae,
    ...superiorFormulae,
    ...uniqueFormulae,
    ...upgradeFormulae
];

checkFormulaeDuplicates(formulae);
appendFormulae(formulae);
