import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'

const CreateCard = ({index, forCreate}:any) => {
    return (
        <>
            <Container className='my-10'>
                <Card className='w-full rounded-lg'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="50"
                            image={`../images/school-cover-${index}.jpeg`}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                School or Organisation name
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere libero eaque odit totam doloribus. Libero facilis, eaque a ullam eum neque quisquam fugiat natus, iste, necessitatibus et tempore perspiciatis officia.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Container>
        </>
    )
}

export default CreateCard