import type {RefObject} from 'react';
import * as THREE from 'three';
import type {ProjectionOption} from './scene.render.type';

export default abstract class SceneRender extends THREE.Scene {
    public renderer: THREE.WebGLRenderer;
    public camera: THREE.Camera;

    constructor(ref: RefObject<HTMLCanvasElement>, projection: ProjectionOption) {
        if (ref.current !== null) {
            super();

            this.renderer = new THREE.WebGLRenderer({canvas: ref.current, antialias: true});

            this.camera = this.createCamera(projection.fov, projection.aspect, projection.near, projection.far);

            this.renderer.setSize(window.innerWidth, window.innerHeight);

            ref.current.addEventListener('resize', () => {
                const canvasWidth = ref.current?.offsetWidth;
                const canvasHeight = ref.current?.offsetHeight;

                if (canvasWidth !== undefined && canvasHeight !== undefined) {
                    this.renderer.setSize(canvasWidth, canvasHeight);
                }
            });
        }
    }

    public light(color: THREE.ColorRepresentation, intensity: number): THREE.PointLight {
        return new THREE.PointLight(color, intensity);
    }

    public sun(color: THREE.ColorRepresentation, intensity: number): THREE.AmbientLight {
        return new THREE.AmbientLight(color, intensity);
    }

    public mesh(geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>, material?: THREE.Material): THREE.Mesh {
        return new THREE.Mesh(geometry, material);
    }

    public boxGeometry(width: number, height: number, depth?: number): THREE.BoxGeometry {
        return new THREE.BoxGeometry(width, height, depth);
    }

    public sphere(radius: number): THREE.SphereGeometry {
        return new THREE.SphereGeometry(radius);
    }

    public material(parameter: THREE.MeshBasicMaterialParameters): THREE.Material {
        return new THREE.MeshBasicMaterial(parameter);
    }

    public color(color: THREE.ColorRepresentation): THREE.Color {
        return new THREE.Color(color);
    }

    public createCamera(fov: number, aspect: number, near: number, far: number): THREE.PerspectiveCamera {
        return new THREE.PerspectiveCamera(fov, aspect, near, far);
    }

    public render(): void {
    }

    public rendererScene(): void {
        this.render();
        this.renderer.render(this, this.camera);
    }

    public update(): void {
    }
}
