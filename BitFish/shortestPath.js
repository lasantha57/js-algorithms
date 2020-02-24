

function ShortestPath(strArr) {

    const nodeCount = parseInt(strArr.splice(0, 1));
    const nodes = strArr.splice(0, nodeCount);
    const routes = strArr.map((route) => route.split('-'));
    const startNode = nodes[0];
    const endNode = nodes[nodes.length - 1];

    const bestPath = `${startNode}-${endNode}`;

    if (strArr.indexOf(bestPath) !== -1) {
        return bestPath;
    }

    const paths = [];

    findPaths([startNode]);

    function findPaths(pathSoFar) {
        // pathSoFar = [a, b, ... n] where a is starting point and n is current node
        const currentNode = pathSoFar[pathSoFar.length - 1];

        // if(current == endNode), path complete
        if (currentNode === endNode) {
            paths.push(pathSoFar.slice());
            return;
        }

        for (let i = 0; i < routes.length; i++) {
            const route = routes[i];

            const firstRoute = route[0];
            const nextRoute = route[1];

            if (currentNode === firstRoute || currentNode === nextRoute) {

                const nextNode = (currentNode === firstRoute ? nextRoute : firstRoute);

                if (pathSoFar.indexOf(nextNode) === -1) {
                    pathSoFar.push(nextNode);
                    findPaths(pathSoFar.slice());
                    pathSoFar.pop();
                }
            }
        }
    }

    const shortestPathNodes = paths.sort((a, b) => b.length - a.length).pop();

    if (shortestPathNodes) {
        return shortestPathNodes.join('-');
    } else {
        return -1;
    }
}

console.log(ShortestPath(["5", "A", "B", "C", "D", "F", "A-B", "A-C", "B-C", "C-D", "D-F"]))