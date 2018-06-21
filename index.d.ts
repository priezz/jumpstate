interface IInitialState <S> {
    initial: S
}

export type IReducer < A > = {
    actionCreators: {
        [P in keyof A]: A[P];
    };
    actionTypes: {
        [P in keyof A]: P;
    }
}

type IReduce<S> = (state: S, payload?: any) => S
// type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

/**
 * A jumpstate sandboxed state object that returns a reducer with typed actionCreators and actionTypes
 *
 * @template A Action creators config
 * @template S State object type.
 * @param name string namespace for the sandbox
 * @param config object defines the reducers and intial state
 */

export type IState = {
    <A, S>(
        name: string,
        config: IInitialState<S> & {
            [P in keyof A]: P extends keyof IInitialState<S> ? S : IReduce<S>
        }
    ): IReducer<A>;
}

export const State : IState

export const Actions: any
export const Effect: any
export const getState: any
export const CreateJumpstateMiddleware: any
