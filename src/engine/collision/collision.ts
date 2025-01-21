import EngineWebGL from "../engine";
import EnginePresetConstructor from "../engine.preset";
import type {CollisionObjectEnvironment, CollisionSceneEnvironment} from "./types/collision.type";

export default class CollisionEngineConstructor extends EnginePresetConstructor<CollisionObjectEnvironment> {
    public constructor(engine: EngineWebGL) {
        super('collision', engine.webGL2Context, engine.webGL2Program);
    }

    public create(collision: CollisionSceneEnvironment): CollisionEngineConstructor {
        console.log(collision);

        return this
    }

    public rattach() {

    }

    public render(collision: CollisionSceneEnvironment): void {
        console.log(collision)
    }
}
