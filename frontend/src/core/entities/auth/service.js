import { ApiWrapper } from '../../http/apiWrapper';
import Config from '../../config/config.json';
import { ApiMethods } from '../../base/constants';

export class Service extends ApiWrapper {
    static async login(values) {
        return this.sendRequest({
            url: `${Config.CONTROLLER_AUTH}/${Config.ACTION_LOGIN}`,
            method: ApiMethods.POST,
            data: values,
        });
    }
    static async logout(token) {
        return this.sendRequest({
            url: `${Config.CONTROLLER_AUTH}/${Config.ACTION_LOGOUT}`,
            method: ApiMethods.DELETE,
            token
        });
    }
}