// src/lib/clickOutside.js
/**
 * @param {HTMLDivElement} node
 * @param {{ (): boolean; (): void; }} callback
 */
export function clickOutside(node, callback) {
    const handleClick = (/** @type {{ target: any; }} */ event) => {
        if (!node.contains(event.target)) {
            callback();
        }
    };

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    };
}
