import type {Maybe} from "->this";

export type Outcome<T> = [e: Maybe<unknown>, x: Maybe<T>];