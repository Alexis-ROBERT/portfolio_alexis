import React from 'react';
import { IPropsQuestionSection, IStateQuestionSection } from './question.section.type';
import Icon from '../../../../gui/bases/icon/icon';
import ArrowVector from '../../assets/svg/arrow.svg';
import './_questionSection.scss';
import classNames from 'classnames';

export default class QuestionSection extends React.Component<IPropsQuestionSection, IStateQuestionSection> {
        public constructor(props: IPropsQuestionSection) {
                super(props);

                this.state = {
                        open: false,
                };
        }

        public render(): React.ReactNode {
                return (
                        <section className="question-section-base">
                                <button className={classNames({ 'question-section-btn-base': true, 'open-question': this.state.open })} onMouseDown={() => {
                                        this.setState({ open: !this.state.open })
                                }}>
                                        <div>
                                                <Icon className="" src={ArrowVector} alt="Arrow" />
                                        </div>
                                        <div className="question-base">{this.props.question}</div>
                                </button>
                                <div className={classNames({ 'response-base': true, 'open-response': this.state.open })}>{this.props.children}</div>
                        </section>
                );
        }
}
