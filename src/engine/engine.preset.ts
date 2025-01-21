import type {ISceneEnvironment} from './scene/types/scene.environment.type';
import ShaderEngine from './shader/shader';
import type {ErrorValueHandle, IEnginePreset, IFoundPresetObject} from './types/engine.preset.type';
import type {IIsInstantiableEngineScene} from './types/engine.type';

export default abstract class EnginePresetConstructor<O> implements IEnginePreset<O> {
    public property: O;
    public remainingShader: number;
    protected shader: ShaderEngine;
    private _object: ISceneEnvironment<O>[] = [];

    constructor(public id: string, protected gl: WebGL2RenderingContext, protected programm: WebGLProgram) {
        this.shader = new ShaderEngine(gl);
        this.remainingShader = this.shader.acceptedShader.length;
    }

    public create(object: ISceneEnvironment<O>): EnginePresetConstructor<O> {
        return this.createObject(object);
    }

    public countShaderAccepted(): number {
        return this.shader.acceptedShader.length;
    }

    public delete(object: ISceneEnvironment<O>): boolean {
        return this.deleteObject(object);
    }

    public getAllObject(): ISceneEnvironment<O>[] {
        return this._object;
    }

    public transfertObjectInstantiate(instanciate: (object: IIsInstantiableEngineScene<O>) => any): void {
        this._object.forEach((object, i, a) => {
            a.slice(i, 0);

            instanciate({
                instance: this,
                scene: object,
            });
        });
    }

    public getObject(object: ISceneEnvironment<O>): ISceneEnvironment<O> | undefined {
        if (object.id === undefined) {
            return undefined;
        }

        this._getObject(object.id).then((o) => {
            object = o.object;
        });

        return object;
    }

    public getIdObject(id: string): ISceneEnvironment<O> | undefined {
        let object: ISceneEnvironment<O> | undefined = undefined;

        this._getObject(id).then((o) => {
            object = o.object;
        });

        return object;
    }

    public render(object: ISceneEnvironment<O>): void {
        object ?? {}
        this.shader.compile();
    }

    protected createObject(object: ISceneEnvironment<O>): EnginePresetConstructor<O> {
        if (object.id === undefined) {
            object.id = this._generatedID();
        }

        this._getObject(object.id)
            .then((o) => {
                delete this._object[o.index];
                this._object[o.index] = object;
            })
            .catch((err) => {
                this._errorHandle(err);
                this._object.push(object);
            });

        return this;
    }

    protected deleteObject(object: ISceneEnvironment<O>): boolean {
        if (object.id === undefined) {
            return false;
        }

        let deleted: boolean = false;

        this._getObject(object.id)
            .then((o) => {
                this._object.slice(o.index, 0);
                deleted = true;
            })
            .catch((err) => {
                deleted = false;
                this._errorHandle(err as number);
            });

        return deleted;
    }

    private _getObject(id: string): Promise<IFoundPresetObject<O>> {
        return new Promise((resolve, reject) => {
            let i = 0;

            for (const o of this._object) {
                if (id === o.id) {
                    const foundObject: IFoundPresetObject<O> = {
                        object: o,
                        index: i,
                    };

                    return resolve(foundObject);
                }

                i++;
            }

            reject(ErrorValueHandle.NOT_FOUND);
        });
    }

    private _errorHandle(err: number): void {
        switch (err) {
            case ErrorValueHandle.NOT_FOUND:
        }
    }

    private _generatedID(): string {
        if (this._object.length === 0) {
            return this.id;
        }

        return this.id + this._object.length.toString();
    }
}
