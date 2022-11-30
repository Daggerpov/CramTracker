//@ts-nocheck

import * as React from "react";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
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
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
    DateRangePicker,
    DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import Avatar from "@mui/material/Avatar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import dayjs, { Dayjs } from "dayjs";
import styles from "../styles/Home.module.css";
import { Button } from "@material-tailwind/react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../firebaseConfig";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const drawerWidth = 175;

var SubjectArrayOnDay: datatype[] = [
    "Math",
    "Math",
    "Math",
    "Math",
    "Math",
    "Math",
    "Math",
    "Math",
    "Math",
    "Math",
    "Math",
    "Math",
];
const rows = [
    createData("8:00", SubjectArrayOnDay[0]),
    createData("9:00", SubjectArrayOnDay[0]),
    createData("10:00", SubjectArrayOnDay[0]),
    createData("11:00", SubjectArrayOnDay[0]),
    createData("12:00", SubjectArrayOnDay[0]),
    createData("13:00", SubjectArrayOnDay[0]),
    createData("14:00", SubjectArrayOnDay[0]),
    createData("15:00", SubjectArrayOnDay[0]),
    createData("16:00", SubjectArrayOnDay[0]),
    createData("17:00", SubjectArrayOnDay[0]),
    createData("18:00", SubjectArrayOnDay[0]),
    createData("19:00", SubjectArrayOnDay[0]),
    createData("20:00", SubjectArrayOnDay[0]),
    createData("21:00", SubjectArrayOnDay[0]),
    createData("22:00", SubjectArrayOnDay[0]),
];

function createData(name: string, subject: string) {
    return { name, subject };
}

export default function Dashboard() {
    const [user, setUser] = useAuthState(auth);
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    const handleTechniqueChange = (event: SelectChangeEvent) => {
        setTechnique(event.target.value as string);
    };
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
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

    const [Todolist, setTodoList] = React.useState([]);
    const [input, setInput] = React.useState("");

    const addTodo = (todo) => {
        const out = todo;

        const newTodo = {
            id: Math.random(),
            todo: todo,
        };

        // add the todo to the list
        setTodoList([...Todolist, newTodo]);

        // clear input box
        setInput("");
    };

    const deleteTodo = (id) => {
        // Filter out todo with the id
        const newList = Todolist.filter((todo) => todo.id !== id);

        setTodoList(newList);
    };

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
            sx={{ marginTop: 10, width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem key={"Preferences"} disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Preferences" />
                        <ListItemText secondary="Friends" />
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
            <div className={styles.container}>
                <Head>
                    <title>Cram Tracker</title>
                    <meta
                        name="Cram Tracker - Tools for your cramming sessions"
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

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <TableContainer
                                            justifyContent="center"
                                            sx={{
                                                width: 700,
                                            }}
                                            component={Paper}
                                        >
                                            <Table
                                                sx={{ minWidth: 650 }}
                                                aria-label="simple table"
                                            >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell size="small">
                                                            Timings
                                                        </TableCell>
                                                        <TableCell
                                                            size="small"
                                                            align="right"
                                                        >
                                                            Subject
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <TableRow
                                                            key={row.name}
                                                            sx={{
                                                                "&:last-child td, &:last-child th":
                                                                    {
                                                                        border: 0,
                                                                    },
                                                            }}
                                                        >
                                                            <TableCell
                                                                component="th"
                                                                scope="row"
                                                            >
                                                                {row.name}
                                                            </TableCell>
                                                            <TableCell
                                                                size="small"
                                                                align="right"
                                                            >
                                                                {row.subject}
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </TableCell>
                                    <TableCell>
                                        {" "}
                                        <div>
                                            <h1>Todo List</h1>
                                            <input
                                                type="text"
                                                value={input}
                                                outputtedValue
                                                onChange={(e) =>
                                                    setInput(e.target.value)
                                                }
                                            />
                                            <br />
                                            <br />
                                            <Typography>
                                                Choose Assigment submission date
                                                and time.{" "}
                                            </Typography>
                                            <LocalizationProvider
                                                dateAdapter={AdapterDayjs}
                                            >
                                                <DateTimePicker
                                                    label=""
                                                    value={dayValue}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                        />
                                                    )}
                                                />
                                                <br />
                                            </LocalizationProvider>
                                            <br />

                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">
                                                        Studying Technique
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
                                                            value={"Pomodoro"}
                                                        >
                                                            Pomodoro
                                                        </MenuItem>
                                                        <MenuItem
                                                            value={
                                                                "traditional"
                                                            }
                                                        >
                                                            Traditional Studying
                                                            Style with few hour
                                                            gaps
                                                        </MenuItem>
                                                        <MenuItem
                                                            value={"automated"}
                                                        >
                                                            Automated
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                            <br />
                                            <button
                                                onClick={() => addTodo(input)}
                                            >
                                                Add
                                            </button>
                                            <ul>
                                                {Todolist.map((todo) => (
                                                    <li key={todo.id}>
                                                        {todo.todo}
                                                        <button
                                                            onClick={() =>
                                                                deleteTodo(
                                                                    todo.id
                                                                )
                                                            }
                                                        >
                                                            &times;
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell> </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </main>
            </div>
        </Box>
    );
}

function ToggleColorMode() {
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
