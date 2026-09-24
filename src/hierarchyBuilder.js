const TreeNode = require("./TreeNode");

/**
 * Reconstructs a binary hierarchy from
 * inorder and postorder relationship records.
 *
 * @param {Array} inorder - Left, Root, Right ordering
 * @param {Array} postorder - Left, Right, Root ordering
 * @returns {TreeNode|null}
 */
function reconstructHierarchy(inorder, postorder) {

    // Store node locations for fast lookup
    const hierarchyPositions = new Map();

    inorder.forEach((node, index) => {
        hierarchyPositions.set(node, index);
    });


    // Start reading from the final postorder element
    let postorderIndex = postorder.length - 1;


    /**
     * Recursively creates hierarchy branches.
     *
     * @param {number} start - Left boundary
     * @param {number} end - Right boundary
     */
    function buildBranch(start, end) {

        if (start > end) {
            return null;
        }


        // Current root comes from postorder's end
        const rootValue = postorder[postorderIndex--];

        const root = new TreeNode(rootValue);


        // Find root location in inorder sequence
        const splitPoint = hierarchyPositions.get(rootValue);


        /*
            Since postorder is processed backwards:

            Root → Right → Left

            Therefore the right branch
            must be created first.
        */
        root.right = buildBranch(
            splitPoint + 1,
            end
        );


        root.left = buildBranch(
            start,
            splitPoint - 1
        );


        return root;
    }


    return buildBranch(
        0,
        inorder.length - 1
    );
}


module.exports = reconstructHierarchy;
