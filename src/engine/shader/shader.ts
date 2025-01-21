import {EngineValueExept} from '../types/engine.type';
import EngineErrorExecution from '../utils/engine.except';
import {IShaderInfos, IShaderProcess, ShaderType} from './types/shader.type';

export default class ShaderEngine {
    public acceptedShader: IShaderProcess[] = [];
    private _processCompile: IShaderProcess[] = [];

    public constructor(protected gl: WebGL2RenderingContext) {
    }

    public getAllProcessSamplerShader(): IShaderProcess[] {
        return this._processCompile;
    }

    public deleteAllProcessSamplerShader(): void {
        this._processCompile = [];
    }

    public create(program: WebGLProgram | null, sources: string | string[], shaderType: ShaderType): void {
        if (program === null) {
            throw new EngineErrorExecution(EngineValueExept.NOT_PROGRAM);
        }

        const shader = this.gl.createShader(shaderType);

        let processSamplerShader: IShaderProcess = {
            shader: shader,
            source: sources as string,
            type: shaderType,
            program: program,
        };

        if (Array.isArray(sources)) {
            sources.forEach((sources) => {
                processSamplerShader.source = sources;
                this._processCompile.push(processSamplerShader);
            });

            return;
        }

        this._processCompile.push(processSamplerShader);
    }

    public compile(callBack?: (infos: IShaderInfos) => any): void {
        let shaderResult: boolean;

        this._processCompile.forEach((processShader, i, a) => {
            shaderResult = false;

            if (processShader.shader !== null) {
                try {
                    this.gl.shaderSource(processShader.shader, processShader.source);
                    this.gl.compileShader(processShader.shader);

                    if (!this.gl.getShaderParameter(processShader.shader, this.gl.COMPILE_STATUS) as boolean)
                        this.gl.deleteShader(processShader.shader);
                    else shaderResult = true;

                    if (process.env.NODE_ENV === 'dévelopment') {
                        if (shaderResult) console.error('Suceess compile shader : ' + this.gl.getShaderInfoLog(processShader.shader));
                        else console.error('Error compile shader : ' + this.gl.getShaderInfoLog(processShader.shader));
                    }
                } catch (err) {
                    throw new EngineErrorExecution(EngineValueExept.NOT_COMPILED);
                }

                this.gl.attachShader(processShader.program, processShader.shader);
                this.acceptedShader.push(processShader);
            }

            if (callBack !== undefined) {
                callBack({
                    result: shaderResult,
                    global: a.length,
                    remaining: a.length - i,
                });
            }

            this.gl.linkProgram(processShader.program);

            if (!this.gl.getProgramParameter(processShader.program, this.gl.LINK_STATUS)) {
                console.error();
            }

            this.gl.useProgram(processShader.program);
        });
    }
}
