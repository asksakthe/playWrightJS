enum EnvironmenT {
    'Local',
    'DEV',
    'Staging',
    'Prod'
}

function runTests (env: EnvironmenT): void {
    switch(env){
        case EnvironmenT.Local:
            console.log(`Tests are running in Local: ${EnvironmenT.Local} envionment`)
            break
        case EnvironmenT.DEV:
            console.log(`Tests are running in DEV: ${EnvironmenT.DEV} envionment`)
            break
            case EnvironmenT.Staging:
            console.log(`Tests are running in S : ${EnvironmenT.Staging} envionment`)
            break
            case EnvironmenT.Prod:
            console.log(`Tests are running in P : ${EnvironmenT.Prod} envionment`)
            break
        
    }
} 

let env = EnvironmenT.DEV;
runTests(env)