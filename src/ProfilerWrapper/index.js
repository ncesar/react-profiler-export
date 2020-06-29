import React, { Profiler } from 'react';

export const ProfilerWrapper = ({ children }) => {
  function onRenderCallback(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  ) {
    const providerData = {
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    };
    console.log(providerData);
  }
  return <Profiler onRender={onRenderCallback}>{children}</Profiler>;
};
