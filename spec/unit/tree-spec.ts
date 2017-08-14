import { Tree } from "../../app/tree";
import { SpiralTraversal } from "../../app/spiral-traversal";
const expect = require("chai").expect;
describe("Binary tree", () => {
    it("should create a binary tree with correct inorder traversal for three nodes", () => {
        const tree: Tree = new Tree();
        tree.add(10);
        tree.add(50);
        tree.add(30);
        expect(tree).to.be.not.null;
        expect(tree.inorderTraversal()).to.deep.equal([10,30,50]);
    });

    it.only("should traverse Binary tree in spiral order", () => {
        const tree = new Tree();
        tree.add(10);
        tree.add(50);
        tree.add(30);
        tree.add(5);
        tree.add(100);
        tree.add(40);
        debugger;
        let result = SpiralTraversal.traverse(tree.getRoot());
        console.log(result);
    });

});