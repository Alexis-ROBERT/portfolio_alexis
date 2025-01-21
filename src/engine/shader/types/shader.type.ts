export enum ShaderTypeValue {
        VERTEX = WebGL2RenderingContext.VERTEX_SHADER,

        FRAGMENT = WebGL2RenderingContext.FRAGMENT_SHADER,
}

export type ShaderType = ShaderTypeValue.VERTEX | ShaderTypeValue.FRAGMENT;

export interface IShaderProcess {
        shader: WebGLShader | null;

        type: ShaderType;

        source: string;

        program: WebGLProgram;
}

export interface IShaderInfos {
        result: boolean;

        global: number;

        remaining: number;
}