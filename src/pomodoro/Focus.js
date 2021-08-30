import React from 'react';

function Focus({
    focusDuration,
    setFocusDuration,
    isTimerRunning
}) {

    return (

        <div className="pomodoro">
          <div className="row">
              <div className="col">
              <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {("0" + focusDuration).substr(-2)}:00
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={() => {
                  if (!isTimerRunning && focusDuration > 5) setFocusDuration(focusDuration - 5);
                }}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={() => {
                  if (!isTimerRunning && focusDuration < 60) setFocusDuration(focusDuration + 5);
                }}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
            <br/>
          </div>
        </div>
    </div>
</div>
    )
};

export default Focus;