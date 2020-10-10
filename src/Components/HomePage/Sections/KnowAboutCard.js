import React from "react";
import { Card } from "react-bootstrap";
import styles from "../../../CSS/KnowAboutCard.module.css"

function KnowAbout(props) {
    return (
        <div id = "knowAbout" className = {styles.Box}>
            <Card className = {styles.Card}>
                <Card.Img 
                    variant = "top"
                    src = {require("../../../Assets/" + props.knowAbout.imgUrl)}
                    alt = "Image"
                    className = {styles.CardImage}
                />
                <Card.Body>
                    <Card.Title className = {styles.CardTitle}> {props.knowAbout.name} </Card.Title>
                    <div className = {styles.Rectangle}></div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default KnowAbout;