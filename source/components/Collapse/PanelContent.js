import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class PanelContent extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    isActive: PropTypes.bool,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.isActive || nextProps.isActive;
  }

  render() {
    this._isActived = this._isActived || this.props.isActive;
    if (!this._isActived) {
      return null;
    }
    const { prefixCls, isActive, children } = this.props;
    const contentCls = classnames({
      [`${prefixCls}-content`]: true,
      [`${prefixCls}-content-active`]: isActive,
      [`${prefixCls}-content-inactive`]: !isActive,
    });
    return (
      <div
        className={contentCls}
        role="tabpanel"
      >
        <div className={`${prefixCls}-content-box`}>{children}</div>
      </div>
    );
  }
}

export default PanelContent;
