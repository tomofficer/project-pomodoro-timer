import React from 'react';

function PlayAndPause({
    isTimerRunning,
    playPause,
    classNames,
    stopButton,
    stopHandler
}) {

    return (
   
       <div className="col">
         <div className="align-center">
           <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            </div>
        </div>
</div>
    )
};

export default PlayAndPause;