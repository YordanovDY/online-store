export function buildOptions(options) {
    const optionJson = JSON.stringify({ options: options });
    return { options: optionJson };
}