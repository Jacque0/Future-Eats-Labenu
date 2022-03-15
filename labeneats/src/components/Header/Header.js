import React from 'react';
import Back from '@mui/icons-material/ArrowBackIos';
import { Bar, Title } from './StyledHeader';
import { useNavigate } from 'react-router-dom';

export default function Header({ title, goToScreen }) {

    const navigate = useNavigate();

    return (
        <Bar>
            <Back className='BackIcon' onClick={() => goToScreen(navigate)} />
            <Title>
                {title && title}
            </Title>
        </Bar>
    )
}

