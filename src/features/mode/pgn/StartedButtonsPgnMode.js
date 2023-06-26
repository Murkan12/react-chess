import React from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonGroup } from '@mui/material/';
import Ws from 'features/ws/Ws';

const StartedButtonsPgnMode = () => {
  const state = useSelector(state => state);

  if (state.pgnMode.active) {
    if (state.board.movetext) {
      return (
        <ButtonGroup
          sx={{ mt: 1.5 }}
          size="small"
          aria-label="Game Buttons"
          orientation="vertical"
          fullWidth={true}
        >
          <Button
            id="StartedButtonsPgnMode-Button-undoMove"
            disabled={state.panel.history.back !== 0}
            onClick={() => Ws.undo()}
          >
            Takeback
          </Button>
        </ButtonGroup>
      );
    }
  }

  return null;
}

export default StartedButtonsPgnMode;
