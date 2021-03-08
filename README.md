# Web Workers examples

Examples for background processing in web apps.

* `1-blur` – does blurring in the main thread
* `2-blur-worker` – delegates blurring to background worker
  - we use one worker
  - we pass all parameters to the worker
  - the worker sends the result when done
  - what happens to new blur messages sent while the worker is working?


## todo

1. add a progress message every scan line
1. add cancellation
