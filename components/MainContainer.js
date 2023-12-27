// @flow strict
import { memo } from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';


type Props = {
  +children: React$Node,
};

const MainContainer = ({ children }: Props): React$Node => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar >
          <IconButton  href='/'>
            <HomeIcon fontSize='large'/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl">
        {children}
      </Container>
    </>
  );
};

export default (memo<Props>(MainContainer): React$AbstractComponent<Props, mixed>);
