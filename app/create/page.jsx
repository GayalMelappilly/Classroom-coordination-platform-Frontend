import CreateCard from '@/components/CreateCard'
import CreateNew from '@/components/CreateNew'
import { Container, Typography } from '@mui/material'
import React from 'react'

const Create = () => {
    const index = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <Container className='my-10'>
                <Typography>
                    CREATE
                </Typography>
                <div className="flex flex-wrap">
                    <div className="w-2/6 p-2 max-md:w-full">
                        <CreateNew />
                    </div>
                    {index.map((card) => (
                        <div key={card} className="w-2/6 p-2 max-md:w-full">
                            <CreateCard index={card} />
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Create