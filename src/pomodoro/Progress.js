import React from 'react';

function Progress({aria}) {
    return (
        <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={aria} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${aria}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    )
};

export default Progress;