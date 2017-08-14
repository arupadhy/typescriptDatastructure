"use strict";
exports.__esModule = true;
var Tree = (function () {
    function Tree() {
        this.root = null;
    }
    Tree.prototype.getRoot = function () {
        return this.root;
    };
    Tree.prototype.spiralTraversal = function () {
        var collector = [];
        this.spiralOrder(this.root, collector);
        return collector;
    };
    Tree.prototype.spiralOrder = function (root, collector) {
    };
    Tree.prototype.inorderTraversal = function () {
        var collector = [];
        this.printInorder(this.root, collector);
        return collector;
    };
    Tree.prototype.printInorder = function (node, collector) {
        if (node == null) {
            return;
        }
        this.printInorder(node.left, collector);
        console.log(" " + node.data);
        collector.push(node.data);
        this.printInorder(node.right, collector);
    };
    Tree.prototype.addData = function (node, data) {
        if (node == null) {
            node = new Node(data);
        }
        else if (data <= node.data) {
            node.left = this.addData(node.left, data);
        }
        else {
            node.right = this.addData(node.right, data);
        }
        return node;
    };
    Tree.prototype.add = function (info) {
        this.root = this.addData(this.root, info);
    };
    return Tree;
}());
exports.Tree = Tree;
var Node = (function () {
    function Node(info) {
        this.data = info;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
exports.Node = Node;
