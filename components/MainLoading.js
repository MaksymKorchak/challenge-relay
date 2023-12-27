// @flow strict
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  'loader-box': {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const MainLoader = () => {

    const classes = useStyles();

    return (
        <Box className={classes['loader-box']}>
            <CircularProgress color="primary"/>
        </Box>
    );
};

export default  MainLoader;
