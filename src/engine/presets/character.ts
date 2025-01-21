import EngineWebGL from '../engine';
import EnginePresetConstructor from '../engine.preset';
import type {CharacterSceneEnvironment, ICharacterObjectEnvironment} from './types/character.type';

export default class CharacterEngineConstructor extends EnginePresetConstructor<ICharacterObjectEnvironment> {
    public constructor(public engine: EngineWebGL) {
        super('character', engine.webGL2Context, engine.webGL2Program);
    }

    public create(character: CharacterSceneEnvironment): CharacterEngineConstructor {
        console.log(character);

        return this;
    }

    public render(character: CharacterSceneEnvironment): void {
        console.log(character);
    }
}
