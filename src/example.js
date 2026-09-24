const reconstructHierarchy = require("./hierarchyBuilder");


const inorder = [
    "Design",
    "Engineering",
    "Marketing",
    "Management",
    "Sales"
];


const postorder = [
    "Design",
    "Marketing",
    "Sales",
    "Management",
    "Engineering"
];


const hierarchy = reconstructHierarchy(
    inorder,
    postorder
);


console.log(
    JSON.stringify(
        hierarchy,
        null,
        2
    )
);
