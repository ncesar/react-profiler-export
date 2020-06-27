import React, { Profiler } from 'react';

const ProfilerWrapper = (props) => {
  const sendToJson = (props) => {};
  function onRenderCallback(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  ) {
    return {
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    };
  }
  let profilerProps;
  const {
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  } = profilerProps;
  return (
    <Profiler onRender={onRenderCallback} {...profilerProps}>
      {props.children}
    </Profiler>
  );
};

export default ProfilerWrapper;
