module.exports = {
  // No need for React$* since you should use
  // import * as React from "react" and then have everything under React.*
  // (since flow 0.53+)
  globals: {
    SyntheticEvent: true,
    SyntheticAnimationEvent: true,
    SyntheticClipboardEvent: true,
    SyntheticCompositionEvent: true,
    SyntheticInputEvent: true,
    SyntheticUIEvent: true,
    SyntheticFocusEvent: true,
    SyntheticKeyboardEvent: true,
    SyntheticMouseEvent: true,
    SyntheticDragEvent: true,
    SyntheticWheelEvent: true,
    SyntheticTouchEvent: true,
    SyntheticTransitionEvent: true,
  },
};
