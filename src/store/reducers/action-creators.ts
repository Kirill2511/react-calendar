import {AuthActionCreators} from "./auth/action-creators";
import {EventActionCreators} from "./event/acrion-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators
}
