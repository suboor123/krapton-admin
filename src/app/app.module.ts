import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './module/auth/auth.module';
import { ContentComponent } from './shared/content/content.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProfileModule } from './profile/profile.module';
import { FormsModule } from '@angular/forms';
import { LazyImageDirective } from './directives/lazy-image.directive';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        ContentComponent,
        LazyImageDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        ProfileModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
