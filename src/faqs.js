import * as Text from "./commands/Text";

export default [
    { pattern: "text", ...Text },
].map(command => ({
    ...command,
    pattern:
        typeof command.pattern === "string"
            ? new RegExp(`^${command.pattern}$`, "i")
            : command.pattern
}));