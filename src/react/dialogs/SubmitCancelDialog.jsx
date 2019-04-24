import React from 'react';

import Dialog from './Dialog.jsx';

function withSubmitCancelButtons(DialogComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                childValues: {},
                isClosed: props.isClosed || false
            }
        }

        updateChildValue(child, value) {
            let childValuesState = this.state.childValues;
            childValuesState[child] = value;
            this.setState({"childValues": childValuesState});
        }

        submitDialog(e) {
            e.stopPropagation();
        }

        closeDialog(e) {
            e.stopPropagation();
            this.setState({isClosed: true});
            this.props.onClose();
        }

        getIsVisibleClassName() {
            return !this.state.isClosed && 'show' || 'hidden';
        }

        render() {
            let isVisibleClassName = this.getIsVisibleClassName(),
                body = React.Children.map(this.props.children,
                    (child) => {
                        return typeof child.type !== 'string' && React.cloneElement(child, {
                                valueHasChanged: this.updateChildValue.bind(this)
                            }) || child;
                    }),
                footer = <div className="context-dialog-footer">
                    <button onClick={(e) => this.closeDialog(e)}>CANCEL</button>
                    <button onClick={(e) => this.props.onSubmit(this.state.childValues)}>ADD</button>
                </div>;
            return <DialogComponent className={isVisibleClassName} body={body}
                                    footer={this.props.showFooter && footer || null} {...this.props}>{body}</DialogComponent>
        }
    }
}

export default withSubmitCancelButtons(Dialog);
