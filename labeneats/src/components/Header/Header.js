import React from 'react';
import Back from '@mui/icons-material/ArrowBackIos';
import { Bar, Title } from './StyledHeader';
import { useNavigate } from 'react-router-dom';

export default function Header({ title, backButton }) {

    const navigate = useNavigate();

    return (
        <Bar>
            {backButton && <Back className='BackIcon' onClick={() => navigate(-1)} />}
            <Title>
                {title && title}
            </Title>
        </Bar>
    )
}

