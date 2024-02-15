
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OtpService } from '../services/otp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mobileNumberForm: FormGroup;
  otpForm: FormGroup;
  otpSent: boolean = false;

  constructor(
    private fb: FormBuilder,
    private otpService: OtpService
  ) {
    this.mobileNumberForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  sendOtp(): void {
    const mobileNumberControl = this.mobileNumberForm.get('mobileNumber');

    if (mobileNumberControl && mobileNumberControl.value) {
      const mobileNumber = mobileNumberControl.value;

      this.otpService.sendOtp(mobileNumber).subscribe(
        () => {
          this.otpSent = true;
        },
        (error) => {
          console.error('Error sending OTP:', error);
        }
      );
    }
  }

  verifyOtp(): void {
    const mobileNumberControl = this.mobileNumberForm.get('mobileNumber');
    const otpControl = this.otpForm.get('otp');

    if (mobileNumberControl && otpControl && mobileNumberControl.value && otpControl.value) {
      const mobileNumber = mobileNumberControl.value;
      const otp = otpControl.value;

      this.otpService.verifyOtp(mobileNumber, otp).subscribe(
        () => {
          console.log('OTP verification successful');
          // Add your logic for successful login
        },
        (error) => {
          console.error('Error verifying OTP:', error);
        }
      );
    }
  }
}
