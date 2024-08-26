import { Realm } from 'realm'

export class CacheService {
	private realm: Realm

	constructor() {
		this.realm = new Realm({
			inMemory: false,
			schema: [{
				name: 'Cache',
				properties: {
					key: 'string',
					value: 'string',
				},
			}]
		});
	}

	async save(key: string, value: any) {
		this.realm.write(() => {
			this.realm.create('Cache', {
				key,
				value: JSON.stringify(value),
			});
		});
	}

	async get<T>(key: string) {
		const cache = this.realm.objects('Cache').filtered(`key = "${key}"`);
		return cache.length > 0 ? JSON.parse(cache[0].value as string) as T : null as T;
	}
}


class Singleton {
  private instance!: CacheService;

  constructor() {
    if (!this.instance) {
      this.instance = new CacheService();
    }
  }

  getInstance() {
    return this.instance;
  }
}

const singleton = new Singleton();
const cacheService = singleton.getInstance();
Object.freeze(cacheService);

export { cacheService };