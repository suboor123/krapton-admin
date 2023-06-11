type UnserializedData<T> = { [key: string]: T };

export class FirebaseDataSerializer<T> {
    constructor(private data: UnserializedData<T>) {}

    serialize(): T[] {
        return Object.keys(this.data).map((key) => {
            return {
                id: key,
                ...this.data[key],
            };
        });
    }
}
