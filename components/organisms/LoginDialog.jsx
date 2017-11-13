import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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
    const { buttons, text, mainButtonClass } = this.props;
    // make a login window here
    const actions = [
      <a href="#" className="btn btn-full"
        onClick={this.handleClose.bind(this)}>
        {buttons[0].text}
      </a>, <br />,
      <a href="#" className="btn btn-ghost"
        onClick={this.handleClose.bind(this)}>
        {buttons[1].text}
      </a>,
    ];
    const actionsStyle = {
      // backgroundColor: '#FFF8E1',
      textAlign: 'center',
      marginTop: '0px',
      paddingBottom: '30px',
    };
    const buttonClass = "btn " + mainButtonClass;


    return (
      <div>
        <a href="#" className={buttonClass} onClick={this.handleOpen.bind(this)}>{buttons[0].text}</a>

        <Dialog
          title={text}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          bodyClassName="login-form"
          titleClassName="login-form-header"
          actionsContainerStyle={actionsStyle}
        >
          <TextField
            floatingLabelText="Login"
            hintText=""
          />
          <br />
          <TextField
            hintText=""
            floatingLabelText="Password"
            type="password"
          />
          <br />
          <a href='#' className="btn-none">Forgot password...</a>
        </Dialog>
      </div >
    );
  }
}