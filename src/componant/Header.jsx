import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { styled, alpha } from '@mui/material/styles';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from '@mui/material';
import { BsFillCartFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import './style.css';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { DEL } from "../redux/actions/actions"


const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));
const Header = () => {
    const [first, setfirst] = useState(0)
    const dispatch = useDispatch();
    const getdata = useSelector((state) => state.cardtreducer.carts);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const del = (id) => {
        dispatch(DEL(id))
    }
    const total = () => {
        let prices = 0;
        getdata.map(e => {
            prices = (e.price * e.qnty) + prices
        })
        setfirst(prices)
    }
    useEffect(() => {
        total()
    }, [total])

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/">Home</Link>
                    </Nav>
                    <Badge badgeContent={getdata.length} color="success"
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}>
                        <BsFillCartFill className="text-light" style={{ fontSize: "1.8rem", cursor: "pointer" }} />
                    </Badge>
                </Container>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    {
                        getdata.length ?

                            <>
                                <div style={{ width: "300px", borderBottom: "1px solid black" }} className='text-center d-flex'>
                                    <p className='col-5'>Photo</p>
                                    <p className='col-5'>Restaurant Name</p>
                                </div>

                                {
                                    getdata.map((e) => {
                                        return (
                                            <div style={{ borderBottom: "1px solid black" }} className='text-center row d-flex'>
                                                <div className="col-4 m-2">
                                                    <Link onClick={handleClose} to={`/card/${e.id}`}><img className="mx-auto" style={{ width: "5rem", height: "5rem" }} src={e.imgdata} alt={e.rname} /></Link>
                                                </div>
                                                <div className="col-6 m-2">
                                                    <span className='d-block '>{e.rname}</span>
                                                    <span className='d-block '>Price : ₹{e.price}</span>
                                                    <span className='d-block '>Quantity : {e.qnty}</span>
                                                    <span className='d-block '><RiDeleteBin6Fill onClick={() => del(e.id)} className='text-danger' style={{ fontSize: 30 }} /></span>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                                <span className='d-block '>Total :₹ {first}</span>
                            </>

                            :

                            <div className='card_details d-flex justify-content-center text-center align-items-center' >
                                <GrClose onClick={handleClose} style={{ position: "absolute", top: 2, right: 2, fontSize: 23, cursor: "pointer" }} />
                                <p>Card Is Null</p>
                            </div>
                    }
                </StyledMenu>

            </Navbar >

        </>
    );
}

export default Header;
