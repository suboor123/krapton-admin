import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditorComponent } from './editor/editor.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ModalComponent, EditorComponent],
    imports: [CommonModule, AngularEditorModule, HttpClientModule],
    exports: [ModalComponent, EditorComponent],
})
export class SharedModule {}
