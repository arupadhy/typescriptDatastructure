"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tree = (function () {
    function Tree() {
        this.root = null;
    }
    Tree.prototype.getRoot = function () {
        return this.root;
    };
    Tree.prototype.getLength = function () {
        return this.length(this.root);
    };
    Tree.prototype.length = function (node) {
        if (node == null) {
            return 0;
        }
        return 1 + this.length(node.left) + this.length(node.right);
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
