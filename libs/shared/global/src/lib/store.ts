import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from './models/action';

export class Store<T> {
  private _state$: BehaviorSubject<T>;
  private _actions$: BehaviorSubject<Action>;

  constructor(initialState: T) {
    this._state$ = new BehaviorSubject(this.clone(initialState));
    const initialAction = {
      type: 'INIT',
      payload: initialState,
    };
    this._actions$ = new BehaviorSubject(initialAction);
  }

  public setState(mutation: Partial<T>) {
    const mutatedState = { ...this.getSnapshot(), ...mutation };
    this._state$.next(this.clone(mutatedState));
  }
  public dispatch(action: Action) {
    this.setState(action.payload);
    this._actions$.next(action);
  }

  public reduce(action: Action, reducer: (currentState: T, payload: any) => T) {
    const mutatedState = reducer(this.getSnapshot(), action.payload);
    this.setState(mutatedState);
    this._actions$.next(action);
  }

  public getSnapshot() {
    return this.clone(this._state$.value);
  }
  public getState$() {
    return this._state$.asObservable().pipe(map((state) => this.clone(state)));
  }

  private clone(source: T): T {
    return { ...source };
  }
}

// versión con acciones
// export class Store<T> {
//   private _state$: BehaviorSubject<T>;
//   private _actions$: BehaviorSubject<Action>;

//   constructor(initialState: T) {
//     this._state$ = new BehaviorSubject(this.clone(initialState));
//     const initialAction = {
//       type: 'INIT',
//       payload: initialState,
//     };
//     this._actions$ = new BehaviorSubject(initialAction);
//   }

//   public setState(mutation: Partial<T>) {
//     const mutatedState = { ...this.getSnapshot(), ...mutation };
//     this._state$.next(this.clone(mutatedState));
//   }
//   public dispatch(action: Action) {
//     this.setState(action.payload);
//     this._actions$.next(action);
//   }

//   public getSnapshot() {
//     return this.clone(this._state$.value);
//   }
//   public getState$() {
//     return this._state$.asObservable().pipe(map((state) => this.clone(state)));
//   }

//   private clone(source: T): T {
//     return { ...source };
//   }
// }

// Version dinámica
// export class Store<T> {
//   private _state$: BehaviorSubject<T>;

//   constructor(initialState: T) {
//     this._state$ = new BehaviorSubject(this.clone(initialState));
//   }

//   public getSnapshot(newState: T) {
//     this._state$.next(this.clone(newState));
//   }
//   public getState() {
//     return this.clone(this._state$.value);
//   }
//   public getState$() {
//     return this._state$.asObservable().pipe(map((state) => this.clone(state)));
//   }

//   private clone(source: T): T {
//     return { ...source };
//   }
// }

// Version estática
// export class Store<T> {
//   private _state: T;

//   constructor(initialState: T) {
//     this._state = this.clone(initialState);
//   }

//   public setState(newState: T) {
//     this._state = this.clone(newState);
//   }
//   public getState() {
//     return this.clone(this._state);
//   }

//   private clone(source: T): T {
//     return { ...source };
//   }
// }
