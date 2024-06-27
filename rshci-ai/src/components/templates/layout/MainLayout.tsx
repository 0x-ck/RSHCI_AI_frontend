'use client';

import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import { useAppDispatch,useAppSelector } from '@/store/hooks';
import { setNavOpen } from '@/store/features/utils';

import Header from './components/Header';
import BodyWrapper from './components/BodyWrapper';
import MainWrap from './components/MainWrap';
import Footer from './components/Footer';


interface Props {
    children ?: React.ReactNode;
}

const MainLayout = ({children}:Props) => {

    // const theme = useTheme();
    // const dispatch = useAppDispatch();

    // const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    // const leftDrawerOpened = useAppSelector(state => state.utils.navOpen);

    // const handleLeftDrawerToggle = () => {
    //     dispatch(setNavOpen(!leftDrawerOpened));
    // };

    return (
        <div className='w-full relative'>
            <Header/>
            <MainWrap />
            <Footer/>
        </div>
        
    )
}

export default MainLayout;