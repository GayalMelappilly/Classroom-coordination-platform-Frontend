import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

const CreateNew = () => {
    return (
        <>
            <Container className='my-10'>
                <Card className={`w-full h-full rounded-lg p-10`}>
                    <CardActionArea>
                        <CardContent className='min-h-full max-h-full'>
                            <Box 
                                height={'100%'}
                            >
                                <Typography className='w-full flex justify-center' gutterBottom variant="h5" component="div">
                                    <AddIcon sx={{ fontSize: 80 }} className='text-blue-700' />
                                </Typography>
                                <Typography className='w-full flex justify-center'>CREATE NEW</Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Container>
        </>
    )
}

export default CreateNew