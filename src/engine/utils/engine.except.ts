import type {
    EngineErrorValueMessage,
    EngineValueExcept,
    TEngineErrorValueMessage,
    TEngineValue
} from '../types/engine.type';

export default class EngineErrorExecution {
    public cause: TEngineErrorValueMessage | undefined;

    public constructor(code: TEngineValue) {
        switch (code) {
            case EngineValueExcept.NOT_CONTEXT:
                this._handleErrorExcept(EngineErrorValueMessage.MESSAGE_NOT_CONTEXT);
                break;

            case EngineValueExcept.NOT_PROGRAM:
                this._handleErrorExcept(EngineErrorValueMessage.MESSAGE_NOT_PROGRAM);
                break;

            case EngineValueExcept.NOT_SHADER:
                this._handleErrorExcept(EngineErrorValueMessage.MESSAGE_NOT_SHADER);
                break;
        }
    }

    private _errorTarget(): void {
        console.error(`Error`);
    }

    private _handleErrorExcept(cause: TEngineErrorValueMessage) {
        this.cause = cause;
        console.error(this.cause);

        if (process.env.NODE_ENV === 'development') {
            this._errorTarget();
        }
    }
}
