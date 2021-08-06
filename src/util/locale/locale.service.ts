import * as i18n from 'i18n';
import { ValidationError } from 'joi';
import { ResponseForClient, ResponseForDeveloper } from 'src/app/interface/api.interface';
import { Dictionary } from './dictionary.type';

export class LocaleService {
      public translate(content: Dictionary, context?: i18n.Replacements) {
            const newStr = i18n.__(content, { ...context });
            return newStr;
      }

      public translateResponse<T>(res: ResponseForDeveloper<T>) {
            const formatApi: ResponseForClient<T> = {
                  data: res.data,
                  details: {},
            };
            if (res.details) {
                  for (const item in res.details) {
                        formatApi.details[item] = this.translate(res.details[item].type, { ...res.details[item].context });
                  }
            }
      }
}
