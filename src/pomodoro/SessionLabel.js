import React from 'react';

function SessionLabel({
    secondsToDuration,
    focusDuration,
    breakDuration,
    session
}) {
    return (
      <div>
        {session && (
            <div className="row mb-2">
              <div className="col">
                {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
                <h2 data-testid="session-title">
                 {session && session.label} for {("0" + (session.label.toLowerCase().indexOf("reak") > 0 ? breakDuration : focusDuration)).substr(-2)}:00 minutes
                </h2>
     
                {/* TODO: Update message below correctly format the time remaining in the current session */}
                <p className="lead" data-testid="session-sub-title">
                  {secondsToDuration(session.timeRemaining)} {" "} remaining
                </p>
              </div>
            </div>
          )
        }
        </div>
        )
};
    

export default SessionLabel;
 