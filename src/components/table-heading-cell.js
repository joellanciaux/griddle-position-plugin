import React, { Component } from 'react';

export default TableHeadingCell => class extends Component {
  render() {
    const { positionConfig } = this.props;
    const style = {
      'width': positionConfig.defaultColumnWidth ? positionConfig.defaultColumnWidth + 'px' : null,
      'textAlign': 'left'
    };
    return (
      <TableHeadingCell {...this.props} style={style}/>
    );
  }
}