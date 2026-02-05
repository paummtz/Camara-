import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { addIcons } from 'ionicons';
import { camera, apertureOutline } from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [IonicModule, CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'] // <--- ¡Asegúrate de que esta línea exista!
})
export class HomePage {
  photo: string | null = null;

  constructor() {
    addIcons({ camera, apertureOutline });
  }

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        saveToGallery: true
      });
      this.photo = image.webPath ?? null;
    } catch (e) {
      console.log('Cancelado');
    }
  }
}