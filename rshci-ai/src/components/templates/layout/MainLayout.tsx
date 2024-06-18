'use client';

import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import { useAppDispatch,useAppSelector } from '@/store/hooks';
import { setNavOpen } from '@/store/features/utils';

import Header from './components/Header';
import BodyWrapper from './components/BodyWrapper';


interface Props {
    children ?: React.ReactNode;
}

const MainLayout = ({children}:Props) => {

    const theme = useTheme();
    const dispatch = useAppDispatch();

    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const leftDrawerOpened = useAppSelector(state => state.utils.navOpen);

    const handleLeftDrawerToggle = () => {
        dispatch(setNavOpen(!leftDrawerOpened));
    };

    return (
        <Box sx={{display:'flex'}}>
            <CssBaseline />
            <AppBar 
                enableColorOnDark 
                position='fixed' 
                color='inherit' 
                elevation={0} 
                sx={{
                    bgcolor:theme.palette.background.default, 
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar>
                    <Header/>
                </Toolbar>
            </AppBar>
            <BodyWrapper theme={theme} open={leftDrawerOpened}>
                <div className='relative w-full'>{children}</div>
            </BodyWrapper>

        </Box>
    )
}

export default MainLayout;