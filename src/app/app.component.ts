import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  scrollCount = 0;
  bonusAtk = 0;
  bonusDex = 0;
  itemDestroyed = false;
  x10sUsed = 0;
  x30sUsed = 0;
  x60sUsed = 0;
  x70sUsed = 0;
  itemCount = 1;

  constructor() {

  }

  random(successRate,atk, dex, explodePercent) {
    var val = Math.ceil(Math.random()*100);
    var percent = 100-successRate;
    var explode = percent * explodePercent / 100;
    console.log(val, percent, explode)
    if (val > percent) {
      this.success(atk, dex);
    } else if (explodePercent !== 0 && val <= explode) {
      this.explodeItem();
    } else {
      this.fail();
    }
  }

  try10() {
    var atk = 5;
    var dex = 1;
    var explodePercent = 0;
    var successRate = 10;
    this.x10sUsed++;
    this.random(successRate, atk, dex, explodePercent)
  }
  
  try30() {
    var atk = 5;
    var dex = 1;
    var explodePercent = 50;
    var successRate = 30;
    this.x30sUsed++;
    this.random(successRate, atk, dex, explodePercent)
  }

  try60() {
    var atk = 2;
    var dex = 0;
    var explodePercent = 0;
    var successRate = 60;
    this.x60sUsed++;
    this.random(successRate, atk, dex, explodePercent)
  }
  
  try70() {
    var atk = 2;
    var dex = 0;
    var explodePercent = 50;
    var successRate = 70;
    this.x70sUsed++;
    this.random(successRate, atk, dex, explodePercent)
  }

  success(atk, dex) {
    this.bonusAtk += atk;
    this.bonusDex += dex;
    this.scrollCount++;
  }

  fail() {
    this.scrollCount++;
  }

  explodeItem() {
    this.itemDestroyed = true;
  }

  clear() {
    this.scrollCount = 0;
    this.bonusAtk = 0;
    this.bonusDex = 0;
    this.itemDestroyed = false;
    this.itemCount++;
  }

  resetAll() {
    this.scrollCount = 0;
    this.bonusAtk = 0;
    this.bonusDex = 0;
    this.itemDestroyed = false;
    this.x10sUsed = 0;
    this.x30sUsed = 0;
    this.x60sUsed = 0;
    this.x70sUsed = 0;
    this.itemCount = 1;
  }
}

