import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IncomeService } from 'src/app/services/income/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent {
  incomes: any;
  incomeForm!: FormGroup;
  listOfCategory: any[] = [
    'Salary',
    'Programming',
    'Investments',
    'Stocks',
    'Tax Refund',
    'Bank Transfer',
    'Marketplace Income',
    'Other',
  ];

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private incomeService: IncomeService
  ) {}

  ngOnInit() {
    this.getAllIncomes();
    this.incomeForm = this.fb.group({
      title: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      category: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  submitForm(){
    this.incomeService.postIncome(this.incomeForm.value).subscribe(res => {
      this.message.success("Income posted successfully", {nzDuration: 5000});
      this.getAllIncomes();
    }, error => {
      this.message.error("Error while posting income", {nzDuration: 5000});
    })
  }

  getAllIncomes(){
    this.incomeService.getAllIncomes().subscribe(res => {
      this.incomes = res;
    }, error =>{
      this.message.error("Error fetching incomes", {nzDuration: 5000})
    })
  }

  deleteIncome(id: number){
    this.incomeService.deleteIncome(id).subscribe(res => {
      this.message.success("Income deleted successfully", {nzDuration: 5000});
      this.getAllIncomes();
    }, error =>{
      this.message.error("Error while deleting income", {nzDuration: 5000});
    })
  }
}
