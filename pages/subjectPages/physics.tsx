//@ts-nocheck

import * as React from "react";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import Tooltip from "@mui/material/Tooltip";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import NightlightIcon from "@mui/icons-material/Nightlight";
import NightlightTwoToneIcon from "@mui/icons-material/NightlightTwoTone";
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
import ScienceTwoToneIcon from "@mui/icons-material/ScienceTwoTone";
import SportsHandballTwoToneIcon from "@mui/icons-material/SportsHandballTwoTone";
import CalculateTwoToneIcon from "@mui/icons-material/CalculateTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import {
    DateRangePicker,
    DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import pdfFile from "../../public/Formula-Sheet-Final.pdf";
import { Document, Page } from "react-pdf";

import styles from "../../styles/Home.module.css";
import { Button } from "@material-tailwind/react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebaseConfig";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const drawerWidth = 175;

const itemData = [
    {
        img: "https://media.proprofs.com/images/QM/user_images/2503852/1576047956.jpg",
        title: "Circular Motion",
    },
    {
        img: "https://leah4sci.com/wp-content/uploads/2014/08/mcat-forces-study-guide-cheat-sheet-by-leah4sci.jpg",
        title: "Forces",
    },
];

function Physics() {
    const [user, setUser] = useAuthState(auth);
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    const handleTechniqueChange = (event: SelectChangeEvent) => {
        setTechnique(event.target.value as string);
    };

    const [technique, setTechnique] = React.useState("");

    const [dayValue, setDayValue] = React.useState<Dayjs | null>(
        dayjs("2014-08-18T21:11:54")
    );
    const [wakeValue, setWakeValue] = React.useState<Dayjs | null>(
        dayjs("2014-08-18T21:11:54")
    );
    const [sleepValue, setSleepValue] = React.useState<Dayjs | null>(
        dayjs("2014-08-18T21:11:54")
    );

    const handleDayChange = (newValue: Dayjs | null) => {
        setDayValue(newValue);
    };
    const handleWakeChange = (newValue: Dayjs | null) => {
        setWakeValue(newValue);
    };
    const handleSleepChange = (newValue: Dayjs | null) => {
        setSleepValue(newValue);
    };

    const [downTimeValue, setDownTimeValue] = React.useState<DateRange<Dayjs>>([
        null,
        null,
    ]);

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
                width: "110%",
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
                    <title>Physics</title>
                    <meta
                        name="Cram Tracker - Tools For Cramming"
                        content="Providing crammers with tools and adaptive metrics to help them schedule and get through their assignments with ease."
                    />
                </Head>
                <main className={styles.main}>
                    {user && (
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
                                        Cram Tracker - Tools For Cramming
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

                                    <IconButton
                                        sx={{ ml: 1 }}
                                        onClick={colorMode.toggleColorMode}
                                        color="inherit"
                                    >
                                        {theme.palette.mode === "dark" ? (
                                            <NightlightTwoToneIcon />
                                        ) : (
                                            <LightModeTwoToneIcon />
                                        )}
                                    </IconButton>
                                    <div>
                                        {(["right"] as const).map((anchor) => (
                                            <React.Fragment key={anchor}>
                                                <IconButton
                                                    onClick={toggleDrawer(
                                                        anchor,
                                                        true
                                                    )}
                                                >
                                                    <MenuTwoToneIcon />
                                                </IconButton>

                                                <Drawer
                                                    anchor={anchor}
                                                    open={state[anchor]}
                                                    onClose={toggleDrawer(
                                                        anchor,
                                                        false
                                                    )}
                                                >
                                                    {list(anchor)}
                                                    <Typography>
                                                        Assigment due date and
                                                        time{" "}
                                                    </Typography>
                                                    <LocalizationProvider
                                                        dateAdapter={
                                                            AdapterDayjs
                                                        }
                                                    >
                                                        <DateTimePicker
                                                            label=""
                                                            value={dayValue}
                                                            onChange={
                                                                handleDayChange
                                                            }
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    {...params}
                                                                />
                                                            )}
                                                        />
                                                        <br />

                                                        <Typography>
                                                            {" "}
                                                            Usual sleep time
                                                        </Typography>
                                                        <TimePicker
                                                            label=""
                                                            value={sleepValue}
                                                            onChange={
                                                                handleSleepChange
                                                            }
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    {...params}
                                                                />
                                                            )}
                                                        />
                                                        <br />
                                                        <Typography>
                                                            {" "}
                                                            Usual wake up time{" "}
                                                        </Typography>

                                                        <TimePicker
                                                            label=""
                                                            value={wakeValue}
                                                            onChange={
                                                                handleWakeChange
                                                            }
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    {...params}
                                                                />
                                                            )}
                                                        />
                                                    </LocalizationProvider>
                                                    <br />

                                                    <Box sx={{ minWidth: 120 }}>
                                                        <FormControl fullWidth>
                                                            <InputLabel id="demo-simple-select-label">
                                                                Studying
                                                                Technique
                                                            </InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                studyTechniqueValue={
                                                                    technique
                                                                }
                                                                label="Techniques"
                                                                onChange={
                                                                    handleTechniqueChange
                                                                }
                                                            >
                                                                <MenuItem
                                                                    value={
                                                                        "Pomodoro"
                                                                    }
                                                                >
                                                                    Pomodoro
                                                                </MenuItem>
                                                                <MenuItem
                                                                    value={
                                                                        "traditional"
                                                                    }
                                                                >
                                                                    Traditional
                                                                    Studying
                                                                    Style with
                                                                    few hour
                                                                    gaps
                                                                </MenuItem>
                                                                <MenuItem
                                                                    value={
                                                                        "automated"
                                                                    }
                                                                >
                                                                    Automated
                                                                </MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>

                                                    <br />

                                                    <Typography>
                                                        {" "}
                                                        Downtime range
                                                    </Typography>
                                                    <LocalizationProvider
                                                        dateAdapter={
                                                            AdapterDayjs
                                                        }
                                                        localeText={{
                                                            start: "Starting time",
                                                            end: "Ending time",
                                                        }}
                                                    >
                                                        <DateRangePicker
                                                            value={
                                                                downTimeValue
                                                            }
                                                            onChange={(
                                                                newValue
                                                            ) => {
                                                                setDownTimeValue(
                                                                    newValue
                                                                );
                                                            }}
                                                            renderInput={(
                                                                startProps,
                                                                endProps
                                                            ) => (
                                                                <React.Fragment>
                                                                    <TextField
                                                                        {...startProps}
                                                                    />
                                                                    <Box
                                                                        sx={{
                                                                            mx: 2,
                                                                        }}
                                                                    >
                                                                        {" "}
                                                                        to{" "}
                                                                    </Box>
                                                                    <TextField
                                                                        {...endProps}
                                                                    />
                                                                </React.Fragment>
                                                            )}
                                                        />
                                                    </LocalizationProvider>
                                                </Drawer>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </Toolbar>
                            </Container>
                        </AppBar>
                    )}
                    {!user && (
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
                                        Cram Tracker - Tools For Cramming
                                    </Typography>
                                    <Box
                                        component="div"
                                        sx={{ flexGrow: 1 }}
                                    ></Box>
                                    <Link
                                        href={{
                                            pathname: "/auth/login",
                                        }}
                                    >
                                        <Button
                                            align="right"
                                            variant="outlined"
                                            color="inherit"
                                            // style={}
                                            className="btn"
                                        >
                                            Login
                                        </Button>
                                    </Link>
                                    <IconButton
                                        sx={{ ml: 1 }}
                                        onClick={colorMode.toggleColorMode}
                                        color="inherit"
                                    >
                                        {theme.palette.mode === "dark" ? (
                                            <NightlightTwoToneIcon />
                                        ) : (
                                            <LightModeTwoToneIcon />
                                        )}
                                    </IconButton>
                                    <div>
                                        {(["right"] as const).map((anchor) => (
                                            <React.Fragment key={anchor}>
                                                <IconButton
                                                    onClick={toggleDrawer(
                                                        anchor,
                                                        true
                                                    )}
                                                >
                                                    <MenuTwoToneIcon />
                                                </IconButton>

                                                <Drawer
                                                    anchor={anchor}
                                                    open={state[anchor]}
                                                    onClose={toggleDrawer(
                                                        anchor,
                                                        false
                                                    )}
                                                >
                                                    {list(anchor)}
                                                    <Typography>
                                                        Assigment due date and
                                                        time{" "}
                                                    </Typography>
                                                    <LocalizationProvider
                                                        dateAdapter={
                                                            AdapterDayjs
                                                        }
                                                    >
                                                        <DateTimePicker
                                                            label=""
                                                            value={dayValue}
                                                            onChange={
                                                                handleDayChange
                                                            }
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    {...params}
                                                                />
                                                            )}
                                                        />
                                                        <br />

                                                        <Typography>
                                                            {" "}
                                                            Usual sleep time
                                                        </Typography>
                                                        <TimePicker
                                                            label=""
                                                            value={sleepValue}
                                                            onChange={
                                                                handleSleepChange
                                                            }
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    {...params}
                                                                />
                                                            )}
                                                        />
                                                        <br />
                                                        <Typography>
                                                            {" "}
                                                            Usual wake up time{" "}
                                                        </Typography>

                                                        <TimePicker
                                                            label=""
                                                            value={wakeValue}
                                                            onChange={
                                                                handleWakeChange
                                                            }
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    {...params}
                                                                />
                                                            )}
                                                        />
                                                    </LocalizationProvider>
                                                    <br />

                                                    <Box sx={{ minWidth: 120 }}>
                                                        <FormControl fullWidth>
                                                            <InputLabel id="demo-simple-select-label">
                                                                Studying
                                                                Technique
                                                            </InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                studyTechniqueValue={
                                                                    technique
                                                                }
                                                                label="Techniques"
                                                                onChange={
                                                                    handleTechniqueChange
                                                                }
                                                            >
                                                                <MenuItem
                                                                    value={
                                                                        "Pomodoro"
                                                                    }
                                                                >
                                                                    Pomodoro
                                                                </MenuItem>
                                                                <MenuItem
                                                                    value={
                                                                        "traditional"
                                                                    }
                                                                >
                                                                    Traditional
                                                                    Studying
                                                                    Style with
                                                                    few hour
                                                                    gaps
                                                                </MenuItem>
                                                                <MenuItem
                                                                    value={
                                                                        "automated"
                                                                    }
                                                                >
                                                                    Automated
                                                                </MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>

                                                    <br />

                                                    <Typography>
                                                        {" "}
                                                        Downtime range
                                                    </Typography>
                                                    <LocalizationProvider
                                                        dateAdapter={
                                                            AdapterDayjs
                                                        }
                                                        localeText={{
                                                            start: "Starting time",
                                                            end: "Ending time",
                                                        }}
                                                    >
                                                        <DateRangePicker
                                                            value={
                                                                downTimeValue
                                                            }
                                                            onChange={(
                                                                newValue
                                                            ) => {
                                                                setDownTimeValue(
                                                                    newValue
                                                                );
                                                            }}
                                                            renderInput={(
                                                                startProps,
                                                                endProps
                                                            ) => (
                                                                <React.Fragment>
                                                                    <TextField
                                                                        {...startProps}
                                                                    />
                                                                    <Box
                                                                        sx={{
                                                                            mx: 2,
                                                                        }}
                                                                    >
                                                                        {" "}
                                                                        to{" "}
                                                                    </Box>
                                                                    <TextField
                                                                        {...endProps}
                                                                    />
                                                                </React.Fragment>
                                                            )}
                                                        />
                                                    </LocalizationProvider>
                                                </Drawer>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </Toolbar>
                            </Container>
                        </AppBar>
                    )}
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
                                        <Link
                                            href={{
                                                pathname: "/",
                                            }}
                                        >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <HomeTwoToneIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={"Home"}
                                                />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem
                                        key={"English Writing"}
                                        disablePadding
                                    >
                                        <Link
                                            href={{
                                                pathname:
                                                    "/subjectPages/englishWriting",
                                            }}
                                        >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <DescriptionTwoToneIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={"English Writing"}
                                                />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem key={"Math"} disablePadding>
                                        <Link
                                            href={{
                                                pathname:
                                                    "/subjectPages/mathematics",
                                            }}
                                        >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <CalculateTwoToneIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={"Mathematics"}
                                                />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem key={"Physics"} disablePadding>
                                        <Link
                                            href={{
                                                pathname:
                                                    "/subjectPages/physics",
                                            }}
                                        >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <SportsHandballTwoToneIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={"Physics"}
                                                />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem key={"Chemistry"} disablePadding>
                                        <Link
                                            href={{
                                                pathname:
                                                    "/subjectPages/chemistry",
                                            }}
                                        >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <ScienceTwoToneIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={"Chemistry"}
                                                />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </Box>

                    <ImageList sx={{ width: 1000, height: 450 }}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=64&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    // subtitle={<span>by: {item.accessibleAt}</span>}
                                    subtitle={
                                        <a
                                            href={item.img}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Code Repository{" "}
                                            <span className={styles.logo}>
                                                <Image
                                                    src="/github_logo.png"
                                                    alt="Github logo"
                                                    width={64}
                                                    height={64}
                                                />
                                            </span>
                                        </a>
                                    }
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
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
