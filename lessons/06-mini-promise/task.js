export class MiniPromise {
  constructor(executor) {
    // Initial state
    this.state = 'pending'; // 'pending' | 'fulfilled'
    this.value = undefined;
    this.onFulfilledCallbacks = [];

    // Bound resolve function
    const resolve = (value) => {
      // If already settled, do nothing
      if (this.state !== 'pending') return;

      // Settle
      this.state = 'fulfilled';
      this.value = value;

      // Schedule all waiting callbacks as microtasks
      const callbacks = this.onFulfilledCallbacks;
      this.onFulfilledCallbacks = [];
      for (const cb of callbacks) {
        queueMicrotask(() => cb(this.value));
      }
    };

    // Call executor synchronously with try/catch (optional but safe)
    try {
      executor(resolve);
    } catch (err) {
      // No reject support in this minimal spec — rethrow
      throw err;
    }
  }

  /**
   * 2) then(onFulfilled)
   *    - If pending → queue onFulfilled to run after resolve
   *    - If fulfilled → schedule onFulfilled as a microtask with stored value
   *    - Returns a new MiniPromise so chaining works:
   *        - If onFulfilled returns a value → resolve next with it
   *        - If onFulfilled returns a thenable → adopt its eventual value
   *    - Example:
   *        MiniPromise.resolve(1).then(v => v + 1).then(v => console.log(v)); // 2
   */
  then(onFulfilled) {
    return new MiniPromise((resolve) => {
      const handle = (value) => {
        // If no handler provided, pass the value through
        if (typeof onFulfilled !== 'function') {
          resolve(value);
          return;
        }

        try {
          const result = onFulfilled(value);

          // If handler returns a thenable, adopt its value
          if (result && typeof result.then === 'function') {
            result.then(resolve);
          } else {
            resolve(result);
          }
        } catch (err) {
          // No reject in this mini version — rethrow
          throw err;
        }
      };

      if (this.state === 'fulfilled') {
        queueMicrotask(() => handle(this.value));
      } else {
        // Pending: queue the handler
        this.onFulfilledCallbacks.push(handle);
      }
    });
  }

  /**
   * 3) static resolve(value)
   *    - Convenience: returns an already-fulfilled MiniPromise
   *    - Example:
   *        MiniPromise.resolve(7).then(v => console.log(v)); // 7
   */
  static resolve(value) {
    return new MiniPromise((resolve) => resolve(value));
  }
}