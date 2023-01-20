import {Result} from "./Result.model";

export interface Root {
    page: number
    results: Result[]
    total_pages: number
    total_results: number
}
export const defaultValue: Readonly<Root> = {};