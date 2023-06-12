type DeserializedData<T> = { [key: string]: T };

export class FirebaseDataSerializer<T> {
    constructor(private data: DeserializedData<T>) {}

    serialize(): T[] {
        return Object.keys(this.data).map((key) => {
            return {
                id: key,
                ...this.data[key],
            };
        });
    }
}
