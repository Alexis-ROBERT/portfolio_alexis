import React from 'react';
import './_colorPicker.scss';
import type {IPropsColorPicker, IStateColorPicker} from './color.picker.type';
import classNames from 'classnames';
import IsVisible from '../isVisible/is.visible';

export default class ColorPicker extends React.Component<IPropsColorPicker, IStateColorPicker> {
    public constructor(props: IPropsColorPicker) {
        super(props);

        this.state = {
            color: 0xffff,
            visible: false,
            pressed: false,
        };
    }

    public render(): React.ReactNode {
        return (
            <div className="color-picker-base-container">
                <IsVisible visible={this.state.visible}>
                    <div className="color-choose-panel">

                    </div>
                </IsVisible>
                <button
                    className={classNames({
                        'color-picker-base': true,
                        [this.props.className || '']: this.props.className !== undefined,
                        pressed: this.state.pressed,
                    })}
                    style={{background: '#BBFF3D', ...this.props.style}}
                    type="button"
                    title="Color Picker"
                    onMouseDown={() => this.setState({pressed: true, visible: this.state.visible ? false : true})}
                    onMouseUp={() => this.setState({pressed: false})}
                    onBlur={() => this.setState({visible: false, pressed: false})}
                />
            </div>
        );
    }
}
