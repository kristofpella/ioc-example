import { Timer, ITimer } from './timer';

const handleExpiration = () => {
    console.log(`Hey, I'm doing what a fellow developer wants me to do 🤓`);
}

const TIMER_CONFIG = {
    expiryTime: 5000,
    handleExpiration,
}

const timer: ITimer = new Timer(TIMER_CONFIG);

timer.handler.startTimer();
