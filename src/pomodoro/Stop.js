import React from 'react';

function Stop({
    stopButton,
    stopHandler
}) {
    return (
          <button
              type="button"
              className="btn btn-secondary"
              data-testid="stop"
              title="Stop the session"
              disabled={stopButton}
              onClick={stopHandler}
            >
              <span className="oi oi-media-stop" />
            
            </button>
    )
};

export default Stop;