// This is the type for the configuration object for the Timer
// in the future we can add support for extended configs
// for example autoStart -> if this props is true, we can
// start the timer at init and the client don't have to call the startTimer
export type Config = {
    expiryTime: number;
    handleExpiration: () => void;
}

export interface ITimer {
    handler: ITimerHandler;
}

export interface ITimerHandler {
    startTimer: () => void;
    stopTimer: () => void;
}

// Module is the list for the module interfaces
// and should be extended with all future module types
export type Module = ITimerHandler;

