import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  'product-card': {
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between',
    borderRadius: '10px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
     transform: 'scale(1.01)',
     opacity: '0.9',
    },
  },  
}));

export default useStyles;
