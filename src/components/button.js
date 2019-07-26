import React from 'react';
import Octicon, { Link } from '@primer/octicons-react';

const Button = ({ buttonText }) => {
  return (
    <button className="button is-rounded">
      <Octicon icon={Link} ariaLabel={buttonText} size="medium" />
    </button>
  );
};

export default Button;
