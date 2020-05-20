// This enabled module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    // Add your module extensions here.
    export function pad(s: number): string;

    interface DateDetails {
        hours: number;
        minutes: number;
        seconds: number;
    }
}
