var EnvironmenT;
(function (EnvironmenT) {
    EnvironmenT[EnvironmenT["Local"] = 0] = "Local";
    EnvironmenT[EnvironmenT["DEV"] = 1] = "DEV";
    EnvironmenT[EnvironmenT["Staging"] = 2] = "Staging";
    EnvironmenT[EnvironmenT["Prod"] = 3] = "Prod";
})(EnvironmenT || (EnvironmenT = {}));
function runTests(env) {
    switch (env) {
        case EnvironmenT.Local:
            console.log("Tests are running in Local: ".concat(EnvironmenT.Local, " envionment"));
            break;
        case EnvironmenT.DEV:
            console.log("Tests are running in DEV: ".concat(EnvironmenT.DEV, " envionment"));
            break;
        case EnvironmenT.Staging:
            console.log("Tests are running in S : ".concat(EnvironmenT.Staging, " envionment"));
            break;
        case EnvironmenT.Prod:
            console.log("Tests are running in P : ".concat(EnvironmenT.Prod, " envionment"));
            break;
    }
}
var env = EnvironmenT.DEV;
runTests(env);
