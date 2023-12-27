// @flow strict
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  'loader-box': {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const MainError = () => {

    const classes = useStyles();
    const reloadPage = () => window.location.reload();

    return (
        <Box className={classes['loader-box']}>
            <Box style={{textAlign: 'center'}}>
            <Typography variant="h4" color="secondary">
                Oops! Something went wrong.
            </Typography>
            <Typography variant="h4" color="secondary" component="div" m={5}>
                Looks like a monkey is playing with the wires. 🐒
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{margin: '10px'}}>
                Give it another shot by clicking the button below:
            </Typography>
                <Button
                    onClick={reloadPage}
                    size='medium'
                    variant='contained'
                    aria-label="reload_page"
                    color='secondary'>
                    Reload Page
                </Button>
            <Typography variant="body2" color="textSecondary" component="p" style={{margin: '10px'}}>
                If the monkey keeps causing trouble, please contact our support team. 🚀
            </Typography>
            </Box>
        </Box>
    );
};

export default  MainError;
