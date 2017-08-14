"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpiralTraversal = (function () {
    function SpiralTraversal() {
    }
    SpiralTraversal.traverse = function (root) {
        var collector = [];
        SpiralTraversal.spiralTraverse(root, collector);
        return collector;
    };
    SpiralTraversal.dealWithStack = function (stack, stackToBeUpdated, leftFirstFlag, collector) {
        while (stack.length !== 0) {
            var current = stack.pop();
            console.log("current.data: " + current.data);
            collector.push(current.data);
            if (leftFirstFlag) {
                if (current.left) {
                    stackToBeUpdated.push(current.left);
                }
                if (current.right) {
                    stackToBeUpdated.push(current.right);
                }
            }
            else {
                if (current.right) {
                    stackToBeUpdated.push(current.right);
                }
                if (current.left) {
                    stackToBeUpdated.push(current.left);
                }
            }
        }
    };
    SpiralTraversal.spiralTraverse = function (node, collector) {
        var stack1 = [];
        var stack2 = [];
        if (node != null) {
            stack1.push(node);
        }
        while (stack1.length !== 0 || stack2.length !== 0) {
            if (stack1.length !== 0) {
                SpiralTraversal.dealWithStack(stack1, stack2, true, collector);
            }
            else if (stack2.length !== 0) {
                SpiralTraversal.dealWithStack(stack2, stack1, false, collector);
            }
        }
    };
    return SpiralTraversal;
}());
exports.SpiralTraversal = SpiralTraversal;
