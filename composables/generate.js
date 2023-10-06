const convertList = (modules, connections) => {
    const adjacencyList = new Map();

    for(let key = 0; key < modules.length; key++) {
        if(!adjacencyList.has(key)) {
            adjacencyList.set(key, []);
        }
    }

    connections.forEach(connection => {
        adjacencyList.get(connection.startModule).push(connection.endModule);
    });

    return adjacencyList;
}

const dfs = (adjacencyList, modules, variables) => {
    const added = new Set();
    var script = '';

    console.log(modules[0])

    const add = (module) => {
        if(!added.has(module)) {
            added.add(module);
            console.log(module)
            const neighbours = adjacencyList.get(module);
            var strtScript;
            strtScript = modules[module].startScript.replace('<variable>', variables.get(modules[module].inputs[0]));
            console.log(module, strtScript)
            script += strtScript;
            neighbours.forEach((neighbour) => {
                add(neighbour);
            })
            script += modules[module].endScript;
        }
    }

    add(0);

    return script;
}

export const generateScript = (modules, connections, variables) => {
    const adjacencyList = convertList(modules, connections);
    console.log(modules)
    return modules.length != 0 ? dfs(adjacencyList, modules, variables) : '';
}

