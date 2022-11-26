//@ts-nocheck

import * as React from "react";

import Image from "next/image";
import Head from "next/head";

import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";

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
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox"; /* placeholder icon*/
import MailIcon from "@mui/icons-material/Mail"; /* placeholder icon */
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import Typography from "@mui/material/Typography";


import styles from "../../styles/Home.module.css";

import Link from "next/link";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const drawerWidth = 240;

function Physics() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    const [state, setState] = React.useState({
        right: false,
    });
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };
        const list = (anchor: Anchor) => (
            <Box
                sx={{ auto: 250, marginTop: 10 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    <ListItem key={"Preferences"} disablePadding>
                    <ListItemButton>
                    <ListItemText primary={"Preferences"} />
                    </ListItemButton>
                    </ListItem>
                    </List>
            </Box>
        );
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
            <div>
                <Head>
                    <title>Physics</title>
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
                                    Cram Tracker - Tools for your cramming
                                    sessions
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
                                <div>
                                    {(["right"] as const).map((anchor) => (
                                        <React.Fragment key={anchor}>
                                            <Button
                                                onClick={toggleDrawer(
                                                    anchor,
                                                    true
                                                )}
                                            >
                                                button
                                            </Button>
                                            
                                            <Drawer
                                                anchor={anchor}
                                                open={state[anchor]}
                                                onClose={toggleDrawer(
                                                    anchor,
                                                    false
                                                )}
                                            >
                                                {list(anchor)}
                                            </Drawer>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </Toolbar>
                        </Container>
                    </AppBar>
                    <Typography
                        variant="h1"
                        sx={{
                            height: 100,
                            marginTop: 10,
                            marginLeft: 20,
                        }}
                    >
                        Better Physics
                    </Typography>

                    {/* Sidebar */}
                    <Box sx={{ display: "flex" }}>
                        <CssBaseline />

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
                                                <InboxIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={"Home"} />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem key={"English"} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={"English"} />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem key={"Math"} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={"Math"} />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem key={"Physics"} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InboxIcon />
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
                <Physics />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
