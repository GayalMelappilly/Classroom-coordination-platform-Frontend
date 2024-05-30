import CreateCard from '@/components/CreateCard'
import { Container, Typography } from '@mui/material'
import React from 'react'

const Create = () => {
  return (
    <>
        <Container className='my-10'>
            <Typography>
                CREATE
            </Typography>
            <CreateCard forCreate={true} />
        </Container>
    </>
  )
}

export default Create