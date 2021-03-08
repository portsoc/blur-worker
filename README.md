# Web Workers examples

Examples for background processing in web apps.

* `1-blur` – does blurring in the main thread
* `2-blur-worker` – delegates blurring to background worker
  - we use one worker
  - we pass all parameters to the worker
  - the worker sends the result when done
  - what happens to new blur messages sent while the worker is working?
* `3-blur-progress` – add progress bar
  - the worker reports the fraction done with every scan line
  - which means we need to have _message types_ and callbacks


## todo

1. add cancellation - worker.terminate()
