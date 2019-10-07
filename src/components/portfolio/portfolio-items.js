import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default function(props) {

    const { id, description, thumb_image_url, logo } = props.item
    return (
        <div>
        <img src={thumb_image_url} />
        <img src={logo} />
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>
            <div>{description}</div>
            <Link to={`/portfolio/${id}`}>Link</Link>
            </div>
    );
}