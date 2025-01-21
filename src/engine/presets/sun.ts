import EngineWebGL from '../engine';
import EnginePresetConstructor from '../engine.preset';
import { ISunObjectEnvironment, SunSceneEnvironment } from './types/sun.type';

export default class SunEngineConstructor extends EnginePresetConstructor<ISunObjectEnvironment> {
        public constructor(public engine: EngineWebGL) {
                super('sun', engine.webGL2Context, engine.webGL2Program);
        }

        public create(sun: SunSceneEnvironment): SunEngineConstructor {
                console.log(sun);
                
                return this;
        }

        public render(sun: SunSceneEnvironment): void {
                console.log(sun);
        }
}
