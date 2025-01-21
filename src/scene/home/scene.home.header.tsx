import { RefObject } from 'react';
import SceneRender from '../scene.render';
import * as dat from 'dat.gui';

export default class SceneHomeHeader extends SceneRender {
        public constructor(public ref: RefObject<HTMLCanvasElement>) {
                super(ref, {
                        fov: 75,
                        aspect: window.innerWidth / window.innerHeight,
                        near: 0.1,
                        far: 1000,
                });
        }

        public render(): void {
                this.camera.position.set(0, 0, 2);

                const light = this.light(0xfff, 2);

                light.position.set(2, 0, 3);

                const boxObject = this.mesh(this.boxGemometry(1, 1, 2), this.material({ color: 0x636363 }));

                boxObject.rotation.x = 0;

                this.add(boxObject, light, this.sun(0x000, 0.5));

                if (process.env.NODE_ENV === 'development') {
                        const guiDebug = new dat.GUI();
                        guiDebug;
                }

                this.background = this.color(0x33b5ff);
        }

        public update(): void {}
}
