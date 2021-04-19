import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const StyledCard = styled(Card)`
    background-color: transparent;
    border-radius: 0;
    padding: 1em;
    padding-left: 2em;
    height: 100%
`
export const CardText = styled(Typography)`
  font-size: 0.75rem;
  margin-top: 0em;
`;

const StyledCardActionArea = styled(CardActionArea)`
    height: 100%;
`

export const MovieCard = (props) => {
    const data = props.data;
    const [title, description, url, pictureUrl] = [data.title, data.description, data.url, data.pictureUrl];
    return (
        <StyledCardActionArea to={url} component={Link} >
            <StyledCard>
                <CardContent style={{ height: "100%" }}>
                    <Grid container alignItems="stretch" style={{ height: "100%" }}>
                        <Grid container spacing="6" alignItems="center">
                            <Grid item>
                                <img src={pictureUrl} alt={"movie poster for " + title} width={120} />
                            </Grid>
                            <Grid item xs={12} sm>
                                <CardText variant="h6" gutterBottom>
                                    {title}
                                </CardText>
                                <CardText>
                                    {(description.length < 250) ? description : description.substring(0, 250) + '...'}
                                </CardText>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </StyledCard>
        </StyledCardActionArea>
    )
}

