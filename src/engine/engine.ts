import {RefObject} from 'react';
import {EngineValueExept, IEngineApplicationInfo, IEngineWebGL} from './types/engine.type';
import LightEngineConstructor from './presets/light';
import ImportEngineConstructor from './import/import';
import CameraEngineConstructor from './presets/camera';
import SunEngineConstructor from './presets/sun';
import CollisionEngineConstructor from './collision/collision';
import EngineHandleWebGL from './engine.handle';
import EngineErrorExecution from './utils/engine.except';
import CharacterEngineConstructor from './presets/character';

export default class EngineWebGL extends EngineHandleWebGL implements IEngineWebGL {
    public APPLICATION_INFO: IEngineApplicationInfo;
    public import: ImportEngineConstructor;
    public camera: CameraEngineConstructor;
    public character: CharacterEngineConstructor;
    public light: LightEngineConstructor;
    public sun: SunEngineConstructor;
    public collision: CollisionEngineConstructor;
    public webGL2Context: WebGL2RenderingContext;
    public webGL2Program: WebGLProgram;

    public constructor(ref: RefObject<HTMLCanvasElement>) {
        const gl = ref.current?.getContext('webgl2');

        console.log(gl);

        if (!gl) {
            throw new EngineErrorExecution(EngineValueExept.NOT_CONTEXT);
        }

        super();

        this.APPLICATION_INFO.name = 'Alexis ROBERT';
        this.APPLICATION_INFO.version = 1.0;

        this.webGL2Context = gl as WebGL2RenderingContext;

        const program = gl.createProgram();

        if (!program) {
            throw new EngineErrorExecution(EngineValueExept.NOT_PROGRAM);
        }

        this.webGL2Program = program;

        this.import = new ImportEngineConstructor(this);
        this.camera = new CameraEngineConstructor(this);
        this.character = new CharacterEngineConstructor(this);
        this.light = new LightEngineConstructor(this);
        this.sun = new SunEngineConstructor(this);
        this.collision = new CollisionEngineConstructor(this);

        this._launch();
        this._renderLoop();
    }

    private _launch(): void {
        this.atLaunch();
    }

    private _renderLoop(): void {
        requestAnimationFrame(this.perFrame);
    }
}
