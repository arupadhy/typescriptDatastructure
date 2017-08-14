import { Tree } from "../../app/tree";
import {TreeHelper} from "../../app/serailaize-tree";
import {PreorderTraversal} from "../../app/pre-order-traversal";
const expect = require("chai").expect;
describe("Serialize a tree without loosing any data", () => {
    let tree: Tree;
    before(() => {
        tree = new Tree();
        tree.add(10);
        tree.add(50);
        tree.add(30);
        tree.add(5);
        tree.add(1);
        tree.add(100);
        tree.add(80);
    });

    it("should convert tree to an array with all elements and relationship intact", () => {
        const initialPreorderTraversal = PreorderTraversal.traverse(tree.getRoot());
        const serializedTree = TreeHelper.serialize(tree);
        const node = TreeHelper.deserialize(serializedTree);
        expect(PreorderTraversal.traverse(node)).to.deep.equal(initialPreorderTraversal);

    });
});
