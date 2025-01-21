import EngineWebGL from '../engine';
import EnginePresetConstructor from '../engine.preset';
import { ShaderTypeValue } from '../shader/types/shader.type';
import { ILightObjectEnvironment, LightSceneEnvironment, LightValueConstraint } from './types/light.type';

export default class LightEngineConstructor extends EnginePresetConstructor<ILightObjectEnvironment> {
        public constructor(public engine: EngineWebGL, public light?: LightEngineConstructor) {
                super('light', engine.webGL2Context, engine.webGL2Program);
        }

        public create(light: LightSceneEnvironment): LightEngineConstructor {
                if (light.object.intensity > LightValueConstraint.MAX_INTENSITY) light.object.intensity = LightValueConstraint.MAX_INTENSITY;

                this.property = light.object;

                if (this.light !== undefined) {
                        this.light.getAllObject().forEach((light) => {
                                this.createObject(light);
                        });

                        return this;
                }

                this.createObject(light);

                return this;
        }

        public render(): void {
                const vertexShader: string = `
                attributes vec4 aVertexPosition;

                void main() {
                        gl_Position = aVertexPosition;
                }`;

                const program1 = this.gl.createProgram();

                this.shader.create(program1, vertexShader, ShaderTypeValue.VERTEX);
                this.shader.compile();
        }

        public delete(light: LightSceneEnvironment): boolean {
                return this.deleteObject(light);
        }
}
