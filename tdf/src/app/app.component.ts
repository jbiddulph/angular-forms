import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['angular', 'react', 'vue'];
  // topicHasError = true;
  userModel = new User('', 'john@test.com', 987654321, '', 'morning');
  constructor(private enrolmentService: EnrollmentService) {  }
  // validateTopic(value) {
  //   if (value === 'default') {
  //     this.topicHasError = true;
  //   } else {
  //     this.topicHasError = false;
  //   }
  // }

  onSubmit() {
    this.enrolmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.log('Error', error)
    );
  }
}
