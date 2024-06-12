'use client'

import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import GoogleIcon from './GoogleIcon';
import Link from 'next/link';
import axios from 'axios'
import { StatusContext } from '@/context/StatusContext';
import { useRouter } from 'next/navigation'

export default function SignUp() {

    const router = useRouter()

    const [fname, setFname] = React.useState<string | ''>('')
    const [lname, setLname] = React.useState<string | ''>('')
    const [username, setUsername] = React.useState<string | ''>('')
    const [email, setEmail] = React.useState<string | ''>('')
    const [password, setPassword] = React.useState<string | ''>('')

    const statusContext = React.useContext(StatusContext)

    const {status, setStatus}:any = statusContext

    console.log('STATUS : ', status)

    React.useEffect(() => {
        console.log("URL : ", process.env.NEXT_PUBLIC_APP_URL)
    }, [])

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = {
            fname,
            lname,
            username,
            email,
            password
        }

        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup-with-email-and-password`, { user });
            if(response.data){
                console.log("RESPONSE : ", response.data)
                localStorage.setItem('user-info', JSON.stringify(response.data.userInfo))
                router.push('/')
            }
        } catch (error) {
            console.error("Error during sign up:", error);
        }
    }

    const HandleGoogleSignup = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_APP_URL}/auth/google`;
    };

    return (
        <CssVarsProvider>
            <CssBaseline />
            <Box
                sx={(theme) => ({
                    width: '100%',
                    transition: 'width var(--Transition-duration)',
                    transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    backdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(255 255 255 / 0.2)',
                })}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100dvh',
                        width: '100%',
                        px: 2,
                    }}
                >
                    <Box
                        component="main"
                        sx={{
                            my: 'auto',
                            py: 2,
                            pb: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            width: 400,
                            maxWidth: '100%',
                            mx: 'auto',
                            borderRadius: 'sm',
                            '& form': {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            },
                            [`& .MuiFormLabel-asterisk`]: {
                                visibility: 'hidden',
                            },
                        }}
                    >
                        <Stack gap={3} sx={{ mb: 1 }}>
                            <Stack gap={1}>
                                <Typography component="h1" level="h3">
                                    Sign up
                                </Typography>
                                <Typography level="body-sm">
                                    Get started with ClassSync. {' '}
                                </Typography>
                            </Stack>
                            <Button
                                onClick={HandleGoogleSignup}
                                variant="soft"
                                color="neutral"
                                fullWidth
                                startDecorator={<GoogleIcon />}
                            >
                                Signup with Google
                            </Button>
                        </Stack>
                        <Divider>
                            or
                        </Divider>
                        <Stack gap={3} sx={{ mt: 1 }}>
                            <form onSubmit={HandleSubmit}>
                                <Box
                                    className="flex gap-2 max-w-auto relative pr-2"
                                >
                                    <FormControl required
                                        className="w-6/12"
                                    >
                                        <FormLabel>First Name</FormLabel>
                                        <Input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} />
                                    </FormControl>
                                    <FormControl
                                        className="w-6/12"
                                    >
                                        <FormLabel>Last Name</FormLabel>
                                        <Input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} />
                                    </FormControl>
                                </Box>
                                <FormControl required>
                                    <FormLabel >Username</FormLabel>
                                    <Input type='text' name="username" value={username} onChange={(e) => setUsername(e.target.value)}></Input>
                                </FormControl>
                                <FormControl required>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </FormControl>
                                <FormControl required>
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </FormControl>
                                <Stack gap={3} sx={{ mt: 2 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Checkbox size="sm" label="Remember me" name="persistent" />
                                        <Typography level="body-sm">
                                            <Link href={'/signin'} className='underline text-blue-800'>
                                                Already have an account?
                                            </Link>
                                        </Typography>
                                    </Box>
                                    <Button type="submit" fullWidth>
                                        Sign in
                                    </Button>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                    <Box component="footer" sx={{ py: 1 }}>
                        <Typography level="body-xs" textAlign="center">
                            © ClassSync {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </CssVarsProvider>
    );
}