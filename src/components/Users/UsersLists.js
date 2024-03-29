import React from "react";

import Card from "../UI/Card";
import classes from './UsersLists.module.css';


const UsersLists = (props) => {
  return (
    <Card className={classes.users}>
        <ul>
        {props.users.map((user) => (
            <li key={user.id}>
                {user.name} ({user.age} Years)
            </li>
        ))}
        </ul>
    </Card>
  );
};

export default UsersLists;
