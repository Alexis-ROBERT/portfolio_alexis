import classNames from 'classnames';
import React from 'react';
import { IPropsSelectOption, IStateSelectOption, ValueOption } from './select.option.type';
import './_selectOption.scss';
import { baseEventHandler } from '../base.utils';
import ArrowVector from '../../../web/gui/assets/svg/arrow.svg';

export default class SelectOption extends React.Component<IPropsSelectOption<React.ReactNode>, IStateSelectOption<React.ReactNode>> {
        private _selectOption(option: ValueOption<React.ReactNode>): void {
                if (this.props.select) {
                        this.props.select(option);
                }

                this.setState({ option: option });
        }

        private _existOption(option: ValueOption<React.ReactNode>): boolean {
                for (const value of this.props.options) {
                        if (option.value === value.value && option.visibleValue === value.visibleValue) {
                                return true;
                        }
                }

                return false;
        }

        private _disposeNewOption() {
                return (
                        <>
                                {this._updateOption.map((option, i) => {
                                        return this._buttonOption(option, true, i);
                                })}
                                {this.state.new ? <div className="line-btn-option" /> : undefined}
                        </>
                );
        }

        private _updateOption: ValueOption<React.ReactNode>[] = [];

        private _search(value: string): void {
                if (value.length === 0) {
                        this.setState({ visible: false, search: undefined });
                        return;
                }

                this.setState({ visible: true, search: value });
        }

        private _searchOption(): React.ReactNode {
                return (
                        <>
                                {this.props.options.map((option, i) => {
                                        if (this.state.search === option.visibleValue) {
                                                return this._buttonOption(option, false, i);
                                        }
                                })}
                        </>
                );
        }

        private _newOption(transsfert: (option: ValueOption<React.ReactNode>, select: boolean) => any): void {
                if (this.props.newOption) {
                        if (Array.isArray(this.props.newOption)) {
                                let select = false;

                                if (this.props.newOption.length === 1) {
                                        select = true;
                                }

                                this.props.newOption.forEach((option) => {
                                        transsfert(option, select);
                                });

                                return;
                        }

                        transsfert(this.props.newOption, true);
                }
        }

        private _buttonOption(option: ValueOption<React.ReactNode>, newOption: boolean, i?: number): React.ReactNode {
                return (
                        <button
                                className={classNames({
                                        'option-btn-base': true,
                                        'actived-option': this.state.option.value === option.value ? true : false,
                                })}
                                style={{
                                        fontFamily: this.props.police && typeof option.value === 'string' ? option.value : 'Inter',
                                }}
                                key={i}
                                onMouseDown={() => {
                                        this._selectOption(option);
                                        this.setState({ visible: false });
                                }}
                        >
                                {option.visibleValue}
                                {newOption ? <span className="" /> : undefined}
                        </button>
                );
        }

        private _listeOption(): React.ReactNode {
                if (this.state.visible) {
                        if (this.state.search) {
                                return <div className="list-option-base">{this._searchOption()}</div>;
                        }

                        return (
                                <div className="list-option-base">
                                        {this._disposeNewOption()}
                                        {this.props.options.map<React.ReactNode>((option, i) => {
                                                return this._buttonOption(option, false, i);
                                        })}
                                </div>
                        );
                }
        }

        public constructor(props: IPropsSelectOption<React.ReactNode>) {
                super(props);

                this.state = {
                        pressed: false,
                        visible: false,
                        option: {
                                value: '',
                                visibleValue: '',
                        },
                        scroll: false,
                        new: false,
                        focus: false,
                };
        }

        public componentDidMount(): void {
                if (this.props.default) {
                        if (this._existOption(this.props.default)) {
                                this.setState({ option: this.props.default });

                                if (this.props.select) {
                                        this.props.select(this.props.default);
                                }
                        }
                }
        }

        public componentDidUpdate(props: Readonly<IPropsSelectOption<React.ReactNode>>): void {
                if (props.newOption) {
                        this._newOption((option, select) => {
                                this._updateOption.push(option);

                                if (select) {
                                        this.setState({ option: option });
                                }
                        });

                        this.setState({ new: true });
                }
        }

        public render(): React.ReactNode {
                return (
                        <div className="select-option-container">
                                <div className="list-option-container">{this._listeOption()}</div>
                                <button
                                        className={classNames({
                                                'select-option-base': true,
                                                'pressed-select-option': this.state.pressed,
                                                [this.props.className || '']: this.props.className !== undefined,
                                        })}
                                        style={this.props.style}
                                        disabled={this.state.focus}
                                        onMouseDown={(event) => {
                                                this.setState({ pressed: true, visible: !this.state.visible });
                                                baseEventHandler(event, this.props.onMouseDown);
                                        }}
                                        onMouseUp={(event) => {
                                                this.setState({ pressed: false });
                                                baseEventHandler(event, this.props.onMouseUp);
                                        }}
                                        onBlur={(event) => {
                                                this.setState({ pressed: false, visible: false });
                                                baseEventHandler(event, this.props.onBlur);
                                        }}
                                        onMouseEnter={this.props.onMouseEnter}
                                        onMouseLeave={this.props.onMouseLeave}
                                        onFocus={this.props.onFocus}
                                >
                                        <span>
                                                <img
                                                        className={classNames({ 'arrow-vector-opt-base': true, '': this.state.visible })}
                                                        style={{ transition: '0.2', rotate: this.state.visible ? `180deg` : `0deg` }}
                                                        src={ArrowVector}
                                                        alt="Arrow"
                                                />
                                        </span>
                                        <span
                                                style={{
                                                        fontFamily:
                                                                this.props.police && typeof this.state.option.value === 'string'
                                                                        ? this.state.option.value
                                                                        : 'Inter',
                                                }}
                                        >
                                                <input
                                                        className="select-option-input-base"
                                                        type="text"
                                                        style={{
                                                                fontFamily:
                                                                        this.props.police && typeof this.state.option.value === 'string'
                                                                                ? this.state.option.value
                                                                                : 'Inter',
                                                        }}
                                                        disabled={false}
                                                        spellCheck={false}
                                                        onInput={(event) => {
                                                                console.log(event.currentTarget.value);
                                                                this._search(event.currentTarget.value);
                                                        }}
                                                        value={this.state.option.value as string}
                                                        onDoubleClick={(event) => {
                                                                this.setState({ focus: true });

                                                                event.currentTarget.focus();
                                                                event.currentTarget.select();
                                                        }}
                                                        onBlur={() => {
                                                                this.setState({ search: undefined });
                                                        }}
                                                />
                                        </span>
                                </button>
                        </div>
                );
        }
}
