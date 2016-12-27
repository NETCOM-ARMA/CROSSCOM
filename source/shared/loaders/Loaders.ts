import { UserLoader } from "./UserLoader"

export class Loaders {

    private userloader: UserLoader

    constructor(user_id: number) {

        this.userloader = new UserLoader(user_id)

    }

    getUserLoader(): UserLoader {
        return this.userloader
    }

}