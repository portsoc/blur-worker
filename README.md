# Web Workers examples

Examples for background processing in web apps.

In four stages, we show how to do background processing in Web applications, how to monitor progress and how to cancel the background jobs.

## `1-blur` – blurring in the main thread ([see diff](https://github.com/portsoc/web-workers/compare/stage-1-blur..stage-2-blur-worker))

## `2-blur-worker` – delegate blurring to a background worker ([see diff](https://github.com/portsoc/web-workers/compare/stage-1-blur..stage-2-blur-worker))
- we use one worker
- we pass all parameters to the worker
- the worker sends the result when done
- what happens to new blur messages sent while the worker is working?

## `3-blur-progress` – add progress bar ([see diff](https://github.com/portsoc/web-workers/compare/stage-2-blur-worker..stage-3-blur-progress))
- the worker reports the fraction done with every scan line
- which means we need to have _message types_ and callbacks

## `4-blur-cancel` – make it possible to cancel running blurs ([see diff](https://github.com/portsoc/web-workers/compare/stage-3-blur-progress..stage-4-blur-cancel))
- we need to clean up all pending jobs, too
- could we also prevent starting new ones while a blur is already running? (hint: use `el.blur.disabled`)
