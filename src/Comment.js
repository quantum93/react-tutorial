import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div>
      <Avatar user={props.user} />
      <div>{props.user.name}</div>
    </div>
  );
}

// function comment calls function UserInfo and formatDate and function UserInfo calls function Avatar
function Comment(props) {
  return (
    <div>
      <UserInfo user={props.author} />
      <div>{props.text}</div>
      <div>{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
