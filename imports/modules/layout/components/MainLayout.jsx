import React from 'react';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div id="wrapper">
        {this.props.children}
      </div>
    )
  }
}
