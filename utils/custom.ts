// Call the "func" once every "wait" seconds as long as it's being demanded by the browser
export function throttle(func: () => void, wait: number): () => void {
    let waiting = false;
    return function (): void {
        if (!waiting) {
            func();
            waiting = true;
            setTimeout(() => {
                func();
                waiting = false;
            }, wait);
        }
    };
}