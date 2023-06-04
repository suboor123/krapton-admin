let debounceId: string | number | any;

export const debounce = (callback: () => void, delay: number = 500) => {
    clearTimeout(debounceId);
    debounceId = setTimeout(() => {
        callback();
    }, delay);
};
