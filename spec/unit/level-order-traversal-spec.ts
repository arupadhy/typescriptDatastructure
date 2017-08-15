import { Tree, Node } from "../../app/tree";
import { LevelOrderTraversal } from "../../app/level-order-traversal";

describe("Level order traversal of a Binary tree", () => {
   it.only("should be able to print tree by level order with *** separating each level", () => {
       const tree = new Tree();
       tree.add(20);
       tree.add(10);
       tree.add(50);
       tree.add(5);
       tree.add(3);
       tree.add(100);
       LevelOrderTraversal.printLevelOrder(tree.getRoot());
   });
});