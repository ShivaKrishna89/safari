import { DestinationComponent } from './../destination/destination.component';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  imports: [GoogleMapsModule,CommonModule,FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.less'
})
export class ContactusComponent {
  zoom = 16;
  center: google.maps.LatLngLiteral = {
    lat: 17.146410359596963,
    lng: 79.62217916633956
  };
  markerPosition: google.maps.LatLngLiteral = this.center;
  formData:any = {name:'', email:'', travelers:'',destination:''};
  isLoading:any = false;
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;
  constructor() {

  }
  submitForm() {
    if (!this.contactForm) return;
    if(!this.formData.name || !this.formData.email || !this.formData.travelers || !this.formData.destination){
      alert('Please fill all required fields.')
    } else{
    this.isLoading = true;
    emailjs.sendForm(
      'service_vipa36r',
      'template_mmjsevx',
      this.contactForm.nativeElement,
      'i_iFK8A-4PFP4qEhk'
    )
    .then(
      (response:any) => {
        this.isLoading = false;
        alert('Your message has been sent!');
        this.contactForm.nativeElement.reset();
      },
      (error:any) => {
        alert('Failed to send message. Please try again.');
      }
    );
  }
  }
}
