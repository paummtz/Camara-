import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  constructor(private platform: Platform) {
    this.platform.ready().then(async () => {
      // SOLO SI ESTÁS EN MOVIL (para evitar errores en web)
      if (this.platform.is('capacitor')) {
        
        // AQUÍ ESTÁ EL CAMBIO: Ponemos ROJO (#d32f2f) en lugar de azul
        await StatusBar.setBackgroundColor({ color: '#d32f2f' });
        
        // Esto hace que las letras (hora, batería) sean BLANCAS
        await StatusBar.setStyle({ style: Style.Dark }); 
      }
    });
  }
}