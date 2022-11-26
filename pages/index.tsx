//@ts-nocheck

import * as React from "react";

import Image from "next/image";
import Head from "next/head";

import Container from "@mui/material/Container";

import AdbIcon from "@mui/icons-material/Adb";
import ToolTip from "@mui/material/ToolTip";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { Button } from "@material-tailwind/react";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import SportsHandballTwoToneIcon from '@mui/icons-material/SportsHandballTwoTone';
import CalculateTwoToneIcon from '@mui/icons-material/CalculateTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { Button } from "@material-tailwind/react";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import SportsHandballTwoToneIcon from '@mui/icons-material/SportsHandballTwoTone';
import CalculateTwoToneIcon from '@mui/icons-material/CalculateTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';

import styles from "../styles/Home.module.css";

import Link from "next/link";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const drawerWidth = 220;

function Dashboard() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <Box
            className={styles.container}
            sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                color: "text.primary",
                borderRadius: 1,
                p: 3,
            }}
        >
            <div className={styles.container}>
                <Head>
                    <title>Cram Tracker</title>
                    <meta
                        name="Cram Tracker - A tool for scheduling and tracking your cramming sessions"
                        content="Providing crammers with tools and adaptive metrics to help them schedule and get through their assignments with ease."
                    />
                </Head>
                <main className={styles.main}>
                    <AppBar position="static">
                        <Container maxWidth="xl">
                            <Toolbar>
                                <AdbIcon
                                    sx={{
                                        display: { xs: "none", md: "flex" },
                                        mr: 1,
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        display: { xs: "none", md: "flex" },
                                        fontFamily: "monospace",
                                        fontWeight: 700,
                                        letterSpacing: ".3rem",
                                        color: "inherit",
                                        textDecoration: "none",
                                    }}
                                >
                                    TRANSLANG - THE ONLINE CODE CONVERTER
                                </Typography>

                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        display: { xs: "flex", md: "none" },
                                    }}
                                ></Box>
                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        display: { xs: "none", md: "flex" },
                                    }}
                                ></Box>

                                <Box sx={{ flexGrow: 0, px: "15px" }}>
                                    <Tooltip title="Open settings">
                                        <Button
                                            variant="contained"
                                            onClick={handleOpenUserMenu}
                                        >
                                            <Typography
                                                textAlign="center"
                                                sx={{ mr: "5px" }}
                                            >
                                                {auth.currentUser.displayName}
                                            </Typography>
                                            <Avatar
                                                alt="Google Photo/Initial"
                                                src={auth.currentUser.photoURL}
                                            />
                                        </Button>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: "0" }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <Link
                                            href={{
                                                pathname: "/menu/inbox",
                                            }}
                                        >
                                            <MenuItem key="Inbox">
                                                <InboxIcon
                                                    sx={{ pr: "5px" }}
                                                ></InboxIcon>
                                                <Typography textAlign="center">
                                                    Inbox
                                                </Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link
                                            href={{
                                                pathname:
                                                    "/menu/submitted-complaints",
                                            }}
                                        >
                                            <MenuItem
                                                key="Submitted Complaints"
                                                onClick={handleCloseUserMenu}
                                            >
                                                <UploadFileIcon
                                                    sx={{ pr: "5px" }}
                                                ></UploadFileIcon>
                                                <Typography textAlign="center">
                                                    Submitted Complaints
                                                </Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link
                                            href={{
                                                pathname:
                                                    "/menu/accepted-suggestions",
                                            }}
                                        >
                                            <MenuItem
                                                key="Accepted Suggestions"
                                                onClick={handleCloseUserMenu}
                                            >
                                                <DoneAllIcon
                                                    sx={{ pr: "5px" }}
                                                ></DoneAllIcon>
                                                <Typography textAlign="center">
                                                    Accepted Suggestions
                                                </Typography>
                                            </MenuItem>
                                        </Link>
                                    </Menu>
                                </Box>
                                {user && (
                                    // <Link
                                    //     href={{
                                    //         pathname: "/auth/login",
                                    //     }}
                                    // >
                                    <Button
                                        sx={{ px: "15px" }}
                                        // style={}
                                        onClick={() => {
                                            logout();
                                        }}
                                        color="inherit"
                                        variant="outlined"
                                        className="btn"
                                    >
                                        Sign Out
                                    </Button>
                                    // </Link>
                                )}
                            </Toolbar>
                        </Container>
                    </AppBar>
                    <h1 className={styles.title}>Cram Tracker</h1>
                    {/* here put drawer */}
                    <Box sx={{ display: "flex" }}>
                        <CssBaseline />{" "}
                        {/* check if this line can be removed */}
                        <Drawer
                            variant="permanent"
                            sx={{
                                width: drawerWidth,
                                flexShrink: 0,
                                [`& .MuiDrawer-paper`]: {
                                    width: drawerWidth,
                                    boxSizing: "border-box",
                                },
                            }}
                        >
                            <Toolbar />
                            <Box sx={{ overflow: "auto", marginTop: 10 }}>
                                <List>
                                    <ListItem key={"Home"} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <HomeTwoToneIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={"Home"} />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem key={"English"} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <DescriptionTwoToneIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={"English"} />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem key={"Math"} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <CalculateTwoToneIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={"Math"} />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem key={"Physics"} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SportsHandballTwoToneIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={"Physics"} />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem key={"Chemistry"} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <ScienceTwoToneIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"Chemistry"}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </Box>
                    {/* //toggle theme button */}
                    {theme.palette.mode} mode
                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={colorMode.toggleColorMode}
                        color="inherit"
                    >
                        {theme.palette.mode === "dark" ? (
                            <NightlightIcon />
                        ) : (
                            <LightModeIcon />
                        )}
                    </IconButton>
                </main>
            </div>
        </Box>
    );
}

export default function ToggleColorMode() {
    const [mode, setMode] = React.useState<"light" | "dark">("light");
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Dashboard />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
