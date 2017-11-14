import React, { Component } from 'react';
import Description from '../atoms/Description.jsx'
import ImageWithCaption from '../molecules/ImageWithCaption.jsx';
import Image from '../atoms/Image.jsx';
import { white, white500, amber50, amber100, amber300, grey700 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

//TODO: make nicer rectangles on big screen, that would wrap text, not whole width
class Activity extends Component {
  render() {
    const activityStyle = {
      margin: '10px',

    }

    const { name, description, imageSource } = this.props.activity;
    const descriptionStyle = {
      height: '7.75em', // that's one line, 2em for 2 lines, etc...
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
          <Card zDepth={2}>
            <CardTitle title={name} subtitle="London" />
            <div className="row vertical-align"
              style={activityStyle}>
              <div className="col-xs-4 col-sm-4 col-md-offset-2 col-md-2 col-lg-offset-2 col-lg-2">
                <Image
                  imageSource={imageSource} />
              </div>
              <div className="col-xs-8 col-sm-8 col-md-6 col-lg-6"
                style={descriptionStyle}>
                <Description text={description} />
              </div>
              <div className="col-md-2 col-lg-2">
              </div>
            </div>
          </Card>
        </MuiThemeProvider>
      </div >
    );
  }
}

Activity.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default Activity;