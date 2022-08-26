import { Behaviour, GameObject, InstantiateOptions } from "@needle-tools/engine/engine-components/Component";
import { SyncedTransform } from "@needle-tools/engine/engine-components/SyncedTransform";
import { Rotate } from "./Rotate";

export class PlayerInit extends Behaviour
{
    player?: GameObject;
    sceneObj?: GameObject;

    start(){
        var newP = GameObject.instantiateSynced(this.player!, new InstantiateOptions());
        // // GameObject.getComponent(newP, SyncedTransform)?.requestOwnership();
        GameObject.getComponent(newP, Rotate)?.setOwner();
        console.log("instantiating cube guy");
        // console.log(newP);
        // console.log("original:");
        // console.log(this.player);
        newP!.parent = this.sceneObj!;
        // GameObject.destroy(this.player!);
    }
}