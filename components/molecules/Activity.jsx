import React, { Component } from 'react';
import Description from '../atoms/Description.jsx'
import ImageWithCaption from '../molecules/ImageWithCaption.jsx';
import { white, white500, amber50, amber100, amber300, grey700 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';

//TODO: make nicer rectangles on big screen, that would wrap text, not whole width
class Activity extends Component {
  render() {
    const activityStyle = {
      margin: '10px',

    }

    const { name, description, imageSource } = this.props.activity;
    const descriptionStyle = {
      height: '7.8em', // that's one line, 2em for 2 lines, etc...
      overflow: 'hidden',
      textOverflow: 'ellipsis',

    };
    const muiTheme = getMuiTheme({
      palette: {
        textColor: grey700,
        canvasColor: amber50,
      },
    });

    return (

      <div className="padding">
        <MuiThemeProvider muiTheme={muiTheme}>
          <Paper zDepth={1}>
            <div className="row vertical-align"
              style={activityStyle}>
              <div className="col-xs-4 col-sm-3 col-md-offset-3 col-md-3 col-lg-offset-2 col-lg-2">
                <ImageWithCaption
                  imageSource={imageSource}
                  headerText={name} />
              </div>
              <div className="col-xs-8 col-sm-6 col-md-6 col-lg-6"
                style={descriptionStyle}>
                <Description text={description} />
              </div>
            </div>
          </Paper>
        </MuiThemeProvider>
      </div >
    );
  }
}

Activity.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default Activity;