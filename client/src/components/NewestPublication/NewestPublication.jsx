import React, { useState } from 'react'
import {
    Form, FormGroup, Input, Label,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, NavLink, ButtonGroup
} from 'reactstrap'
import axios from 'axios'
import '../NewestPublication/NewestPublication.css'

const NewestPublication = () => {
    var [content, setContent] = useState([])
    
    const getContentData = (e) => {
        e.preventDefault()
        axios.get(
            'api-content', {
                params: {
                    contents: content
                }
            }
        ).then(res => {

        })
    }

    return (
        <div>
            <Card>
                <CardTitle>
                    <ButtonGroup id="profile-btn">
                        <Button id="profile-btn">
                            <img alt="user-pic" />
                        </Button>
                        <Button id="profile-btn">Username</Button>
                        <Button color="danger">Follow</Button>
                    </ButtonGroup>
                </CardTitle>
                <CardImg alt="user-content" className="mt-3" />
                <CardTitle id="content-title" className="mt-3">Title of content</CardTitle>
                <div className="mt-3 mb-5">
                    <Button id="like-btn" className="mx-3">
                        <ion-icon id="like" name="heart-outline"></ion-icon>
                    </Button>
                    <Button id="comment-btn" className="mx-3">
                        <ion-icon id="comment" name="chatbubble-ellipses-outline"></ion-icon>
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default NewestPublication