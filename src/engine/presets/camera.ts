import EngineWebGL from '../engine';
import EnginePresetConstructor from '../engine.preset';
import type {CameraSceneEnvironment, ICameraObjectEnvironment} from './types/camera.type';

export default class CameraEngineConstructor extends EnginePresetConstructor<ICameraObjectEnvironment> {
    public constructor(public engine: EngineWebGL) {
        super('camera', engine.webGL2Context, engine.webGL2Program);
    }

    public create(camera: CameraSceneEnvironment): CameraEngineConstructor {
        console.log(camera);

        return this;
    }

    public render(camera: CameraSceneEnvironment): void {
        console.log(camera);
    }
}
