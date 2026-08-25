import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  mensaje = '';

  mensajes = [
    {
      tipo: 'asistente',
      texto: 'Hola, soy tu asistente virtual. ¿En qué puedo ayudarte?'
    }
  ];

  enviarMensaje() {
    const texto = this.mensaje.trim();

    if (!texto) {
      return;
    }

    this.mensajes.push({
      tipo: 'usuario',
      texto
    });

    this.mensajes.push({
      tipo: 'asistente',
      texto: 'Gracias por tu mensaje. Por el momento soy una versión de prueba.'
    });

    this.mensaje = '';
  }
}

