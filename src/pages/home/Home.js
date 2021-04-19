import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { MovieCard } from '../../components/Card';

const Home = (props) => {
    const data = props.data;
    return (
        <Grid container justify="center" style={{ marginTop: '3em' }} >
            <Grid container
                spacing={6}
                justify="flex-start"
                alignItems="stretch"
                xs={12} md={12} lg={11}
            >
                <Grid item container xs={12} justify="center" >
                    <Typography variant="h4" >
                        Home Page
                    </Typography>
                </Grid>
                {data.map((movie, key) => (
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        < MovieCard data={movie} key={key} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
};

export default Home;