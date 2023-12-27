//@flow
import { useRouter } from 'next/router';
import { 
  Button, 
  Container, 
  Typography 
} from '@material-ui/core';
import useStyles  from './styles';

const NotFoundPage = () => {
  
  const classes = useStyles();
  const router = useRouter();

  const handleGoHome = () => router.push('/');

  return (
    <Container className={classes.container}>
      <Typography variant="h3" color="secondary">
        404
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Oops! The page you are looking for might be in another castle.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={handleGoHome}
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
