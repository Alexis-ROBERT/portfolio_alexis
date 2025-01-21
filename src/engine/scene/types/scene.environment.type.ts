import { IAxeVector3 } from '../scene.render.type';

export interface ISceneEnvironment<O = {}, P = {}> {
        pos: IAxeVector3;

        object: O;

        preset?: P;

        id?: string;
}



