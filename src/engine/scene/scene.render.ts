import React from 'react';
import EngineWebGL from '../engine';
import LightEngineConstructor from '../presets/light';
import CollisionEngineConstructor from '../collision/collision';
import EnginePresetConstructor from '../engine.preset';
import { IIsInstantiableEngineScene } from '../types/engine.type';
import { IShaderInfos } from '../shader/types/shader.type';
import CharacterEngineConstructor from '../presets/character';
import MeshEngineConstructor from '../presets/mesh';
import CameraEngineConstructor from '../presets/camera';

export default abstract class SceneRender {
        public constructor(ref: React.RefObject<HTMLCanvasElement>) {
                this.engine = new EngineWebGL(ref);

                this.camera = this.engine.camera;
                this.character = this.engine.character;
                this.light = this.engine.light;
                this.collision = this.engine.collision;
        }

        protected engine: EngineWebGL;

        public camera: CameraEngineConstructor;

        protected character: CharacterEngineConstructor;

        protected light: LightEngineConstructor;

        protected collision: CollisionEngineConstructor;

        protected mesh: MeshEngineConstructor;

        private _processRender: IIsInstantiableEngineScene<{}>[] = [];

        protected add<S extends {}>(env: EnginePresetConstructor<S>): void {
                env.transfertObjectInstantiate((object) => this._processRender.push(object));
        }

        protected render(): void {
                this.renderCompileScene();
        }

        public analyzeShaderCount(callBack: (shader: number) => any): void {
                this._processRender.forEach((object) => callBack(object.instance.countShaderAccepted()));
        }

        public renderCompileScene(callBack?: (countShader: IShaderInfos) => any): void {
                this._processRender.forEach((object) => {
                        object.instance.render(object.scene);

                        if (callBack !== undefined) {
                                this.analyzeShaderCount((shader) => {
                                        let shaderCount = +shader;

                                        callBack({
                                                result: true,
                                                global: shaderCount,
                                                remaining: shaderCount - object.instance.remainingShader,
                                        });
                                });
                        }
                });
        }
}
