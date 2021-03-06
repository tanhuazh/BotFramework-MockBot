import * as Text from "./commands/Text";

export default [
    { pattern: /^faq(\s+([\d\w]+))?$/i, ...Text },
].map(command => ({
    ...command,
    pattern:
        typeof command.pattern === "string"
            ? new RegExp(`^${command.pattern}$`, "i")
            : command.pattern
}));