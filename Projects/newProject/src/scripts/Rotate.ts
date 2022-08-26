import { Behaviour } from "@needle-tools/engine/engine-components/Component";
import { SyncedTransform } from "@needle-tools/engine/engine-components/SyncedTransform";
import { syncField } from "@needle-tools/engine/engine/engine_networking_auto";
import { Vector3 } from "three";

export class Rotate extends Behaviour
{
    @syncField("xPosChanged")
    xPos: number = 1.0;

    @syncField("zPosChanged")
    zPos: number = 1.0;

    speed: number = 2.0;

    myPlayer: boolean = false;

    start(){
        this.speed = 2;
    }

    setOwner() {
        this.myPlayer = true;
        console.log("it me");
    }

    update(){
        this.gameObject.position.set(this.xPos, 0, this.zPos);
        if(!this.myPlayer) {
            console.log("other player: " + this.xPos);
            return;
        }
        if(this.context.input.isKeyPressed(87)) {
            console.log("eeee" + this.zPos);
            this.zPos += this.context.time.deltaTime * this.speed;
        }
        if(this.context.input.isKeyPressed(83)) {
            this.zPos -= this.context.time.deltaTime * this.speed;
        }
        if(this.context.input.isKeyPressed(65)) {
            this.xPos += this.context.time.deltaTime * this.speed;
        }
        if(this.context.input.isKeyPressed(68)) {
            this.xPos -= this.context.time.deltaTime * this.speed;
        }
    }
}