const constructSpinnerHtml = () => `
<div class="loader-spinner d-flex justify-content-center align-item-center">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
</div>`;

export class Spinner {
    public static show() {
        if (this.element) {
            this.element.innerHTML = constructSpinnerHtml();
        }
    }

    public static hide() {
        if (this.element) {
            this.element!.innerHTML = '';
        }
    }

    private static get element() {
        return document.getElementById('loader-wrapper');
    }
}
