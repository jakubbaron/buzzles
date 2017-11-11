import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class LoginDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  render() {
    const { buttons } = this.props;
    const { text } = this.props;
    // make a login window here
    const actions = [
      <FlatButton
        label={buttons[1].text}
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label={buttons[2].text}
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
    ];

    return (
      <div>
        <a href="#" className="btn btn-full" onClick={this.handleOpen.bind(this)}>{buttons[0].text}</a>
        <Dialog
          title={text}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
        >

        </Dialog>
      </div>
    );
  }
}