import React, { Component } from 'react';
import Activity from '../molecules/Activity.jsx';

import PropTypes from 'prop-types';

//TODO: probably move to this from bootstrap 
//http://www.material-ui.com/#/components/grid-list
class ListActivity extends Component {
  render() {
    const { activities } = this.props;
    const activityList = activities.map(val => {
      return <Activity key={val.id} activity={val} />
    });
    return (
      <div>
        {activityList}
      </div>
    )
  }
}

ListActivity.propTypes = {
  activities: PropTypes.array.isRequired,
};
export default ListActivity;