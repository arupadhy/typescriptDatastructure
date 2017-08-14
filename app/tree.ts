export class Tree {

    private root: Node;

    public getRoot(): Node {
        return this.root;
    }

    public constructor() {
        this.root = null;
    }

    public spiralTraversal(): any[] {
        let collector = [];
        this.spiralOrder(this.root, collector);
        return collector;
    }

    private spiralOrder(root: Node, collector): void {

    }

    public inorderTraversal(): any[] {
        let collector = [];
        this.printInorder(this.root, collector);
        return collector;
    }

    private printInorder(node: Node, collector: any[]): void {
        if (node == null) {
            return;
        }
        this.printInorder(node.left, collector);
        console.log(` ${node.data}`);
        collector.push(node.data);
        this.printInorder(node.right, collector);
    }

    private addData(node: Node, data: any): Node {
        if (node == null) {
            node = new Node(data);
        } else if (data <= node.data) {
            node.left = this.addData(node.left, data);
        } else {
            node.right = this.addData(node.right, data);
        }
        return node;
    }

    public add(info: any): any {
        this.root = this.addData(this.root, info);
    }
}

export class Node {
    data: any;
    left: Node;
    right: Node;
    public constructor(info) {
        this.data = info;
        this.left = null;
        this.right = null;
    }
}