"use strict";
exports.__esModule = true;
var PreorderTraversal = (function () {
    function PreorderTraversal() {
    }
    PreorderTraversal.traverse = function (root) {
        var collector = [];
        PreorderTraversal.preorder(root, collector);
        return collector;
    };
    PreorderTraversal.preorder = function (node, collector) {
        if (node == null) {
            return;
        }
        collector.push(node.data);
        PreorderTraversal.preorder(node.left, collector);
        PreorderTraversal.preorder(node.right, collector);
    };
    return PreorderTraversal;
}());
exports.PreorderTraversal = PreorderTraversal;
