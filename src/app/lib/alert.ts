export type AleryType = 'success' | 'error' | 'info' | 'warning';

export class Alert {
    public static success(message: string, heading?: string) {
        this.exec('success', message);
    }

    public static error(message: string, heading?: string) {
        this.exec('error', message);
    }

    private static exec(type: AleryType, message: string) {
        alert(message);
    }
}
