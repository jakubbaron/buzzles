import React, { Component } from 'react';
import Description from '../atoms/Description.jsx'
import ImageWithCaption from '../molecules/ImageWithCaption.jsx';
import PropTypes from 'prop-types';

class Activity extends Component {
  render() {
    const activityStyle = {
      marginTop: '20px',
      paddingTop: '10px',
    }

    const { name, description, imageSource } = this.props.activity;
    const text = name;

    return (
      <div className="padding" >
        <div className="row">
          <div className="col-sm-4" style={activityStyle}>
            <ImageWithCaption
              imageSource={imageSource}
              headerText={text}/>
          </div>
          <div className="col-sm-8">
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