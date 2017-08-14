"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tree_1 = require("./tree");
var TreeHelper = (function () {
    function TreeHelper() {
    }
    TreeHelper.fillCollector = function (node, collector, index) {
        if (node == null) {
            return;
        }
        collector[index] = node.data;
        TreeHelper.fillCollector(node.left, collector, 2 * index + 1);
        TreeHelper.fillCollector(node.right, collector, 2 * index + 2);
    };
    TreeHelper.serialize = function (tree) {
        var collector = [];
        TreeHelper.fillCollector(tree.getRoot(), collector, 0);
        return collector;
    };
    TreeHelper.toNode = function (arr, node, index) {
        var data = arr[index];
        if (data) {
            node = new tree_1.Node(data);
            node.left = TreeHelper.toNode(arr, node.left, 2 * index + 1);
            node.right = TreeHelper.toNode(arr, node.right, 2 * index + 2);
            return node;
        }
        else {
            return null;
        }
    };
    TreeHelper.deserialize = function (serializedArr) {
        var root = null;
        return TreeHelper.toNode(serializedArr, root, 0);
    };
    return TreeHelper;
}());
exports.TreeHelper = TreeHelper;
