import { TimerHandler } from './handler';
import { Config, ITimer, ITimerHandler, Module } from './types';

/**
 * Timer is our Container class
 * It will make sure to register our dependencies
 */
class Timer implements ITimer {
    static modules = new Map();    
    public handler: ITimerHandler

    constructor(config: Config) {
        for (let module of Timer.modules.values()) {
            module.init(this, config);
        }
    }

    static inject(module: Module) {
        Timer.modules.set(module.constructor.name, module);
    }
}

/* DEPENDENCY INJECTIONS */
const handler = new TimerHandler();
Timer.inject(handler);

export { Timer };
export * from './types';
