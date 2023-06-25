import { Component, Input, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { debounce } from 'src/app/utils/debounce';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
    @Input() htmlContent: string | undefined = '';
    @Input() onChange: (content: string) => void = () => {};

    editorConfig: AngularEditorConfig | any = {
        editable: true,
        spellcheck: true,
        height: 'auto',
        minHeight: '200px',
        maxHeight: '350px',
        width: 'auto',
        minWidth: '0',
        translate: 'yes',
        enableToolbar: true,
        showToolbar: true,
        placeholder: 'Enter text here...',
        defaultParagraphSeparator: '',
        defaultFontName: 'Muli',
        fonts: [
            { class: 'arial', name: 'Arial' },
            { class: 'times-new-roman', name: 'Times New Roman' },
            { class: 'calibri', name: 'Calibri' },
            { class: 'comic-sans-ms', name: 'Comic Sans MS' },
            { class: 'editable-txt', name: 'Muli' },
        ],
        customClasses: [],
        uploadWithCredentials: false,
        sanitize: true,
        toolbarPosition: 'top',
        toolbarHiddenButtons: [],
    };

    constructor() {}

    ngOnInit(): void {}

    handleChange(e: any) {
        debounce(() => {
            this.onChange(e.target.innerHTML || '');
        });
    }
}
