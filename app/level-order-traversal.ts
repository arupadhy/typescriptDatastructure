import { Node } from "./tree";
export class LevelOrderTraversal {

    public static printLevelOrder(root: Node | null): void {
        if(root == null) {
            return;
        }
        let queue: any[] = [];
        queue.push(root);
        queue.push(null);

        while(queue.length !== 0) {
            let current: Node | null = queue.shift();
            if(current == null) {
                // new level
                console.log("*****************************************");
                if(queue.length >= 1 && queue[0] !== null) {
                    queue.push(null);
                }
            } else {
                console.log(current.data);
                if(current.left) {
                    queue.push(current.left);
                }
                if(current.right) {
                    queue.push(current.right);
                }
            }
        }

    }
}