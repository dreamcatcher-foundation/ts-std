import type {Function} from "->this";
import type {Outcome} from "->this";

export async function capture<T>(action: Function<void, T>): Promise<Outcome<T>> {
    try {
        return [null, await action()];
    }
    catch (e) {
        return [e, null];
    }
}