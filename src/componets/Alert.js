import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
