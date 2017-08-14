"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tree_1 = require("../../app/tree");
var spiral_traversal_1 = require("../../app/spiral-traversal");
var pre_order_traversal_1 = require("../../app/pre-order-traversal");
var expect = require("chai").expect;
describe("Binary tree", function () {
    it("should create a binary tree with correct inorder traversal for three nodes", function () {
        var tree = new tree_1.Tree();
        tree.add(10);
        tree.add(50);
        tree.add(30);
        expect(tree).to.be.not.null;
        expect(tree.inorderTraversal()).to.deep.equal([10, 30, 50]);
    });
    it("should traverse Binary tree in spiral order", function () {
        var tree = new tree_1.Tree();
        tree.add(10);
        tree.add(50);
        tree.add(30);
        tree.add(5);
        tree.add(100);
        tree.add(40);
        var result = spiral_traversal_1.SpiralTraversal.traverse(tree.getRoot());
        console.log(result);
    });
    it.only("should traverse a binary tree in preorder fashion", function () {
        var tree = new tree_1.Tree();
        tree.add(5);
        tree.add(4);
        tree.add(3);
        tree.add(6);
        tree.add(10);
        tree.add(8);
        console.log(tree.inorderTraversal());
        expect(pre_order_traversal_1.PreorderTraversal.traverse(tree.getRoot())).to.deep.equal([5, 4, 3, 6, 10, 8]);
    });
});
