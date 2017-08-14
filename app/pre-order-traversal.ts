import { Node } from "./tree";
export class PreorderTraversal {

    public static traverse(root: Node): any[] {
        let collector: any[] = [];
        PreorderTraversal.preorder(root, collector);
        return collector;
    }

    private static preorder(node: Node, collector: any[]): void {
        if(node == null) {
            return;
        }
        collector.push(node.data);
        PreorderTraversal.preorder(node.left, collector);
        PreorderTraversal.preorder(node.right, collector);
    }
}