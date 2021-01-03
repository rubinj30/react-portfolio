import { Component, ReactNode } from 'react';
import './dropdown.css';

type Props = {
  dropdownRef: any;
  handleClickOutside: any;
  children?: ReactNode;
  className?: string;
};

// This is a modular component that can be re-used and passed the contents of the dropdown as children
// Whenever it is used it will have to be passed a handleClickOutside and setRef methods
// See search.component for example
export class Dropdown extends Component<Props, {}> {
  componentDidMount() {
    document.addEventListener('mousedown', this.props.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.props.handleClickOutside);
  }
  render() {
    const { children, dropdownRef, className } = this.props;
    return (
      <div className={`dropdownContainer ${className}`} ref={dropdownRef}>
        {children}
      </div>
    );
  }
}
