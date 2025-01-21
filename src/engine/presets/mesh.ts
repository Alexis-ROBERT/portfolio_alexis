import EngineWebGL from '../engine';
import EnginePresetConstructor from '../engine.preset';
import { IMeshObjectEnvironment, MeshSceneEnvironment } from './types/mesh.type';

export default class MeshEngineConstructor extends EnginePresetConstructor<IMeshObjectEnvironment> {
        public constructor(public engine: EngineWebGL) {
                super('mesh', engine.webGL2Context, engine.webGL2Program);
        }

        public create(mesh: MeshSceneEnvironment): MeshEngineConstructor {
                console.log(mesh);
                
                return this;
        }

        public render(mesh: MeshSceneEnvironment): void {
                console.log(mesh);
        }
}
