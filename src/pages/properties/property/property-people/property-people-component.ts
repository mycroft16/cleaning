import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActionSheetController, AlertController, NavController } from 'ionic-angular';
import { IClient } from '../../../../app/shared/interfaces/client.interface'
import { IPet } from '../../../../app/shared/interfaces/pet.interface'

@Component({
  selector: 'property-people-component',
  templateUrl: 'property-people.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyPeopleComponentPage {

  @Input() public people: IClient[];
  @Input() public pets: IPet[];

  constructor(public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public navCtrl: NavController) { }

  public makeCall(person) {
    let possibleCallNumbers = [];
    if (person.phoneMobile !== null) {
      possibleCallNumbers.push({ "type": "Mobile", "display": this.formatDisplay(person.phoneMobile), "dial": this.formatDial(person.phoneMobile) });
    }
    if (person.phoneHome !== null) {
      possibleCallNumbers.push({ "type": "Home", "display": this.formatDisplay(person.phoneHome), "dial": this.formatDial(person.phoneHome) });
    }
    if (person.phoneWork != null) {
      possibleCallNumbers.push({ "type": "Work", "display": this.formatDisplay(person.phoneWork), "dial": this.formatDial(person.phoneWork) });
    }
    console.log(possibleCallNumbers);
    if (possibleCallNumbers.length > 0) {
      let buttons: Object[] = [];
      for (let i = 0; i < possibleCallNumbers.length; i++) {
        let button = {
          text: possibleCallNumbers[i].type + ": " + possibleCallNumbers[i].display,
          handler: () => {
            window.open('tel:' + possibleCallNumbers[i].dial + '', '_system');
          }
        }
        buttons.push(button);
      }
      let button = { text: "Cancel", role: "cancel" };
      buttons.push(button);
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Call ' + person.firstName + '?',
        buttons: buttons
      });
      actionSheet.present();
    }
  }

  private formatDisplay(number) {
    return '(' + number.substr(0, 3) + ') ' + number.substr(3, 3) + '-' + number.substr(6, 4);
  }

  private formatDial(number) {
    return '+1' + number;
  }

  public sendText(person) {
    const title = 'Text ' + person.firstName;
    const message = 'Send to ' + this.formatDisplay(person.phoneMobile);
    const link = 'sms:' + this.formatDial(person.phoneMobile);
    this.confirmSend(title, message, link);
  }

  public sendEmail(person) {
    const title = 'Email ' + person.firstName;
    const message = 'Send to ' + person.emailAddress;
    const link = 'mailto:' + person.emailAddress;
    this.confirmSend(title, message, link);
  }

  public confirmSend(title, message, link) {
    let alert = this.alertCtrl.create({
      title: title + '?',
      message: message + '?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
              window.open(link, '_system');
          }
        }
      ]
    });
    alert.present();
  }

}
