import Swal, { SweetAlertOptions } from 'sweetalert2';

export function Confirmable(
    heading: string = 'Are you sure?',
    description: string = 'Do you want to perform this action?'
) {
    return (
        target: Object,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        // Again, cache the original method for later use
        const originalMethod = descriptor.value;
        // the configuration object for sweetalert
        const config: SweetAlertOptions = {
            title: heading,
            html: description,
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            icon: 'question',
        };
        // we write a new implementation for the method
        descriptor.value = async function (...args: any) {
            const res = await Swal.fire(config);
            // fire sweetalert with the config object
            if (res.isConfirmed) {
                // if user clicked yes,
                // we run the original method with the original arguments
                const result = originalMethod.apply(this, args);

                // and return the result
                return result;
            }
        };
        return descriptor;
    };
}
