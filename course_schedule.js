const prerequisites = [
    [0, 1],
    [1, 2],
    [2, 3],
    // [0, 1],
    // [1, 0],
];

const numCourses = 4;

// {
//     0: [],
//     1: [0],
//     2: [1],
//     3: [2]
// }

// visited: []

function canFinish(numCourses, prerequisites) {
    const map = {};

    for (let i = 0; i < numCourses; i++) {
        map[i] = [];
    }

    for (let i = 0; i < prerequisites.length; i++) {
        map[prerequisites[i][1]].push(prerequisites[i][0]);
    }

    const visited = [];

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(map, visited, i)) {
            return false;
        }
    }

    return true;
}

function dfs(map, visited, i) {
    if (visited[i]) return false;

    visited[i] = true;

    for (let k = 0; k < map[i].length; k++) {
        if (!dfs(map, visited, map[i][k])) {
            return false;
        }
    }

    visited[i] = false;
    return true;
}

console.log(canFinish(numCourses, prerequisites));
