<template>
    <div class="fixed top-0 bottom-0 left-0 right-0">
        <div>
            <div class="h-screen flex justify-center items-center">
                <svg id="connections">
                    <path v-for="connection in connections" :d="connection.path" stroke="#8cb0ff" stroke-width="2" fill="none"></path>
                    <path v-if="connectionState.active" :d="connectionState.tempPath" stroke="#a9a9a9" stroke-width="2" fill="none"></path>
                </svg>
                <div id="nodesContainer">
                    <div v-for="(node, index) in nodes" class="node" :style="`left:${node.x}px; top:${node.y}px;`" :id="index" @mousedown="selectModule(index)" @dblclick="openPopup(index, node)">
                        <div class="endpoint in" @mouseup="finishConnection(index)"></div>
                        <div class="endpoint out" @mousedown.stop="initiateConnection(index)"></div>
                        <span>{{ node.name }}</span>
                    </div>
                </div>
            </div>
            <Teleport to="body">
                <ModulePopup @close="showEditPopup = false" v-if="showEditPopup" :module-index="popupModule" />
            </Teleport>
    
        </div>
    </div>
</template>

<script setup>
const currentView = useCurrentView();
currentView.value = 'modules';

const appModules = useAppModules();

const nodes = useNodes();
const connections = useConnections();
const variables = useVariables();

const connectionState = ref({
    start: null,
    end: null, 
    active: false, 
    tempPath: null, 
})

const showEditPopup = ref(false);
const popupModule = ref(null)
const openPopup = (index, module) => {
    if(appModules.value[module.type].editable) {
        popupModule.value = index;
        showEditPopup.value = true;
    }
}


const activeModule = ref();

function createNode(appModule, mouseX, mouseY) {
    nodes.value.push({
        name: appModules.value[appModule].name,
        x: mouseX - 75,
        y: mouseY - 25,
        type: appModule,
        startScript: appModules.value[appModule].startScript,
        endScript: appModules.value[appModule].endScript,
        data: [],
        variables: [],
        inputs: [],
        output: '',
    });

    var variableId = 'var-' + Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
    console.log(variableId)
    console.log(variables.value)
    while(variables.value.has(variableId)) variableId = 'var-' + Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
    variables.value.set(variableId, appModules.value[appModule].output ? appModules.value[appModule].output : '');
    nodes.value[nodes.value.length - 1].output = variableId;
    console.log(variables.value)
    console.log(nodes.value[nodes.value.length - 1].output);
}

const selectModule = (index) => {
    if(!connectionState.value.active) {
        activeModule.value = index;
        console.log("selected")
    }
}

const initiateConnection = (index) => {
    connectionState.value.start = index;
    connectionState.value.active = true;
}

const finishConnection = (index) => {
    if(connectionState.value.active && connectionState.value.start !== index)
        {
            connectionState.value.end = index;
            addConnection(connectionState.value.start, connectionState.value.end);
            nodes.value[connectionState.value.start].variables.forEach((variable) => {
                nodes.value[connectionState.value.end].variables.push(variable);
            })
            nodes.value[connectionState.value.end].variables.push(nodes.value[connectionState.value.start].output);
            connectionState.value.start = connectionState.value.end =  null;
        }
}

defineExpose({ createNode });

const addConnection = (start, end) => {
        const startModule = document.getElementById(start);
        const endModule = document.getElementById(end);
        console.log("creating connection ")


        const xs = startModule.offsetLeft + startModule.offsetWidth;
        const xe = endModule.offsetLeft;

        const ys = startModule.offsetTop + startModule.offsetHeight / 2;
        const ye = endModule.offsetTop + endModule.offsetHeight / 2;

        const curveX = (xe - xs) * 0.5;
        const curveY = (ye - ys) * 0.1;

        const newConnection = {
            startModule: start,
            endModule: end,
            path: `M${xs},${ys} C${xs + curveX},${ys + curveY} ${xe - curveX},${ye + curveY} ${xe},${ye}`,
        }

        connections.value.push(newConnection);
    }

    const updateConnection = (index) => {
        const startModule = document.getElementById(connections.value[index].startModule);
        const endModule = document.getElementById(connections.value[index].endModule);

        const xs = startModule.offsetLeft + startModule.offsetWidth;
        const xe = endModule.offsetLeft;

        const ys = startModule.offsetTop + startModule.offsetHeight / 2;
        const ye = endModule.offsetTop + endModule.offsetHeight / 2;

        const curveX = (xe - xs) * 0.5;
        const curveY = (ye - ys) * 0.1;

        connections.value[index].path = `M${xs},${ys} C${xs + curveX},${ys + curveY} ${xe - curveX},${ye + curveY} ${xe},${ye}`;
        console.log("updated connection");
    }

onMounted(() => {

    document.addEventListener("mousemove", (event) => {
        if (activeModule.value) {
            nodes.value[activeModule.value].x = `${event.clientX - 75}`;
            nodes.value[activeModule.value].y  = `${event.clientY - 25}`;

            for(let i=0; i<connections.value.length; i++) {
                if(connections.value[i].endModule == activeModule.value  || connections.value[i].startModule == activeModule.value)
                    updateConnection(i);
            }
        }
        if(connectionState.value.active) {
            const startModule = document.getElementById(connectionState.value.start);

            const xs = startModule.offsetLeft + startModule.offsetWidth;
            const ys = startModule.offsetTop + startModule.offsetHeight / 2;

            const xe = event.clientX;
            const ye = event.clientY;

            const curveX = (xe - xs) * 0.5;
            const curveY = (ye - ys) * 0.1;

            connectionState.value.tempPath = `M${xs},${ys} C${xs + curveX},${ys + curveY} ${xe - curveX},${ye + curveY} ${xe},${ye}`;

        }
    });

    document.addEventListener("mouseup", () =>{
        activeModule.value = null;
        connectionState.value.active = false;
        connectionState.value.tempPath = null;
    })
})

</script>

<style scoped>
#connections {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.node {
    user-select: none;
    padding: 0px 40px;
    width: 150px;
    height: 50px;
    border: 2px solid #cdcdcd;
    display: inline-flex;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    position: absolute;
    cursor: grab;
    font-family: 'Rubik', sans-serif;
    color: #3b3b3b;
    font-size: 15px;
}

.endpoint {
    width: 15px;
    height: 15px;
    border: 2px solid #8cb0ff;
    background-color: #fff;
    position: absolute;
    cursor: pointer;
}

.endpoint.in {
    left: -8px;
    border-radius: 10px;
}

.endpoint.out {
    right: -8px;
    border-radius: 10px;
}

.node:active {
    cursor: grabbing;
}
</style>