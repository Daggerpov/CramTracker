//@ts-nocheck

import * as React from "react";

import Image from "next/image";
import Head from "next/head";

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

function English(){
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
            <div>
                <Head>
                    <title>English</title>
                    <meta
                        name="Cram Tracker - A tool for scheduling and tracking your cramming sessions"
                        content="Providing crammers with tools and adaptive metrics to help them schedule and get through their assignments with ease."
                    />
                </Head>

                <main className={styles.main}>
                    <Typography
                        variant="h1"
                        sx={{
                            height: 100,
                            marginTop: 10,
                            
                        }}
                    >
                        Better English
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
                    {/* //toggle theme button */}
                    {theme.palette.mode} mode
                    <IconButton
                        sx={{
                            ml: 1,
                        }}
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
                <English />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
