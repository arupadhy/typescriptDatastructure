import { Tree, Node } from "./tree";

export class TreeHelper {

    private static fillCollector(node: Node | null, collector: any[], index: number): void {
        if(node == null) {
            return;
        }
        collector[index] = node.data;
        TreeHelper.fillCollector(node.left, collector, 2*index + 1);
        TreeHelper.fillCollector(node.right, collector, 2*index + 2);
    }

   public static serialize(tree: Tree): any[] {
       let collector: any[] = [];
       TreeHelper.fillCollector(tree.getRoot(), collector, 0);
       return collector;
   }

   private static toNode(arr: any[], node: Node | null, index: number): Node | null {
      let data = arr[index];
      if(data) {
          node = new Node(data);
          node.left = TreeHelper.toNode(arr, node.left, 2*index+1);
          node.right = TreeHelper.toNode(arr, node.right, 2*index+2);
          return node;
      }else {
          return null;
      }
   }

   public static deserialize(serializedArr: any[]): Node | null {
        let root: Node | null = null;
        return TreeHelper.toNode(serializedArr, root, 0);
   }
}