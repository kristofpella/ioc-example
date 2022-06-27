import { Config, ITimer, ITimerHandler } from "./types";


/**
 * Class for containing handlers for Timer
 * Possible future features are resuming, autostarting, restarting
 */
class TimerHandler implements ITimerHandler {
    /**
     * Private variable list
     * @param {number} expiryTime - The timestamp when the timer should expire in ms
     * @param {() => void} timeOutHandler - Callback method which will execute on expiration.
     * @param {Timeout} timeout - JS timeout which can be set and cleared
     */
    private expiryTime = 0;
    private timeOutHandler = () => {};
    private timeout?: NodeJS.Timeout = undefined;

    init(timer: ITimer, config: Config) {
        timer.handler = this;
        this.expiryTime = config.expiryTime;
        this.timeOutHandler = () => {
            if (!config.handleExpiration) {
                console.log(`[Timer] There was no expiration callback provided - timer expires without further action.`);
            }

            console.log(`[Timer] expired, executing expiration callback.`);
            config.handleExpiration();
        };
    }

    startTimer() {
        if (!this.expiryTime || this.expiryTime === 0) {
            console.log(`[Timer] Couldn\'t start timer beacuse invalid timeout value: ${this.expiryTime}`);
            return;
        }

        console.log(`[Timer] starting and set to expire in ${this.expiryTime}ms`);
        this.timeout = setTimeout(this.timeOutHandler, this.expiryTime);
    }

    // FIXME: stopTimer doesn't work properly yet, because if we call it
    // at some point after init the this.timeout value is still undefined
    // so we need a JIRA ticket on making sure that stopTimer always receives the
    // up-to-date value for the this.timeout
    stopTimer() {
        console.log(`[Timer] stopping timer.`);
        clearTimeout(this.timeout);
    }
}

export { TimerHandler };
