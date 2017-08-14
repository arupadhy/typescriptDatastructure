import { Node } from "./tree";
export class SpiralTraversal {

    public static traverse(root: Node): any[] {
        let collector: any[] = [];
        SpiralTraversal.spiralTraverse(root, collector);
        return collector;
    }

    private static dealWithStack(stack: any[], stackToBeUpdated: any[], leftFirstFlag: boolean, collector: any[]) {
        while (stack.length !== 0) {
            let current = stack.pop();
            collector.push(current.data);
            if (leftFirstFlag) {
                if (current.left) {
                    stackToBeUpdated.push(current.left);
                }
                if (current.right) {
                    stackToBeUpdated.push(current.right);
                }
            } else {
                if (current.right) {
                    stackToBeUpdated.push(current.right);
                }
                if (current.left) {
                    stackToBeUpdated.push(current.left);
                }
            }
        }
    }

    private static spiralTraverse(node: Node, collector: any[]) {
        let stack1 = [];
        let stack2 = [];
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
    }
}