
const routesMap = {};

routesMap.AB = 1;
routesMap.AC = 4;
routesMap.AD = 10;
routesMap.BE = 3;
routesMap.CD = 4;
routesMap.CF = 2;
routesMap.DE = 1;
routesMap.EB = 3;
routesMap.EA = 2;
routesMap.FD = 1;


function findRouteCost(routes, cost, nextRoute) {

    if (routes.length === 2 || nextRoute && nextRoute.length === 2) {
        routes = nextRoute.length === 2 ? nextRoute : routes;
        const c = routesMap[routes.join('')];
        if (c) {
            cost = c + cost;
        }
    } else {

        if (nextRoute === undefined) {
            currentRoute = `${routes[i]}${routes[i + 1]}`;
        } else if (nextRoute) {

        } else {

        }

        for (let i = 0; i < routes.length - 2; i++) {

            const c = routesMap[currentRoute];

            if (c) {
                cost = c + cost;
            }
        }

        nextRoute = ''
    }

    return cost ? cost : 'No Such Route';
}

console.log(findRouteCost([A, B, E], 0))