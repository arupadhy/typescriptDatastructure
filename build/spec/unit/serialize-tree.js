"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tree_1 = require("../../app/tree");
var serailaize_tree_1 = require("../../app/serailaize-tree");
var pre_order_traversal_1 = require("../../app/pre-order-traversal");
var expect = require("chai").expect;
describe("Serialize a tree without loosing any data", function () {
    var tree;
    before(function () {
        tree = new tree_1.Tree();
        tree.add(10);
        tree.add(50);
        tree.add(30);
        tree.add(5);
        tree.add(1);
        tree.add(100);
        tree.add(80);
    });
    it("should convert tree to an array with all elements and relationship intact", function () {
        var initialPreorderTraversal = pre_order_traversal_1.PreorderTraversal.traverse(tree.getRoot());
        debugger;
        var serializedTree = serailaize_tree_1.TreeHelper.serialize(tree);
        var node = serailaize_tree_1.TreeHelper.deserialize(serializedTree);
        expect(pre_order_traversal_1.PreorderTraversal.traverse(node)).to.deep.equal(initialPreorderTraversal);
    });
});
