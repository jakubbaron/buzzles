import React, { Component } from 'react';
import Description from '../atoms/Description.jsx'
import ImageWithCaption from '../molecules/ImageWithCaption.jsx';
import PropTypes from 'prop-types';

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

    return (

      <div className="padding" >
        <div className="row vertical-align"
          style={activityStyle}>
          <div className="col-xs-4 col-sm-4 col-md-offset-2 col-md-2 col-lg-offset-2 col-lg-2">
            <ImageWithCaption
              imageSource={imageSource}
              headerText={name} />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-6 col-lg-6"
            style={descriptionStyle}>
            <Description text={description} />
          </div>
        </div>
      </div >
    );
  }
}

Activity.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default Activity;