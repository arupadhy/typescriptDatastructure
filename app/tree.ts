export class Tree {

    private root: Node | null;

    public getRoot(): Node | null {
        return this.root;
    }

    public constructor() {
        this.root = null;
    }

    public getLength(): number {
        return this.length(this.root);
    }

    private length(node: Node | null): number {
        if(node == null) {
            return 0;
        }
        return 1 + this.length(node.left) + this.length(node.right);
    }

    public inorderTraversal(): any[] {
        let collector: any[] = [];
        this.printInorder(this.root, collector);
        return collector;
    }

    private printInorder(node: Node | null, collector: any[]): void {
        if (node == null) {
            return;
        }
        this.printInorder(node.left, collector);
        collector.push(node.data);
        this.printInorder(node.right, collector);
    }

    private addData(node: Node | null, data: any): Node {
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
    left: Node | null;
    right: Node | null;
    public constructor(info: any) {
        this.data = info;
        this.left = null;
        this.right = null;
    }
}