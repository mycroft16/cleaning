import { Action } from '@ngrx/store'
import { IProperty } from '../../shared/interfaces/property.interface'

export class ActionFactory {
    public loadProperties(): LoadProperties {
        return new LoadProperties();
    }

    public setActiveProperty(propertyIndex: number): SetActiveProperty {
        return new SetActiveProperty(propertyIndex);
    }

    public clearActiveProperty(): ClearActiveProperty {
        return new ClearActiveProperty();
    }
}

export class InternalActionFactory {
    public loadPropertiesSuccess(response: IProperty[]): LoadPropertiesSuccess {
        return new LoadPropertiesSuccess(response);
    }
}

export class LoadProperties implements Action {
    public static readonly Type = '[Property] Load Properties';
    public readonly type = LoadProperties.Type;
}

export class SetActiveProperty implements Action {
    public static readonly Type = '[Property] Set Active Property';
    public readonly type = SetActiveProperty.Type;
    constructor(public readonly propertyIndex) { }
}

export class ClearActiveProperty implements Action {
    public static readonly Type = '[Property] Clear Active Property';
    public readonly type = ClearActiveProperty.Type;
}

export class LoadPropertiesSuccess implements Action {
    public static readonly Type = '[Property] Load Properties Success';
    public readonly type = LoadPropertiesSuccess.Type;
    constructor(public readonly response) { }
}

export type Any = LoadProperties | LoadPropertiesSuccess | SetActiveProperty | ClearActiveProperty;